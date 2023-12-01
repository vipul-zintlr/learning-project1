import React from 'react'

const RestaurantHeader = () => {
  return (
    <div className='flex items-center justify-between border-2 border-gray-600 rounded-md px-4 my-4'>
      <div className='flex flex-col'>
        <p className='text-lg py-2 text-gray-700 font-semibold'>Pizza Hut</p>
        <p className='text-gray-500'>Pizza</p>
        <p className='text-gray-500'>Golghar, 1.0 km</p>
        <p className='text-gray-500 my-4'>1 kms | ₹28 Delivery fee will apply</p>
      </div>
      <div className='border-2 border-gray-400 rounded-md w-max p-1'>
        <p>⭐ 3.5</p>
        <p>4k+ rating</p>
        
      </div>
    </div>
  )
}

export default RestaurantHeader
