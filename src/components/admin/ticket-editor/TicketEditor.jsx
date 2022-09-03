import React, { useState } from 'react';
import ConfirmRemoval from '../confirmRemoval/ConfirmRemoval';
import './ticket-editor.css'

const TicketEditor = ({ticket,save,remove,tickets,setTickets}) => {
	const [ticketData,setTicketData] = useState(ticket)
	const [confirmRemoval,setConfirmRemoval] = useState(false)

	return (
		<div className='ticket-editor'>
			<div className="ticket-editor__route">
					<span>Маршрут:</span> 
					<input type="text"
					 value={ticketData.Route}
					 onChange={(e) => setTicketData({...ticketData,Route:e.target.value})}
					/>
			</div>
			<div className="ticket-editor__body">
				<div className="ticket-editor__from">
					<div className="ticket-editor__from-adress">
						<span>Откуда: </span>
						<input type="text"
						 className='custom-input'
					 	 value={ticketData.From}
					 	 onChange={(e) => setTicketData({...ticketData,From:e.target.value})}
						/>
					</div>
				</div>
				<div className="ticket-editor__where">
				<div className="ticket-editor__where-adress">
						<span>Куда: </span>
						<input type="text"
					 	 value={ticketData.Where}
						className='custom-input'
					 	 onChange={(e) => setTicketData({...ticketData,Where:e.target.value})}
						/>
					</div>
				</div>
				<div className="ticket-editor__time">
					<span>Время отправки и прибытия: </span>
					<input type="text" onChange={(e) => setTicketData({...ticketData,Time:e.target.value})} value={ticketData.Time} />
				</div>
				<div className="ticket-editor__price">
					<span>Цена: </span>
					<input value={ticketData.Price} onChange={(e) => setTicketData({...ticketData,Price:e.target.value})} type="text" />
				</div>
				<div className="ticket-editor__trip-time">
					<span>Время поездки: </span>
					<input value={ticketData.Day} onChange={(e) => setTicketData({...ticketData,Day:e.target.value})} type="text" />
				</div>
			</div>
			<div className="ticket-editor__buttons">
				<div className="ticket-editor__save">
					<button onClick={() => save(ticketData,tickets,setTickets)} className='ticket-editor__save btn'>Сохранить</button>
				</div>
				<div className="ticket-editor__remove">
					<button onClick={() => setConfirmRemoval(true)} className='ticket-editor__remove btn'>Удалить</button>
				</div>
			</div>
			{
				confirmRemoval &&
				<ConfirmRemoval cancel={setConfirmRemoval} remove={remove} data={{id:ticket._id,tickets,setTickets}}/>
			}
		</div>
	);
}

export default TicketEditor;
