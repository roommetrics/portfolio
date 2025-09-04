import { MetadataRoute } from 'next'
import { statSync } from 'fs'
import path from 'path'

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://roommetrics.dev'
}

function fileMTime(filePath: string): Date {
  try {
    const st = statSync(filePath)
    return st.mtime
  } catch {
    return new Date()
  }
}

function entry(
  route: string,
  file: string,
  opts: { changeFrequency: ChangeFrequency; priority: number; images?: string[] }
): MetadataRoute.Sitemap[number] {
  const base = getBaseUrl()
  const filePath = path.join(process.cwd(), file)
  const lastModified = fileMTime(filePath)
  const url = `${base}${route}`
  const images = opts.images?.map((img) => (img.startsWith('http') ? img : `${base}${img}`))
  return {
    url,
    lastModified,
    changeFrequency: opts.changeFrequency,
    priority: opts.priority,
    ...(images && images.length ? { images } : {}),
    alternates: {
      languages: {
        'x-default': url,
        de: url,
      },
    },
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry('/', 'app/page.tsx', {
      changeFrequency: 'weekly',
      priority: 1.0,
      images: ['/Banner.png'],
    }),
    entry('/about', 'app/about/page.tsx', {
      changeFrequency: 'monthly',
      priority: 0.9,
      images: ['/Banner.png'],
    }),
    entry('/services', 'app/services/page.tsx', {
      changeFrequency: 'monthly',
      priority: 0.9,
      images: ['/services-image.jpg'],
    }),
    entry('/contact', 'app/contact/page.tsx', {
      changeFrequency: 'monthly',
      priority: 0.7,
    }),
    entry('/impressum', 'app/impressum/page.tsx', {
      changeFrequency: 'yearly',
      priority: 0.2,
    }),
    entry('/datenschutz', 'app/datenschutz/page.tsx', {
      changeFrequency: 'yearly',
      priority: 0.2,
    }),
    entry('/agb', 'app/agb/page.tsx', {
      changeFrequency: 'yearly',
      priority: 0.2,
    }),
  ]
}
