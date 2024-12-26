import Image from "next/image"
import React, { ComponentPropsWithoutRef } from "react"
// // import { Link } from "next-view-transitions"
// // import { highlight } from "sugar-high"

// // type HeadingProps = ComponentPropsWithoutRef<"h1">
// // type ParagraphProps = ComponentPropsWithoutRef<"p">
// // type ListProps = ComponentPropsWithoutRef<"ul">
// // type ListItemProps = ComponentPropsWithoutRef<"li">
// // type AnchorProps = ComponentPropsWithoutRef<"a">
// // type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">

const CustomLink = (props: any) => {}

const CustomBullet = ({ children }: { children: string }) => {
  return <li className="list-disc">{children}</li>
}

const CustomImage = ({ src, alt }: { src: string; alt: string }) => {
  return <Image src={src} alt={alt} className="rounded-lg" />
}

const components = {
  a: CustomLink,
  li: CustomBullet,
  Image: CustomImage,
}

declare global {
  type MDXProvidedComponents = typeof components
}

export function useMDXComponents(): MDXProvidedComponents {
  return components
}
