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
import ClientCard from '../shared/client-card'
const ClientReviews = () => {
  const locale = useLocale();
  return (
    <section className=' space-y-6 py-12'>
      {/* header */}
      <div className='container'>

      <SectionHeader>
          آراء العملاء
      </SectionHeader>
      </div>

      {/* slider */}
      <Carousel className={"space-y-8"} opts={{ loop: true, direction: locale === "ar" ? "rtl" : "ltr", align: "start" }}>
        {/* title */}
        <div className='flex items-center justify-between container'>
          <div className='space-y-6'>
            <h3 className='text-4xl font-semibold'>ماذا يقول عملائنا</h3>
            <p className='text-xs'>بعض الآراء من تجارب عملائنا</p>
          </div>
          <div className='flex items-center gap-3 flex-row-reverse w-fit'>
            <CarouselPrevious className={"static translate-0 "} />
            <CarouselNext className={"static translate-0 "} />
          </div>
        </div>
        <CarouselContent className={"lg:w-[90%] ms-auto max-lg:container"}>
          {
            Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem key={index} className="lg:basis-[35%] md:basis-1/2 basis-[90%]" >
                <ClientCard />
              </CarouselItem>))
          }
        </CarouselContent>

      </Carousel>


    </section>
  )
}

export default ClientReviews
