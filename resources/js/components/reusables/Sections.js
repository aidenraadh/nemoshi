import React from 'react';

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

export function MenuGrid(props){
	return (
		<>
		<div className="menuGrid">
		{props.menus.map((menu, idx) => (

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
							<span style={{order: '2'}}>{menu.quantity}</span>
							<button type="button" style={{order: '3'}}
								onClick={() => props.addBtnFunc(menu.id, 'add')}
							>
								+
							</button>
							<button type="button" style={{order: '1'}}
								onClick={() => props.addBtnFunc(menu.id, 'remove')}
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

export function Cart(props){
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
				{props.cart.map((menu, idx) => (
					<tr key={idx}>
						<td className="menu">
							<span>
								<img src={menu.menu_img} />
								{menu.menu_name}				
							</span>
						</td>
						<td className="unitPrice">{'Rp. '+menu.menu_price}</td>
						<td className="quantity">
							<span>
								<span className="qt" style={{order: '2'}}>{menu.menu_quantity}</span>
								<button className="qtBtn" style={{order: '3'}}
									onClick={() => props.addBtnFunc(menu.menu_id, 'add')}
								>
								+
								</button>
								<button className="qtBtn" style={{order: '1'}}
									onClick={() => props.removeBtnFunc(menu.menu_id, 'remove')}
								>
								-
								</button>
							</span>
						</td>
						<td className="total">{'Rp. '+(menu.menu_quantity * menu.menu_price)}</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>			
		</>//
	);	
}