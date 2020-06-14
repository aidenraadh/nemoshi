import React from 'react';
import {Button_1} from './../reusables/Buttons.js';
import {Navbar, MenuGrid, Footer} from './../reusables/Sections.js';
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
		<div style={{marginBottom: '20rem'}} className="head_section">
			<h1>Our <span className="highlightText">Menus</span></h1>
			<MenuGrid
				menus = {this.state.menus}
				addBtnFunc = {this.toggleAddMenu}
				removeBtnFunc = {this.toggleAddMenu}
			/>		
		</div>

		<Footer
			sections = {[
				{
					tag: 'section',
					heading: 'SITE MAP',
					bodies: [
						{type: 'link', text: 'Home', attr: {href: this.props.AppURLs.domain}},
						{type: 'link', text: 'About', attr: {href: '#'}},
						{type: 'link', text: 'Our Menus', attr: {href: this.props.AppURLs.domain+'menus'}},
						{type: 'link', text: 'Contact', attr: {href: '#'}},
					]
				},
				{
					tag: 'address',
					heading: 'ADDRESS',
					bodies: [
						{
							type: 'text',
							tag: 'p',
							text: "44 Canal Center Plaza #200, Alexandria, VA 22314, USA",
						},
						{type: 'link', text: 'Email: qwerty@gmail.com', attr: {href: 'mailto:qwerty@gmail.com'}},
					]
				},
				{
					tag: 'section',
					heading: 'OPENING HOURS',
					bodies: [
						{
							type: 'text',
							tag: 'span',
							text: (<>
								<span>Monday:</span>
								<span>9.00 AM - 22.00 PM</span>
							</>),
							attr: {style: {display: 'flex', justifyContent: 'space-between'}}
						},
						{
							type: 'text',
							tag: 'span',
							text: (<>
								<span>Tuesday:</span>
								<span>9.00 AM - 22.00 PM</span>
							</>),
							attr: {style: {display: 'flex', justifyContent: 'space-between'}}
						},
						{
							type: 'text',
							tag: 'span',
							text: (<>
								<span>Wednesday:</span>
								<span>9.00 AM - 22.00 PM</span>
							</>),
							attr: {style: {display: 'flex', justifyContent: 'space-between'}}
						},
						{
							type: 'text',
							tag: 'span',
							text: (<>
								<span>Thursday:</span>
								<span>9.00 AM - 22.00 PM</span>
							</>),
							attr: {style: {display: 'flex', justifyContent: 'space-between'}}
						},
						{
							type: 'text',
							tag: 'span',
							text: (<>
								<span>Friday:</span>
								<span>9.00 AM - 22.00 PM</span>
							</>),
							attr: {style: {display: 'flex', justifyContent: 'space-between'}}
						},																								
					]
				},				
			]}
		/>
		
		</>//			
		);
	}
}
