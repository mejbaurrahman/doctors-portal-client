import React, { useState } from 'react'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import BookingModal from '../BookingModal/BookingModal';


export default function Appointment() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div>
        {selectedOption&& <BookingModal selectedOption={selectedOption} setSelectedOption={setSelectedOption} selectedDate={selectedDate}></BookingModal>}
        <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentBanner>
        <AvailableAppointment selectedDate={selectedDate} setSelectedOption={setSelectedOption}></AvailableAppointment>
    </div>
  )
}
