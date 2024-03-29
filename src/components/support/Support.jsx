import React from 'react';
import './support.css'
import viber from '../../img/viber.png'
import whatsapp from '../../img/whatsapp.png'
import gmail from '../../img/gmail-icon.svg'
import { Transition } from 'react-transition-group';


const Support = ({visible}) => {
	
	return (
		<Transition in={visible} timeout={300}>
			{state => (<div className={`support ${state}`}>
				<div className="support__body">
					<div className="support__item">
						<img src={viber} alt="viber"/>
						<span>+380 (91)-603-86-90</span>
					</div>
					<div className="support__item">
						<img src={whatsapp} alt="whatsapp"/>
						<span>+380 (99)-673-4517</span>
						
					</div>
					<div className="support__item">
						<img src={gmail} alt="gmail"/>
						<span>busgolncua@gmail.com</span>
					</div>
				</div>
			</div>)}
		</Transition>
	);
}

export default Support;
