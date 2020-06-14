import React from 'react';
import {Button_1} from './../reusables/Buttons.js'
import {Navbar, Footer} from './../reusables/Sections.js'

export default function AboutView(props){
	return (
		<>
		<Navbar
			brandImg = {props.AppURLs.icons+'logo.png'}
			navbarLinks = {[
				{type: 'link', data:{
					attr: {href: props.AppURLs.domain}, text: 'HOME'
				}},
				{type: 'link', data:{
					attr: {href: props.AppURLs.domain+'about'}, text: 'ABOUT'
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

		<article className="section_padding">
			<section className="rows_container x_space_between section_1" style={{marginBottom: '8rem'}}>
				<div>
					<h2 className="heading">
						A History Has Written For Asahi Explore 
						<span className="highlightText">more Our Story</span>
					</h2>
					<p className="body">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	
					</p>
				</div>
				<img className="img" src={props.AppURLs.images+'1.jpg'} />
			</section>
			<section className="rows_container reverse x_space_between section_1">
				<div>
					<h2 className="heading">
						A warm & Friendly Atmosphere With a <span className="highlightText">event a suppor</span>
					</h2>
					<p className="body">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	
					</p>
				</div>
				<img className="img" src={props.AppURLs.images+'3.jpg'} />
			</section>			
		</article>	

		<Footer
			sections = {[
				{
					tag: 'section',
					heading: 'SITE MAP',
					bodies: [
						{type: 'link', text: 'Home', attr: {href: props.AppURLs.domain}},
						{type: 'link', text: 'About', attr: {href: '#'}},
						{type: 'link', text: 'Our Menus', attr: {href: props.AppURLs.domain+'menus'}},
						{type: 'link', text: 'Contact', attr: {href: '#'}},
					]
				},
				{
					tag: 'address',
					heading: 'ADDRESS',
					bodies: [
						{
							type: 'text',
							tag: 'p',
							text: "44 Canal Center Plaza #200, Alexandria, VA 22314, USA",
						},
						{type: 'link', text: 'Email: qwerty@gmail.com', attr: {href: 'mailto:qwerty@gmail.com'}},
					]
				},
				{
					tag: 'section',
					heading: 'OPENING HOURS',
					bodies: [
						{
							type: 'text',
							tag: 'span',
							text: (<>
								<span>Monday:</span>
								<span>9.00 AM - 22.00 PM</span>
							</>),
							attr: {style: {display: 'flex', justifyContent: 'space-between'}}
						},
						{
							type: 'text',
							tag: 'span',
							text: (<>
								<span>Tuesday:</span>
								<span>9.00 AM - 22.00 PM</span>
							</>),
							attr: {style: {display: 'flex', justifyContent: 'space-between'}}
						},
						{
							type: 'text',
							tag: 'span',
							text: (<>
								<span>Wednesday:</span>
								<span>9.00 AM - 22.00 PM</span>
							</>),
							attr: {style: {display: 'flex', justifyContent: 'space-between'}}
						},
						{
							type: 'text',
							tag: 'span',
							text: (<>
								<span>Thursday:</span>
								<span>9.00 AM - 22.00 PM</span>
							</>),
							attr: {style: {display: 'flex', justifyContent: 'space-between'}}
						},
						{
							type: 'text',
							tag: 'span',
							text: (<>
								<span>Friday:</span>
								<span>9.00 AM - 22.00 PM</span>
							</>),
							attr: {style: {display: 'flex', justifyContent: 'space-between'}}
						},																								
					]
				},				
			]}
		/>
		</>//
	);
}