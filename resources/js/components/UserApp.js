import React from 'react';
import LandingView from './UserViews/LandingView.js';
import AboutView from './UserViews/AboutView.js';
import CartView from './UserViews/CartView.js';
import MenusView from './UserViews/MenusView.js';

import {Navbar, Footer} from './reusables/Sections.js';
import SVGIcons from './reusables/SVGIcons.js';

const App = document.getElementById('UserApp');

export default function UserApp(props){
	const UserNavbar = 
		(<Navbar
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
				<>
				<a className="btn" href={'#'}>
					<SVGIcons icon = {'telephone'} />
				</a>				
				<a className="btn" href={props.AppURLs.domain+'cart'}>
					<SVGIcons icon = {'cart'} />
				</a>
				</>//
			}
		/>);

	const UserFooter = 
		(<Footer
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
		/>);

	if(App.classList.contains('landing_view')){
		return <LandingView AppURLs = {props.AppURLs} Navbar = {UserNavbar} Footer = {UserFooter} />;
	}

	else if(App.classList.contains('about_view')){
		return <AboutView AppURLs = {props.AppURLs} Navbar = {UserNavbar} Footer = {UserFooter} />;
	}	

	else if(App.classList.contains('menus_view')){
		return (
		<MenusView
			AppURLs = {props.AppURLs}
			Navbar = {UserNavbar}
			Footer = {UserFooter}
			menus = {JSON.parse(document.getElementById('menus').innerHTML)}
			orderedMenus = {JSON.parse(document.getElementById('orderedMenus').innerHTML)}
			menusImgPath = {JSON.parse(document.getElementById('menusImgPath').innerHTML)}
		/>);
	}

	else if(App.classList.contains('cart_view')){
		return (
		<CartView
			AppURLs = {props.AppURLs}
			Navbar = {UserNavbar}
			Footer = {UserFooter}
			orderedMenus = {JSON.parse(document.getElementById('orderedMenus').innerHTML)}
			quantity = {JSON.parse(document.getElementById('quantity').innerHTML)}
			menusImgPath = {JSON.parse(document.getElementById('menusImgPath').innerHTML)}
		/>);
	}	
}

/*
Doyan burger atau sushi? Kalau dua-duanya, Anda wajib mencoba kreasi Burgushi. Ada sushi salmon mentai berbentuk burger yang puaskan selera.

Hadir sejak 2017, nama Burgushi langsung mencuri perhatian para foodies. Restoran mungil di kawasan Panglima Polim ini mengawinkan burger dan sushi dalam sajian bernama 'Burgushi.'

Varian sushi diubah bentuknya menjadi mirip burger. Mulai dari tuna salad, beef double, salmon mentai dan gyu-tan. Meski begitu, ada juga menu burger sungguhan. Semua dibanderol dalam harga relatif murah, Rp 30.000-45.000.

Kami mencoba Salmon Mentai (Rp 45.000), Beef Wakame (Rp 35.000) dan Chicken Karaage (Rp 20.000) buatan Burgushi. Nampak pesanan dikemas rapih menggunakan kertas.

Hanya saja pemakaian kertas membuat bentuk burger sushi Salmon Mentai sedikit berantakan saat sampai. Hal ini mungkin juga disebabkan perjalanan menggunakan motor mengingat kami memesannya via ojek online.

Salmon Mentai menguarkan aroma gurih khas nori yang menggugah selera. Sushi ini dibuat kotak layaknya burger. Bun burger yang biasanya roti digantikan dengan rice katsu, adonan nasi yang dipadatkan lalu digoreng tepung layaknya katsu.

Ada juga lembaran nori lebar yang menyelimuti permukaan luar Salmon Mentai. Sementara isiannya berupa sashimi salmon, irisan crabstick, timun Jepang dan mentai mayo dalam jumlah berlimpah.

Rice katsu terasa empuk enak, hanya saja terlalu padat menurut kami. Kalaulah buliran nasinya tak terlalu padat sepertinya lebih enak. Soal isian, pencinta salmon mentai dijamin terpuaskan karena salmonnya lembut juicy dan terasa segar.

Sementara itu paduan mentai mayo membuat burger ini jadi gurih dengan selingan renyah segar dari pemakaian timun Jepang. Porsi burger sushi yang cukup besar ini sukses bikin kenyang dan puas!

Ingin mencoba burger asli, kami mencicip Beef Wakame. Roti burger yang empuk mengapit isian beef patty, wakame alias rumput laut, lelehan keju dan onion ring.

Nyamm! Kami menyukai beef patty Burgushi yang punya rasa daging kuat. Teksturnya juga juicy dan tidak terlalu berserat. Tambahan irisan wakame memberi sentuhan rasa segar yang unik. Makin enak dipadu gurihnya lelehan keju. Menyantap satu buah burger ini juga mengenyangkan.

Terakhir, ada Chicken Karaage yang cukup enak. Terdiri dari potongan ayam berbalut tepung yang cenderung tebal sehingga tidak renyah. Tekstur karaage juga terasa berminyak. Selain karaage, Burgushi masih punya pilihan menu Extras lain salmon skin, kentang goreng dan nori tempura.

*/

/*
Pernah terbayang mencicipi burger dan sushi dalam satu gigitan? Burger yang sejatinya adalah western food dan sushi adalah Japanese food, dipadukan menjadi satu sehingga menghasilkan makanan yang lezat dan unik di Burgushi. Beda dari yang lain! Burger adalah roti lapis yang terdiri daging patty lezat berpadu dengan aneka sayuran dan saus. Sementara sushi adalah perpaduan antara daging ikan mentah dan nasi. 

Mengapa burgushi? Nah, usut punya usut, yang membuat burgusi beda adalah penggunaan nasi yang digoreng seperti katsu renyah untuk mengganti roti yang biasanya digunakan di burger pada umumnya. Wih, unik dan beda nih dari yang lain. Burgushi memiliki 7 gerai nih di Jakarta. Penasaran dengan kreasi terbaru dalam dunia kuliner ini? Simak yuk artikel berikut.

Burgushi kental dengan ciri khas sajian fusion food yang mengkombinasikan antara makanan khas Jepang yang lezat dan otentik, jadi punya ciri khas tersendiri yang melekat di hati seperti sushi berpadu dengan burger asal Amerika yang identik dengan sajian lezat dan praktis. Filosofi inilah yang mendasari hadirnya inovasi baru dalam dunia kuliner bernama burgushi. Cool! 

Burgushi memiliki 7 gerai di Jakarta. Secara garis besar, dekorasi dan nuansanya hampir sama di setiap gerai. Ketika memasuki Burgushi, nuansa homey terasa sekali dengan penggunaan meja-meja kayu dan ornamen simple tapi menarik. Ada bantal-bantal kecil di beberapa spot kursi dan penggunaan lampu yang temaram, menambah nuansa yang artsy di Burgushi. 

Burgushi merupakan kependekan dari burger dan sushi. Sesuai dengan namanya, menu unik ini cocok bagi para penggemar kedua makanan cepat saji paling terkenal di dunia itu. Menu pilihan Burgushi yang recommended adalah Double Beef Burgushi (Rp. 45.000) dan Salmon Mentai Burgushi (Rp. 45.000) dengan cita rasa khas Jepang yang lebih kental. 

Kedua jenis Burgushi tersebut disajikan hangat-hangat dengan dibalut selembar nori yang membuat tampilan burger sekilas mirip dengan onigiri asal Jepang. Jika kamu lebih menyukai rasa khas Jepang, maka coba saja Salmon Mentai Burgushi yang terdiri dari isian cacahan salmon, crabstick, irisan mentimun, dan mentai mayo yang creamy. 

Burgushi dibalut dengan nori. Agar nuansa ala Jepangnya tetap terasa. Sumber Detik Finance
Terinspirasi dari salah satu jenis sushi paling populer, yaitu Salmon Mentai, Burgushi juga tidak mau ketinggalan, nih! Burgushi mengubah konsep tradisional sushi yang disajikan dengan menggulung daging salmon ke dalam nasi yang telah dimarinasi dengan rice vinegar saat proses pematangannya dan lembaran rumput laut alias nori. 

Nah, berbeda nih dengan Double Beef Burgushi yang besar, Salmon Mentai Burgushi berukuran lebih kecil, sehingga mudah untuk digenggam. Umumnya jika memakan sushi, salmon akan disajikan dalam balutan nasi dan disiram dengan saus khusus. Nah, persis nih seperti Salmon Mentai Burgushi! Daging salmon dibumbui dengan saus mayones kemudian dibakar. Perfect!

Untuk Double Beef Burgushi, daging yang menjadi isian burger sangat melimpah dan memiliki tekstur yang juicy. Bahkan, saat digigit, rasa daging yang juicy terasa banget dan membuat rasa Burgushi semakin lezat. Scramble egg yang lembut juga menambah cita rasanya. Ditambah dengan saus keju yang meleleh, perpaduan rasa gurih dan creamy serta tekstur crunchy dari rice katsu membuat kamu ketagihan.

Kalau Double Beef Burgushi, rasanya cenderung ke western food dan Salmon Mentai Burgushi rasanya cenderung ke Japanese food. Untuk ukuran ‘burger’, porsi Burgushi terbilang cukup besar, sehingga membutuhkan alat bantu pisau dan garpu untuk menyantapnya. Burgushi menyediakan hidangan lain bernuansa Jepang.

Nah, kalau ingin mencoba menu selain burgushi, kamu bisa mencoba Truffle Gyudon yang meruapakan semangkuk nasi ala Jepang dengan berbagai pilihan topping menggiurkan. Ada juga nih menu lain yaitu Karaage Curry Rice yang merupakan hidangan ayam goreng dengan nasi plus siraman saus kari. Semuanya hadir dengan sentuhan ala negeri matahari terbit tentunya. 

Untuk varian burgusi lainnya ada burger tuna, yang disajikan dengan isian jamur enoki untuk menambah tingkat kerenyahan. Ada pula wagyu steak burger, dengan isian daging wagyu plus salah dressing wafu. Menu Burgushi yang paling favorit sejauh ini adalah Salmon Mentai, Beef Double, Beef Single, Chicken Spicy, Salmon Teriyaki, Beef Yakiniku, Tuna Salad, dan Chicken Nanpan. Menu-menu favorit ini dibanderol diantara Rp. 29.000 hingga Rp. 42.000. Harganya terjangkau dan nyaman di kantong, ya!

Tidak usah bingung cara menyantap burgushi. Technically, cara menyantap burgushi mirip dengan cara menyantap burger. Pada gigitan pertama serasa menyantap sushi, bukan burger. Setelah isian burgushi dan mayonaise tergigit baru kesan sedang menyantap burger mengemuka. 

Bagi kamu penggemar burger dan sushi, menu Burgushi ini memang solusi tepat yang all in one. Rasa burgernya kena, rasa sushinya juga mantap. Benar-benar perpaduan yang sempurna. Perfect balance!
*/