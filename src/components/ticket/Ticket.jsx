import React from 'react';
import { modalToggle } from '../../store/modalSlice';
import { setSelectedTicket } from '../../store/ticketsSlice';
import { useDispatch } from 'react-redux';
import '../tickets/tickets.css'

const Ticket = ({date,time,tripTime,ticket,passengers}) => {
	const dispatch = useDispatch()
	let msDays = [
		{ Jan: 31 },
		{ Feb: 28 },
		{ Mar: 31 },
		{ Apr: 30 },
		{ May: 31 },
		{ Jun: 30 },
		{ Jul: 31 },
		{ Aug: 31 },
		{ Sep: 30 },
		{ Oct: 31 },
		{ Nov: 30 },
		{ Dec: 31 },
	 ];

	const [dispatchDay,dispatchMonth] = date.split('-').slice(1,3).reverse()
	let arriveDay = Number(dispatchDay),
	    arriveMonth = Number(dispatchMonth)

	let [fromCity,whereCity] = ticket.Route.split('-')
	const [fromTime,whereTime] = time.split('-')
	if(ticket.Route.split('-')[0] === 'IVANO'){
		fromCity = 'IVANO-FRANKOVSK'
		whereCity = ticket.Route.split('-')[2]
	}
	if(ticket.Route.split('-')[1] === 'IVANO'){
		fromCity = ticket.Route.split('-')[0]
		whereCity = 'IVANO-FRANKOVSK'
	}

	const buyTicket = (fromCity,whereCity,dispatchDay,arriveDay,dispatchMonth,arriveMonth,fromTime,whereTime) => {
		dispatchMonth = Object.keys(msDays[dispatchMonth - 1])[0]
		arriveMonth = Object.keys(msDays[arriveMonth - 1])[0]
		const selectedTicket = {
			from: fromCity,
			where: whereCity,
			dispatchDay,
			arriveDay,
			dispatchMonth,
			arriveMonth,
			fromTime,
			whereTime,
			fromAddress:ticket.From,
			whereAddress:ticket.Where,
			price: Number(passengers) * Number(ticket.Price),
			passengers 
		}
		dispatch(setSelectedTicket(selectedTicket))
		dispatch(modalToggle('payment'))
		document.body.style.overflow = 'hidden'
	}

	const getTimeTrip = (dispatchTime, arriveTime) => {
		let tripTime = [];
		let [dispatchHours, dispatchMinutes] = dispatchTime.split(":");
		let [arriveHours, arriveMinutes] = arriveTime.split(":");
	 
		if (
		  dispatchHours.trim().charAt(0) !== "0" &&
		  arriveHours.trim().charAt(0) !== "0"
		) {
		  if (Number(dispatchHours) > Number(arriveHours)) {
			 dispatchHours = 24 - dispatchHours;
			 
			 if(Number(arriveMinutes) < Number(dispatchMinutes)){
				tripTime.push(60 - (Math.abs(Number(arriveMinutes) - Number(dispatchMinutes))));
				tripTime.unshift(Number(dispatchHours) + Number(arriveHours) - 1);
				tripTime.push(1);
				return tripTime;
			  }
			  if(Number(arriveMinutes) > 0){
				tripTime.push(Number(arriveMinutes)  - Number(dispatchMinutes))	
			  }
			  if(Number(arriveMinutes) < 0){
					if(Number(dispatchMinutes > 0)){
						tripTime.push(60 - Number(dispatchMinutes))
						dispatchHours = Number(dispatchHours) - 1 
					}
					if(Number(dispatchMinutes < 0)){
						tripTime.push(60 - Number(dispatchMinutes))
					}
			  }
			 tripTime.unshift(Number(arriveHours) + Number(dispatchHours));
			 tripTime.push(0);
			 tripTime.push(1);
		  } else {
			 Number(dispatchMinutes) > Number(arriveMinutes)
			 ? tripTime.push((Number(arriveHours) - Number(dispatchHours)) - 1)
			 : tripTime.push(Number(arriveHours) - Number(dispatchHours));
		
			 if(Number(arriveMinutes) < Number(dispatchMinutes)){
				tripTime.push(60 - (Math.abs(Number(arriveMinutes) - Number(dispatchMinutes))));
				return tripTime;
			  }
			 tripTime.push(Number(arriveMinutes) 
			 ? Number(arriveMinutes)  - Number(dispatchMinutes) 
			 : 60  - Number(dispatchMinutes) 
			 );

		  }
		  if (tripTime[1] > 59) {
			 tripTime[0] = tripTime[0]++;
			 tripTime[1] = tripTime[1] - 60;
		  }
		  return tripTime;
		}
		if (
		  dispatchHours.trim().charAt(0) !== "0" &&
		  arriveHours.trim().charAt(0) === "0"
		) {
		  dispatchHours = 24 - dispatchHours;
		  if(Number(arriveMinutes) < Number(dispatchMinutes)){
			tripTime.push(60 - (Math.abs(Number(arriveMinutes) - Number(dispatchMinutes))));
			tripTime.unshift(Number(dispatchHours) + Number(arriveHours) - 1);
			tripTime.push(1);
			
			return tripTime;
		  }
		  if(Number(dispatchMinutes) > 0 && Number(arriveMinutes) < 1){
			tripTime.push(Math.abs(60 - Number(dispatchMinutes)));
			tripTime.unshift(Number(dispatchHours) + Number(arriveHours));
			tripTime.push(1);
			return tripTime;
		  }
		  tripTime.push(Number(dispatchHours) + Number(arriveHours));
		  tripTime.push(Math.abs(Number(arriveMinutes) - Number(dispatchMinutes)));
		  tripTime.push(1);
		  if (tripTime[1] > 59) {
			 tripTime[0] = tripTime[0]++;
			 tripTime[1] = tripTime[1] - 60;
		  }
		  return tripTime;
		}
		if (
		  dispatchHours.trim().charAt(0) === "0" &&
		  arriveHours.trim().charAt(0) !== "0"
		) {
		  if(Number(dispatchMinutes) > Number(arriveMinutes)){
				tripTime.push(60 - (Math.abs(Number(arriveMinutes) - Number(dispatchMinutes))) )
				arriveHours -= 1
		  }
		  if(Number(arriveMinutes) > Number(dispatchMinutes)){
				tripTime.push(Number(arriveMinutes - Number(dispatchMinutes)))
		  }
		  if(Number(arriveMinutes === Number(dispatchMinutes))){
				tripTime.push(0)
		  }

		  tripTime.unshift(Math.abs(Number(dispatchHours) - Number(arriveHours)));

		  return tripTime;
		}
		if (
		  dispatchHours.trim().charAt(0) === "0" &&
		  arriveHours.trim().charAt(0) === "0"
		) {
		  if (Number(dispatchHours) > Number(arriveHours)) {

			 tripTime.push(Math.abs(Number(arriveHours) - Number(dispatchHours)));
			 tripTime.push(Number(arriveMinutes) + Number(dispatchMinutes));
			 if (tripTime[1] > 59) {
				tripTime[0] = tripTime[0]++;
				tripTime[1] = tripTime[1] - 60;
			 }
			 tripTime.push(1);
			 return tripTime;
		  }
		  if(Number(arriveMinutes) <= Number(dispatchMinutes)){
			tripTime.push(60 - (Math.abs(Number(arriveMinutes) - Number(dispatchMinutes))) === 60 ? 0 : 60 - (Math.abs(Number(arriveMinutes) - Number(dispatchMinutes))));
			if(60 - (Math.abs(Number(arriveMinutes) - Number(dispatchMinutes))) === 60){
				tripTime.unshift(Math.abs(Number(arriveHours) - Number(dispatchHours)));
				return tripTime;
			}
			tripTime.unshift(Math.abs(Number(arriveHours) - Number(dispatchHours)) - 1);
			return tripTime;
		  }
		  tripTime.push(Math.abs(Number(arriveHours) - Number(dispatchHours)));
		  tripTime.push(Number(dispatchMinutes) + Number(arriveMinutes));
		  if (tripTime[1] > 59) {
			 tripTime[0] = tripTime[0]++;
			 tripTime[1] = tripTime[1] - 60;
		  }
		  return tripTime;
		}
		return [];
	 };

	let [hours,minutes,days] = getTimeTrip(fromTime,whereTime)
	
	if(days > 0){
		arriveDay = Number(dispatchDay) + 1
		if(Object.values(msDays[dispatchMonth - 1])[0] < arriveDay){
			arriveMonth = Number(dispatchMonth) +  1
			arriveDay = 1
		}
	}


	if(tripTime){
		hours = tripTime.split(':')[0]
		minutes = tripTime.split(':')[1]
		arriveDay = Number(dispatchDay) + 1
		if(Object.values(msDays[dispatchMonth - 1])[0] < arriveDay){
			arriveMonth = Number(dispatchMonth) +  1
			arriveDay = 1
		}
	}

	if(hours === 0){hours = 24}


	return (
		<div  className="founded-tickets__item">
		<div className="founded-tickets__from">
			<div className="founded-tickets__time">
				<div className="founded-tickets__time-info">
					<span className="founded-tickets__current-time">{fromTime}</span>
					<span className="founded-tickets__current-date">{dispatchDay}.{dispatchMonth}</span>
				</div>
				<div className="founded-tickets__time-travel">
					<span className="time-travel-hours">{hours}h</span> 
					<span className="time-travel-min">{Number(minutes) > 1 ? minutes + 'm' :''}</span> 
					<span className="time-travel-road-info">on the road</span> 
				</div>
			</div>
			<div className="founded-tickets__city">
				{fromCity}
			</div>
			<div className="founded-tickets__address">
				{ticket.From}
			</div>
		</div>

		<div className="founded-tickets__where">
			<div className="founded-tickets__time">
				<div className="founded-tickets__time-info">
					<span className="founded-tickets__current-time">{whereTime}</span>
					<span className="founded-tickets__current-date">{arriveDay < 10 ? '0'+ arriveDay : arriveDay}.{arriveMonth < 10 ? '0'+arriveMonth : arriveMonth}</span>
				</div>
			</div>
			<div className="founded-tickets__city">
				{whereCity}
			</div>
			<div className="founded-tickets__address">
				{ticket.Where}
			</div>
		</div>
		<hr className="ticket__line"></hr>
		<div className="founded-tickets__buy">
			<div className="founded-tickets__price">
				<span className="ticket-price">{ticket.Price}</span> UAH
			</div>
			<div className="founded-tickets__buy-btn">
				<button onClick={() => buyTicket(fromCity,whereCity,Number(dispatchDay),Number(arriveDay),Number(dispatchMonth),Number(arriveMonth),fromTime,whereTime)} className="buy-ticket-btn">Buy</button>
			</div>
		</div>

	</div> 
	);
}

export default Ticket;
