import type { MetadataRoute } from 'next'

// Necessário para gerar o arquivo no build quando o site é publicado como exportação estática.
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://cpcuidadoresprofissionais.com.br/sitemap.xml',
    host: 'https://cpcuidadoresprofissionais.com.br',
  }
}
