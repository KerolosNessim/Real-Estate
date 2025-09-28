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
import Partnercard from '../shared/partner-card'

const PartnerSection = () => {
  const locale = useLocale();
  return (
    <section className='container space-y-6 py-12'>
      {/* header */}
      <SectionHeader>
        شركاء النجاح
      </SectionHeader>

      {/* slider */}
      <Carousel className={"space-y-8"} opts={{ loop: true, direction: locale === "ar" ? "rtl" : "ltr", align: "start" }}>
        {/* title */}
        <h3 className='text-4xl font-semibold'>شركاء النجاح</h3>
        <CarouselContent className={"p-1"}>
          {
            Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem key={index} className="lg:basis-1/4 md:basis-1/2 basis-[90%]" >
                <Partnercard />
              </CarouselItem>))
          }
        </CarouselContent>
        <div className='flex items-center justify-center gap-3 flex-row-reverse '>
          <CarouselPrevious className={"static translate-0 "} />
          <CarouselNext className={"static translate-0 "} />
        </div>
      </Carousel>
    </section>
  )
}

export default PartnerSection
