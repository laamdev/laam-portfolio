import Image from "next/image"
import {
  Check,
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Paperclip,
  Phone,
} from "@phosphor-icons/react/dist/ssr"

import { TechStackCore } from "@/components/about/tech-stack-core"
import { TechStackOther } from "@/components/about/tech-stack-other"
import { Heading } from "@/components/global/heading"
import { Label } from "@/components/global/label"
import { ClientsSection } from "@/components/about/clients-section"

export default async function AboutPage() {
  return (
    <main>
      <Heading isPageTitle className="border-b p-5">{`About`}</Heading>
      <div className="grid border-b md:grid-cols-5">
        <div className="col-span-3 md:border-r">
          <p className="flex flex-col gap-y-5 p-5">
            <span>
              {`I'm Luis Alejandro Anaya Marín, a creative React developer currently based in Madrid, Spain. I specialize in NextJS and Tailwind CSS and have production experience with the latest React features such as Server Components and Server Actions.`}
            </span>
            <span>
              {`I have 3+ years of experience working both as a freelance and in-house developer. I've developed and launched a wide range of projects including marketing sites, e-commerce shops, legacy code migrations, digital portfolios, web apps, and SaaS dashboards.`}
            </span>
          </p>
          <div className="grid border-t md:grid-cols-3 md:border-y">
            <div className="border-b p-5 md:col-span-3">
              <Label>{`Availability For`}</Label>
              <ul className="mt-1.5">
                <li className="flex items-center gap-x-2.5">
                  <Check weight="bold" className="size-4" />
                  <p>{`Short or medium term freelance projects`}</p>
                </li>
                <li className="flex items-center gap-x-2.5">
                  <Check weight="bold" className="size-4" />
                  <p>{`In-house hybrid positions (open to relocation)`}</p>
                </li>
                <li className="flex items-center gap-x-2.5">
                  <Check weight="bold" className="size-4" />
                  <p>{`Per-hour consultation`}</p>
                </li>
              </ul>
            </div>

            <div className="border-b p-5 md:col-span-1 md:border-b-0 md:border-r">
              <Label>{`Contact`}</Label>
              <ul className="mt-1.5 flex flex-col gap-y-1">
                <li>
                  <a
                    href="mailto:luis@laam.dev"
                    className="flex items-center gap-x-2.5"
                  >
                    <Envelope weight="fill" className="size-4" />
                    <p>{`Email`}</p>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+34689584226"
                    className="flex items-center gap-x-2.5"
                  >
                    <Phone weight="fill" className="size-4" />
                    <p>{`WhatsApp`}</p>
                  </a>
                </li>
              </ul>
            </div>

            <div className="border-b p-5 md:col-span-1 md:border-b-0 md:border-r">
              <Label>{`Socials`}</Label>
              <ul className="mt-1.5 flex flex-col gap-y-1">
                <li>
                  <a
                    href="https://github.com/laamdev"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-x-2.5"
                  >
                    <GithubLogo weight="fill" className="size-4" />
                    <p>{`Github`}</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/laamdev"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-x-2.5"
                  >
                    <InstagramLogo weight="fill" className="size-4" />
                    <p>{`Instagram`}</p>
                  </a>
                </li>
              </ul>
            </div>

            <div className="p-5 md:col-span-1">
              <Label>{`Resume`}</Label>
              <ul className="mt-1.5 flex flex-col gap-y-1">
                <li>
                  <a
                    href="https://cv.laam.dev/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-x-2.5"
                  >
                    <Paperclip weight="fill" className="size-4" />
                    <p>{`Download CV`}</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/laanayam/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-x-2.5"
                  >
                    <LinkedinLogo weight="fill" className="size-4" />
                    <p>{`Linkedin`}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative col-span-2 aspect-square border-t md:border-t-0">
          <div className="bg-foreground absolute inset-0 z-10 mix-blend-overlay"></div>
          <Image
            src="/images/about/profile.webp"
            alt="Luis Alejandro Anaya Marín"
            fill
            className="size-full object-cover grayscale"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3">
        <div className="border-b p-5 text-lg md:col-span-1 md:grid md:place-content-center md:border-b-0 md:border-r">
          <h2 className="font-serif text-6xl font-black uppercase md:text-9xl">
            {`Tech Stack`}
          </h2>
        </div>

        <div className="md:col-span-2">
          <TechStackCore />
          <TechStackOther />
        </div>
      </div>

      <ClientsSection />
    </main>
  )
}
