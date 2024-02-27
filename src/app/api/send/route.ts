import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { data } = await resend.emails.send({
      from: "luis@laam.dev",
      to: "laanayam333@gmail.com",
      subject: "Hello from me.",
      html: "<h1>Hello from me.</h1>",
    })

    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
