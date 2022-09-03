import React from 'react';
import './confirm-removal.css'

const ConfirmRemoval = ({cancel,remove,data}) => {
	return (
		<div className='confirm-removal'>
			<div className="confirm-removal__body">
				<div className="confirm-removal__title">
					Удалить билет?
				</div>
				<div className="confirm-removal__buttons">
					<button onClick={() => remove(data.id,data.tickets,data.setTickets)} className='confirm-removal__button btn'>Подтвердить</button>
					<button onClick={() => cancel(false)} className='confirm-removal__button btn'>Отмена</button>
				</div>
			</div>
		</div>
	);
}

export default ConfirmRemoval;
