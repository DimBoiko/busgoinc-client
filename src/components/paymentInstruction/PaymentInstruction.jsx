import React,{useState,useRef} from 'react';
import paypal from '../../img/paypal.png'
import visa from '../../img/visa.png'
import mastercard from '../../img/mastercard.png'
import {AiOutlineArrowLeft,AiFillWarning} from 'react-icons/ai'
import {FiUpload} from 'react-icons/fi'
import './payment-instruction.css'
import Success from '../success/Success';



const PaymentInstruction = ({back,ticket,buyer,inputs,setAbout}) => {
	const purchase = {ticketInfo:ticket,buyerInfo:buyer,passengersInfo:inputs}
	const [success,setSuccess] = useState({state:false,text:''})
	const [fileName,setFileName] = useState('Upload check here')
	const [file,setFile] = useState(false)
	const uploadArea = useRef(null)

	const onFileUpload = (e) => {
		const file = e.target.files[0]
		setFileName(file.name)
		setFile(file)
		uploadArea.current.style.borderColor = 'green'
	}

	const createPurchase = async (isBuyFromTicket) => {
		try{
			const data =  new FormData()
			data.append('data',JSON.stringify(purchase))
			if(file){
				data.append('screen',file)
			}
			// const res = await fetch('https://busgoincapp.onrender.com/purchase',{
			// 	method:'POST',
			// 	body:data
			// })

			const res = await fetch('http://localhost:5000/purchase',{
				method:'POST',
				body:data
			})

			if(res){
				if(isBuyFromTicket){
					setSuccess({state:true,text:`Your order №${buyer.id} is being processed. Our manager will contact you as soon as possible.`})
				}else{
					setSuccess({state:true,text:`Your order №${buyer.id} is being processed. You will receive your ${ticket.passengers > 1 ? 'tickets' : 'ticket'} in the mail ${buyer.email} within 1-3 hours.`})
				}
				setAbout(true)
			}
		}catch(e){
			console.log(e)
		}
		
	}
	return (
		<div className="payment-instruction">
			<button onClick={() => back(false)} className="payment-backarrow">
				<AiOutlineArrowLeft />
			</button>
			{
				success.state
				?
				<Success text={success.text}/>
				:
				<div className="payment-instruction__body">
				<div className="payment-instruction__paypal">
					<img src={paypal} className="payment-logo" alt="paypal" />	
					<div className="payment-instruction__paypal-text">
						Make a payment in the amount of <b>{ticket.price} UAH</b> using paypal 
						to the <b>gobusincua@gmail.com</b> account, then upload a screen or photo confirming the payment.
						<br/>
						If you have any technical problems with payment, our manager will issue you another 
						account details on Paypal within 5 minutes
					</div>

				</div>
				<div className="payment-instruction__cards">
					<div className="payment-instruction__cards-img">
						<img className="payment-logo-small " src={mastercard} alt="mastercard" />
						<img className="payment-logo-small visa" src={visa} alt="visa" />
					</div>
					<div className="payment-instruction__cards-text">
						Make a payment in the amount of <b>{ticket.price} UAH</b> using mastercard/visa, due to the war on the territory of Ukraine, to pay for {ticket.passengers > 1 ? 'tickets' : 'a ticket'} by card, contact manager.
					</div>
				</div>
				<div className="payment-instruction__crypto">
					<div className="payment-instruction__crypto-usdt">
						<b>USDT TRC20</b>
					</div>
					<div className="payment-instruction__crypto-value">
						TLRWzeXNZVHjJRJYCQGHB9SPyavWNB3Qp1
					</div>
				</div>
				<div className="payment-instruction__info">
				<div className="payment-instruction__important">
					<AiFillWarning/>
				</div>
				<span>	
					After payment, upload check and click <b>Get {ticket.passengers > 1 ? 'tickets' : 'ticket'}</b>. Within 1-3
					 hours you will receive a {ticket.passengers > 1 ? 'tickets' : 'ticket'} by mail.
				</span>	
				</div>
				<p className='payment-ins truction__contacts'>
					<br/>
					If you have any problems or questions, please contact our manager in <a href="https://t.me/busgoinc" rel="noreferrer" target='_blank'><b>telegram </b></a> 
					or <a rel="noreferrer" target='_blank' href="https://wa.me/380916257316"><b>whatsapp</b></a> .
				</p>
				<div  className="payment-instruction__file">
					<div ref={uploadArea} className="payment-instruction__drop-area">
						<FiUpload className='payment-instruction__drop-upload-img'/>
						<input onChange={(e) => onFileUpload(e) } className='payment-instruction__file-input' type="file" alt='screen of payment' />
						<span className='payment-instruction__file-here'>{fileName}</span>
					</div>
				</div>
				<div className="payment-instruction__buttons">
					<button onClick={() => createPurchase(false)} disabled={!file} className='payment-instruction__get-ticket'>
						{ticket.passengers > 1 ? 'Get Tickets' : 'Get Ticket'}
					</button>
					<button onClick={() => createPurchase(true)} className='payment-instruction__get-ticket'>
						Buy from a manager
					</button>
				</div>
			</div>
			}
		</div>
	);
}

export default PaymentInstruction;
