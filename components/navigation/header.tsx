import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between border-b bg-background text-primary">
      <Link
        href="/"
        className="block p-5 font-serif text-xl font-black uppercase hover:bg-background hover:text-primary md:text-5xl"
      >
        LAAM
      </Link>

      <nav className="flex items-center p-5 text-sm uppercase md:gap-x-5 md:text-base">
        <Link
          href="/"
          className={buttonVariants({
            variant: "ghost",
            className: "cursor-pointer",
          })}
        >
          Work
        </Link>
        <Link
          href="/about"
          className={buttonVariants({
            variant: "ghost",
            size: "sm",
            className: "cursor-pointer",
          })}
        >
          About
        </Link>
        <Link
          href="/snippets"
          className={buttonVariants({
            variant: "ghost",
            className: "cursor-pointer",
          })}
        >
          Snippets
        </Link>
      </nav>

      {/* <Link href="mailto:hello@laam.dev" target="_blank"> */}
      <div className="hidden p-5">
        <Link
          href="/contact"
          className={buttonVariants({
            variant: "default",
            size: "sm",
          })}
        >
          Available Now
        </Link>
      </div>
      {/* <nav className="fixed left-1/2 top-4 z-10 -translate-x-1/2 text-sm font-medium uppercase">
        <AnimatedLinks />
      </nav> */}
    </header>
  )
}
