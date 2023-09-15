// // import { Tweet } from "react-tweet"

import Image from "next/image"

import { TechStackCore } from "@/components/about/tech-stack-core"
import { TechStackOther } from "@/components/about/tech-stack-other"

// // import { components } from "@/components/react-tweet/tweet-components"

export default async function AboutPage() {
  return (
    <main className="pt-16 md:pt-24">
      <div className="border-b p-5 font-serif text-5xl font-black uppercase md:text-9xl">
        About Me
      </div>
      <div className="grid border-b md:grid-cols-2">
        <div className="col-span-1 border-r p-5">
          <p className="text-base md:text-xl">
            {`I'm Luis Alejandro Anaya Marín, a freelance full stack web developer based in Madrid. I specialize in Next.js and Tailwind CSS.`}
          </p>
        </div>
        <div className="relative aspect-square">
          <div className="absolute inset-0 z-10 bg-primary mix-blend-overlay" />
          <Image
            src="/images/about.webp"
            alt="Luis Alejandro Anaya Marín"
            fill
            className="grayscale "
          />
        </div>
      </div>

      <div className="grid border-b md:grid-cols-3">
        <div className="border-b p-5 text-lg md:col-span-1 md:grid md:place-content-center md:border-b-0 md:border-r">
          <h2 className="font-serif text-5xl font-black uppercase md:text-9xl">
            Tech Stack
          </h2>
        </div>

        <div className="md:col-span-2">
          <TechStackCore />
          <TechStackOther />
        </div>
      </div>
      {/* <TechStack /> */}
      {/* <div className="custom-tweet">
        <Tweet id="1688622631183069184" components={components} />
      </div> */}
      {/* <AboutCard /> */}
    </main>
  )
}
