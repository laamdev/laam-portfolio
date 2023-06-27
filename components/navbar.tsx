import Link from "next/link"

import { AnimatedLinks } from "@/components/global/animated-links"
import { Logo } from "@/components/global/logo"

export const Navbar = () => {
  return (
    <header>
      <div className="fixed left-5 top-5 z-10 -translate-x-1/2 text-white">
        xxx
        <Logo className="h-20 w-20 rounded-full bg-zinc-50 p-1" />
      </div>
      <nav className="fixed left-1/2 top-5 z-10 -translate-x-1/2 text-sm font-medium uppercase">
        <AnimatedLinks />
      </nav>
    </header>
  )
}
