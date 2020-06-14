import React from 'react';

export function LARAVEL_CSRF_TOKEN(props){
	let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
	return (
		<>
		<input type="hidden" name="_token" value={token} />
		</>//
	);
}

export function test(props){
	return <span>asds</span>;
}
