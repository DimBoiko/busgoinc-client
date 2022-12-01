import React from 'react';
import './policy.css'

const Policy = ({modalHandler,policy}) => {

	return (
		<div onClick={(e) => modalHandler(e)} className='policy'>
			<div className="policy__body">
				{
					policy.map((item,index) => 
						<div key={index} className="policy__block">
						<h4 className='police__title'>{item.title}</h4>
							{item.text}
						</div>		
					)
				}
				<button className="policy__close">&times;</button>
			</div>
		</div>
	);
}

export default Policy;
