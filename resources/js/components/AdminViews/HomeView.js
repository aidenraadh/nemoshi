import React from 'react';
import {LARAVEL_CSRF_TOKEN} from './../reusables/Forms.js';

export default function HomeView(props){
	return (
		<>
		<form method="POST" action={props.AppURLs.logout}>
			<LARAVEL_CSRF_TOKEN />
			<button type="submit">logout</button>
		</form>
		</>//
	);
}