import { format } from 'date-fns';
import React from 'react'

export default function BookingModal({selectedOption, selectedDate, setSelectedOption}) {

  const {_id, name, slots} = selectedOption;
  const date = format(selectedDate, "PP");

  const handleBooking = (e)=>{
        e.preventDefault();
        const form  = e.target;
        const selectedTime = form.time.value;
        const patientName= form.name.value;
        const patientEmail= form.email.value;
        const patientPhone= form.phone.value;

        const bookingInfo = {
          treatment: name,
          appointmentDate:date,
          slot:selectedTime,
          patientName,
          patientEmail,
          patientPhone
        };

        console.log(bookingInfo)
        setSelectedOption(null);
  }
  return (
<div>
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
    <div className='my-8'>
      <form onSubmit={handleBooking} action="">
        <input type="text" placeholder='date' name='date'  value={date} className='w-full rounded px-5 py-3 border border-1 ' disabled /> <br /> <br />
        <select name='time'  className="select select-bordered w-full rounded px-5 py-3 border border-1">
        <option disabled selected>Select Time Slot</option>
          {
              slots?.map((slot, index)=><option
              key={index}
              >{slot}</option>)
          }
        </select>
        
        <br /> <br />
        <input type="text" placeholder='name' name='name'  className='w-full px-5 py-3 border border-1   rounded ' /> <br /> <br />
        <input type="text" placeholder='phone' name='phone'  className='w-full px-5 py-3 border border-1 rounded '  /> <br /> <br />
        <input type="email" placeholder='Email' name='email' className='w-full px-5 py-3 border border-1 rounded '  /> <br /> <br />
        <button type="submit" className='btn btn-dark w-full'>Submit</button>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}
