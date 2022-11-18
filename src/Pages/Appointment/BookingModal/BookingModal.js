import axios from 'axios';
import { format } from 'date-fns';
import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

export default function BookingModal({selectedOption, selectedDate, setSelectedOption}) {
  const {user} = useContext(AuthContext);
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
        axios({
          method:'POST',
          url: `http://localhost:5000/appoinments`,
          data: bookingInfo
        }).then(data=>{
          console.log(data)
          toast.success('Booked Successfully');
          setSelectedOption(null);
        }).catch(error=>{
          console.log(error.message)
        })
        
        // console.log(bookingInfo)
        
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
        <input type="text" placeholder='name' name='name' defaultValue={user?.displayName}  disabled={user?.displayName}  className='w-full px-5 py-3 border border-1   rounded ' /> <br /> <br />
        <input type="text" placeholder='phone' name='phone'  className='w-full px-5 py-3 border border-1 rounded '  /> <br /> <br />
        <input type="email" placeholder='Email' name='email' defaultValue={user?.email} disabled={user?.email} className='w-full px-5 py-3 border border-1 rounded '  /> <br /> <br />
        <button type="submit" className='btn btn-dark w-full'>Submit</button>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}
