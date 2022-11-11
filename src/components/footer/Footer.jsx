import React from 'react';
import { useState } from 'react';
import Policy from '../policy/Policy';
import './footer.css'

const Footer = () => {
	const [isOpen,setIsOpen] = useState(false)

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
					<button onClick={() => setIsOpen(!isOpen)} className="footer__rights-btn">
						Privacy Policy
					</button>
				</div>
				<div className="footer__rights">
					© 2022, BusGoInc. Online ticketing service. All rights reserved
				</div>
			</div>
			{
				isOpen && <Policy setIsOpen={setIsOpen}/>
			}
		</footer>
	);
}

export default Footer;
