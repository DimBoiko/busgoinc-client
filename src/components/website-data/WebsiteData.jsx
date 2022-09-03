import React from 'react';
import AdminService from '../../API/AdminService';
import './website-data.css'

const WebsiteData = ({data,setData}) => {

	return (
		<div className='website-data'>
			<div className="website-data__multiplier">
				<div className="website-data__multiplier-title">
					Процент к цене билетов:
				</div>
				<div className="website-data__input">
					<input type="number" value={data.multiplier} onChange={(e) => setData({...data,multiplier:Number(e.target.value)})}/>
				</div>
			</div>
			<div className="website-data__save">
				<button onClick={() => AdminService.saveData(data)} className='website-data__save-btn btn'>Сохранить</button>
			</div>
		</div>
	);
}

export default WebsiteData;
