import { createSlice } from "@reduxjs/toolkit";


const validateSlice = createSlice({
	name:'validate',
	initialState:{
		inputs:[],
		isValide:false
	},
	reducers:{
		setInputs(state,action){
			const isSetInput = state.inputs.find((input) => input.id ? input.id === action.payload.id : false)
			if(isSetInput){
				state.inputs = state.inputs.filter((input) => input.id !== action.payload.id)
				state.inputs.push(action.payload)
				return
			}
			state.inputs = [...state.inputs,action.payload]
		},
	}
})

export const {setInputs,inputsHandler,checkValidity} = validateSlice.actions
export default validateSlice.reducer