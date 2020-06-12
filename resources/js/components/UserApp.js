import React from 'react';
import LandingView from './UserViews/LandingView.js';
import MenusView from './UserViews/MenusView.js';

const App = document.getElementById('UserApp');

export default function UserApp(props){
	if(App.classList.contains('landing_view')){
		return <LandingView AppURLs = {props.AppURLs} />;
	}
	else if(App.classList.contains('menus_view')){
		return (
		<MenusView
			AppURLs = {props.AppURLs}
			Menus = {JSON.parse(document.getElementById('Menus').innerHTML)}
			MenusImgPath = {JSON.parse(document.getElementById('MenusImgPath').innerHTML)}
		/>);
	}	
}