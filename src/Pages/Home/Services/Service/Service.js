import React from 'react'

export default function Service({service}) {
    const {img, name, description}=service;
  return (
    <div className='p-6'>
    <div className="card shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-xl font-semibold text-center">{name}</h2>
    <p className='text-center'>{description}</p>
  </div>
</div>

    </div>
  )
}
