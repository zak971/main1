import type { BlogType } from "@/types/blog"

interface BlogSchemaProps {
  blog: BlogType
}

// Helper function to parse HTML and extract FAQs
function extractFAQsFromHtml(htmlContent: string) {
  const faqs: { question: string; answer: string }[] = []
  const faqSectionIdentifier = '<h2 class="text-3xl font-bold mb-8 text-white">Frequently Asked Questions</h2>'
  const faqSectionIndex = htmlContent.indexOf(faqSectionIdentifier)

  if (faqSectionIndex === -1) {
    return faqs // No FAQ section found
  }

  // Start parsing from the beginning of the FAQ section
  const faqSectionHtml = htmlContent.substring(faqSectionIndex)

  // Basic regex to find Q&A pairs within the expected structure
  // This looks for <h3> followed by <p> within a div structure after the main FAQ heading
  const qaRegex = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g
  let match

  while ((match = qaRegex.exec(faqSectionHtml)) !== null) {
    // Clean up basic HTML tags from extracted text if necessary
    const question = match[1].replace(/<[^>]*>/g, '').trim()
    const answer = match[2].replace(/<[^>]*>/g, '').trim()
    if (question && answer) {
      faqs.push({ question, answer })
    }
  }

  return faqs
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

  const faqs = extractFAQsFromHtml(blog.content);

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  )
} 