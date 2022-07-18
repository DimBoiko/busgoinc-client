import React from 'react';
import {FaTelegramPlane} from 'react-icons/fa'
import {BsGlobe} from 'react-icons/bs'
import { useDispatch,useSelector } from 'react-redux';
import { modalToggle } from '../../store/modalSlice';
import './header.css'
import Support from '../support/Support';
import Faq from '../faq/Faq';
import Contacts from '../contacts/Contacts';

const Header = () => {
	const modalState = useSelector(state => state.modal)
	const dispatch = useDispatch()
	if(modalState.faq || modalState.contacts){
		document.body.style.overflow = 'hidden'
	}else{
		document.body.style.overflowX = 'hidden'
	}

	return (
		
		<header className='header'>
			<div className="container">
				<div className="header__row">
					<h1 className="header__logo">
						<a href="#">BusGoInc</a>
					</h1>
					<div className="header__info">
						<div className="header__support">
							<button onClick={()=>dispatch(modalToggle('support'))} className='header__btn' type='button'>🎧 Support</button>
							{modalState.support ? <Support visible={!!modalState.support}/> : <Support visible={!!modalState.support} />}
						</div>
						<div className="header__faq">
							<button className='header__btn' onClick={()=>dispatch(modalToggle('faq'))} type='button'>F.A.Q <div className='gl-icon'><BsGlobe/></div> </button>
							{modalState.faq ? <Faq visible={!!modalState.faq}/> : <Faq visible={!!modalState.faq}/>}
						</div>
						<div className="header__contact">
							<button className='header__btn' onClick={()=>dispatch(modalToggle('contacts'))} type='button'><FaTelegramPlane/> Contaсt me </button>
							{modalState.contacts ? <Contacts visible={!!modalState.contacts}/> : <Contacts visible={!!modalState.contacts}/>}
						</div>
				</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
