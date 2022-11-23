import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider'
import MyAppointment from './MyAppointment'

export default function MyAppointments() {

  const {user} = useContext(AuthContext)
  const url = `http://localhost:5000/appointments?email=${user?.email}`
  const {data: appointments=[]} = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async ()=> {
      const res = await fetch(url,{
        headers:{
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      const data = await res.json();
      return data
    } 
  })
  // console.log(user)
  return (
    <div>
        <p className='text-3xl my-5'>My Appointment</p>
        <div>
        <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    {
      appointments.length&&
      appointments?.map((appointment,i)=><MyAppointment
      key={appointment._id}
      appointment={appointment}
      i={i}
      ></MyAppointment>)
    }
  </table>
</div>
        </div>
    </div>
  )
}
