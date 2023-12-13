import { siteConfig } from "@/lib/constants"

export const LdjsonArticle = ({
  headline,
  datePublished,
  dateModified,
  description,
  image,
  url,
  author,
}: {
  headline?: string
  datePublished?: string
  dateModified?: string
  description?: string
  image?: string
  url?: string
  author?: string
}) => {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline,
          datePublished,
          dateModified,
          description,
          image: image
            ? `${siteConfig.links.site}/${image}`
            : `${siteConfig.links.site}/og?title=${headline}`,
          url: `${siteConfig.links.site}/snippets/${url}`,
          author: {
            "@type": "Person",
            name: author,
          },
        }),
      }}
    />
  )
}
