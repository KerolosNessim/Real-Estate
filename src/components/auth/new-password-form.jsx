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
  password: z.string().min(8, {
    message: "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل",
  }),
  confirmPassword: z.string().min(8, {
    message: "يجب تأكيد كلمة المرور",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "كلمتا المرور غير متطابقتين",
  path: ["confirmPassword"],
});

export function NewPasswordForm() {
  const locale = useLocale()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const inputStyle = "!h-14 rounded-none rounded-s-lg"

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(values) {
    console.log({
      ...values,
    });
    // Handle password reset logic here
  }

  return (
    <div className="lg:p-20 p-8 border border-main-gray rounded-lg flex max-lg:flex-col items-start gap-8 w-full">
      <Form {...form} className="w-full">
        <form
          dir={locale === "ar" ? "rtl" : "ltr"}
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full"
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>كلمة المرور الجديدة</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder="أدخل كلمة المرور الجديدة"
                      type={showPassword ? "text" : "password"}
                      className={inputStyle}
                      {...field}
                    />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>تأكيد كلمة المرور</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder="أعد إدخال كلمة المرور"
                      type={showConfirmPassword ? "text" : "password"}
                      className={inputStyle}
                      {...field}
                    />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
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
              <p>تغيير كلمة المرور</p>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default NewPasswordForm
