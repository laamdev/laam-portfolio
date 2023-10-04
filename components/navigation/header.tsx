import Link from "next/link"

export const Header = () => {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b bg-background px-5 text-primary md:h-24 md:px-10">
      <Link
        href="/"
        className="block font-serif text-xl font-bold uppercase md:text-3xl"
      >
        LAAM
      </Link>

      <nav className="flex gap-x-2.5 text-sm uppercase md:gap-x-5 md:text-base">
        <Link href="/">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/snippets">Snippets</Link>
      </nav>

      <div className="hidden text-sm hover:underline md:block">
        {/* <Link href="mailto:hello@laam.dev" target="_blank"> */}
        <Link href="/contact">Available Now</Link>
      </div>

      {/* <nav className="fixed left-1/2 top-4 z-10 -translate-x-1/2 text-sm font-medium uppercase">
        <AnimatedLinks />
      </nav> */}
    </header>
  )
}
