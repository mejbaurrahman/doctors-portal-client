import { format } from 'date-fns';
import React, { useState } from 'react'
import { Day } from 'react-day-picker';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import BookingModal from '../BookingModal/BookingModal';


export default function Appointment() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    // console.log(format(selectedDate,"PP"));
    const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div>
       
        <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentBanner>
        <AvailableAppointment selectedDate={selectedDate} selectedOption={selectedOption} setSelectedOption={setSelectedOption}></AvailableAppointment>
    </div>
  )
}
