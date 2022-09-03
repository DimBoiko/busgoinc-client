export default class AdminService {
	
	static URL(){
		return 'https://busgoinc.herokuapp.com'
	}

	static async addTicket(tickets,setTickets){
		try{
			const id = Date.now()
			const res = await fetch(AdminService.URL() + '/ticket',{
				method:'POST',
				headers:{
					'Content-Type':'application/json'
				},
				body:JSON.stringify({
					Day: "00:00;00:00",
					From: "Адрес отправки",
					Price: "0",
					Route: "ГОРОД-ГОРОД",
					Time: "00:00-00:00;00:00-00:00",
					Where: "Адрес прибытия",
					_id: id
					})
			})

			if(res.status === 200){
				setTickets([
					{
						Day: "00:00;00:00",
						From: "Адрес отправки",
						Price: "0",
						Route: "ГОРОД-ГОРОД",
						Time: "00:00-00:00;00:00-00:00",
						Where: "Адрес прибытия",
						_id: id
					}
					,...tickets,
					])
			}

		}catch(e){
			console.log(e);
		}
	}

	static async getData(setTickets,setData,setIsLoading){
		try{
			const res =  await fetch(AdminService.URL() + '/')
			let tickets =  await res.json()
			if(tickets){
				setTickets(tickets.ticketsData)
				setData(tickets.data)
				setIsLoading(false)
			}
		}catch(e){
			setIsLoading(false)
			console.log(e)
		}
	}

	static async saveChanges(changedTicket,tickets,setTickets){
		try{
			const res = await fetch(AdminService.URL() + '/ticket',{
				method:'PUT',
				headers:{
					'Content-Type':'application/json'
				},
				body:JSON.stringify(changedTicket)
			})

			if(res.status === 200){
				const changedTickets = tickets.map((ticket) => {
					if(ticket._id === changedTicket._id){
						return changedTicket
					}
					return ticket
				})
				setTickets(changedTickets)
				alert('Маршрут обновлен/добавлен')
			}

		}catch(e){
			console.log(e);
		}

	}

	static async removeTicket(ticketId,tickets,setTickets){
		try{
			const res = await fetch(AdminService.URL() + '/ticket',{
				method:'DELETE',
				headers:{
					'Content-Type':'application/json'
				},
				body: JSON.stringify({id:ticketId})
			})
			if(res.status === 200){
				const changedTickets = tickets.filter((ticket) => ticket._id !== ticketId)
				setTickets(changedTickets)
			}
	
		}catch(e){
			console.log(e);
		}
	}

	static async saveData(data){
		try{
			await fetch(AdminService.URL() + '/data',{
				method:'PUT',
				headers:{
					'Content-Type':'application/json'
				},
				body: JSON.stringify(data)
			})

		}catch(e){
			alert('Не удалось сохранить данные!')
			console.log(e)
		}
	}
}