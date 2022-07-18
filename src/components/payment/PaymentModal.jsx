import React,{useState,useEffect,useRef} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {Transition} from 'react-transition-group'
import { modalToggle } from '../../store/modalSlice';
import {IoIosArrowDown} from 'react-icons/io'
import {AiOutlineCheck} from 'react-icons/ai'
import PassengerForm from '../passenger/PassengerForm';
import './payment-modal.css'
import PaymentInstruction from '../paymentInstruction/PaymentInstruction';

const PaymentModal = () => {
	const dispatch = useDispatch()
	const visible = useSelector(state => state.modal.payment)
	const ticket = useSelector(state => state.tickets.selectedTicket)
	const inputs = useSelector(state => state.validate.inputs)
	const emailInput = useRef(null)
	const phoneInput = useRef(null)
	const arrow = useRef(null)

	const [instructionVisible,setInstructionVisible] = useState(false)
	const [buyerData,setBuyerData] = useState({email:false,phone:false})
	const [infoVisibility,setInfoVisibility] = useState(false)
	const [isMobile,setIsMobile] = useState(false)
	const [passengersValue,setPassengersValue] = useState([])
	const [checkbox,setCheckbox] = useState(false)
	const [isValid,setIsValid] = useState(false)
	const [user,setUser] = useState({
		id:Date.now(),
		email:'',
		phone:''
	}) 


	const inputsValidate = (e) => {
		if(e.target.id === 'payment-email'){
			setUser({...user,email : e.target.value})
			const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			const emailValid = reEmail.test(String(user.email).toLowerCase())
			if(emailValid){
				emailInput.current.style.boxShadow = '0px 0px 1px 1px #32c453'
				const newData = {...buyerData,email:true}
				setBuyerData(newData)
			}else{
				emailInput.current.style.boxShadow = '0px 0px 0px 0px #32c453'
				setBuyerData({...buyerData,email:false})
			}
		}
		if(e.target.id === 'payment-phone'){
			setUser({...user,phone : e.target.value})
			const regPhone = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
			const phoneValid = regPhone.test(String(user.phone).toLowerCase())

			if(phoneValid && String(user.phone).length + 1 > 6){
				phoneInput.current.style.boxShadow = '0px 0px 1px 1px #32c453'
				setBuyerData({...buyerData,phone:true})
				return
			}
			phoneInput.current.style.boxShadow = '0px 0px 0px 0px #32c453'
			setBuyerData({...buyerData,phone:false})
		}
	}

	useEffect(()=>{
		setCheckbox(false)
		if(buyerData.email && !instructionVisible) emailInput.current.style.boxShadow = '0px 0px 1px 1px #32c453'
		if(buyerData.phone && !instructionVisible) phoneInput.current.style.boxShadow = '0px 0px 1px 1px #32c453'

	},[instructionVisible])

	useEffect(()=>{
		const isInputsValid = 
			inputs.filter((input)=> {
			return(
				input.name.length > 2
				&&
				input.lastname.length > 2
				)
			}).length === inputs.length
			&&
			Object.values(buyerData).every((input)=> input)
	
		if(checkbox && isInputsValid){
			setIsValid(true)
		}else{
			setIsValid(false)
		}
	},[user,checkbox,inputs])

	useEffect(()=>{
		setIsMobile(window.innerWidth < 740)
	},[])

	useEffect(() => {
		if(visible){
			setPassengersValue(new Array(Number(ticket.passengers)).fill(1))
		}
	},[visible,ticket.passengers]);

	const closePayment = (e) => {
		const close = !!e.nativeEvent.path.find((el) => el.classList ? el.classList.contains('payment-modal__body') : '' )
		if(!close || e.target.className === 'payment-close'){
			document.body.style.overflow = 'auto'
			dispatch(modalToggle('payment'))
			setInstructionVisible(false)
		}
	}

	const confirmForm = (e) => {
		const isInputsValid = 
			inputs.filter((input)=> {
			return(
				input.name.length > 2
				&&
				input.lastname.length > 2
				)
			}).length === inputs.length
			&&
			Object.values(buyerData).every((input)=> input)
	
		if(checkbox && isInputsValid){
			setInstructionVisible(true)
		}
	}
	
	const showInfo = () => {
		const arrowSvg = arrow.current.children[0]
		setInfoVisibility(!infoVisibility)
		arrowSvg.classList.toggle('rotate-arrow')
	}

	const dataAgreement = (e) => {
		e.stopPropagation()
		setCheckbox(!checkbox)
	}

	return (
		<Transition in={visible} timeout={300}>
		{state => 
		<div onClick={(e)=> closePayment(e)} className={`payment-modal ${state}`}>
			<div className='payment-modal__body'>
				{
					!instructionVisible
					?
					<div className="payment-modal__forms">
					{passengersValue.map((p,index)=>{
						return (
							<PassengerForm key={index} passenger={index}/>
						)
					})}
					<div className="payment-modal__info">
						<div className="payment-modal__info-title">
							Buyer Information
						</div>
						<div className="payment-modal__info-text">
							Please, specify the correct e-mail and phone number, because 
							they are necessary for obtaining a ticket.
						</div>
						<div className="payment-modal__inputs">
							<div className="payment-modal__input">
									<label htmlFor="payment-email">Email:</label>
									<input 
									onChange = {(e)=>{inputsValidate(e)}}
									ref={emailInput}
									value={user.email} 
									placeholder='example@gmail.com' id='payment-email' type="email"/>
								</div>
								<div className="payment-modal__input">
									<label htmlFor="payment-phone">Phone:</label>
									<input 
									ref={phoneInput}
									value={user.phone} 
									onChange = {(e) => inputsValidate(e)}
									placeholder='+380656545677' id='payment-phone' type="tel"/>
								</div>
						</div>
					</div>
				
					<div className="payment-modal__pay">
						<div className="payment-modal__pay-info">
							<span className='payment-modal__pay-text'>To pay</span>
							<div className='payment-modal__pay-price'>{ticket.price},00</div>
						</div>
						<div  className="payment-modal__pay-checkbox">
							<input onClick={(e)=>dataAgreement(e)} type="checkbox" id="data-agreement"/>
							<span className='fake-checkbox'><AiOutlineCheck/></span>
							<label htmlFor="data-agreement">I consent to the processing of personal data</label>
						</div>
						<div className="payment-modal__buy-btn">
							<button disabled={!isValid} onClick={(e) => confirmForm(e)} type='button'>Proceed to checkout</button>
						</div>
					</div>
					</div>
					:
					<PaymentInstruction back={setInstructionVisible} ticket={ticket} buyer={user} inputs={inputs} setAbout={setInfoVisibility}/>
				}
				
				{
					!isMobile
					? 
				<div className="payment-modal__about">
					<div className="payment-modal__about-title">
						Information about trip
					</div> 
					<div className="payment-modal__about-items">
						<div className="payment-modal__about-item from">
							<div className="payment-modal__about-item-date">
								<span className='payment-modal__about-item-time'>{ticket.fromTime}</span>
								<span className='payment-modal__about-item-day'>{ticket.dispatchDay} {ticket.dispatchMonth}</span>
							</div>
							<div className="payment-modal__about-item-location">
								<span className='payment-modal__about-item-city'>{ticket.from}</span>
								<span className='payment-modal__about-item-adress'>
								{ticket.fromAddress}
								</span>
							</div>
						</div>
						<div className="payment-modal__about-line-block">
							<div className="payment-modal__about-line-dote">
								
							</div>
							<div className="payment-modal__about-line">
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
							</div>
							<div className="payment-modal__about-line-dote">
								
								</div>
						</div>
						<div className="payment-modal__about-item where">
							<div className="payment-modal__about-item-date">
								<span className='payment-modal__about-item-time'>{ticket.whereTime}</span>
								<span className='payment-modal__about-item-day'>{ticket.arriveDay} {ticket.arriveMonth}</span>
							</div>
							<div className="payment-modal__about-item-location">
								<span className='payment-modal__about-item-city'>{ticket.where}</span>
								<span className='payment-modal__about-item-adress'>
								{ticket.whereAddress}
								</span>
							</div>
						</div>
					</div>
					
					<div className="payment-modal__about-pay">
						<span className='payment-modal__about-paytext'>To pay 
							<span className="payment-modal__about-passengers">
							{Number(ticket.passengers) > 1 ? `(${ticket.passengers} passengers)` : `(${ticket.passengers} passenger)`} 
							</span>
						 </span>
						<div className='payment-modal__about-price'>{ticket.price},00 </div>
					</div>
				</div>
					:  
				<div className="payment-modal__about">
					<div onClick={()=> showInfo()} ref={arrow} className="payment-modal__about-title">
						Information about trip <IoIosArrowDown />
					</div> 
					{
						infoVisibility 
						?
						<>
						<div className="payment-modal__about-items">
						<div className="payment-modal__about-item from">
							<div className="payment-modal__about-item-date">
								<span className='payment-modal__about-item-time'>{ticket.fromTime}</span>
								<span className='payment-modal__about-item-day'>{ticket.dispatchDay} {ticket.dispatchMonth}</span>
							</div>
							<div className="payment-modal__about-item-location">
								<span className='payment-modal__about-item-city'>{ticket.from}</span>
								<span className='payment-modal__about-item-adress'>
								{ticket.fromAddress}
								</span>
							</div>
						</div>
						<div className="payment-modal__about-line-block">
							<div className="payment-modal__about-line-dote">
								
							</div>
							<div className="payment-modal__about-line">
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
								<span>.</span>
							</div>
							<div className="payment-modal__about-line-dote">
								
								</div>
						</div>
						<div className="payment-modal__about-item where">
							<div className="payment-modal__about-item-date">
								<span className='payment-modal__about-item-time'>{ticket.whereTime}</span>
								<span className='payment-modal__about-item-day'>{ticket.arriveDay} {ticket.arriveMonth}</span>
							</div>
							<div className="payment-modal__about-item-location">
								<span className='payment-modal__about-item-city'>{ticket.where}</span>
								<span className='payment-modal__about-item-adress'>
								{ticket.whereAddress}
								</span>
							</div>
						</div>
						</div>
					
						<div className="payment-modal__about-pay">
						<span className='payment-modal__about-paytext'>To pay 
							<span className="payment-modal__about-passengers">
							({ticket.passengers} passenger)
							</span>
						 </span>
						<div className='payment-modal__about-price'>{ticket.price},00 </div>
						</div>
						</>

						: ''
					}
					
				</div>
				}
				
				<div className="payment-close">&times;</div>
			</div>
		</div>}
		</Transition>
	);
}

export default PaymentModal;
