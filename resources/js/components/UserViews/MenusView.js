import React from 'react';
import {Button_1} from './../reusables/Buttons.js'
import {Navbar, MenuGrid} from './../reusables/Sections.js'

export default function MenusView(props){

	let menusImg = {};

	props.MenusImgPath.forEach((path) => {
		let splitted = path.split('/');
		menusImg[ splitted[1] ] = splitted[2];
	});

	return (
		<>
		<Navbar
			brandImg = {props.AppURLs.icons+'logo.png'}
			navbarLinks = {[
				{type: 'link', data:{
					attr: {href: props.AppURLs.domain}, text: 'HOME'
				}},
				{type: 'link', data:{
					attr: {href: '#'}, text: 'ABOUT'
				}},				
				{type: 'dropdown', data:{
					toggleText: 'SHOP', items: [
						<a href="#">asd</a>,
						<a href="#">asd</a>,
						<a href="#">asd</a>,
						<a href="#">asd</a>
					]
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
					tag = {'button'}
					color = {'orange'}
					text = {'Book now'}
					attr = {
						{
							style: {fontSize: '1.65rem'},
							type: 'button'
						}
					}
				/>
			}
		/>
		<div style={{marginBottom: '20rem'}}>
		<MenuGrid
			menus = {props.Menus.map((menu, idx) => (
				{
					img: props.AppURLs.menusImg+menu.id+'/'+menusImg[menu.id],
					name: menu.name,
					details: menu.description,
					price: 'Rp. '+(menu.price/1000)+'k',
				}
			))}
			addOrRemoveMenuURL = {props.AppURLs.addOrRemoveMenu}
		/>		
		</div>		
		</>//
	);
}

/*

*/

/*
		<Cart
			cartData = {[
				{
					menu_id: '1', menu_img: props.AppURLs.images+'bg_1.jpg',
					menu_name: 'asdf', menu_price: '13000', menu_quantity: 2
				},
				{
					menu_id: '2', menu_img: props.AppURLs.images+'bg_2.jpg',
					menu_name: 'qwer', menu_price: '15000', menu_quantity: 1
				},
				{
					menu_id: '3', menu_img: props.AppURLs.images+'bg_3.jpg',
					menu_name: 'zxcv', menu_price: '11000', menu_quantity: 4
				},								
			]}
		/>
*/

/*
		<div style={{marginBottom: '20rem'}}>
		<MenuGrid
			menus = {[
				{
					img: props.AppURLs.images+'bg_10.jpg',
					name: 'Grilled American Fillet',
					details: 'Some shit with some shit. Some shit with some shit. Some shit with some shit.',
					price: 'Rp. '+(65400/1000)+'k',
				},
				{
					img: props.AppURLs.images+'bg_1.jpg',
					name: 'Grilled American Fillet',
					details: 'Some shit with some shit. Some shit with some shit. Some shit with some shit.',
					price: 'Rp. '+(45700/1000)+'k',
				},
				{
					img: props.AppURLs.images+'bg_2.jpg',
					name: 'Grilled American Fillet',
					details: 'Some shit with some shit. Some shit with some shit. Some shit with some shit.',
					price: 'Rp. '+(12000/1000)+'k',
				},
				{
					img: props.AppURLs.images+'bg_3.jpg',
					name: 'Grilled American Fillet',
					details: 'Some shit with some shit. Some shit with some shit. Some shit with some shit.',
					price: 'Rp. '+(32500/1000)+'k',
				},
				{
					img: props.AppURLs.images+'bg_4.jpg',
					name: 'Grilled American Fillet',
					details: 'Some shit with some shit. Some shit with some shit. Some shit with some shit.',
					price: 'Rp. '+(65400/1000)+'k',
				},																
			]}
		/>		
		</div>
*/