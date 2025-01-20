export interface Stack {
  tech: string
  category: string
}

export interface ProjectFrontmatter {
  priority: number
  isFeatured?: boolean
  inProgress?: boolean
  title: string
  category: string
  functionality: string
  year: number
  coverImage: string
  agency?: string
  client?: string
  description: string
  siteUrl?: string
  codeUrl?: string
  role: string
  stack: string
  summary: string
}

export interface SnippetFrontmatter {
  isFeatured?: boolean
  title: string
  cover: string
  pubDate: string
}
