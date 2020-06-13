import React from 'react';
import {Button_1} from './../reusables/Buttons.js'
import {Navbar, MenuGrid, Cart} from './../reusables/Sections.js'

export default function LandingView(props){
	return (
		<>
		<Navbar
			brandImg = {props.AppURLs.icons+'logo.png'}
			navbarLinks = {[
				{type: 'link', data:{
					attr: {href: props.AppURLs.domain}, text: 'HOME'
				}},
				{type: 'link', data:{
					attr: {href: '#'}, text: 'ABOUT'
				}},				
				{type: 'link', data:{
					attr: {href: props.AppURLs.domain+'menus'}, text: 'OUR MENUS'
				}},
				{type: 'link', data:{
					attr: {href: '#'}, text: 'BLOG'
				}},
				{type: 'link', data:{
					attr: {href: '#'}, text: 'CONTACT'
				}},				
			]}
			navbarActions = {
				<a className="btn" href={props.AppURLs.domain+'cart'}></a>
			}
		/>
		<div className="cols_container x_center y_left head_section">
			<h1>
				Welcome to Asahi
				<span><span className="orange">Good food</span> is to be enjoyed food very beautiful in itse</span>
			</h1>
			<p>
			<span>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis.			
			</span>			
			</p>
		</div>
		</>//
	);
}