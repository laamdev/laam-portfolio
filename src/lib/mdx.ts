import fs from "fs"
import path from "path"

export type ProjectMetadata = {
  priority: number
  isFeatured?: boolean
  title: string
  agency: string
  category: string
  functionality: string
  year: number
  coverImage: string
  summary: string
  description: string
  siteUrl: string
  codeUrl: string
  role: string
  stack: string
}

export type SnippetMetadata = {
  isFeatured: boolean
  title: string
  cover: string
  pubDate: string
}

function parseFrontmatter<T>(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, "").trim()
  let frontMatterLines = frontMatterBlock.trim().split("\n")
  let metadata: Partial<T> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ")
    let value = valueArr.join(": ").trim()
    value = value.replace(/^['"](.*)['"]$/, "$1")

    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim())
        .join(", ")
    }

    metadata[key.trim() as keyof T] = value as any
  })

  return { metadata: metadata as T, content }
}

function getMDXFiles(dir: string): string[] {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => path.join(dir, file))
}

function getMDXData<T>(dir: string) {
  let mdxFiles = getMDXFiles(dir)

  return mdxFiles.map((filePath) => {
    let { metadata, content } = readMDXFile<T>(filePath)
    let slug = path.basename(filePath, ".mdx")

    return {
      metadata,
      slug,
      content,
    }
  })
}

function readMDXFile<T>(filePath: string) {
  try {
    let rawContent = fs.readFileSync(filePath, "utf-8")
    return parseFrontmatter<T>(rawContent)
  } catch (error) {
    console.error("Error reading file:", filePath, error)
    throw error
  }
}

export function getAllProjects() {
  const projectPath = path.join(process.cwd(), "src", "app", "work", "content")
  return getMDXData<ProjectMetadata>(projectPath)
}

export function getAllSnippets() {
  const snippetPath = path.join(
    process.cwd(),
    "src",
    "app",
    "snippets",
    "content"
  )
  return getMDXData<SnippetMetadata>(snippetPath)
}
