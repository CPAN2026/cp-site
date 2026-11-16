import type { MetadataRoute } from 'next'

// Necessário para gerar o arquivo no build quando o site é publicado como exportação estática.
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: 'https://cpcuidadoresprofissionais.com.br/',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  }]
}
