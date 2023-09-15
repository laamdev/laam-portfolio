import Link from "next/link"

export const Header = () => {
  return (
    <header className="fixed z-50 flex h-16 w-full items-center justify-between border-b bg-background px-5 text-primary md:h-24 md:px-10">
      <Link
        href="/"
        className="block font-serif text-xl font-bold uppercase md:text-3xl"
      >
        LAAM
      </Link>

      <nav className="flex gap-x-2.5 text-sm uppercase md:gap-x-5 md:text-base">
        <div>Work</div>
        <div>About</div>
        <div>Blog</div>
      </nav>

      <div className="hidden text-sm hover:underline md:block">
        <a href="mailto:hello@laam.dev" target="_blank">
          Available Now
        </a>
      </div>

      {/* <nav className="fixed left-1/2 top-4 z-10 -translate-x-1/2 text-sm font-medium uppercase">
        <AnimatedLinks />
      </nav> */}
    </header>
  )
}
