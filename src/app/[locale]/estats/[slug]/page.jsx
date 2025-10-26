import React from 'react'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import { PiPhoneCallLight } from "react-icons/pi";
import { MdOutlineMoveToInbox } from 'react-icons/md';
import ryal from '@/assets/ryal.svg'
import Image from 'next/image';
import { LuBellRing } from 'react-icons/lu';
import { FaLongArrowAltRight } from 'react-icons/fa';
import CustomGallery from '@/components/estates/custom-gallery';
const EstateSinglePage = () => {
  return (
    <main className='space-y-12'>
      {/* header */}
      <div className='bg-main-light-gray p-4 space-y-4 rounded-b-xl container'>

        <div className='flex md:items-center justify-between max-md:flex-col max-md:gap-4'>
          {/* content */}
          <div className='space-y-4'>
            <CustomBreadcrumbs items={[
              { label: 'العقارات', href: '/estats' },
              { label: 'تفاصيل العقار' },
            ]} />
            <h1 className='text-main-navy text-2xl font-bold'>منزل راقي في جدة</h1>
            <p className='text-xs text-main-navy/70'>3002 Foster Ave, , 11210,KSA</p>
            {/* calls and messages  */}
            <div className='text-xs text-main-navy flex items-center gap-2'>
              {/* calls */}
              <div className='flex items-center gap-1 bg-white  p-2 rounded-md'>
                <PiPhoneCallLight className='text-main-green' />
                <span className=' text-main-green font-bold'>50</span>
                <span>مكالمات</span>
              </div>
              {/* messages */}
              <div className='flex items-center gap-1 bg-white  p-2 rounded-md'>
                <MdOutlineMoveToInbox className='text-main-green' />
                <span className=' text-main-green font-bold'>122</span>
                <span>رسائل</span>
              </div>
            </div>
          </div>
          {/* price and actions  */}
          <div className='flex md:items-center gap-4 max-md:flex-col '>
            {/* price */}
            <div className='flex items-center gap-2'>
              <p className='lg:text-3xl  text-2xl  font-bold text-main-green'>670,000</p>
              <Image src={ryal} alt='ryal' width={20} height={20} className='lg:size-6 size-4 object-contain' />
            </div>
            {/* actions */}
            <div className='flex flex-col gap-2 max-md:flex-row'>
              <button className='w-36 h-12 border border-main-navy text-xs font-medium text-main-navy hover:bg-main-navy hover:text-white px-4 py-2 rounded-s-lg flex items-center gap-2 transition-all duration-300'> <LuBellRing className='size-4 text-main-green' /> عرض المزيد</button>
              <button className='w-36 h-12 text-xs font-medium text-white bg-main-green px-4 py-2 rounded-s-lg flex items-center gap-2 hover:gap-3 transition-all duration-300'> <FaLongArrowAltRight className='size-4 ' /> شراء الآن</button>

            </div>
          </div>
        </div>

      </div>
      <div className='container'> 
      <div className='w-1/2'>
        
      {/* <CustomGallery/> */}
      </div>
      </div>
    </main>
  )
}

export default EstateSinglePage
