import React from 'react';
import {AJAXPostRequest} from './../reusables/AJAXRequest.js';

function NavbarDropdown(props){
	return (
		<>
			<span className="dropdown">
				<button className="toggle" type="button">
					<span className="text">{props.toggleText}</span>
					<span className="arrow"></span>
				</button>
				<ul className="menu">
					{props.items.map((item, idx) => (
						<li key={idx} className="item">
						{item}
						</li>
					))}
				</ul>
			</span>
		</>//
	);
}

export class Navbar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			navbarShown: false,
		};

		this.toggleNavbar = this.toggleNavbar.bind(this);
	}

	toggleNavbar(navbarShown){
		this.setState({
			navbarShown: navbarShown,
		});
	}

	render(){
		return (
			<nav className="navbar">
				<a className="navbarBrand" href="#">
					<img src={this.props.brandImg} />
				</a>
				<div className={'navbarLinks '+(this.state.navbarShown ? 'shown' : '')}>
					<button type="button" className="clsNavbar" onClick={(e) => this.toggleNavbar(false)}>
						&times;
					</button>
					<ul>
					{this.props.navbarLinks.map((link, idx) => (

						<li key={idx}>
						{(link.type === 'dropdown' ?
						<NavbarDropdown
							toggleText = {link.data.toggleText}
							items = {link.data.items}
						/> :
						<a className="link" {...link.data.attr}>{link.data.text}</a>
						)}
						</li>

					))}
					</ul>
				</div>
				<div className="navbarActions">
					{this.props.navbarActions}
					<button className="opnNavbar" onClick={(e) => this.toggleNavbar(true)}>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</nav>
		);
	}
}

/*
|--------------------------------------------------------------------------
| Menu Grid
|--------------------------------------------------------------------------
|
| --- Properties ---
| ### menus ###
| an array of object each element defines the menu images, and info
|
| Structure: 
| menus = [
| 	{
|		img: (str)menu_image_link,
|		name: (str/JSX)menu_name,
|		details: (str/JSX)menu_details,
| 		price: (str/JSX)menu_price,
|	},
| 	...
| ]
*/

export class MenuGrid extends React.Component{
	constructor(props){
		super(props);

		this.addRemoveMenu = this.addRemoveMenu.bind(this);
	}

	addRemoveMenu(menu_id, action){
		console.log('asd');
		AJAXPostRequest(
			'menu_id='+menu_id+'&'+'action='+action,
			this.props.addOrRemoveMenuURL
		);		
	}

	render(){
		return (
			<>
			<div className="menuGrid">
			{this.props.menus.map((menu, idx) => (
	
				<article className="menu" key={idx}>
					<img className="img" src={menu.img} />
					<div className="text">
						<h6 className="name">{menu.name}</h6>
						<div className="details">
							{menu.details}
						</div>
						<div className="price_quantity">
							<span className="price">{menu.price}</span>
							<span className="quantity">
								<span style={{order: '2'}}>0</span>
								<button type="button" style={{order: '3'}}
									onClick={() => this.addRemoveMenu(menu.id, 'add')}
								>
									+
								</button>
								<button type="button" style={{order: '1'}}
									onClick={() => this.addRemoveMenu(menu.id, 'remove')}
								>
									-
								</button>
							</span>
						</div>
					</div>
				</article>
	
			))}
			</div>
			</>//
		);		
	}
}

export class Cart extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			cartData: this.props.cartData
		};

		this.toggleQuantity = this.toggleQuantity.bind(this)
	}

	toggleQuantity(add, menu_id){
		if(add){
			this.setState((state) => {
				let newCartData = state.cartData;
				newCartData.forEach((cart, idx) => {
					if(cart.menu_id === menu_id){
						newCartData[idx].menu_quantity += 1;
					}
				});
				return {cartData: newCartData};
			});
		}
		else{
			this.setState((state) => {
				let newCartData = state.cartData;
				newCartData.forEach((cart, idx) => {
					if(cart.menu_id === menu_id){
						newCartData[idx].menu_quantity = (
							newCartData[idx].menu_quantity === 0 ?
							0 : (newCartData[idx].menu_quantity-1)
						);
					}
				});
				return {cartData: newCartData};
			});			
		}
	}

	render(){
		return (
			<>
			<div className="cart">
				<table>
					<thead>
						<tr>
							<th>MENU</th>
							<th>UNIT PRICE</th>
							<th>QUANTITY</th>
							<th>TOTAL</th>
						</tr>
					</thead>
					<tbody>
					{this.state.cartData.map((cart, idx) => (

						<tr key={idx}>
							<td className="menu">
								<span>
									<img src={cart.menu_img} />
									{cart.menu_name}				
								</span>
							</td>
							<td className="unitPrice">{cart.menu_price}</td>
							<td className="quantity">
								<span>
									<span className="qt" style={{order: '2'}}>{cart.menu_quantity}</span>
									<button className="qtBtn" style={{order: '3'}}
										onClick={()=>this.toggleQuantity(true, cart.menu_id)}
									>
									+
									</button>
									<button className="qtBtn" style={{order: '1'}} 
										onClick={()=>this.toggleQuantity(false, cart.menu_id)}
									>
									-
									</button>
								</span>
							</td>
							<td className="total">{cart.menu_quantity * cart.menu_price}</td>
						</tr>

					))}
					</tbody>
				</table>
			</div>			
			</>//
		);
	}
}