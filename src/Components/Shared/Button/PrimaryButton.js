import React from 'react'

export default function PrimaryButton({children}) {
  return (
    <button className='btn btn-primary border border-0 rounded text-white bg-gradient-to-r from-primary to-secondary'>{children}</button>
  )
}
