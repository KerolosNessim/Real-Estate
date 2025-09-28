import React from 'react'
import SectionHeader from '../shared/section-header'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import BlogCard from '../shared/blog-card'
import { useLocale } from 'next-intl'
const BlogSection = () => {
  const locale = useLocale();
  return (
    <section className='container space-y-6 py-12'>
      {/* header */}
      <SectionHeader>
        المدونة
      </SectionHeader>

      {/* slider */}
      <Carousel className={"space-y-8"} opts={{ loop: true, direction: locale === "ar" ? "rtl" : "ltr",align:"start" }}>
        {/* title */}
        <div className='flex items-center justify-between'>
          <div className='space-y-6'>
            <h3 className='text-4xl font-semibold'>مقالات مختارة</h3>
            <p className='text-xs'>بعض المقالات الأكثر قراءة من مدونتنا</p>
          </div>
          <div className='flex items-center gap-3 flex-row-reverse w-fit'>
            <CarouselPrevious className={"static translate-0 "} />
            <CarouselNext className={"static translate-0 "} />
          </div>
        </div>
        <CarouselContent className={"p-1"}>
          {
            Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem key={index} className="lg:basis-1/4 md:basis-1/2 basis-[90%]" >
                <BlogCard />
              </CarouselItem>))
          }
        </CarouselContent>

      </Carousel>


    </section>
  )
}

export default BlogSection
