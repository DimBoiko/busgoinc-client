import { createSlice } from "@reduxjs/toolkit";

const ticketsSlice =  createSlice({
	name:'tickets',
	initialState:{
		tickets:[
			{id:1,Route: 'KYIV-ODESSA', Time: '19:10-01:45;11:00-17:00', Price: 290, From: 'Bus station "Central", Demeevskaya square: The House 3a', Where: `Bus station "Privokzalnaya', Starosennaya\r\nstreet; house 1B`,Day:0,},
			{id:1,Route: 'KYIV-ODESSA', Time: '19:10-01:45;11:00-17:00', Price: 290, From: 'Bus station "Central", Demeevskaya square: The House 3a', Where: `Bus station "Privokzalnaya', Starosennaya\r\nstreet; house 1B`,Day:0,},
			{id:1,Route: 'KYIV-KHARKIV', Time: '23:35 - 07:50;10:05 - 18:00', Price: 300, From: 'Bus station "Central", Demeevskaya square: The House 3a', Where: 'Bus station "Kharkov-1", Yuri Gagarin\r\nAvenue: house 22',Day:0,},
			{id:1,Route: 'KYIV-LVIV', Time: '19:10-01:45;11:00-17:00', Price: 400, From: 'Bus station "Central", Demeevskaya square: The House 3a', Where: 'Railway station "Central", Palace Square:\r\nHouse number 1',Day:0,},
			{id:1,Route: 'KYIV-DNEPR', Time: '19:10-01:45;11:00-17:00', Price: 320, From: 'Bus station "Central", Demeevskaya square: The House 3a', Where: 'Bus station "Central", Kurchatov street:\r\nHouse 10',Day:0,},
			{id:1,Route: 'KYIV-UZHGOROD', Time: '08:00 - 20:00;20:15 - 08:40', Price: 900, From: 'Bus station "Central", Demeevskaya square: The House 3a', Where: 'Bus station "Central",Staintsionnaya\r\nstreet: House 2',Day:0,},
			{id:1,Route: 'KYIV-CHERNIGOV', Time: '07:00 - 08:55;22:00 - 23:55', Price: 95, From: 'Bus station "Central", Demeevskaya square: The House 3a', Where: 'Stop "Shopping center Megacenter",\nProspect Mira: house 49',Day:0,},
			{id:1,Route: "KYIV-ZAPOROZH'E", Time: '22:35 - 08:50;23:00 - 09:15', Price: 390, From: 'Bus station "Central", Demeevskaya square: The House 3a', Where: '"Zaporizhzhia, AS "aporizhzhia",Soborny ave., 20',Day:0,},
			{id:1,Route: 'KYIV-IVANO FRANKOVSK', Time: '08:00 - 19:35;21:30 - 08:25', Price: 495, From: 'Bus station "Central", Demeevskaya square: The House 3a', Where: 'Bus station "Ivano-Frankivsk-2",Gorbachevsky street: house 14A',Day:0,},
			{id:1,Route: 'KYIV-WARSAW', Time: '14:00 - 05:10;23:00 - 18:30', Price: 1800, From: 'Bus station "Central", Demeevskaya square: The House 3a', Where: 'Bus station "Vskhodni", Lyubelska street:\r\nhouse 22',Day:0,},
			{id:1,Route: 'KYIV-LODZ', Time: '13:10 - 09:10;23:00 - 21:00', Price: 1700, From: 'Bus station "Central", Demeevskaya square: The House 3a', Where: 'Bus station "Lodz Fabrychnaya",\r\nBronislaw Salacinski square: House\r\nnumber 1',Day:0,},
			{id:1,Route: 'KYIV-KRAKOW', Time: '07:50 - 23:00; 23:00 - 16:10', Price: 1500, From: 'Bus station "Central", Demeevskaya square: The House 3a', Where: 'Bus station "Chizhiny", Medvetskogo\r\nstreet; House 15',Day:0,},
			{id:1,Route: 'KYIV-WROCLAW', Time: '01:00 - 20:30;08:00 - 03:45', Price: 1700, From: 'Bus station "Central", Demeevskaya square: The House 3a', Where: 'Bus station Wroclaw. Sucha street; House\r\nnumber 1',Day:0,},
			{id:1,Route: 'KYIV-LUBLIN', Time: '01:00 - 15:00;20:00 - 07:15', Price: 1300, From: 'Bus station "Central", Demeevskaya square: The House 3a', Where: 'Lublin Bus Station, Millennium Alley:\r\nHouse 6',Day:0,},
			{id:1,Route: 'KYIV-KATOWICE', Time: '01:00 - 17:30;10:00 - 01:20', Price: 1600, From: 'Bus station "Central", Demeevskaya square: The House 3a', Where: 'International Bus Station Katowice,\r\nSandowa Street: House 5',Day:0,},
			{id:1,Route: 'DONETSK-WARSAW', Time: '07:20 - 07:00;21:45 - 22:15', Price: 3700, From: 'Bus station "Uzhniy"', Where: 'Bus station "Central", Kurchatov street; House 10,\r\nSandowa Street: House 5',Day:1,},
			],
		selectedTicket:{}
		,
		ticketsVisible:false
	},
	reducers:{
		setVisible(state,action){
			state.ticketsVisible = action.payload
		},
		setTickets(state,action){
			state.tickets = action.payload
		},
		setSelectedTicket(state,action){
			state.selectedTicket = action.payload
		}
	}
})

export const {setVisible,setTickets,setSelectedTicket} = ticketsSlice.actions 
export default ticketsSlice.reducer
