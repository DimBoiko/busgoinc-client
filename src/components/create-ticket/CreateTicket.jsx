import React from 'react';
import './create-ticket.css'

const CreateTicket = ({tickets,setTickets,add}) => {

	return (
		<button onClick={() => add(tickets,setTickets)} className='create-ticket'>
			+
		</button>
	);
}

export default CreateTicket;
