import React from 'react';
import {Button_1} from './../reusables/Buttons.js'

export default function AboutView(props){
	return (
		<>
		{props.Navbar}

		<article className="section_padding">
			<h1 className="heading dark">About <span className="highlightText">Us</span></h1>
			<section className="section_1 rows_container x_space_between" style={{marginBottom: '8rem'}}>
				<div>
					<h2 className="heading dark">
						A History Has Written For <span className="highlightText">Nemoshi</span>
					</h2>
					<p className="body dark">
						Nemoshi offers the inherent characteristics of a fusion food that combines 
						delicious and authentic Japanese specialties. It has its own inherent 
						characteristics such as sushi combined with American burgers 
						that are identical with delicious and practical dishes. This philosophy underlies 
						the presence of new innovations in the culinary world called Nemoshi. Cool! <br /><br />
						Founded since 2017, the name Nemoshi immediately stole the attention of the foodies. 
						This tiny restaurant in the Panglima Polim area marries burgers and sushi in a dish 
						called 'Nemoshi.'					</p>
				</div>
				<div className="img_grid">
					<img className="portrait" src={props.AppURLs.images+'asd.jpg'} />
					<div className="square">
						<img className="img" src={props.AppURLs.images+'images.jpg'} />
						<img className="img" src={props.AppURLs.images+'Roppongi.jpg'} />
					</div>
				</div>
			</section>
			<section className="section_1 rows_container reverse x_space_between">
				<div>
					<h2 className="heading dark">
						A warm & Friendly Atmosphere With a <span className="highlightText">event a suppor</span>
					</h2>
					<p className="body dark">
						Burgushi memiliki 7 gerai di Jakarta. Secara garis besar, dekorasi dan nuansanya 
						hampir sama di setiap gerai. Ketika memasuki Burgushi, nuansa homey terasa sekali 
						dengan penggunaan meja-meja kayu dan ornamen simple tapi menarik. 
						Ada bantal-bantal kecil di beberapa spot kursi dan penggunaan lampu yang temaram, 
						menambah nuansa yang artsy di Burgushi. 					
					</p>
				</div>
				<div class="img">
					<img src={props.AppURLs.images+'2.jpg'} />
				</div>
			</section>			
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