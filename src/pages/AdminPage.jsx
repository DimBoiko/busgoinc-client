import React from 'react';
import Admin from '../components/admin/Admin';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
	const navigation = useNavigate()

	useEffect(() => {
		const isAuth = localStorage.getItem("auth")
		if(!isAuth){
			navigation('/login')
		}
	}, [navigation]);

	return (
		<>
			<Admin/>	
		</>
	);
}

export default AdminPage;
