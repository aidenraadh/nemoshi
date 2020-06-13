import React from 'react';
import {Button_1} from './../reusables/Buttons.js';
import {Navbar,Cart} from './../reusables/Sections.js';
import {AJAXPostRequest} from './../reusables/AJAXRequest.js';

export default class CartView extends React.Component{
	constructor(props){
		super(props);
		console.log(this.props.AppURLs.toggleAddMenuURL);
		this.menusImg = {};
		this.props.menusImgPath.map((path) => {
			let splitted = path.split('/');
			this.menusImg[ splitted[1] ] = splitted[2];
		});

		this.state = {
			cart: this.props.orderedMenus.map((menu) => (
				{
					menu_id: menu.id, menu_name: menu.name,
					menu_img: this.props.AppURLs.menusImg+menu.id+'/'+this.menusImg[menu.id],
					menu_price: menu.price, menu_quantity: this.props.quantity[menu.id]
				}				
			)),

		}

		this.toggleAddMenu = this.toggleAddMenu.bind(this);
	}

	toggleAddMenu(menu_id, action){
		let AJAXCallback;

		if(action === 'add'){
			AJAXCallback = function(response, component){
				component.setState((state) => {
					let newCartData = state.cart;
					newCartData.forEach((cart, idx) => {
						if(cart.menu_id === menu_id){
							newCartData[idx].menu_quantity += 1;
						}
					});
					return {cart: newCartData};
				});
			}
		}
		else{
			AJAXCallback = function(response, component){
				component.setState((state) => {
					let newCartData = state.cart;
					newCartData.forEach((cart, idx) => {
						if(cart.menu_id === menu_id){
							newCartData[idx].menu_quantity = (
								newCartData[idx].menu_quantity === 0 ?
								0 : (newCartData[idx].menu_quantity-1)
							);
						}
					});
					return {cart: newCartData};
				});					
			}		
		}

		AJAXPostRequest(
			'menu_id='+menu_id+'&action='+action,
			this.props.AppURLs.toggleAddMenuURL,
			AJAXCallback,
			this
		);		
	}

	render(){
		return (
			<>
			<Navbar
				brandImg = {this.props.AppURLs.icons+'logo.png'}
				navbarLinks = {[
					{type: 'link', data:{
						attr: {href: this.props.AppURLs.domain}, text: 'HOME'
					}},
					{type: 'link', data:{
						attr: {href: '#'}, text: 'ABOUT'
					}},				
					{type: 'link', data:{
						attr: {href: this.props.AppURLs.domain+'menus'}, text: 'OUR MENUS'
					}},
					{type: 'link', data:{
						attr: {href: '#'}, text: 'BLOG'
					}},
					{type: 'link', data:{
						attr: {href: '#'}, text: 'CONTACT'
					}},				
				]}
				navbarActions = {
					<Button_1
						tag = {'a'}
						color = {'orange'}
						text = {'Your cart'}
						attr = {
							{
								style: {fontSize: '1.65rem'},
								href: this.props.AppURLs.domain+'cart',
							}
						}
					/>
				}
			/>
			{(this.state.cart.length !== 0 ?
			<>
			<h1>Your <span className="highlightText">Cart</span></h1>
			<Cart
				cart = {this.state.cart}
				addBtnFunc = {this.toggleAddMenu}
				removeBtnFunc = {this.toggleAddMenu}
			/></> :
			<article style={{width: '100%', minHeight: '60vh',
					fontFamily: 'Barlow, sans-serif', fontWeight: '400', fontSize: '2rem',
					color: '#666666',
				}} className="cols_container x_center y_center"
			>
				Your cart is currently empty
				<Button_1
					tag = {'a'} color = {'orange_gradient'}
					text = {'Shop now'}
					attr = {{href: this.props.AppURLs.domain+'menus', style: {display: 'block', marginTop: '2rem'}}}
				/>
			</article>

			)}	
			</>//
		);
	}
}
