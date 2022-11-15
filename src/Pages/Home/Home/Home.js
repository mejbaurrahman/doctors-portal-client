import React from 'react'
import Banner from '../Banner/Banner'
import InfoCards from '../InfoCards/InfoCards'
import Makeappointment from '../MakeAppointment/Makeappointment'
import Services from '../Services/Services/Services'

export default function Home() {
  return (
    <div className='mx-5'>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Makeappointment></Makeappointment>
    </div>
  )
}
