import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import OptionCard from '../OptionCard/OptionCard';

export default function AvailableAppointment({selectedDate, setSelectedOption}) {
    const [availableOptions, setAvailableOptions] = useState([]);

    useEffect(()=>{
        fetch('./appointmentOptions.json')
        .then(res=>res.json())
        .then(data=>setAvailableOptions(data))
    }, [])
  return (
    <div className='my-16'>
        <p className='text-primary font-bold text-xl text-center'>Available appointment on: {format(selectedDate, 'PP')}</p>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mt-10'>
            {
                availableOptions.map(option=><OptionCard
                key={option._id}
                option={option}
                selectedDate={selectedDate}
                setSelectedOption={setSelectedOption}
                ></OptionCard>)
            }

        </div>
    </div>
  )
}
