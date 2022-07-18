import { useEffect } from "react";
import { useDispatch,} from "react-redux";
import { formHandler,setRoutes } from "./store/formSlice";
import {setTickets} from './store/ticketsSlice'
import About from "./components/about/About";
import Form from "./components/form/Form";
import Header from "./components/header/header";
import Info from "./components/info/Info";
import Tickets from "./components/tickets/Tickets";
import Title from "./components/title/title";
import img from './img/doroga.jpg'
import PaymentModal from "./components/payment/PaymentModal";

function App() {
	const dispatch = useDispatch()
	const getTickets = async () => {
		try{
			const res =  await fetch('https://busgoincapp.herokuapp.com/')
			const tickets =  await res.json()
			if(tickets){
				dispatch(setTickets(tickets))
			}
		}catch(e){
			console.log(e)
		}
	}

	useEffect(() => {
		getTickets()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[dispatch]);

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

export default App;
