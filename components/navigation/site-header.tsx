import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { AnimatedLinks } from "@/components/global/animated-links"
import { Logo } from "@/components/global/logo"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header>
      <div className="mt-5 flex items-center justify-between px-5 text-white md:px-10">
        <Link href="/" className="hidden md:block">
          <Logo className="h-7 w-7 md:h-10 md:w-10" />
        </Link>
        <div className="hidden text-sm hover:underline md:block">
          <a href="mailto:hello@laam.dev" target="_blank">
            Available Now
          </a>
        </div>
      </div>
      <nav className="fixed left-1/2 top-4 z-10 -translate-x-1/2 text-sm font-medium uppercase">
        {/* <Link href="/" className="h-12 w-12">
      <Logo />
    </Link> */}
        <AnimatedLinks />
      </nav>
    </header>
    // <header className="sticky top-0 z-40 w-full border-b bg-background">
    //   <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
    //     <MainNav items={siteConfig.mainNav} />
    //     <div className="flex flex-1 items-center justify-end space-x-4">
    //       <nav className="flex items-center space-x-1">
    //         <Link
    //           href={siteConfig.links.github}
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           <div
    //             className={buttonVariants({
    //               size: "sm",
    //               variant: "ghost",
    //             })}
    //           >
    //             <Icons.gitHub className="h-5 w-5" />
    //             <span className="sr-only">GitHub</span>
    //           </div>
    //         </Link>
    //         <Link
    //           href={siteConfig.links.twitter}
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           <div
    //             className={buttonVariants({
    //               size: "sm",
    //               variant: "ghost",
    //             })}
    //           >
    //             <Icons.twitter className="h-5 w-5 fill-current" />
    //             <span className="sr-only">Twitter</span>
    //           </div>
    //         </Link>
    //         <ThemeToggle />
    //       </nav>
    //     </div>
    //   </div>
    // </header>
  )
}
