import React from 'react';
import {Button_1} from './../reusables/Buttons.js'
import {Navbar, MenuGrid} from './../reusables/Sections.js'

export default function LandingView(props){
	return (
		<>
		<Navbar
			brandImgLink = {props.AppURLs.icons+'logo.png'}
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
		<MenuGrid
			menus = {[
				{
					img: props.AppURLs.images+'bg_10.jpg',
					name: 'Grilled American Fillet',
					details: 'Red peppers, roasted garlic, lemon slices.',
					price: '$45.00',
				},
				{
					img: props.AppURLs.images+'bg_1.jpg',
					name: 'Grilled American Fillet',
					details: 'Red peppers, roasted garlic, lemon slices.',
					price: '$45.00',
				},
				{
					img: props.AppURLs.images+'bg_2.jpg',
					name: 'Grilled American Fillet',
					details: 'Red peppers, roasted garlic, lemon slices.',
					price: '$45.00',
				},
				{
					img: props.AppURLs.images+'bg_3.jpg',
					name: 'Grilled American Fillet',
					details: 'Red peppers, roasted garlic, lemon slices.',
					price: '$45.00',
				},
				{
					img: props.AppURLs.images+'bg_4.jpg',
					name: 'Grilled American Fillet',
					details: 'Red peppers, roasted garlic, lemon slices.',
					price: '$45.00',
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