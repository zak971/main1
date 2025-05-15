import type { BlogType } from "@/types/blog"

interface BlogSchemaProps {
  blog: BlogType
}

export function BlogSchema({ blog }: BlogSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "image": `https://www.goacarrental.in${blog.coverImage}`,
    "datePublished": blog.publishedAt,
    "dateModified": blog.publishedAt,
    "author": {
      "@type": "Organization",
      "name": "Goa Car Rental",
      "url": "https://www.goacarrental.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Goa Car Rental",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.goacarrental.in/images/logo.png"
      }
    },
    "description": blog.excerpt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.goacarrental.in/blogs/${blog.slug}`
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.goacarrental.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs",
        "item": "https://www.goacarrental.in/blogs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blog.title,
        "item": `https://www.goacarrental.in/blogs/${blog.slug}`
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
} 