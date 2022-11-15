import React from 'react'

export default function InfoCard({card}) {
    const {name, description, bgClass, icon} = card;
  return (
<div className={`card  shadow-xl ${bgClass} p-10`}>
  <div className="flex lg:justify-evenly items-center lg:flex-row flex-col lg:mb-0 mb-3" >
    <img src={icon} className='' alt=''></img>
    <div className='pl-3'>
        <h3 className='text-white font-bold text-xl'>{name}</h3>
        <h6 className='text-white'>{description}</h6>
    </div>
  </div>
</div>
  )
}
