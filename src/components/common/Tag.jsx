import React from 'react'

const Tag = ({children}) => {
  return (
    <div className='border border-(--coinbase-gray-1) rounded-2xl px-3 py-1.5 space-x-1'>
      <span className='uppercase text-base font-bold '>
        c 
        </span>
      <span className='uppercase text-base'>
        {children}
        </span>
    </div>
  )
}

export default Tag
