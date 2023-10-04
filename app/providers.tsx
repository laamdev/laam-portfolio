"use client"

import React, { ReactNode } from "react"
import { Toaster } from "sonner"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster position="top-right" richColors expand closeButton />
    </>
  )
}
