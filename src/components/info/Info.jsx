import React from 'react';
import { useSelector } from 'react-redux';
import './info.css'

const Info = () => {
	const state = useSelector(state => state.tickets.ticketsVisible)
	let display = ''
	if(state){ 
		display = 'none'
	}else{
		display = 'block'
	}


	return (
		<div style={{'display':display}} className='info'>
			<div className="container">
				<div className="info__title">
					Important!
				</div>
				<div className="info__body">
				In order to book a ticket, you need to make an online booking on our website,
				 after which an unpaid ticket will be sent to your mail. In order to confirm the booking soon, 
				 our manager will contact you to clarify the details and confirm the booking. After confirming the
				  order, the ticket must be paid. You can pay for a ticket in several ways, you can check with our
				   manager when confirming the order, our manager will coordinate you and help you choose a more convenient,
					 safe and comfortable payment method. Payment is possible through services Visa / MasterCard, Swift-transfer, 
					 TransferGo,Wise, instant transfers Western Union / MoneyGram / Ria, etc.
				</div>
			</div>
		</div>
	);
}

export default Info;
