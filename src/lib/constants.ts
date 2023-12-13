import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react"

export const navLinks = [
  {
    id: 1,
    filter: "",
    label: "work",
    href: "/",
  },
  {
    id: 2,
    filter: "about",
    label: "about",
    href: "/about",
  },
  {
    id: 3,
    filter: "snippets",
    label: "snippets",
    href: "/snippets",
  },
]

export const contacts = [
  {
    id: 1,
    label: "email",
    icon: MailIcon,
    href: "mailto:hi@laam.dev",
  },
  {
    id: 2,
    label: "instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/laamdev/",
  },
  {
    id: 3,
    label: "github",
    icon: GithubIcon,
    href: "https://github.com/",
  },
  {
    id: 4,
    label: "linkedin",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/laanayam/",
  },
]

export const now = new Date()

export const siteConfig = {
  name: "LAAM.DEV",
  description:
    "Creative React developer especialized in Next.js and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/laam_dev ",
    github: "https://github.com/laanayam333",
    site: "https://laam.dev",
  },
}
