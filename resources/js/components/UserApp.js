import React from 'react';
import LandingView from './UserViews/LandingView.js';
import AboutView from './UserViews/AboutView.js';
import CartView from './UserViews/CartView.js';
import MenusView from './UserViews/MenusView.js';

const App = document.getElementById('UserApp');

export default function UserApp(props){
	if(App.classList.contains('landing_view')){
		return <LandingView AppURLs = {props.AppURLs} />;
	}

	else if(App.classList.contains('about_view')){
		return <AboutView AppURLs = {props.AppURLs} />;
	}	

	else if(App.classList.contains('menus_view')){
		return (
		<MenusView
			AppURLs = {props.AppURLs}
			menus = {JSON.parse(document.getElementById('menus').innerHTML)}
			orderedMenus = {JSON.parse(document.getElementById('orderedMenus').innerHTML)}
			menusImgPath = {JSON.parse(document.getElementById('menusImgPath').innerHTML)}
		/>);
	}

	else if(App.classList.contains('cart_view')){
		return (
		<CartView
			AppURLs = {props.AppURLs}
			orderedMenus = {JSON.parse(document.getElementById('orderedMenus').innerHTML)}
			quantity = {JSON.parse(document.getElementById('quantity').innerHTML)}
			menusImgPath = {JSON.parse(document.getElementById('menusImgPath').innerHTML)}
		/>);
	}	
}