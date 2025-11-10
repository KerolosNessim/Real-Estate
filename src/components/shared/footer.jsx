import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { Link } from '@/i18n/navigation';
import Newsletter from './newsletter';
import { Separator } from '../ui/separator';

const Footer = () => {
  return (
    <footer className='mt-12'>
      {/* upper footer */}
      <div className='bg-main-light-gray py-20'>
        <div className='container flex items-start lg:justify-between justify-center lg:gap-12 max-lg:flex-wrap gap-12'>
          {/* info and social */}
          <div className='space-y-6 max-lg:w-full lg:max-w-1/4'>
            <div className='flex items-end gap-2 w-fit max-lg:mx-auto'>
              <Image src='/images/footer-logo.svg' alt='logo' width={300} height={300} className='size-12 object-contain' />
              <h3 className='font-bold text-2xl'>حلول العقارية</h3>
            </div>
            <p className='text-xs leading-6 max-lg:text-center'>شركة الحلول العقارية هي شريكك الأول لتحقيق أحلامك العقارية بكل ثقة واطمئنان. نقدم لك مجموعة متكاملة من الخدمات تشمل البيع والشراء والتأجير وإدارة الأملاك،</p>
            {/* links */}
            <div className='flex items-center gap-12 max-lg:justify-center'>
              <a href="#" className='text-main-green  '>
                <FaFacebookF size={24} className='hover:scale-110 transition-all duration-300' />
              </a>
              <a href="#" className='text-main-green  '>
                <FaYoutube size={24} className='hover:scale-110 transition-all duration-300' />
              </a>
              <a href="#" className='text-main-green  '>
                <BiLogoInstagramAlt size={28} className='hover:scale-110 transition-all duration-300' />
              </a>
            </div>
          </div>
          {/* important links */}
          <div className='flex-shrink-0'>
            <h4 className='font-bold text-lg mb-6'>روابط هامة</h4>
            <ul className='text-xs space-y-6'>
              <li>
                <Link href={"/about-us"} className='hover:text-main-green transition-all duration-300'>
                  من نحن
                </Link>
              </li>
              <li>
                <Link href={"/complaints"} className='hover:text-main-green transition-all duration-300'>
                  الشكاوي
                </Link>
              </li>
              <li>
                <Link href={"/blogs"} className='hover:text-main-green transition-all duration-300'>
                  المدونه
                </Link>
              </li>

            </ul>
          </div>
          {/* important links */}
          <div className='flex-shrink-0'>
            <h4 className='font-bold text-lg mb-6'>خدماتنا</h4>
            <ul className='text-xs space-y-6'>
              <li>
                <Link href={"/estats"} className='hover:text-main-green transition-all duration-300'>
                  العقارات
                </Link>
              </li>
              <li>
                <Link href={"/partners"} className='hover:text-main-green transition-all duration-300'>
                  الوكلاء
                </Link>
              </li>
            </ul>
          </div>
          {/* newsletter */}
          <div className='lg:w-1/3'>
            <Newsletter />
          </div>
        </div>
      </div>
      {/* lower footer */}
      <div className='container py-6 flex items-center justify-between max-md:flex-col max-md:gap-4'>

        {/* terms */}
        <div className='flex items-center gap-2'>
          <Link href={"/user-manual"} className='text-xs hover:text-main-green transition-all duration-300'>
            دليل المستخدم
          </Link>
          <div className='w-[1px] h-4 bg-gray-400'></div>
          <Link href={"/user-manual"} className='text-xs hover:text-main-green transition-all duration-300'>
            سياسة الخصوصية
          </Link>
        </div>
        {/* copy */}
        <p className='text-xs'>جميع الحقوق محفوظة@<a href="#" className='font-bold text-main-green '>حلول</a>2025 </p>
      </div>


    </footer>
  )
}

export default Footer
