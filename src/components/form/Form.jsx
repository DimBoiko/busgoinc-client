import React,{useState,useRef,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setVisible } from '../../store/ticketsSlice';
import { formHandler,setForm,setRoutes} from '../../store/formSlice';
import Routes from '../routes/Routes';
import './form.css'

const Form = () => {
	const dispatch = useDispatch()

	const {form,passengersView,routes} = useSelector(state => state.form)
	const [formInputs,setFormInputs] = useState(form)
	const [searchValue,setSearchValue] = useState(null)

	const fromInput = useRef(null)
	const whereInput = useRef(null)
	const dateInput = useRef(null)
	const calendarSvg = useRef(null)
	const passengerBlock = useRef(null)
	const passengersModal = useRef(null)

	const passengersHandler = (e) => {
		if(formInputs.passengers < 60){
			if(e.target.value === '-'){
				if(formInputs.passengers - 1 !== 0){
					setFormInputs({...formInputs, passengers: formInputs.passengers - 1})
				}
			}
			if(e.target.value === '+'){
				setFormInputs({...formInputs,passengers: formInputs.passengers + 1})
			}
			if(Number(e.target.value) || e.target.value === ''){
				if(e.target.value < 60){
					setFormInputs({...formInputs, passengers : e.target.value})
				}
			}
		}
		
	} 

	const inputsHandler = (e) => {
		if(e.target.id === 'from'){
			setFormInputs({...formInputs,from : e.target.value})
			setSearchValue('from')
			dispatch(setRoutes(true))
		}
		if(e.target.id === 'where'){
			setFormInputs({...formInputs,where : e.target.value})
			setSearchValue('where')
			dispatch(setRoutes(true))
		}
	}

	const closeRoutes = (e) => {
		if(!e.target.classList.contains('form__input')){
			dispatch(setRoutes(false))
		}
	}

	const togglePassengers = (e) => {
		if(e.target.className === 'form__item-passengers' || e.target.className === 'form__item-passenger-btn remove' || e.target.className === 'form__item-passenger-btn add' || e.target.className === 'form__item-passengers-value input'){
			return
		}
		dispatch(formHandler(!passengersView))
	}

	const reverseCities = (e) => {
		e.preventDefault()
		setFormInputs({...formInputs,from:formInputs.where,where:formInputs.from})
	}

	const findTickets = (e) => {
		e.preventDefault()
		const isValid = Object.values(formInputs).every((value)=> !!value)
		if(!isValid){
			const from = Object.values(formInputs)[0]
			const where = Object.values(formInputs)[1]
			const date = Object.values(formInputs)[2]

			if(!from){
				fromInput.current.classList.add('date-animation')
				setTimeout(()=>fromInput.current.classList.remove('date-animation'),2000)
			}
			if(!where){
				whereInput.current.classList.add('date-animation')
				setTimeout(()=>whereInput.current.classList.remove('date-animation'),2000)
			}
			if(!date){
				dateInput.current.classList.add('date-animation')
				calendarSvg.current.style.color = 'red'
				setTimeout(()=>{dateInput.current.classList.remove('date-animation') 
				calendarSvg.current.style.color = 'black'},2000)
			}
			
			return
		}
		dispatch(setForm(formInputs))
		dispatch(setVisible(true))
	}

	useEffect(()=>{
		setFormInputs(form)
	},[form])

	useEffect(()=>{
		if(passengersView){
			passengersModal.current.classList.add('show-passengers')
		}else{
			if(passengersModal.current){
				passengersModal.current.classList.remove('show-passengers')
			}
		}
	},[passengersView])


	return (
	 <form 
	 id='close-routes'
	 onClick={(e)=>closeRoutes(e)} className="tickets form" action="">
      <div className="form__items">
        <div className="form__item from">
          <div className="form__item-input">
            <label htmlFor="from" className="form__item-subtitle">From</label>
            <input
				  ref={fromInput}
				  onChange={(e)=>inputsHandler(e)}
              autoComplete="off"
              maxLength={30}
              className="form__input"
              id="from"
              type="text"
              value={formInputs.from}
            />
          </div>
			 <svg
			 onClick={reverseCities}
				 className="arrows-svg"
				 width="28"
				 height="28"
				 viewBox="0 0 24 24"
				 fill="none"
				 xmlns="http://www.w3.org/2000/svg"
			  >
				 <path
					d="M18.3701 7.99993L13.8701 10.598V8.99993H6.88989V12.9999H4.88989V6.99993H13.8701V5.40186L18.3701 7.99993Z"
					fill="currentColor"
				 />
				 <path
					d="M10.1299 16.9999H19.1101V10.9999H17.1101V14.9999H10.1299V13.4019L5.62988 15.9999L10.1299 18.598V16.9999Z"
					fill="currentColor"
				 />
			  </svg>
          
			 {searchValue === 'from' 
			 ?
			 <Routes searchValue={searchValue} formData={formInputs} visible={routes}/>
			 : ''
			 }
        </div>

        <div className="form__item where">
          <div  className="form__item-input">
            <label htmlFor="where" className="form__item-subtitle">Where</label>
            <input
				  ref={whereInput}
			     onChange={(e)=>inputsHandler(e)}
              autoComplete="off"
              maxLength={30}
              className="form__input"
              id="where"
              type="text"
              value={formInputs.where}
            />
          </div>
			 {searchValue === 'where' 
			 ?
			 <Routes searchValue={searchValue} formData={formInputs} visible={routes}/>
			 : ''
			 }
        </div>

        <div className="form__item date">
          <div className="form__item-input">
            <label htmlFor="date" className="form__item-subtitle">Date</label>
            <input 
				 ref={dateInput}
				onChange={(e)=>setFormInputs({...formInputs,date : e.target.value})}
				value={formInputs.date} 
				min={formInputs.date} 
				className="form__input" id="date" type="date" />
            <svg
				ref={calendarSvg}
              className="calendar-svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13Z"
                fill="currentColor"
              />
              <path
                d="M8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16C9 16.5523 8.55228 17 8 17Z"
                fill="currentColor"
              />
              <path
                d="M11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16Z"
                fill="currentColor"
              />
              <path
                d="M16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17Z"
                fill="currentColor"
              />
              <path
                d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
                fill="currentColor"
              />
              <path
                d="M16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13Z"
                fill="currentColor"
              />
              <path
                d="M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H16C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7H8Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule ="evenodd"
                d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM18 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <div onClick={(e) => {togglePassengers(e)}} ref={passengerBlock} className="form__item passengers">
          <div tabIndex="6" className="form__item-input">
            <span className="form__item-subtitle">Passengers</span>
            <span className="form__item-passengers-value">{formInputs.passengers}</span>
            <ul ref={passengersModal} className="form__item-passengers">
              <div className="form__item-passengers-value-block">
                <input
                  type="button"
                  className="form__item-passenger-btn remove"
                  value="-"
						onClick={(e)=>passengersHandler(e)}
                />
                <input
                  type="number"
                  value={formInputs.passengers}
                  className="form__item-passengers-value input"
						onChange={(e)=>passengersHandler(e)}
                />
                <input
                  type="button"
                  className="form__item-passenger-btn add"
                  value="+"
						onClick={(e)=>passengersHandler(e)}
                />
              </div>
            </ul>
          </div>
          <svg
            className="user-svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule ="evenodd"
              d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
              fill="currentColor"
            />
            <path
              d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className="form__btn">
        <button 
		  onClick={(e)=> findTickets(e)}	 
		  className="form__btn-sub" type="button">Find ticket</button>
      </div>
    </form>

	);
}

export default Form;
