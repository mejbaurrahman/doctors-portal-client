import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review/Review';

export default function Testimonial() {

  const reviews = [
    {
        _id: 1, 
        name: 'Winson Herry',
        img: people1,
        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location: 'California'
    },
    {
        _id: 2, 
        name: 'Winson Herry',
        img: people2,
        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location: 'California'
    },
    {
        _id: 3, 
        name: 'Winson Herry',
        img: people3,
        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location: 'California'
    },
]
  return (
    <div className='mt-10'>
        <div className="flex justify-between">
          <div className=''>
              <h5 className='text-primary font-bold'>Testimonial</h5>
              <h5 className='text-xl'>What Our Patients Says</h5>
          </div>
          <div>
              <img src={quote} alt="" srcset="" />
          </div>

        </div>

        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
              {
                reviews.map(r=><Review
                key={r._id}
                r={r}
                >

                </Review>)
              }
        </div>
    </div>
  )
}