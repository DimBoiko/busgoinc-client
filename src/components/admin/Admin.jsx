import React, { useState,useEffect } from 'react';
import { useMemo} from 'react';
import CreateTicket from '../create-ticket/CreateTicket';
import './admin.css'
import TicketEditor from './ticket-editor/TicketEditor';
import AdminService from '../../API/AdminService';
import WebsiteData from '../website-data/WebsiteData';
import Loader from '../loader/Loader';

const Admin = () => {
	const [searchValue,setSearchValue] = useState('')
	const [tickets,setTickets] = useState([])
	const [data,setData] = useState({_id:0,multiplier:0})
	const [isLoading,setIsLoading] = useState(true)


	const filteredTickets = useMemo(() => {
		return [...tickets].filter((ticket) => ticket.Route.toLowerCase().includes(searchValue.toLowerCase()))
	},[searchValue,tickets])

	useEffect(() => {
		AdminService.getData(setTickets,setData,setIsLoading)
	}, []);


	return (
		<div className='admin'>
			<div className="admin__search">
				<div className="admin__search-title">
					Поиск по маршруту
				</div>
				<input className='admin__search-input' type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
			</div>
			{isLoading
			?
			<Loader/>
			:
			<>
				<div className="admin__tickets">
				<CreateTicket tickets={tickets} setTickets={setTickets} add={AdminService.addTicket}/>
				{
				filteredTickets.length
				?
				filteredTickets.map((ticket) => {
					return <TicketEditor key={ticket._id} save={AdminService.saveChanges} remove={AdminService.removeTicket} ticket={ticket} tickets={tickets} setTickets={setTickets} />
				})
				:
				tickets.map((ticket) => {
					return <TicketEditor key={ticket._id} save={AdminService.saveChanges} remove={AdminService.removeTicket} ticket={ticket} tickets={tickets} setTickets={setTickets} />
				})
				}
				</div>
				<WebsiteData data={data} setData={setData}/>
	
			</>
			}
			
		</div>
	);
}

export default Admin;
