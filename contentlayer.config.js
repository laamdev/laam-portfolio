import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    isFeatured: {
      type: "boolean",
      default: false,
    },
    agency: {
      type: "enum",
      options: ["freelance", "in-house", "personal"],
      default: "freelance",
      required: true,
    },
    category: {
      type: "string",
      required: true,
    },
    client: {
      type: "string",
    },
    year: {
      type: "number",
      required: true,
    },
    coverImage: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    siteUrl: {
      type: "string",
      required: true,
    },
    role: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    stack: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
  },
  computedFields,
}))

export const Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: `snippets/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
    },
    publishedAt: {
      type: "date",
      required: true,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Project, Snippet],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted")
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"]
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
})
