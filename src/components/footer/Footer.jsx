import React from 'react';
import './footer.css'

const Footer = () => {
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
				</div>
				<div className="footer__rights">
					© 2022, BusGoInc. Online ticketing service. All rights reserved
				</div>
			</div>
		</footer>
	);
}

export default Footer;
