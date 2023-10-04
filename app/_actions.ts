"use server"

import { ContactFormEmail } from "@/emails/contact-form-email"
import { Resend } from "resend"
import { z } from "zod"

import { ContactFormSchema } from "@/lib/schema"

type ContactFormInputs = z.infer<typeof ContactFormSchema>

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.success) {
    const {
      firstName,
      lastName,
      email,
      phone,
      country,
      city,
      postalCode,
      message,
    } = result.data

    try {
      const data = await resend.emails.send({
        from: "hello@laam.dev",
        to: [email],
        subject: "Contact form submission",
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
        react: ContactFormEmail({ firstName, email, message }),
      })
      return { success: true, data }
    } catch (error) {
      return { success: false, error }
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}
