import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export const Header = () => {
  return (
    <header className="bg-background text-foreground flex items-center justify-between border-b p-5">
      <nav className="col-span-1 flex justify-start text-sm uppercase md:gap-x-5 md:text-base">
        <a
          href="/"
          className="tw-transition hover:border-foreground rounded-full border-2 border-transparent px-1.5 py-0.5 text-sm font-medium uppercase"
        >
          Work
        </a>
        <a
          href="/about"
          className="tw-transition hover:border-foreground rounded-full border-2 border-transparent px-1.5 py-0.5 text-sm font-medium uppercase"
        >
          About
        </a>
        <a
          href="/snippets"
          className="tw-transition hover:border-foreground rounded-full border-2 border-transparent px-1.5 py-0.5 text-sm font-medium uppercase"
        >
          Snippets
        </a>
      </nav>

      {/* <a
    href="/"
    className="col-span-1 flex justify-center font-serif text-xl font-black uppercase hover:bg-background hover:text-foreground md:text-4xl"
  >
    LAAM
  </a>  */}

      {/* <Link href="mailto:hello@laam.dev" target="_blank"> */}
      <div className="col-span-1 flex justify-end">
        <a
          href="mailto:luis@laam.dev"
          target="_blank"
          rel="noreferrer"
          className="tw-transition border-foreground hover:bg-foreground hover:text-background rounded-full
  border-2 px-1.5 py-0.5 text-sm font-medium uppercase"
        >
          {`Available Now`}
        </a>
      </div>
      {/* <nav className="fixed left-1/2 top-4 z-10 -translate-x-1/2 text-sm font-medium uppercase">
	  <AnimatedLinks />
	</nav> */}
    </header>

    // // <header classNameName="bg-background text-primary flex w-full items-center justify-between border-b">
    // //   <Link
    // //     href="/"
    // //     classNameName="hover:bg-background hover:text-primary block p-5 font-serif text-xl font-black uppercase md:text-5xl"
    // //   >
    // //     LAAM
    // //   </Link>

    // //   <nav classNameName="flex items-center p-5 text-sm uppercase md:gap-x-5 md:text-base">
    // //     <Link
    // //       href="/"
    // //       classNameName={buttonVariants({
    // //         variant: "ghost",
    // //         classNameName: "cursor-pointer",
    // //       })}
    // //     >
    // //       Work
    // //     </Link>
    // //     <Link
    // //       href="/about"
    // //       classNameName={buttonVariants({
    // //         variant: "ghost",
    // //         size: "sm",
    // //         classNameName: "cursor-pointer",
    // //       })}
    // //     >
    // //       About
    // //     </Link>
    // //     <Link
    // //       href="/snippets"
    // //       classNameName={buttonVariants({
    // //         variant: "ghost",
    // //         classNameName: "cursor-pointer",
    // //       })}
    // //     >
    // //       Snippets
    // //     </Link>
    // //   </nav>

    // //   {/* <Link href="mailto:hello@laam.dev" target="_blank"> */}
    // //   <div classNameName="hidden p-5">
    // //     <Link
    // //       href="/contact"
    // //       classNameName={buttonVariants({
    // //         variant: "default",
    // //         size: "sm",
    // //       })}
    // //     >
    // //       Available Now
    // //     </Link>
    // //   </div>
    // //   <nav classNameName="fixed left-1/2 top-4 z-10 -translate-x-1/2 text-sm font-medium uppercase">
    // //     <AnimatedLinks />
    // //   </nav>
    // // </header>
  )
}
