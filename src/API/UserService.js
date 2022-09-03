export default class UserService {
	static async login(user){
		try{
			const res = await fetch('https://busgoinc.herokuapp.com/user',{
				method:'POST',
				headers:{
					'Content-Type':'application/json'
				},
				body: JSON.stringify(user)
			})
			const data = await res.json()
			if(data.success){
				return true
			}else{
				return false
			}
		}catch(e){
			console.log(e)
			alert('Произошла ошибка ( ')
			return false
		}
	}
}
