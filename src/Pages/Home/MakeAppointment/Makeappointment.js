import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import PrimaryButton from '../../../Components/Shared/Button/PrimaryButton';
import appointment from '../../../assets/images/appointment.png';

export default function Makeappointment() {
  return (
    <div className='mt-20'
    style={{backgroundImage:`url(${appointment})`,
    backgroundSize:'cover'


}}
    
    >
        <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <img src={doctor} className="lg:w-1/2 hidden lg:block -mt-[130px]" />
    <div>
      <h1 className="text-xl font-bold text-primary">Appointment</h1>
      <h2 className='my-4 text-2xl text-white'>Make an appointment Today</h2>
      <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    </div>
  )
}
