import localFont from "next/font/local"

export const fontSans = localFont({
  src: [
    {
      path: "../public/fonts/lausanne/thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
})

// // export const fontSans = localFont({
// //   src: [
// //     {
// //       path: "../public/fonts/lausanne/thin.woff2",
// //       weight: "100",
// //       style: "normal",
// //     },
// //     {
// //       path: "../public/fonts/lausanne/thin-italic.woff2",
// //       weight: "100",
// //       style: "italic",
// //     },
// //     {
// //       path: "../public/fonts/lausanne/ultralight.woff2",
// //       weight: "200",
// //       style: "normal",
// //     },
// //     {
// //       path: "../public/fonts/lausanne/ultralight-italic.woff2",
// //       weight: "200",
// //       style: "italic",
// //     },
// //     {
// //       path: "../public/fonts/lausanne/light.woff2",
// //       weight: "300",
// //       style: "normal",
// //     },
// //     {
// //       path: "../public/fonts/lausanne/light-italic.woff2",
// //       weight: "300",
// //       style: "italic",
// //     },
// //     {
// //       path: "../public/fonts/lausanne/regular.woff2",
// //       weight: "400",
// //       style: "normal",
// //     },
// //     {
// //       path: "../public/fonts/lausanne/regular-italic.woff2",
// //       weight: "400",
// //       style: "italic",
// //     },
// //     {
// //       path: "../public/fonts/lausanne/medium.woff2",
// //       weight: "500",
// //       style: "normal",
// //     },
// //     {
// //       path: "../public/fonts/lausanne/medium-italic.woff2",
// //       weight: "500",
// //       style: "italic",
// //     },
// //     {
// //       path: "../public/fonts/lausanne/semibold.woff2",
// //       weight: "600",
// //       style: "normal",
// //     },
// //     {
// //       path: "../public/fonts/lausanne/semibold-italic.woff2",
// //       weight: "600",
// //       style: "italic",
// //     },
// //     {
// //       path: "../public/fonts/lausanne/bold.woff2",
// //       weight: "700",
// //       style: "normal",
// //     },
// //     {
// //       path: "../public/fonts/lausanne/bold-italic.woff2",
// //       weight: "700",
// //       style: "italic",
// //     },
// //     {
// //       path: "../public/fonts/lausanne/ultrabold.woff2",
// //       weight: "800",
// //       style: "normal",
// //     },
// //     {
// //       path: "../public/fonts/lausanne/ultrabold-italic.woff2",
// //       weight: "800",
// //       style: "italic",
// //     },
// //     {
// //       path: "../public/fonts/lausanne/black.woff2",
// //       weight: "900",
// //       style: "normal",
// //     },
// //     {
// //       path: "../public/fonts/lausanne/black-italic.woff2",
// //       weight: "900",
// //       style: "italic",
// //     },
// //   ],
// //   variable: "--font-sans",
// //   display: "swap",
// // })

export const fontSerif = localFont({
  src: [
    {
      path: "../public/fonts/neue-machina/ultralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-machina/light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-machina/regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-machina/medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-machina/bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-machina/ultrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-machina/black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-serif",
  display: "swap",
})
