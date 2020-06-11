import React from 'react';
import {Button_1} from './../reusables/Buttons.js'
import {Navbar, MenuGrid, Cart} from './../reusables/Sections.js'

export default function LandingView(props){
	return (
		<>
		<Navbar
			brandImg = {props.AppURLs.icons+'logo.png'}
			navbarLinks = {[
				{type: 'link', data:{
					attr: {href: '#'}, text: 'HOME'
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
		</>//
	);
}

/*
		<MenuGrid
			menus = {[
				{
					img: props.AppURLs.images+'bg_10.jpg',
					name: 'Grilled American Fillet',
					price: '$45.00',
				},
				{
					img: props.AppURLs.images+'bg_1.jpg',
					name: 'Grilled American Fillet',
					price: '$45.00',
				},
				{
					img: props.AppURLs.images+'bg_2.jpg',
					name: 'Grilled American Fillet',
					price: '$45.00',
				},
				{
					img: props.AppURLs.images+'bg_3.jpg',
					name: 'Grilled American Fillet',
					price: '$45.00',
				},
				{
					img: props.AppURLs.images+'bg_4.jpg',
					name: 'Grilled American Fillet',
					price: '$45.00',
				},																
			]}
		/>
*/