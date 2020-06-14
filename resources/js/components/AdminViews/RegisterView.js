import React from 'react';
import {LARAVEL_CSRF_TOKEN} from './../reusables/Forms.js';

export default function RegisterView(props){
	return (
		<>
		<form method="POST" action={props.AppURLs.register}>
			<LARAVEL_CSRF_TOKEN />
			<input type="text" name="name" placeholder="name" required autoFocus />
			<input type="email" name="email" placeholder="email" required />
			<input type="password" name="password" placeholder="password" required />
			<input type="password" name="password_confirmation" placeholder="password_confirmation" required />
			<button type="submit">Sign up</button>		
		</form>		
		</>//
	);
}