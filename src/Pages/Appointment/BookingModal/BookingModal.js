import { format } from 'date-fns';
import React from 'react'

export default function BookingModal({selectedOption, selectedDate}) {

  const {_id, name} = selectedOption;
  return (
    <div>
        {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
    <div className='my-8'>
      <form action="">
        <input type="text" placeholder='date' name='date'  defaultValue={format(selectedDate, 'PP')} className='w-full rounded px-5 py-3 border border-1 ' disabled /> <br /> <br />
        <input type="text" placeholder='time' name='time' defaultValue={selectedOption.slots && selectedOption.slots[0]} className='rounded w-full px-5 py-3 border border-1 ' disabled /> <br /> <br />
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
