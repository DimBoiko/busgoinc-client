import React from 'react';
import './support.css'
import viber from '../../img/viber.png'
import telegram from '../../img/telegram.png'
import whatsapp from '../../img/whatsapp.png'
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
					<div className="support__item telegram">
						<img src={telegram} alt="telegram"/>
						<a href='https://t.me/busgoinc' target='_blank' rel="noreferrer">@BusGoInc</a>
					</div>
					<div className="support__item">
						<img src={whatsapp} alt="whatsapp"/>
						<span>+380(50)-568-57-93</span>
					</div>
				</div>
			</div>)}
		</Transition>
	);
}

export default Support;
