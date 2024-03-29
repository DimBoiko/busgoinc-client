import React,{useState,useRef} from 'react';
import { useDispatch } from 'react-redux'
import { modalToggle } from '../../store/modalSlice';
import { Transition } from 'react-transition-group';
import SuccessContacts from '../success-contacts/SuccessContacts';
import './contacts.css'

const Contacts = ({visible}) => {
	const [success,setSuccess] = useState(false)
	const [name,setName] = useState('')
	const [tel,setTel] = useState('')
	const [desc,setDesc] = useState('')
	const dispatch = useDispatch()
	const contactsBody = useRef(null)
	
	const sentContactsData = async (e) => {
		try{
			e.preventDefault()
			const data = {name,tel,desc}
			const res = await fetch('https://busgoincapp.onrender.com/contacts',{
				method:'POST',
				headers:{
					'Content-Type':'application/json'
				},
				body:JSON.stringify(data)
			})
			if(res){
				setSuccess(true)
			}
		}catch(e){
			console.log(e);
		}
	}

	const closeContacts = (e) => {
		e.stopPropagation()
		e.preventDefault()
		console.log(e.target);
		if(e.target.className === 'close__contacts'){
			setSuccess(false)
			dispatch(modalToggle('contacts'))
			document.body.style.overflow = 'auto'			
		}
		if(e.target.className === 'contacts-success__close'){
			setSuccess(false)
			dispatch(modalToggle('contacts'))
			document.body.style.overflow = 'auto'			
		}
		if(e.target.classList.contains('contacts')){
			setSuccess(false)
			dispatch(modalToggle('contacts'))
			document.body.style.overflow = 'auto'	
		}

	}

	return (
		<Transition in={visible} timeout={300}>
		{state => <div onClick={(e)=>closeContacts(e)} className={`contacts ${state}`}>
			{success
			?
				<SuccessContacts text={'Your question has been successfully submitted and will be processed as soon as possible.'}/>
			:
			<form onSubmit={(e) => sentContactsData(e)} ref={contactsBody} className={`contacts__body ${state}`}>
				<div className="contacts__header">
					<div className="contacts__title">
						Leave a request and our specialists will be happy to answer your questions
					</div>
					<button onClick={(e)=>closeContacts(e)} className='close__contacts'>&times;</button>
				</div>
				<hr className='contacts__line'/>
				<div className="contacts__inputs">
					<div className="contacts__input">
						<span className='contacts__input-title'>NAME *</span>
						<input type="text" placeholder='David' className='contacts__inp name' value={name} onChange={(e)=>setName(e.target.value)}/>
					</div>
					<div className="contacts__input">
						<span className='contacts__input-title'>PHONE/MESSANGER NUMBER *</span>
						<input type="tel" placeholder='+380505685793' className='contacts__inp tel' value={tel} onChange={(e)=>setTel(e.target.value)} />
					</div>
					<div className="contacts__input">
						<span className='contacts__input-title'>Description *</span>
						<input type="text" placeholder='How to...' className='contacts__inp tel' value={desc} onChange={(e)=>setDesc(e.target.value)} />
					</div>
				</div>
				<button onClick={(e)=>sentContactsData(e)}  className='contacts__sbm-btn' type="submit">Submit</button>
			</form>
			}
			
		</div>}
		</Transition>
	);
}

export default Contacts;
