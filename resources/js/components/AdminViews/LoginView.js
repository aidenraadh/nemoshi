import React from 'react';
import {LARAVEL_CSRF_TOKEN} from './../reusables/Forms.js';

export default function LoginView(props){
	return (
		<>
		<form method="POST" action={props.AppURLs.login}>
			<LARAVEL_CSRF_TOKEN />
			<input type="email" name="email" required placeholder="email" autoFocus />
			<input type="password" name="password" required placeholder="password" />
			<button type="submit">Login</button>
		</form>		
		</>//
	);
}