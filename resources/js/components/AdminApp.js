import React from 'react';
import RegisterView from './AdminViews/RegisterView.js';
import LoginView from './AdminViews/LoginView.js';
import HomeView from './AdminViews/HomeView.js';

const App = document.getElementById('AdminApp');

export default function AdminApp(props){
	if(App.classList.contains('register_view')){
		return <RegisterView AppURLs = {props.AppURLs} />;
	}

	else if(App.classList.contains('login_view')){
		return <LoginView AppURLs = {props.AppURLs} />;
	}	

	else if(App.classList.contains('home_view')){
		return <HomeView AppURLs = {props.AppURLs} />;
	}	
}
