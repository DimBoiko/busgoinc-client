import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { setForm } from '../../store/formSlice';
import './routes.css'
import '../form/form.css'

const Routes = ({searchValue,formData,visible}) => {
	const dispatch = useDispatch()
	let routes = useSelector(state => state.tickets.tickets).map((ticket)=>ticket.Route)
	if(searchValue === 'from'){
		if(formData.from){
			routes = routes.filter((route)=> {
				if(route.split('-')[0] === 'IVANO'){
					(route.split('-')[0] + '-' + route.split('-')[1]).includes(formData.from.toUpperCase())
				}
				return route.split('-')[0].includes(formData.from.toUpperCase())
			}).slice(0,9)
		}else{
			routes = []
		}
	}
	if(searchValue === 'where'){
		if(formData.from){
			routes = routes.filter((route)=>
			route.includes(formData.from.toUpperCase()) 
			&&
			route.includes(formData.where.toUpperCase())).slice(0,9)
		}else if(formData.where){
			routes = routes.filter((route)=> route.includes(formData.where.toUpperCase())).slice(0,9)
		}else{
			routes = []
		}
	}

	const selectRoute = (e) => {
		const selectedRoute = {
			date:formData.date,
			passengers:formData.passengers,
		}
		const routes = e.nativeEvent.path.splice(0,2).filter((route)=> route.classList)
		const selectedCities = routes.find((rt)=> rt.className === 'routes__item')
		const firstLength = selectedCities.childNodes[0].textContent.length
		const secondLength = selectedCities.childNodes[1].textContent.length
		selectedRoute.from = 
		selectedCities.childNodes[0].textContent[0].toUpperCase()
		 +
		selectedCities.childNodes[0].textContent.slice(1,firstLength - 1).toLowerCase()

		selectedRoute.where = 
		selectedCities.childNodes[1].textContent[0].toUpperCase()
		+
		selectedCities.childNodes[1].textContent.slice(1,secondLength).toLowerCase()
		dispatch(setForm(selectedRoute))
	}
	return (
		visible
		?
			<div className={`routes`}>
				<div onClick={(e)=> selectRoute(e)} className={`routes__items`}>
					 {routes.map((route,index)=>{
						let  [firstCity,secondCity] = []
						 if(route.split('-').length > 2 ){
							 firstCity = route.split('-')[0] 
							 secondCity = route.split('-')[1] + '-' + route.split('-')[2] 

							 if(route.split('-')[0] === 'IVANO'){
								firstCity = route.split('-')[0] + '-' + route.split('-')[1]
								secondCity = route.split('-')[2]
							 }

						 }else{
							 [firstCity,secondCity] = route.split('-')
						 }
						 
						 return (
							 <button key={index} className="routes__item">
								 <span className={`first__city ${searchValue === 'from' ? 'selected-city' :''}`} >{firstCity},</span>
								 <span className={`second__city ${searchValue === 'where' ? 'selected-city' :''}`}>{secondCity}</span>
							 </button>
						 )
					 })}
				</div>
			</div>
		: ''
	);
}

export default Routes;
