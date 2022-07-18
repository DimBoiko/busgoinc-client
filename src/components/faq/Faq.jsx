import React,{useRef} from 'react';
import { useDispatch } from 'react-redux'
import { modalToggle } from '../../store/modalSlice';
import { Transition } from 'react-transition-group';
import cat from '../../img/cat.png'
import backpack from '../../img/backpack.png'
import info from '../../img/info.png'
import './faq.css'

const Faq = ({visible}) => {
	const dispatch = useDispatch()
	const faqBody = useRef(null)

	const closeFaq = (e) => {
		if(!e.nativeEvent.path.includes(faqBody.current) || e.target.className === 'faq__close'){
			dispatch(modalToggle('faq'))
			document.body.style.overflow = 'auto'
		}
	}

	return (
		<Transition in={visible} timeout={300}>
		{state => <div onClick={(e)=> closeFaq(e)} className={`faq ${state}`}>
			<div ref={faqBody} className={`faq__body ${state}`}>
				<div className="faq__header">
					<span className='faq__close'>&times;</span>
				</div>
				<hr className='faq__line'/>
				<div className="faq__title">
					Frequently Asked Questions
				</div>
				<div className="faq__row">
					<div className="faq__colum">
						<div className="faq__colum-title">
							<svg className="med-svg" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{boxShadow:'rgba(0, 0, 0, 0.25)',borderRadius:'50%'}}><rect x="0" y="0" width="128" height="128" style={{fill: "rgb(205, 231, 202)"}} rx="64" ry="64"></rect><g transform="scale(1) translate(0, 0)" transform-origin="0 0"> <g><path className="st0" d="M109.107,36.771H88.443v-7.238c0-5.104-4.153-9.256-9.257-9.256H49.878c-5.104,0-9.257,4.153-9.257,9.256 v7.238H18.735c-4.856,0-8.807,3.95-8.807,8.806v53.34c0,4.856,3.95,8.807,8.807,8.807h90.372c4.854,0,8.805-3.95,8.805-8.807 v-53.34C117.912,40.721,113.962,36.771,109.107,36.771z M63.921,52.268c11.017,0,19.979,8.963,19.979,19.979 c0,11.016-8.963,19.979-19.979,19.979s-19.979-8.963-19.979-19.979C43.942,61.231,52.904,52.268,63.921,52.268z M46.921,29.532 c0-1.63,1.326-2.956,2.957-2.956h29.309c1.63,0,2.956,1.326,2.956,2.956v7.238H46.921V29.532z"></path><path className="st0" d="M52.561,75.847h7.76v7.759c0,1.988,1.612,3.601,3.601,3.601s3.6-1.612,3.6-3.601v-7.759h7.761 c1.987,0,3.6-1.612,3.6-3.6c0-1.988-1.612-3.601-3.6-3.601h-7.761v-7.76c0-1.988-1.611-3.6-3.6-3.6s-3.601,1.611-3.601,3.6v7.76 h-7.76c-1.988,0-3.6,1.612-3.6,3.601C48.961,74.235,50.572,75.847,52.561,75.847z"></path></g></g></svg>
							<span className='faq__colum-title-text'><strong>Information about Covid-19</strong></span>
						</div>
						<div className="faq__colum-text">
							<p className='faq__colum-text-title'>Let's talk about safety in the trip all at once:</p>
							<ul className='faq__colum-list'>
								<li className='faq__colum-text-item'>
								Stay home if you have symptoms of an infectious disease, fever, or 
								you are at risk (you have a chronic illness, you are over 65, and so on).
								</li>
								<li className='faq__colum-text-item'>
								Be sure to wear a mask and keep your distance.
								</li>
								<li className='faq__colum-text-item'>
								Do not shake hands with fellow travelers. Wash your hands before and after the trip.
								</li>
								<li className='faq__colum-text-item'>
								Follow the requirements and recommendations of the Ministry of Health, local authorities and do not 
								forget that you are responsible for compliance with the current regime.
								</li>
							</ul>
							<p className='faq__colum-text-title'>
								Additional information: We advise all BlaBlaCar users to read the official government recommendations of their country or region. 
								You can find more information and recommendations on these pages:
							</p>
							<p className='faq__colum-text-title'>
								Ministry of Health of Ukraine - Information on the situation in Ukraine. 
								Ministry of Foreign Affairs of Ukraine - 
								Information on travel of Ukrainians abroad.
							</p>
						</div>
					</div>
					<div className="faq__colum">
						<div className="faq__colum-title">
							<img className='faq__img' src={cat} alt="cat"/>
							<span className='faq__colum-title-text'><strong>A trip with animals</strong></span>
						</div>
						<div className="faq__colum-text">
							<p className='faq__colum-text-title'>
							When planning a trip with an animal, we strongly recommend that you prepare a veterinary passport in
							 advance with notes on vaccinations, a certificate of health of the animal,
							 a carrying bag or cage with a deaf bottom, as well as ensure the availability of clean drinking water.
							</p>
							<p className='faq__colum-text-title'>
							The carrier has the right to regulate the rules of transportation of animals on buses of their flights,
							 so it is necessary to clarify this information individually.
							</p>
						</div>
					</div>
					<div className="faq__colum">
						<div className="faq__colum-title">
							<img className='faq__img' src={backpack} alt="cat"/>
							<span className='faq__colum-title-text'><strong>Luggage transportation</strong></span>
						</div>
						<div className="faq__colum-text">
							<p className='faq__colum-text-title'>
							Please note that the carrier has the full right to refuse the passenger of the bus to carry hand luggage or
							luggage, if this luggage blocks the passage in the transport of other passengers, or does not correspond to
							the number and size.
							</p>
							<p className='faq__colum-text-title'>
							You can always check with the carrier about the conditions of luggage transportation on specific flights.
							</p>
						</div>
					</div>
					<div className="faq__colum">
						<div className="faq__colum-title">
							<img className='faq__img' src={info} alt="info"/>
							<span className='faq__colum-title-text'><strong>What you need for landing</strong></span>
						</div>
						<div className="faq__colum-text">
							<p className='faq__colum-text-title'>
							To board the bus you must have a passport and a printed ticket. The data in the passenger's passport
							and his ticket must match exactly.
							</p>
							<p className='faq__colum-text-title'>
							In the absence of one of these conditions or the presence of another identity document, we do not have the 
							opportunity to guarantee the passenger boarding the bus, and the Carrier has the right to refuse the trip.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>}
		</Transition>
	);
}

export default Faq;


