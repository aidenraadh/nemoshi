import React from 'react';
import ReactDOM from 'react-dom';
import UserApp from './UserApp.js';

const AppURLs = JSON.parse(document.getElementById('AppURLs').innerHTML);

if(document.getElementById('UserApp')){
	ReactDOM.render(
		<UserApp
			AppURLs = {AppURLs}
		/>,
		document.getElementById('UserApp')
	);	
}