import React from 'react';
import ReactDOM from 'react-dom';
import UserApp from './UserApp.js';

if(document.getElementById('UserApp')){
	ReactDOM.render(
		<UserApp />,
		document.getElementById('UserApp')
	);	
}