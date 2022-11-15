import React, { useState } from 'react'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import BookingModal from '../BookingModal/BookingModal';


export default function Appointment() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState({});
  return (
    <div>
        <BookingModal selectedOption={selectedOption} selectedDate={selectedDate}></BookingModal>
        <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentBanner>
        <AvailableAppointment selectedDate={selectedDate} setSelectedOption={setSelectedOption}></AvailableAppointment>
    </div>
  )
}
