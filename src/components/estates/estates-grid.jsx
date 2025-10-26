import React from 'react'
import EstateCard from './estate-card'
import { HiArrowPath } from 'react-icons/hi2'

const EstatesGrid = () => {
  return (
    <>
      <h3 className='text-xl'><span className='text-main-green'>459</span> نتيجة بحــث</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {Array.from({ length: 12 }, (_, index) => (
          <EstateCard key={index} />
        ))}
      </div>
      <div className='flex items-center justify-center'>
        <button className='border border-main-navy text-main-navy hover:bg-main-navy hover:text-white px-4 py-2 rounded-s-lg flex items-center gap-2'> <HiArrowPath className='size-6 text-main-green' /> عرض المزيد</button>
      </div>
    </>
  )
}

export default EstatesGrid
