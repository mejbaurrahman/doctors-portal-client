import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import OptionCard from '../OptionCard/OptionCard';
import {
    useQuery
  } from '@tanstack/react-query'
import { data } from 'autoprefixer';
import BookingModal from '../BookingModal/BookingModal';

export default function AvailableAppointment({selectedDate, selectedOption, setSelectedOption}) {
    // const [availableOptions, setAvailableOptions] = useState([]);
    const date = format(selectedDate, 'PP');
    const {data:availableOptions=[], refetch, isLoading} = useQuery({queryKey:['availableOptions', date],
        queryFn:()=> fetch(`http://localhost:5000/options?date=${date}`)
        .then(res=>res.json())
        
    }) 

    if(isLoading){
      return <div>Loading................</div>
    }

    // useEffect(()=>{
    //     fetch('http://localhost:5000/options')
    //     .then(res=>res.json())
    //     .then(data=>setAvailableOptions(data))
    // }, [])
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
        {selectedOption&& <BookingModal
         selectedOption={selectedOption} 
         setSelectedOption={setSelectedOption} 
         selectedDate={selectedDate}
         refetch={refetch}
         ></BookingModal>}
    </div>
  )
}
