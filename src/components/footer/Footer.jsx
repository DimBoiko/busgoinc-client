import React from 'react';
import { useState } from 'react';
import Policy from '../policy/Policy';
import './footer.css'

const policy = [
	{title:'ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ ЗАХИСТ ІНФОРМАЦІЇ ',text:`
Busgoinc несе відповідальність за обробку отриманих персональних даних відповідно до вимог нормативно-правових документів і покладає відповідні аналогічні зобов'язання на будь-яких контрагентів, з якими він взаємодіє в процесі надання послуг або в процесі обробки отриманої інформації. 

Busgoinc дотримується основних принципів захисту конфіденційної інформації щодо будь-якої подальшої передачі даних як усередині країни, так і за кордоном, у тому числі щодо подальшої передачі зобов’язань. 

Busgoinc використовує протокол шифрування SSL 3.0 для забезпечення безпечної передачі персональних даних. Усі особисті дані зашифровані та безпечно передаються через Інтернет.`,
}
,
{title:'ПЕРЕДАЧА ДАНИХ ПЕРЕВІЗНИКУ/ПОСТАЧАЛЬНИКУ  ',text:`
У своїй діяльності сервіс Busgoinc співпрацює безпосередньо з перевізниками або постачальниками квитків. 

Для надання якісних транспортних послуг Ваші персональні дані обов’язково передаються безпосередньо Перевізнику/Постачальнику на рейс, на який Ви придбали певний квиток. 

Основною метою передачі персональних даних Перевізнику/Постачальнику є укладення договору перевезення.`
}
,
{title:'ОНОВЛЕННЯ ПОЛІТИКИ КОНФІДЕНЦІЙНОСТІ  ',text:`
Busgoinc залишає за собою право вносити зміни в Політику конфіденційності. Якщо Busgoinc суттєво змінить Політику конфіденційності, це буде зазначено тут.`
}
]	

const conditions = [
	{
		title:'ПРАВИЛА ВИКОРИСТАННЯ САЙТУ busgoinc.com.ua',
		text: `
		Дані правила є невід'ємною частиною Договору публічної оферти та поширюються на всіх відвідувачів та користувачів сайту busgoinc.com.ua як справжніх, так і майбутніх. 

Користуючись Сайтом або матеріалами сайту, Користувач висловлює свою безумовну згоду з цими Правилами. 

Примітка щодо використання цього сайту дітьми. Цей сайт не призначений для дітей, тому просимо, щоб діти не передавали та/або залишали особисту інформацію на цьому сайті.
		`
	},

	{
		title:'МЕТА ПРАВИЛ',
		text: `
		Правила створені для визначення меж, дотримання яких необхідне для використання Сайту. 
		Правила сформульовані з урахуванням чинного законодавства України.
		`
	},

	{
		title:'ЗАГАЛЬНІ ПОЛОЖЕННЯ',
		text: `
		Busgoinc визначає правила поведінки на Сайті та залишає за собою право вимагати їх виконання від Користувачів. 
		Незнання правил не звільняє від необхідності виконання.
		`
	},

	{
		title:'ТОЧНІСТЬ ІНФОРМАЦІЇ.',
		text: `
		Busgoinc має намір докладати всіх зусиль, щоб забезпечити точність та актуальність даних, отриманих від відповідного Постачальника, 
		що містяться на цьому сайті. У представленій інформації на даному сайті можуть зустрітися технічні неточності або друкарські помилки. Busgoinc не бере на себе жодної
		 відповідальності за точність інформації, наданої на сайті, і весь ризик використання такої інформації покладається на користувача.
		`
	},

	{
		title:'ЗМІНА УМОВ.',
		text: `
		Busgoinc час від часу може вносити зміни до Правил користування Сайтом. Переглядаючи цей Сайт, Користувач зобов'язаний дотримуватись цих Правил, тому Користувач зобов'язаний перевіряти їх зміст при кожному новому відвідуванні сайту. 
		Busgoinc залишає за собою право змінювати дані про послуги та продукцію в будь-який час без попереднього повідомлення користувача.
		`
	},
]

const returnData = [
	{
		title:'Правила повернення: ',
		text: ` 
		1. Обов'язково обирати коректну причину повернення; у разі вказівки некоректної причини у поверненні може бути відмовлено. 
		`
	},
	{
		title:'',
		text: `
		2. При підтвердженні повернення квиток буде анульовано автоматично; скасувати повернення неможливо.  
		`
	},
	{
		title:'',
		text: `
		3. Сума до повернення розраховується автоматично за умовами Перевізника, що діють на момент оформлення повернення. 
		`
	},
	{
		title:'',
		text: `
		4. Повернення проводиться з цього приводу покупця. Повернення коштів на іншу картку (рахунок) або в інший спосіб неможливе.  
		`
	},
	{
		title:'',
		text: `
		5. Гроші надійдуть протягом 1-10 діб з моменту позитивного розгляду заявки на повернення. 
		`
	},
	{
		title:'',
		text: `
		Вашу заявку буде розглянуто протягом 1-10 днів Після підтвердження повернення кошти будуть автоматично повернуті на карту, з якою відбувалася оплата квитків.
		`
	},
]

const Footer = () => {
	const [isOpen,setIsOpen] = useState(false)
	const [info,setInfo] = useState([])

	const modalHandler = (e) => {
		setIsOpen(false)
		document.body.style.overflow = 'visible'
	}

	const modalOpen = (e) => {
		if(e.target.classList.contains('policy-btn')){
			setInfo(policy)
		}else if(e.target.classList.contains('conditions-btn')){
			setInfo(conditions)
		}else if(e.target.classList.contains('return-btn')){
			setInfo(returnData)
		}
		document.body.style.overflow = 'hidden'
		setIsOpen(true)
	}


	return (
		<footer className='footer'>
			<div className="container">
				<div className="footer__contacts">
					<div className="footer__street">
						Shevchenko st., 162a, Chernigov
					</div>
					<div className="footer__email">
						BUSGO.INC@GMAIL.COM
					</div>
					<button onClick={(e) => modalOpen(e)} className="footer__rights-btn policy-btn">
					Політика конфіденційності
					</button>
					<button onClick={(e) => modalOpen(e)} className="footer__rights-btn return-btn">
					Політика повернення
					</button>
					<button onClick={(e) => modalOpen(e)} className="footer__rights-btn conditions-btn">
					Умови Використання
					</button>
				</div>
				<div className="footer__rights">
					© 2022, BusGoInc. Online ticketing service. All rights reserved
				</div>
			</div>
			{
				isOpen && <Policy modalHandler={modalHandler} policy={info}/>
			}
		</footer>
	);
}

export default Footer;
