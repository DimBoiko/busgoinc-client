import React from 'react';
import './policy.css'

const Policy = ({setIsOpen}) => {

	const modalToggle = () => {
		setIsOpen(false)
	}

	return (
		<div className='policy'>
			<div className="policy__body">
				<div className="policy__block">
				<h4>PRIVACY POLICY                                                                                                           
				PROTECTION OF INFORMATION </h4>
				Busgoinc is responsible for the processing of received personal data in accordance with the requirements of regulatory and legal documents and imposes corresponding similar obligations on any counterparties with whom it interacts in the process of providing services or in the process of processing the received information. 

				Busgoinc adheres to the basic principles of protection of confidential information in relation to any onward transfer of data both domestically and cross-border, including in relation to onward transfer of obligations. 

				Busgoinc uses the SSL 3.0 encryption protocol to ensure the secure transfer of personal data. All personal data is encrypted and transmitted securely over the Internet.
				</div>		

				<div className="policy__block">
				<h4>TRANSFER OF DATA TO CARRIER/SUPPLIER</h4>
				The Busgoinc service cooperates directly with carriers or ticket suppliers in the course of its activity. 
 
 				In order to provide high-quality transportation services, your personal data is necessarily transferred directly to the Carrier/Supplier for the flight for which you purchased a particular ticket. 
  
 				The main purpose of transferring personal data to the Carrier/Supplier is to conclude a contract of carriage.
				</div>	

				<div className="policy__block">
				<h4>PRIVACY POLICY UPDATES</h4>
				Busgoinc reserves the right to make changes to the Privacy Policy. If Busgoinc materially changes the Privacy Policy, it will be indicated here.
				</div>	
				<button onClick={(e) => modalToggle(e)} className="policy__close">&times;</button>
			</div>
		</div>
	);
}

export default Policy;
