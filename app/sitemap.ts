import { MetadataRoute } from 'next'
import { getBlogs } from '@/lib/blogs'
import { getCars } from '@/lib/cars'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://goacarrental.in'
  
  // Get all blogs
  const blogs = await getBlogs()
  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Get all cars
  const cars = await getCars()
  const carUrls = cars.map((car) => ({
    url: `${baseUrl}/self-drive-cars/${car.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }))

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/self-drive-cars`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/airport-transfer`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/car-rental-in-goa-with-driver`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/luxury-cars`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]

  return [...staticPages, ...carUrls, ...blogUrls]
} 