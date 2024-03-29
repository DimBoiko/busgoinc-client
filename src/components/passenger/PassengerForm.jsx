import React,{useState,useEffect,useRef} from 'react';
import { useDispatch} from 'react-redux';
import { setInputs } from '../../store/validateSlice';
import './passenger-form.css'

const PassengerForm = ({passenger}) => {
	const dispatch = useDispatch()
	const [user,setUser] = useState({
		id: passenger + 1,
		name:'',
		lastname:'',
	}) 
	
	const nameInput = useRef(null)
	const lastnameInput = useRef(null)
	useEffect(()=>{
		dispatch(setInputs(user))
		if(user.name.length > 0){
			nameInput.current.classList.add('green-show')
			// nameInput.current.style.boxShadow = '0px 0px 1px 1px #32c453'
		}
		if(user.name.length < 1){
			nameInput.current.classList.remove('green-show')
			// nameInput.current.style.boxShadow = '0px 0px 0px 0px #32c453'
		}
		if(user.lastname.length > 0){
			lastnameInput.current.classList.add('green-show')

			// lastnameInput.current.style.boxShadow = '0px 0px 1px 1px #32c453'
		}
		if(user.lastname.length < 1){
			lastnameInput.current.classList.remove('green-show')

			// lastnameInput.current.style.boxShadow = '0px 0px 0px 0px #32c453'
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[user])

	return (
		<form className='payment-modal__form' action="">
			<div className="payment-modal__title">
				Passenger info 
				<span className='payment-modal__pasenger-count'>
					{`(passenger №${passenger + 1})`}
				</span>
			</div>
			<div className="payment-modal__inputs">
				<div className="payment-modal__input">
					<label htmlFor="payment-name">Name</label>
					<input
					ref={nameInput} 
					value={user.name} 
					className='input'
					onChange = {(e) => setUser({...user,name : e.target.value})} 
					placeholder='David' id='payment-name' type="text"/>
				</div>
				<div className="payment-modal__input">
					<label htmlFor="payment-lastname">Last Name</label>
					<input 
					ref={lastnameInput} 
					value={user.lastname} 
					className='input'
					onChange = {(e) => setUser({...user,lastname : e.target.value})}
					placeholder='Brown' id='payment-lastname' type="text"/>
				</div>
			</div>
		</form>

	);
}

export default PassengerForm;
