// // import { Tweet } from "react-tweet"

import { PaperClipIcon } from "@heroicons/react/24/outline"
import {
  CheckIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react"
import Image from "next/image"

import { TechStackCore } from "@/components/about/tech-stack-core"
import { TechStackOther } from "@/components/about/tech-stack-other"
import { Heading } from "@/components/global/heading"
import { Label } from "@/components/global/label"

// // import { components } from "@/components/react-tweet/tweet-components"

export default async function AboutPage() {
  return (
    <main>
      <Heading isPageTitle className="border-b p-5">{`About`}</Heading>
      <div className="grid border-b md:grid-cols-5">
        <div className="col-span-3 md:border-r">
          <p className="flex flex-col gap-y-5 p-5">
            <span>
              {`I'm Luis Alejandro Anaya Marín, a freelance full stack developer currently based in Madrid, Spain.`}
            </span>
            <span>
              {`I specialize in NextJS and Tailwind CSS and have production experience with the latest React features such as Server Components and Server Actions.`}
            </span>
          </p>
          <div className="grid border-t md:grid-cols-3 md:border-y">
            <div className="border-b p-5 md:col-span-3">
              <Label>{`Approach`}</Label>
              <ul className="mt-1.5">
                <li className="flex items-center gap-x-2.5">
                  <CheckIcon className="h-4 w-4" />
                  <p>{`Short or medium term freelance projects`}</p>
                </li>
                <li className="flex items-center gap-x-2.5">
                  <CheckIcon className="h-4 w-4" />
                  <p>{`In-house hybrid positions (open to relocation)`}</p>
                </li>
                <li className="flex items-center gap-x-2.5">
                  <CheckIcon className="h-4 w-4" />
                  <p>{`Per-hour consultation`}</p>
                </li>
              </ul>
            </div>

            <div className="border-b p-5 md:col-span-3">
              <Label>{`Availability`}</Label>
              <ul className="mt-1.5">
                <li className="flex items-center gap-x-2.5">
                  <CheckIcon className="h-4 w-4" />
                  <p>{`Short or medium term freelance projects`}</p>
                </li>
                <li className="flex items-center gap-x-2.5">
                  <CheckIcon className="h-4 w-4" />
                  <p>{`In-house hybrid positions (open to relocation)`}</p>
                </li>
                <li className="flex items-center gap-x-2.5">
                  <CheckIcon className="h-4 w-4" />
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
                    <MailIcon className="h-4 w-4" />
                    <p>{`Email`}</p>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+34689584226"
                    className="flex items-center gap-x-2.5"
                  >
                    <PhoneIcon className="h-4 w-4" />
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
                    href="https://github.com/laanayam333"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-x-2.5"
                  >
                    <GithubIcon className="h-4 w-4" />
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
                    <InstagramIcon className="h-4 w-4" />
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
                    href="/luis-anaya-cv.pdf"
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-x-2.5"
                  >
                    <PaperClipIcon className="h-4 w-4" />
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
                    <LinkedinIcon className="h-4 w-4" />
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
            className="h-full w-full object-cover grayscale"
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
      {/* <h1 classNameName="border-b p-5 font-serif text-5xl font-black uppercase md:text-9xl">
        About
      </h1>
      <div classNameName="grid border-b md:grid-cols-2">
        <div classNameName="col-span-1 p-5 md:border-r">
          <p classNameName="text-base md:text-xl">
            {`I'm Luis Alejandro Anaya Marín, a freelance full stack web developer based in Madrid. I specialize in Next.js and Tailwind CSS.`}
          </p>
        </div>
        <div classNameName="relative aspect-square border-t md:border-t-0">
          <div classNameName="absolute inset-0 z-10 bg-primary mix-blend-overlay" />
          <Image
            src="/images/about.webp"
            alt="Luis Alejandro Anaya Marín"
            fill
            classNameName="grayscale "
          />
        </div>
      </div>

      <div classNameName="grid border-b md:grid-cols-3">
        <div classNameName="border-b p-5 text-lg md:col-span-1 md:grid md:place-content-center md:border-b-0 md:border-r">
          <h2 classNameName="font-serif text-5xl font-black uppercase md:text-9xl">
            Tech Stack
          </h2>
        </div>

        <div classNameName="md:col-span-2">
          <TechStackCore />
          <TechStackOther />
        </div>
      </div> */}
      {/* <TechStack /> */}
      {/* <div classNameName="custom-tweet">
        <Tweet id="1688622631183069184" components={components} />
      </div> */}
      {/* <AboutCard /> */}
    </main>
  )
}
