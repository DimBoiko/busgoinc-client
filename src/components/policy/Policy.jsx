import React from 'react';
import './policy.css'

const Policy = ({modalHandler,policy}) => {

	return (
		<div className='policy'>
			<div className="policy__body">
				{
					policy.map((item,index) => 
						<div key={index} className="policy__block">
						<h4>{item.title}</h4>
							{item.text}
						</div>		
					)
				}
				<button onClick={(e) => modalHandler(e)} className="policy__close">&times;</button>
			</div>
		</div>
	);
}

export default Policy;
