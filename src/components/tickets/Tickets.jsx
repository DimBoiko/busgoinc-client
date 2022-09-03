import React from 'react';
import Ticket from '../ticket/Ticket';
import { useSelector } from 'react-redux';
import './tickets.css'

const Tickets = () => {
	const tickets = useSelector(state => state.tickets.tickets)
	const state = useSelector(state => state.tickets.ticketsVisible)
	const formData = useSelector(state => state.form.form)
	let filteredTickets = []
	
	filteredTickets = tickets.filter((ticket) => {
		if(ticket.Route.split('-')[0] === 'IVANO'){
			const ticketCities = (ticket.Route.split('-').slice(0,2).join('-') + ticket.Route.split('-')[2]).toLowerCase()
			const searchCities = (formData.from + formData.where).toLowerCase()
			return ticketCities === searchCities
		}
		if(ticket.Route.split('-')[1] === 'IVANO'){
			const ticketCities = (ticket.Route.split('-')[0] + ticket.Route.split('-').slice(1,3).join('-')).toLowerCase()
			const searchCities = (formData.from + formData.where).toLowerCase()
			return ticketCities === searchCities
		}
		const ticketCities = ticket.Route.split('-').join('').toLowerCase()
		const searchCities = (formData.from + formData.where).toLowerCase()
		return ticketCities === searchCities
	})


	return (
		state
		?
		<div className="founded-tickets">
		<div className="founded-tickets__title">
			{filteredTickets.length ? '' : 'Not available tickets'}
		</div>
			<div className="founded-tickets__colum">
				{filteredTickets.map((tickets)=> {
					const allDate = tickets.Time.split(';').filter((date)=> date !== '')
					const id = Date.now()
					return allDate.map((ticketDate,index)=>{
						const tripTime = tickets.Day ? tickets.Day.split(';')[index] : null
						return <Ticket formData key={(id + index)} date={formData.date} time={ticketDate} tripTime={tripTime !== '0' ? tripTime : null} ticket={tickets} passengers={formData.passengers}/> 
					})
				})}
			</div>
		</div>
		: ''
		
	);
}

export default Tickets;
