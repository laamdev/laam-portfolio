import Image from "next/image"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"

const CustomLink = (props: any) => {
  let href = props.href

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith("#")) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

// // const Pre = ({
// //   children,
// //   ...props
// // }: React.DetailedHTMLProps<
// //   React.HTMLAttributes<HTMLElement>,
// //   HTMLPreElement
// // >) => {
// //   return (
// //     <Code {...props} className="not-prose">
// //       {children}
// //     </Code>
// //   )
// // }

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

export const MDXComponents = ({ source }: { source: any }) => {
  return <MDXRemote components={components} source={source} />
}
