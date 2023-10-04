import { ContactForm } from "@/components/contact/contact-form"

export default function ContactPage() {
  return (
    <div>
      <div className="border-b p-5">
        <h1 className="font-serif text-4xl font-bold uppercase">{`Let's Talk`}</h1>
      </div>
      <div className="grid grid-cols-2 divide-x border-b">
        <div className="prose p-5 md:prose-lg prose-p:text-primary">
          <p>
            {`Do you have a project in mind? Want to consult how to digitize your business? Drop a message and request a quote.`}
          </p>
        </div>
        <div className="p-5">
          <div className="col-span-2 grid">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
