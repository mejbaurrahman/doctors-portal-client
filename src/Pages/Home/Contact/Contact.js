import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/Shared/Button/PrimaryButton';

export default function Contact() {
  return (
    <div className='py-16 my-10'
    style={{backgroundImage:`url(${appointment})`,
backgroundSize: 'cover'

}}
    >
        <div className='lg:w-1/2 mx-auto w-full'>
            <h1 className='font-bold text-center text-primary'>Contact Us</h1>
            <h1 className='text-xl text-center text-white'>Stay Connected with us</h1>
            <form action="" className='w-full mt-10'>
                <input type="email" name="email" id="" className='px-5 w-full py-3 rounded' placeholder='Email' /><br/><br/>
                <input type="text" name="subject" id="" className='px-5 w-full py-3 rounded' placeholder='Subject' /><br/><br/>
                <textarea type="text" name="message" id="" className='px-5 w-full py-3 rounded' placeholder='Your Message' /><br/><br/>
                <div className='flex justify-center'>
                <PrimaryButton>Submit</PrimaryButton>
                </div>
            </form>
        </div>
    </div>
  )
}
