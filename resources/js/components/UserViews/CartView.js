import React from 'react';
import {Button_1} from './../reusables/Buttons.js';
import {Cart} from './../reusables/Sections.js';
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
			{this.props.Navbar}
			
			{(this.state.cart.length !== 0 ?
			<>
			<div className="section_padding">
				<h1>Your <span className="highlightText">Cart</span></h1>
				<Cart
					cart = {this.state.cart}
					addBtnFunc = {this.toggleAddMenu}
					removeBtnFunc = {this.toggleAddMenu}
				/>
				<div className="section_padding rows_container x_center" style={{paddingTop: '6rem'}}>
					<Button_1
						tag = {'a'} color = {'orange'}
						text = {'Order More'}
						attr = {{href: this.props.AppURLs.domain+'menus', style: {display: 'block', margin: '0 1rem'}}}
					/>				
					<Button_1
						tag = {'a'} color = {'orange_gradient'}
						text = {'Checkout'}
						attr = {{href: '#', style: {display: 'block', margin: '0 1rem'}}}
					/>					
				</div>	
			</div>
			</> :
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

			<article id="SpecialOffer" className="section_1 rows_container x_space_between section_padding">
				<div>
					<h2 className="heading light">
						We offer a bit less at <span className="highlightText">Midday</span>
					</h2>
					<p className="body light">
						Founded since 2017, the name Nemoshi immediately stole the attention of the foodies. 
						This tiny restaurant in the Panglima Polim area marries burgers and sushi in a dish 
						called 'Nemoshi.'<br/> <br/>
					</p>
				</div>
				<div className="img">
					<span>
						<span>30%<br/>Off</span>				
					</span>
				</div>
			</article>			

			{this.props.Footer}

			</>//
		);
	}
}
