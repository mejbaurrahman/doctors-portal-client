import { format } from 'date-fns';
import React from 'react'
import PrimaryButton from '../../../Components/Shared/Button/PrimaryButton';

export default function OptionCard({option, selectedDate, setSelectedOption}) {
  const {name, slots} = option;
  return (
    <div className="card shadow-xl">
  <div className="card-body">
    <h2 className="text-center text-xl font-bold text-primary">{name}</h2>
    <p className='text-center'>{slots.length >1 ? slots[0]: 'No Slots' }</p>
    <p className='text-center'>{slots.length} {slots.length > 1? 'spaces': 'space'}  available </p>
    <div className='flex justify-center'>
    <label
    disabled = {slots.length === 0}
    htmlFor="booking-modal"
     onClick={()=>setSelectedOption(option)}
      className="btn btn-primary text-white w-1/2">Book Now</label>
    </div>
    </div>
  </div>

  )
}
