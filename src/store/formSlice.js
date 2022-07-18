import { createSlice } from "@reduxjs/toolkit";


const formSlice = createSlice({
	name:'formSlice',
	initialState:{
		form:{
			from:'Kyiv',
			where:'Odessa',
			date: 
			`${String(new Date().getFullYear())}-${(new Date().getMonth() + 1) > 9 ? (new Date().getMonth() + 1) : '0'+(new Date().getMonth() + 1)}-${new Date().getDate() > 9	? new Date().getDate() :'0'+new Date().getDate()}`,
			passengers:1
		},
		passengersView:false,
		routes:false,
	},
	reducers:{
		setForm(state,action){
			state.form = action.payload
		},
		formHandler(state,action){
			state.passengersView = action.payload
		},
		setRoutes(state,action){
			state.routes = action.payload
		}
	}
})


export const {setForm,formHandler,setRoutes} = formSlice.actions
export default formSlice.reducer