import React from 'react';
import {Button_1} from './../reusables/Buttons.js';
import SVGIcons from './../reusables/SVGIcons.js';
import {MenuGrid} from './../reusables/Sections.js';
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
		{this.props.Navbar}

		<div className="section_padding">
			<h1>Our <span className="highlightText">Menus</span></h1>
			<MenuGrid
				menus = {this.state.menus}
				addBtnFunc = {this.toggleAddMenu}
				removeBtnFunc = {this.toggleAddMenu}
			/>		
		</div>

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
