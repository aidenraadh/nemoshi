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
					<img src={this.props.brandImgLink} />
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
<li><a className="link" href="#">HOME</a></li>
<li><a className="link" href="#">MENU</a></li>
<li>
	<span className="dropdown">
		<button className="toggle" type="button">
			<span className="text">SHOP</span><span className="arrow"></span>
		</button>
		<ul className="menu">
			<li className="item">asd</li>
			<li className="item">asd</li>
			<li className="item">asd</li>
		</ul>
	</span>
</li>
<li>
	<a className="link" href="#">BLOG</a>
</li>
<li>
	<a className="link dropdown" href="#">CONTACT</a>
</li>
*/

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
					<div className="price">
						{menu.price}
					</div>
				</div>
			</article>

		))}
		</div>
		</>//
	);
}