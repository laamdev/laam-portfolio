import { contacts, now } from "@/lib/constants"
import { Clock } from "@/components/global/clock"
import { Logo } from "@/components/global/logo"

export const Footer = () => {
  return (
    <footer className="relative bottom-0 mx-auto flex w-full flex-col gap-y-5 pb-20 pt-40 text-xs font-medium uppercase text-zinc-300 md:px-10">
      <div className="flex justify-between">
        <div className="flex gap-x-1">
          <Clock time={now.getTime()} />
          <span>{` · `}</span>
          <span>{`Madrid, ES`}</span>
        </div>
        <ul className="flex gap-x-5">
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className="tw-transition hover:text-branding-300"
            >
              <a
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                aria-label={contact.label}
              >
                <contact.icon className="tw-transition h-4 w-4 hover:scale-105" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-zinc-700">
        <small>{`© LAAM.DEV ${now.getFullYear()}`}</small>
      </div>
    </footer>
  )
}
