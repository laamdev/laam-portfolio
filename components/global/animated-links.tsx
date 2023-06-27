"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import { navLinks } from "@/lib/constants"

export const AnimatedLinks = () => {
  const [activeTab, setActiveTab] = useState(navLinks[0].id)

  return (
    <div className="flex space-x-2 rounded-full bg-zinc-950/75 p-3 backdrop-blur">
      {navLinks.map((navLink) => (
        <Link
          href={navLink.href}
          key={navLink.id}
          onClick={() => setActiveTab(navLink.id)}
          className={`${
            activeTab === navLink.id ? "" : "hover:text-white/60"
          } relative rounded-full px-3 py-1.5 text-xs font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === navLink.id && (
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
