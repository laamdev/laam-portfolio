import Image from "next/image"
import Link from "next/link"
import { useMDXComponent } from "next-contentlayer/hooks"

const CustomLink = ({ href, children }: { href: string; children: string }) => {
  if (href.startsWith("/")) {
    return <Link href={href}>{children}</Link>
  }

  if (href.startsWith("#")) {
    return <a />
  }

  return <a target="_blank" rel="noopener noreferrer" />
}

const RoundedImage = ({ src, alt }: { src: string; alt: string }) => {
  return <Image src={src} alt={alt} className="rounded-lg" />
}

const components: any = {
  Image: RoundedImage,
  a: CustomLink,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}
