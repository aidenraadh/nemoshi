import React from 'react';
import {Button_1} from './../reusables/Buttons.js'
import {Footer} from './../reusables/Sections.js'

export default function LandingView(props){
	return (
		<>
		{props.Navbar}

		<div className="cols_container x_center y_left head_section section_padding">
			<h1 className="heading light">
				<span className="highlightText" style={{fontSize: '2.6rem', display: 'block'}}>
					Welcome to Nemoshi
				</span>
				Good food is to be <span className="highlightText">enjoyed</span> food very beautiful in itse
			</h1>
			<p className="body light">
				We delivers special meals combining japanese sushi and western burgers.
				Nemoshi is the right solution for you, fans of burgers and sushi!.			
			</p>
		</div>

		<article className="section_1 rows_container x_space_between section_padding">
			<div>
				<h2 className="heading dark">
					A History Has Written For <span className="highlightText">Nemoshi</span>
				</h2>
				<p className="body dark">
					Founded since 2017, the name Nemoshi immediately stole the attention of the foodies. 
					This tiny restaurant in the Panglima Polim area marries burgers and sushi in a dish 
					called 'Nemoshi.'<br/> <br/>
					<Button_1
						tag = {'a'}
						color = {'orange_gradient'} text = {'Read More'}
						attr = {{href: props.AppURLs.domain+'about'}}
					/>
				</p>
			</div>
			<div className="img_grid">
				<img className="portrait" src={props.AppURLs.images+'asd.jpg'} />
				<div className="square">
					<img className="img" src={props.AppURLs.images+'images.jpg'} />
					<img className="img" src={props.AppURLs.images+'Roppongi.jpg'} />
				</div>
			</div>
		</article>

		<article id="SpecialOffer" className="section_1 rows_container x_space_between section_padding">
			<div>
				<h2 className="heading light">
					We offer a bit less at <span className="highlightText">Midday</span>
				</h2>
				<p className="body light">
					Founded since 2017, the name Nemoshi immediately stole the attention of the foodies. 
					This tiny restaurant in the Panglima Polim area marries burgers and sushi in a dish 
					called 'Nemoshi.'<br/> <br/>
				</p>
			</div>
			<div className="img">
				<span>
					<span>30%<br/>Off</span>				
				</span>
			</div>
		</article>		

		{props.Footer}
		</>//
	);
}