import React from 'react';
import {Button_1} from './../reusables/Buttons.js';
import {Navbar, MenuGrid} from './../reusables/Sections.js';
import {AJAXPostRequest} from './../reusables/AJAXRequest.js';


export default class MenusView extends React.Component{
	constructor(props){
		super(props);

		this.menusImg = {};

		this.props.menusImgPath.forEach((path) => {
			let splitted = path.split('/');
			this.menusImg[ splitted[1] ] = splitted[2];
		});		

		this.state = {
			menus: this.props.menus.map((menu) => (
				{
					id: menu.id,
					img: this.props.AppURLs.menusImg+menu.id+'/'+this.menusImg[menu.id],
					name: menu.name,
					details: menu.description,
					quantity: (this.props.orderedMenus[menu.id] ? this.props.orderedMenus[menu.id] : 0),
					price: 'Rp. '+(menu.price/1000)+'k',
				}				
			)),
		};
		this.toggleAddMenu = this.toggleAddMenu.bind(this);
	}

	toggleAddMenu(menu_id, action){
		let AJAXCallback;

		if(action === 'add'){
			AJAXCallback = function(response, component){
				component.setState((state) => {
					let newMenus = state.menus;
					newMenus.forEach((menu, idx) => {
						if(menu.id === menu_id){
							newMenus[idx].quantity += 1;
						}
					});
					return {menus: newMenus};
				});				
			}
		}
		else{
			AJAXCallback = function(response, component){
				component.setState((state) => {
					let newMenus = state.menus;
					newMenus.forEach((menu, idx) => {
						if(menu.id === menu_id){
							newMenus[idx].quantity = (
								newMenus[idx].quantity === 0 ?
								0 : (newMenus[idx].quantity-1)
							);
						}
					});
					return {menus: newMenus};
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
				<a className="btn" href={this.props.AppURLs.domain+'cart'}></a>
			}
		/>
		<h1>Our <span className="highlightText">Menus</span></h1>
		<div style={{marginBottom: '20rem'}}>
		<MenuGrid
			menus = {this.state.menus}
			addBtnFunc = {this.toggleAddMenu}
			removeBtnFunc = {this.toggleAddMenu}
		/>		
		</div>		
		</>//			
		);
	}
}
