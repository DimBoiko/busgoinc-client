import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/bundle'
import './swiper.css'

import bus1 from '../../img/a1.jpg'
import bus2 from '../../img/a2.jpg'
import bus3 from '../../img/a3.jpg'
import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	return (
	  <Swiper
	  modules={[Navigation, Pagination, Scrollbar, A11y]}
	  spaceBetween={-20}
	  slidesPerView={1}
	  navigation
	  pagination={{ clickable: true }}
	  scrollbar={{ draggable: true }}
	  >
		 <SwiperSlide><img className='bus-img' src={bus1} alt="bus1"/></SwiperSlide>
		 <SwiperSlide><img className='bus-img' src={bus2} alt="bus2"/></SwiperSlide>
		 <SwiperSlide><img className='bus-img' src={bus3} alt="bus3"/></SwiperSlide>
		 
	  </Swiper>
	);
 };