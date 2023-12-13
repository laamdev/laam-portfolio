import React from "react"

import { cn } from "@/lib/utils"

export const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 1080 1080"
      className={cn(className)}
    >
      <path
        fill="none"
        stroke="#FAFAFA"
        strokeWidth="42.37"
        d="M0 0v1080h1080"
        transform="translate(-404.803 -404.803) scale(1.74964) translate(248.649 248.649) scale(.53954)"
      ></path>
      <path
        fill="none"
        stroke="#FAFAFA"
        strokeWidth="42.37"
        d="M0 1080L269.999 0 540 1080"
        transform="translate(-404.803 -404.803) scale(1.74964) translate(248.649 248.649) scale(.53954)"
      ></path>
      <path
        fill="none"
        stroke="#FAFAFA"
        strokeWidth="42.37"
        d="M0 1080L269.999 0 540 1080"
        transform="translate(-404.803 -404.803) scale(1.74964) translate(540 248.649) scale(.53954)"
      ></path>
      <path
        fill="none"
        stroke="#FAFAFA"
        strokeWidth="172.04"
        d="M0 540h1080"
        transform="translate(-404.803 -404.803) scale(1.74964) matrix(.13289 0 0 .13289 321.719 468.242)"
      ></path>
      <path
        fill="none"
        stroke="#FAFAFA"
        strokeWidth="172.04"
        d="M0 540h1080"
        transform="translate(-404.803 -404.803) scale(1.74964) matrix(.13289 0 0 .13289 614.63 468.242)"
      ></path>
    </svg>
  )
}
