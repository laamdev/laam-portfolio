import Image from "next/image"

import { Heading } from "@/components/global/heading"
import { Subheading } from "@/components/global/subheading"
import { WorkSection } from "@/components/home/work-section"

export default async function HomeRoute() {
  return (
    <main>
      <div className="grid border-b md:grid-cols-2">
        <div className="border-r font-serif">
          <Heading isPageTitle className="border-b p-5">{`LAAM`}</Heading>

          <div className="border-b p-5 ">
            <Subheading>
              {`Fullstack Developer specialized in NextJS, Tailwind CSS & Sanity`}
            </Subheading>
          </div>
        </div>
        <div className="relative flex items-center justify-center overflow-hidden">
          <Image
            src="/images/home/hero-icon.webp"
            alt="Line art circle."
            width={1080}
            height={1080}
            className="animate-spin-slow object-center"
          />
        </div>
      </div>

      <WorkSection />
    </main>
  )
}
