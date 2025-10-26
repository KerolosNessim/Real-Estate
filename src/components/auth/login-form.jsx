"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useLocale } from "next-intl"
import { useState } from "react"
import { FaLongArrowAltRight, FaEye, FaEyeSlash } from "react-icons/fa"
import { Link } from "@/i18n/navigation"

const formSchema = z.object({
  phone: z.string().min(10, {
    message: "يجب أن يتكون رقم الهاتف من 10 أرقام على الأقل",
  }),
  password: z.string().min(1, {
    message: "الرجاء إدخال كلمة المرور",
  }),
})

export function LoginForm() {
  const locale = useLocale()
  const [showPassword, setShowPassword] = useState(false)
  const [type, setType] = useState("sell");
  const activeStyle = "bg-white text-main-green border border-main-green";
  const inputStyle = "!h-14 rounded-none rounded-s-lg"

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  })

  function onSubmit(values) {
    console.log({
      ...values,
      type: type === 'sell' ? 'buyer' : 'owner' // Map to backend expected values if needed
    });
    // Handle login logic here
  }

  return (
    <div className="lg:p-10 p-8 border border-main-gray rounded-lg flex max-lg:flex-col items-start gap-8 w-full">
      <div className='flex flex-col gap-1 max-lg:flex-row max-lg:justify-center max-lg:w-full'>
        <button 
          type="button"
          onClick={() => setType("sell")} 
          className={`w-30 rounded-s-lg shadow py-3 text-sm font-semibold ${type === "sell" ? activeStyle : "bg-main-light-green text-main-navy"}`}
        >
          باحث
        </button>
        <button 
          type="button"
          onClick={() => setType("rent")} 
          className={`w-30 rounded-s-lg shadow py-3 text-sm font-semibold ${type === "rent" ? activeStyle : "bg-main-light-green text-main-navy"}`}
        >
          مالك
        </button>
      </div>

      <Form {...form} className="w-full">
        <form 
          dir={locale === "ar" ? "rtl" : "ltr"} 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-6 w-full "
        >
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>رقم الهاتف</FormLabel>
                <FormControl>
                  <Input
                    placeholder="أدخل رقم هاتفك"
                    className={inputStyle}
                    dir="ltr"
                    type="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>كلمة المرور</FormLabel>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="أدخل كلمة المرور"
                    {...field}
                    className={`${inputStyle} pr-10`}
                  />
                  <button
                    type="button"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-main-green"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <div>
            <Link 
              href="/auth/forgot-password" 
              className="text-gray-400 underline text-sm hover:text-main-green"
            >
              نسيت كلمة المرور؟
            </Link>
          </div>

          <div className="w-full flex items-center justify-between">
            <Button 
              type="submit" 
              className='rounded-none h-12 bg-main-green text-white lg:py-4 lg:!px-8 p-3 rounded-tr-2xl max-lg:text-xs font-semibold flex items-center gap-2 w-fit'
            >
              <FaLongArrowAltRight size={20} />
              <p>تسجيل الدخول</p>
            </Button>
            <div className='text-main-navy text-sm flex items-center gap-1'>
              <p>ليس لديك حساب؟</p>
              <Link href={'/auth/sign-up'} className="text-main-green font-semibold hover:underline">
                <p>إنشاء حساب</p>
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default LoginForm
