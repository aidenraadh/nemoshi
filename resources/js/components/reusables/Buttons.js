import React from 'react';

export function Button_1(props){
	const BtnTag = props.tag;
	return (
		<>
		<BtnTag className="btn_1" {...props.attr} {...props.events}>
			{props.text}
		</BtnTag>
		</>//
	);
}

export function Button_2(props){
	return (
		<>
		<span></span>
		</>//
	);
}
