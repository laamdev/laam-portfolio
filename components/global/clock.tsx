"use client"

import { useEffect, useState } from "react"

interface Props {
  time: number
}

export const Clock = ({ time: initial }: Props) => {
  const [time, setTime] = useState(new Date(initial))

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="tabular-nums">
      {time.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}
    </div>
  )
}
