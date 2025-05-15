import { MetadataRoute } from 'next'
import { getCars } from '@/lib/cars'
import { getBlogs } from '@/lib/blogs'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.goacarrental.in'
  
  // Get all cars and blogs for dynamic routes
  const cars = await getCars()
  const blogs = await getBlogs()
  
  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/cars`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ]
  
  // Dynamic routes for cars
  const carRoutes = cars.map((car) => ({
    url: `${baseUrl}/cars/${car.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))
  
  // Dynamic routes for blogs with enhanced metadata
  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
    images: [{
      url: `${baseUrl}${blog.coverImage}`,
      title: blog.title,
      caption: blog.excerpt
    }]
  }))
  
  // Combine all routes
  return [...staticRoutes, ...carRoutes, ...blogRoutes]
} 