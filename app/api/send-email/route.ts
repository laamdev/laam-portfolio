import { NextRequest, NextResponse } from "next/server"

import { resend } from "@/lib/resend"
import { NewsletterWelcomeEmail } from "@/components/emails/newsletter-welcome"

export async function GET(req: NextRequest) {
  const body = req.json()
  try {
    const data = await resend.sendEmail({
      from: "hello@laam.dev",
      to: "laanayam333@gmail.com",
      subject: "hello world",
      react: NewsletterWelcomeEmail(),
    })
    return NextResponse.json(data)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error })
  }
}
