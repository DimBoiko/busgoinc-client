import React from 'react';
import './success-contacts.css'

const SuccessContacts = ({text}) => {
	return (
		<div className="payment-instruction__success contacts-success">
			<div className="payment-instruction__suc-body">
				<div className="contacts-success__close">
					&times;
				</div>
				<h2 className="payment-instruction__suc-title" >Success!</h2>
				<div className='payment-instruction__suc-text'>{text}</div>
				<div className='payment-instruction__contacts'>
				If you have any problems, please contact our manager in <a href="https://t.me/busgoinc" rel='help' target='_blank'><b>telegram </b></a> 
				or <a rel='help' target='_blank' href="https://wa.me/380916257316"><b>whatsapp</b></a>.
				</div>
			</div>
		</div>
	);
}

export default SuccessContacts;
