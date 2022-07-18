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
					<div className="about__item-title">
						Transport from cities where hostilities are underway
					</div>
					<div className="about__item-text">
					Despite the hostilities, our company is making every effort to maintain the possibility of 
					transportation from dangerous areas of Ukraine. If you are interested in transportation from
					 the cities of hostilities, please check the availability of such an opportunity through support.
					</div>
				</div>
				<div className="about__item">
					<div className="about__item-title">
						Latest and ultra-reliable transport
					</div>
					<div className="about__item-text">
					We do not have a car older then 2018 and they go through the service station before each trip
					</div>
				</div>
			</div>
			<Swiper/>
			
			<Footer/>
		</div>
	);
}

export default About;
