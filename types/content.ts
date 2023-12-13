export interface Stack {
  tech: string
  category: string
}

export interface ProjectFrontmatter {
  priority: number
  isFeatured: boolean
  title: string
  agency: string
  category: string
  year: boolean
  coverImage: string
  summary: string
  description: string
  siteUrl: string
  codeUrl: string
  role: string[]
  stack: Stack[]
}

export interface SnippetFrontmatter {
  title: string
  isFeatured: boolean
  cover: string
  pubDate: string
  slug: string
}
