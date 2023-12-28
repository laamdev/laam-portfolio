export interface Stack {
  tech: string
  category: string
}

export interface ProjectFrontmatter {
  priority: number
  isFeatured?: boolean
  title: string
  agency: string
  category: "personal" | "comercial"
  year: number
  coverImage: string
  summary: string
  description: string
  siteUrl: string
  codeUrl: string
  role: string
  stack: string
}

export interface SnippetFrontmatter {
  isFeatured?: boolean
  title: string
  cover: string
  pubDate: string
}
