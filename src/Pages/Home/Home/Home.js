import React from 'react'
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact'
import InfoCards from '../InfoCards/InfoCards'
import Makeappointment from '../MakeAppointment/Makeappointment'
import Services from '../Services/Services/Services'
import Testimonial from '../Testimonial/Testimonial'

export default function Home() {
  return (
    <div className='mx-5'>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Makeappointment></Makeappointment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  )
}
