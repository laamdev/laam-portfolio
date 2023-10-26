"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

import { navLinks } from "@/lib/constants"
import { cn } from "@/lib/utils"

export const AnimatedLinks = () => {
  const pathname = usePathname()

  return (
    <div className="flex space-x-2 rounded-full bg-zinc-950/75 p-3 backdrop-blur">
      {navLinks.map((navLink) => (
        <Link
          key={navLink.id}
          href={navLink.href}
          // // onClick={() => setActiveTab(navLink.id)}
          className={
            (cn(pathname.startsWith(navLink.href) ? "" : "hover:text-white/60"),
            "relative rounded-full px-3 py-1.5 text-xs font-medium text-white transition focus-visible:outline-2")
          }
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {pathname.startsWith(navLink.href) && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {navLink.label}
        </Link>
      ))}
    </div>
  )
}
