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
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { useLocale } from "next-intl"
import { FaLongArrowAltRight } from "react-icons/fa"

const formSchema = z.object({
  otp: z.string().length(4, {
    message: "يجب أن يتكون الكود من 4 أرقام",
  }),
})

export function OtpForm() {
  const locale = useLocale()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  })

  function onSubmit(values) {
    console.log({
      ...values,
    })
    // Handle OTP verification logic here
  }

  return (
    <div className="lg:p-20 p-8 border border-main-gray rounded-lg flex max-lg:flex-col items-start gap-8 w-full">
      <Form {...form} className="w-full">
        <form
          dir={locale === "ar" ? "rtl" : "ltr"}
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full"
        >
          <p className="text-xs font-bold">لقد تم إرسال الكود علي رقم الهاتف المنتهي ب 701</p>
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem className="">
                <FormControl>
                  <div className="flex items-center justify-between max-md:flex-col max-md:gap-4">
                    <div>
                      <FormLabel className="text-xs font-bold mb-2">إدخال الكـــود</FormLabel>
                      <InputOTP
                        maxLength={4}
                        {...field}
                        className="justify-center"
                      >
                        <InputOTPGroup className="gap-2">
                          {Array.from({ length: 4 }).map((_, index) => (
                            <InputOTPSlot
                              key={index}
                              index={index}
                              className="h-14 w-14 text-lg border border-gray-300 rounded-s-lg first:rounded-none first:rounded-s-lg "
                            />
                          ))}
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                    {/* timer */}
                    <div className="space-y-2 text-center">
                      <p className="text-xs">ستنتهي صلاحية الكود خلال</p>
                      <p className="text-lg font-bold text-main-green">00:45</p>
                    </div>
                  </div>
                </FormControl>
                <FormMessage className="text-xs mt-2" />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-1 text-sm font-semibold">
            <p>لم يصلك الكود بعد ؟</p>
            <button className="text-main-green cursor-pointer font-bold">إعادة إرسال</button>
          </div>

          <div className="w-full flex items-center  mt-8">
            <Button
              type="submit"
              className='rounded-none h-12 bg-main-green text-white lg:py-4 lg:!px-8 p-3 rounded-tr-2xl max-lg:text-xs font-semibold flex items-center gap-2 w-fit'
            >
              <FaLongArrowAltRight size={20} />
              <p>تأكيد الكود</p>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default OtpForm
