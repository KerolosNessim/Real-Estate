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
import { FaLongArrowAltRight, FaEye, FaEyeSlash, FaCheck } from "react-icons/fa"
import { Check, CheckCheckIcon } from "lucide-react"
import { Link } from "@/i18n/navigation"

const PasswordStrength = ({ password }) => {
  const locale = useLocale()
  const requirements = [
    {
      text: '8 أحرف على الأقل',
      test: (pwd) => pwd.length >= 8,
    },
    {
      text: 'تحتوي على رقم واحد على الأقل',
      test: (pwd) => /\d/.test(pwd),
    },
    {
      text: 'تحتوي على حرف خاص',
      test: (pwd) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
    },
    {
      text: 'تحتوي على حرف كبير',
      test: (pwd) => /[A-Z]/.test(pwd),
    },
  ];

  return (
    <div className="w-full mt-2 space-y-2" >
      <div className="space-y-1" >
        {requirements.map((req, index) => {
          const isMet = password ? req.test(password) : false;
          return (
            <div key={index} className="flex items-center gap-1">
              <FaCheck size={10} className={isMet ? "text-main-green" : "text-gray-500"} />
              <span className={`text-xs  ${isMet ? "text-main-green" : "text-gray-500"}`}>{req.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "يجب أن يكون الاسم مكون من حرفين على الأقل",
  }),
  email: z.string().email({
    message: "الرجاء إدخال بريد إلكتروني صالح",
  }),
  phone: z.string().min(10, {
    message: "يجب أن يتكون رقم الهاتف من 10 أرقام على الأقل",
  }),
  password: z.string().min(8, {
    message: "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل",
  }),
  confirmPassword: z.string().min(8, {
    message: "الرجاء تأكيد كلمة المرور",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "كلمتا المرور غير متطابقتين",
  path: ["confirmPassword"],
})

export function SignUpForm() {
  const locale = useLocale()
  const [type, setType] = useState("sell");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const activeStyle = "bg-white text-main-green border border-main-green"
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  })
  const inputStyle = "!h-14 rounded-none rounded-s-lg"

  function onSubmit(values) {

  }

  return (
    <div className="lg:p-10  p-8 border border-main-gray rounded-lg flex max-lg:flex-col items-start gap-8 w-full ">
      <div className='flex  flex-col gap-1 max-lg:flex-row max-lg:justify-center  max-lg:w-full'>
        <button onClick={() => setType("sell")} className={`w-30 rounded-s-lg shadow  py-3 text-sm font-semibold ${type === "sell" ? activeStyle : "bg-main-light-green text-main-navy"}  `}>باحث</button>
        <button onClick={() => setType("rent")} className={`w-30 rounded-s-lg shadow  py-3 text-sm font-semibold ${type === "rent" ? activeStyle : "bg-main-light-green text-main-navy"}  `}>مالك</button>
      </div>

      <Form {...form}>
        <form dir={locale === "ar" ? "rtl" : "ltr"} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 shhrink-0 w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الاسم الكامل</FormLabel>
                <FormControl>
                  <Input placeholder="كتابه هنا" {...field} dir="rtl" className={inputStyle} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>البريد الإلكتروني</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="كتابه هنا" {...field} className={inputStyle} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>رقم الهاتف</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+20 123 456 7890" {...field} dir="ltr" className={inputStyle} />
                </FormControl>
                <FormMessage />
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
                    placeholder="••••••••"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setPassword(e.target.value);
                    }}
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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>تأكيد كلمة المرور</FormLabel>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...field}
                    className={`${inputStyle} pr-10`}
                  />
                  <button
                    type="button"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-main-green"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <PasswordStrength password={password} />
          <div className="w-full flex items-center justify-between">
            <Button type="submit" className='rounded-none h-12   bg-main-green text-white lg:py-4 lg:!px-8 p-3 rounded-tr-2xl max-lg:text-xs  font-semibold flex items-center gap-2 w-fit '>
              <FaLongArrowAltRight size={20} />
              <p>إنشاء حساب</p>
            </Button>
            <div className='text-main-navy text-sm flex items-center gap-1'>
              <p>لدي حساب بالفعل</p>
              <Link href={'/auth/login'} className="text-main-green font-semibold hover:underline ">
                <p>تسجيل الدخول</p>
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default SignUpForm
