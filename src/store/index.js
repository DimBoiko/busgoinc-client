import {configureStore} from '@reduxjs/toolkit'
import formSlice from './formSlice'
import ticketsSlice from './ticketsSlice'
import modalSlice from './modalSlice'
import validateSlice from './validateSlice'

const store  = configureStore({
	reducer:{
		form:formSlice,
		tickets:ticketsSlice,
		modal:modalSlice,
		validate:validateSlice
	}
})


export default store