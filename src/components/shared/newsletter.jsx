
"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
})

const Newsletter = () => {
  const form = useForm ({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })
  function onSubmit() {
    
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h4 className='font-bold text-lg mb-6'>النشرة البريدية</h4>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className={"flex items-center relative "}>
              <FormControl>
                <Input className={"p-4 bg-white placeholder:text-gray-300 rounded-s-lg rounded-e-none border shadow-none border-transparent focus-visible:ring-0 focus-visible:border-main-green h-14"} type={"email"} placeholder="البريد الإلكتروني..." {...field} />
              </FormControl>
              <FormMessage className={"absolute -bottom-6 start-0"} />
              <Button type="submit" className={"bg-main-green text-white font-bold rounded-e-lg rounded-s-none h-14 "}>إشتراك</Button>
            </FormItem >
          )}
        />
      </form>
    </Form>
  )
}

export default Newsletter
