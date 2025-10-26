import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";

const BlogCard = () => {
  return (
    <article className='border-2 border-gray-200 rounded-s-2xl overflow-hidden'>
      <figure>
        <Image src='/images/blog.jpg'  alt='blog' width={300} height={300} className='w-full h-60 object-cover'/>
      </figure>
      <figcaption className='p-4 space-y-8'>
        {/* title */}
        <h4 className=' font-semibold'>عنوان المقالة هنا</h4>
        <p className='text-[.6rem] line-clamp-2 text-gray-500 leading-6'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص</p>
      <Link href='/blogs/1' className='block w-fit rounded-full  py-2 px-3 border-1 border-main-green text-main-green hover:bg-main-green hover:text-white transition-all duration-300'><MdArrowForwardIos size={14} /></Link>
      </figcaption>
      
    </article>
  )
}

export default BlogCard
