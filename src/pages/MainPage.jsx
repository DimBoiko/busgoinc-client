import { useEffect } from "react";
import { useDispatch,} from "react-redux";
import { formHandler,setRoutes } from "../store/formSlice";
import {setTickets} from '../store/ticketsSlice'
import About from "../components/about/About";
import Form from "../components/form/Form";
import Header from "../components/header/header";
import Info from "../components/info/Info";
import Tickets from "../components/tickets/Tickets";
import Title from "../components/title/title";
import img from '../img/doroga.jpg'
import PaymentModal from "../components/payment/PaymentModal";

function MainPage() {
	const dispatch = useDispatch()
	const getTickets = async () => {
		try{
			const res =  await fetch('https://busgoinc.herokuapp.com/')
			let {ticketsData,data} =  await res.json()
			const multiplier = data.multiplier
			if(ticketsData){
				let newPriceTickets = ticketsData.map((ticket) => {
					const index = String(Math.round(Number(ticket.Price)+Number(ticket.Price) / 100 * multiplier)).length - 1
					const price = String(Math.round(Number(ticket.Price)+Number(ticket.Price) / 100 * multiplier)).split('').splice(0,index).join('') + '0'
					return {...ticket, Price : price}
				})
				dispatch(setTickets(newPriceTickets))
			}
			
		}catch(e){
			console.log(e)
		}
	}

	useEffect(() => {
		getTickets()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	const closeModals = (e) => {
		const path = e.nativeEvent.path
		const isPassengers = path.find((el)=> el.classList ? el.classList.contains('passengers') :'')
		const isRoutes = path.find((el)=> el.classList ? el.classList.contains('routes') :'')
		if(!isPassengers){
			dispatch(formHandler())
		}
		if(!isRoutes){
			dispatch(setRoutes(false))
		}
	}
	
  return (
    <div className="App">

		<div onClick={(e)=>closeModals(e)} className="main">
			<img className="main__background" src={img} alt='main-background'></img>
			<div className="main__shadow"></div>
			<div className="main__body">
				<Header/>
				<Title/>
				<Form/>
				<Tickets/>
				<Info/>
				<PaymentModal/>
			</div>
		</div>
		<About/>
    </div>
  );
}

export default MainPage;
