import { NavButton } from "@/components/global/nav-button"

export const Header = () => {
  return (
    <header className="bg-background text-foreground flex items-center justify-between border-b p-5">
      <nav className="col-span-1 flex justify-start text-sm uppercase md:gap-x-5 md:text-base">
        <NavButton href="/" variant="ghost">{`Work`}</NavButton>
        <NavButton href="/about" variant="ghost">{`About`}</NavButton>
        <NavButton href="/snippets" variant="ghost">{`Snippets`}</NavButton>
      </nav>

      <div className="col-span-1 flex justify-end">
        <NavButton
          href="mailto:luis@laam.dev"
          variant="outline"
        >{`Available Now`}</NavButton>
      </div>
    </header>
  )
}
