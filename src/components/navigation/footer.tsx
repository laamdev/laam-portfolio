import { contacts, now } from "@/lib/constants"
import { NowPlaying } from "@/components/about/now-playing"
import { Clock } from "@/components/global/clock"

export const Footer = () => {
  return (
    <footer className="relative bottom-0 mx-auto flex w-full flex-col gap-y-5 px-2.5 py-5 text-xs font-medium uppercase md:px-10">
      <div className="flex justify-between">
        <div className="flex gap-x-1">
          <Clock time={now.getTime()} />
          <span>{` · `}</span>
          <span>{`Madrid, ES`}</span>
        </div>

        <NowPlaying />

        {/* <ul className="flex gap-x-2.5 md:gap-x-5">
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
        </ul> */}
      </div>
    </footer>
  )
}
