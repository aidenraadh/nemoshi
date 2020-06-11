import React from 'react';
import LandingView from './UserViews/LandingView.js';


const App = document.getElementById('UserApp');

export default function UserApp(props){
	if(App.classList.contains('landing_view')){
		return <LandingView AppURLs = {props.AppURLs} />;
	}
}