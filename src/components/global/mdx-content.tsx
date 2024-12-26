"use client"

import { MDXRemote } from "next-mdx-remote"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

interface MdxContentProps {
  source: MDXRemoteSerializeResult
}

export const MdxContent = ({ source }: MdxContentProps) => {
  return <MDXRemote {...source} />
}
