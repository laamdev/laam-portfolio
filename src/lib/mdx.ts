import fs from "fs"
import path from "path"
// // import { globby } from "globby"

import { ProjectFrontmatter, SnippetFrontmatter } from "@/types/mdx"

const projectsRootDirectory = path.join(
  process.cwd(),
  "src",
  "content",
  "projects"
)
const snippetsRootDirectory = path.join(
  process.cwd(),
  "src",
  "content",
  "snippets"
)

function parseSnippetsFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, "").trim()
  let frontMatterLines = frontMatterBlock.trim().split("\n")
  let metadata: Partial<SnippetFrontmatter> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ")
    let value = valueArr.join(": ").trim()
    value = value.replace(/^['"](.*)['"]$/, "$1")
    // @ts-expect-error
    metadata[key.trim() as keyof SnippetFrontmatter] = value
  })

  return { metadata: metadata as SnippetFrontmatter, content }
}

function parseProjectsFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, "").trim()
  let frontMatterLines = frontMatterBlock.trim().split("\n")
  let metadata: Partial<ProjectFrontmatter> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ")
    let value = valueArr.join(": ").trim()
    value = value.replace(/^['"](.*)['"]$/, "$1")
    // @ts-expect-error
    metadata[key.trim() as keyof ProjectFrontmatter] = value
  })

  return { metadata: metadata as ProjectFrontmatter, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx")
}

function readSnippetsMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8")
  return parseSnippetsFrontmatter(rawContent)
}

function readProjectsMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8")
  return parseProjectsFrontmatter(rawContent)
}

// // function extractTweetIds(content) {
// //   let tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g)
// //   return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]) || []
// // }

function getSnippetsMDXData(dir) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readSnippetsMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))
    // // let tweetIds = extractTweetIds(content)
    return {
      metadata,
      slug,
      // // tweetIds,
      content,
    }
  })
}

function getProjectsMDXData(dir) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readProjectsMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))
    // // let tweetIds = extractTweetIds(content)
    return {
      metadata,
      slug,
      // // tweetIds,
      content,
    }
  })
}

export function getSnippets() {
  return getSnippetsMDXData(path.join(snippetsRootDirectory))
}

export function getProjects() {
  return getProjectsMDXData(path.join(projectsRootDirectory))
}
