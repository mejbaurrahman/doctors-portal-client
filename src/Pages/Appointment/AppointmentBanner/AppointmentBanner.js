import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'; 
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

export default function AppointmentBanner({selectedDate, setSelectedDate}) {

  return (
    <div>
        <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="lg:w-1/2 w-full rounded-lg shadow-2xl" />
    <div className='lg:w-1/2 w-full p-10 flex justify-center'>
      <DayPicker
      selected={selectedDate}
      onSelect={setSelectedDate}
      mode='single'
      ></DayPicker>
    </div>
  </div>
</div>
    </div>
  )
}
