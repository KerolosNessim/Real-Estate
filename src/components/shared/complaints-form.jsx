'use client';

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
import { useLocale, useTranslations } from 'next-intl'
import { Loader2 } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  complaintType: z.string({
    required_error: "يجب اختيار نوع الشكوى",
  }),
  phone: z.string().min(10, {
    message: "يجب أن يتكون رقم الهاتف من 10 أرقام على الأقل",
  }),
  email: z.string().email({
    message: "البريد الإلكتروني غير صالح",
  }),
  message: z.string().min(10, {
    message: "يجب أن يتكون الرسالة من 10 أحرف على الأقل",
  }),
})

const ComplaintsForm = () => {
  const t = useTranslations('Complaints')
  const locale = useLocale()


  const complaintTypes = [
    { value: 'technical', label: t('technical_issue') },
    { value: 'billing', label: t('billing_issue') },
    { value: 'general', label: t('general_inquiry') },
    { value: 'other', label: t('other') },
  ]

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      complaintType: "",
      phone: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values) {

  }

  const inputStyle = "!h-14 rounded-none rounded-s-lg"

  return (
    <div className=" w-full ">
      
      <Form {...form}>
        <form 
          dir={locale === "ar" ? "rtl" : "ltr"} 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="complaintType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('complaint_type')}</FormLabel>
                <Select dir={locale === "ar" ? "rtl" : "ltr"} onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className={`${inputStyle} w-full`}>
                      <SelectValue placeholder={t('select_type')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {complaintTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />



          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('email')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('enter_email')}
                    className={inputStyle}
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('phone_number')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('enter_phone')}
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
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>نص الشكوى</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={"نص الشكوى"}
                    className={`${inputStyle} !h-30`}

                    
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className='rounded-none h-12 bg-main-green text-white lg:py-4 lg:!px-8 p-3 rounded-tr-2xl max-lg:text-xs font-semibold flex items-center gap-2 w-fit  mt-8'
          >
            {t('submit_complaint')}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default ComplaintsForm
