import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicos from '@/components/Servicos';
import Numeros from '@/components/Numeros';
import PropostaValor from '@/components/PropostaValor';
import ComoFunciona from '@/components/ComoFunciona';
import QuemSomos from '@/components/QuemSomos';
import PalavraFundador from '@/components/PalavraFundador';
import Credibilidade from '@/components/Credibilidade';
import DepoimentosVideo from '@/components/DepoimentosVideo';
import FAQ, { FAQ_ITENS } from '@/components/FAQ';
import CTAFinal from '@/components/CTAFinal';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollReveal from '@/components/ScrollReveal';

const SITE_URL = 'https://cpcuidadoresprofissionais.com.br';
const TITULO = 'CP Cuidadores Profissionais | Rio de Janeiro e Niterói';
const DESCRICAO =
  'Cuidadores profissionais de idosos no Rio de Janeiro e Niterói. Desde 2011, cuidado especializado, humano e contínuo.';

export const metadata: Metadata = {
  robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    type: 'website',
    siteName: 'CP Cuidadores Profissionais',
    title: TITULO,
    description: DESCRICAO,
    url: `${SITE_URL}/`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITULO,
    description: DESCRICAO,
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

const ORG_ID = `${SITE_URL}/#organization`;

const SERVICOS_SCHEMA = [
  {
    name: 'Cuidador de idosos 24 horas',
    description:
      'Acompanhamento contínuo com escalas planejadas para períodos diurnos, noturnos e de madrugada, ajudando a manter a rotina de cuidado ao longo das 24 horas.',
  },
  {
    name: 'Cuidador de idosos diurno',
    description:
      'Apoio durante o dia em atividades de rotina, como higiene, alimentação, organização da medicação e estímulo cognitivo, conforme as necessidades definidas para cada caso.',
  },
  {
    name: 'Cuidador de idosos noturno',
    description:
      'Presença durante a noite, com atenção ao sono, à hidratação, à segurança e às necessidades que possam surgir nesse período.',
  },
  {
    name: 'Acompanhante hospitalar para idosos',
    description:
      'Acompanhamento durante internações, exames e consultas, oferecendo companhia ao idoso e apoio na comunicação da família com a equipe responsável.',
  },
  {
    name: 'Cuidados pós-cirúrgicos em casa',
    description:
      'Suporte na recuperação em casa, seguindo as orientações do protocolo médico e auxiliando na mobilidade e na rotina de cuidados indicada para o período.',
  },
  {
    name: 'Cuidado para idosos com Alzheimer e outras demências',
    description:
      'Cuidado adaptado à rotina de idosos com Alzheimer, Parkinson e outras condições neurodegenerativas, com profissionais preparados para necessidades específicas.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['MedicalBusiness', 'MedicalOrganization'],
      '@id': ORG_ID,
      name: 'CP Cuidadores Profissionais',
      alternateName: 'CP',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/quem-somos.webp`,
      description:
        'Empresa especializada em cuidadores profissionais para idosos no Rio de Janeiro e Niterói, oferecendo cuidado contínuo, humano e técnico desde 2011.',
      foundingDate: '2011-11-09',
      founder: { '@id': `${SITE_URL}/#founder` },
      taxID: '14.674.523/0001-28',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Nossa Senhora de Copacabana, 664',
        addressLocality: 'Rio de Janeiro',
        addressRegion: 'RJ',
        postalCode: '22050-001',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -22.9705145,
        longitude: -43.1865403,
      },
      areaServed: [
        { '@type': 'City', name: 'Rio de Janeiro' },
        { '@type': 'City', name: 'Niterói' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        url: 'https://wa.me/19209569439',
        availableLanguage: 'Portuguese',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'https://schema.org/Monday',
          'https://schema.org/Tuesday',
          'https://schema.org/Wednesday',
          'https://schema.org/Thursday',
          'https://schema.org/Friday',
          'https://schema.org/Saturday',
          'https://schema.org/Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
      award: 'Excelência de Qualidade 2017 – GRAN AWARDS',
      memberOf: {
        '@type': 'Organization',
        name: 'ABRAZ – Associação Brasileira de Alzheimer',
      },
      medicalSpecialty: ['https://schema.org/Geriatric', 'https://schema.org/Neurologic'],
      sameAs: ['https://www.instagram.com/cpcuidadoresprofissionais/'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços de cuidadores de idosos',
        itemListElement: SERVICOS_SCHEMA.map((servico) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: servico.name,
            serviceType: servico.name,
            description: servico.description,
          },
        })),
      },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#founder`,
      name: 'Arlindo César Pinto Nogueira',
      jobTitle: 'Fundador',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'CP Cuidadores Profissionais',
      publisher: { '@id': ORG_ID },
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: TITULO,
      description: DESCRICAO,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': ORG_ID },
      inLanguage: 'pt-BR',
      hasPart: [{ '@id': `${SITE_URL}/#faq` }],
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      url: `${SITE_URL}/`,
      mainEntity: FAQ_ITENS.map((item) => ({
        '@type': 'Question',
        name: item.pergunta,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.resposta,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Servicos />
        <Numeros />
        <PropostaValor />
        <ComoFunciona />
        <QuemSomos />
        <PalavraFundador />
        <Credibilidade />
        <DepoimentosVideo />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollReveal />
    </>
  );
}
