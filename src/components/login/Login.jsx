import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../API/UserService';
import './login.css'

const Login = () => {
	const [userData,setUserState] = useState({login:'',password:''})
	const navigation = useNavigate()

	const login = async (e) => {
		e.preventDefault()
		const isAuth = await UserService.login(userData)
		if(isAuth){
			localStorage.setItem('auth','true')
			navigation('/ad')
			return
		}
		alert('Неверный пароль или логин')		
	}

	return (
		<form className='login-modal'>
			<div className="login-modal__body">
				<div className="login-modal__inputs">
					<input value={userData.login} onChange={(e) => setUserState({...userData,login:e.target.value})} type="text" className='login-modal__input' placeholder='Логин'/>
					<input value={userData.password} onChange={(e) => setUserState({...userData,password:e.target.value})} type="password" className='login-modal__input' placeholder='**********'/>
				</div>
				<div className="login-modal__login">
					<button onClick={(e) => login(e)} className='login-modal__btn btn'>Войти</button>
				</div>
			</div>
		</form>
	);
}

export default Login;
