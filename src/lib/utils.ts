import { type ClassValue, clsx } from "clsx"
import { format, parseISO } from "date-fns"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const convertTime = (time: number) => {
  return new Date(time).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export const pick = (obj: any, keys: any) => {
  return keys.reduce((acc: any, key: any) => {
    acc[key] = obj[key]
    return acc
  }, {})
}

export const formatDate = (date: string): string =>
  format(parseISO(date), "LLLL do yyyy")
