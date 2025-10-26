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

})

export function ForgetForm() {
  const locale = useLocale()
  const inputStyle = "!h-14 rounded-none rounded-s-lg"

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",

    },
  })

  function onSubmit(values) {
    console.log({
      ...values,

    });
    // Handle login logic here
  }

  return (
    <div className="lg:p-10 p-8 border border-main-gray rounded-lg flex max-lg:flex-col items-start gap-8 w-full">


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





          <div className="w-full flex items-center justify-between">
            <Button
              type="submit"
              className='rounded-none h-12 bg-main-green text-white lg:py-4 lg:!px-8 p-3 rounded-tr-2xl max-lg:text-xs font-semibold flex items-center gap-2 w-fit'
            >
              <FaLongArrowAltRight size={20} />
              <p>إرسال </p>
            </Button>

          </div>
        </form>
      </Form>
    </div>
  )
}

export default ForgetForm
