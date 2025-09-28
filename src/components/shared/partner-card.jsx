import Image from "next/image"


const Partnercard = () => {
  return (
    <div className="border-2 border-gray-200 rounded-s-2xl overflow-hidden p-5 space-y-4">
      {/* img and info */}
      <div className="flex items-center gap-2">
        <Image src='/images/partner.png' alt='partner' width={300} height={300} className='size-11 object-cover' />
        <div className="space-y-2">
          <h3 className="font-semibold text-xs">اسم الشركة</h3>
          <p className="text-main-green text-xs">شركة نقل</p>
        </div>
      </div>
      {/* location */}
      <div className="flex items-center gap-1 ">
       <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none">
  <g clipPath="url(#clip0_4418_3359)">
    <path d="M6.94003 9.42086C6.12003 10.2009 4.83003 10.1909 4.01003 9.42086C2.89003 8.35086 1.60002 6.63086 2.07002 4.60086C2.87002 1.14086 8.08003 1.14086 8.87003 4.60086C8.99003 5.09086 9.00002 5.55086 8.94002 6.00086" stroke="#3fb38b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.07 16.6009C15.87 13.1409 21.11 13.1409 21.91 16.6009C22.38 18.6309 21.09 20.3509 19.96 21.4209C19.14 22.2009 17.84 22.1909 17.02 21.4209C15.89 20.3509 14.6 18.6309 15.07 16.6009Z" stroke="#3fb38b" strokeWidth="1.5" />
    <path d="M12.0002 5H14.6802C16.5302 5 17.3902 7.29 16.0002 8.51L8.01019 15.5C6.62019 16.71 7.48019 19 9.32019 19H12.0002" stroke="#3fb38b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.0002 5H14.6802C16.5302 5 17.3902 7.29 16.0002 8.51L8.01019 15.5C6.62019 16.71 7.48019 19 9.32019 19H12.0002" stroke="#3fb38b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.48622 5.5H5.49777" stroke="#3fb38b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.4862 17.5H18.4978" stroke="#3fb38b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_4418_3359">
      <rect width={24} height={24} fill="white" />
    </clipPath>
  </defs>
</svg>

        <p className="text-xs text-black ">إسم الشارع, الحي,  المدينة</p>
      </div>
      {/* discription */}
      <p className="text-xs ">هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما</p>
    </div>
  )
}

export default Partnercard
