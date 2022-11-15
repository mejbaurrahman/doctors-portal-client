import React from 'react'

export default function Review({r}) {
    const {name, img, review, location} = r;
  return (
    <div className=''>
        <div className="card shadow-xl">
  <div className="card-body">
    <p>{review}</p>
    <div className="flex justify-start mt-4 items-center">
      {/* <div>
        <img src={img} alt="" className='border border-2 border-primary rounded-full' />
      </div> */}
      <div className="avatar">
  <div className="rounded-full ring ring-primary ring-offset-2">
    <img src={img} />
  </div>
</div>
      <div className='ml-3'>
        <h5 className='font-bold'>{name}</h5>
        <p>{location}</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
