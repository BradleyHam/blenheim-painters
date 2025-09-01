import React from 'react'
import { FaStar } from "react-icons/fa"

function FiveStars() {
  return (
    <div className="star-row flex flex-row items-start space-x-1 ">
    <FaStar className='text-accent-one'/>
    <FaStar className='text-accent-one'/>
    <FaStar className='text-accent-one'/>
    <FaStar className='text-accent-one'/>
    <FaStar className='text-accent-one'/>
</div>
  )
}

export default FiveStars