import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
	name:'modalSlice',
	initialState:{
		support:false,
		faq:false,
		contacts:false,
		payment:false,
	},
	reducers:{
		modalToggle(state,action){
			state[action.payload] = !state[action.payload] 
		}
	}
})


export const {modalToggle} = modalSlice.actions
export default modalSlice.reducer    