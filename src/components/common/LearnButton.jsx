import React from 'react'

const LearnButtons = ({label}) => {
  return (
    <button className='rounded-md px-8 py-4 font-semibold text-white bg-(--primary)'>
      <span>
     {label} {'>'}
      </span>
 
    </button>
  )
}

export default LearnButtons
