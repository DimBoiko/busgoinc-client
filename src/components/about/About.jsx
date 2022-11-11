import React from 'react';
import Footer from '../footer/Footer';
import Swiper from '../swiper/Swiper';
import './about.css'

const About = () => {
	return (
		<div className="about">
			<div className="container">
				<div className="about__title">
					<h2>Why choose BusGo?</h2>
					<div className="about__value">
						3000+
					</div>
					
				</div>
				<div className="about__item">
					<div className="about__item-title">
						Buy a bus ticket in 5 minutes
					</div>
					<div className="about__item-text">
					We adhere to a flexible policy of cooperation with customers and provide an opportunity to pay for
					bus tickets in a convenient way: in cash or make online payment using a bank card. If you have a
					question about how to buy/order/book or you just want to clarify what the ticket price is, write at any time.
					</div>
				</div>
				<div className="about__item">
					<div className="about__item-text">
					Our company works with carriers that provide bus transportation of tourists across Ukraine and abroad. Our task is to find potential customers (passengers) directly or through travel companies. We pass on the information 
					about the captured passengers to the carriers, for which we receive a reward in the form of a percentage.
					</div>
				</div>

			</div>
			<Swiper/>
			
			<Footer/>
		</div>
	);
}

export default About;
