import React from 'react';
import './success.css'

const Success = ({text}) => {
	return (
		<div className="payment-instruction__success">
			<div className="payment-instruction__suc-body">
				<h2 className="payment-instruction__suc-title" >Success!</h2>
				<div className='payment-instruction__suc-text'>{text}</div>
				<div className='payment-instruction__contacts'>
				If you have any problems or questions, please contact our manager in <a href="https://t.me/busgoinc" rel='noreferrer' target='_blank'><b>telegram </b></a> 
				or <a rel='noreferrer' target='_blank' href="https://wa.me/380916257316"><b>whatsapp</b></a> .
				</div>
			</div>
		</div>
	);
}

export default Success;
