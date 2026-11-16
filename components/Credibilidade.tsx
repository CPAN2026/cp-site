const credenciais = [
  {
    id: 1,
    imagem: '/gran-awards.webp',
    largura: 480,
    altura: 484,
    titulo: 'GRAN AWARDS',
    descricao: 'Excelência de Qualidade 2017',
    link: 'https://www.inqq.com.br/',
  },
  {
    id: 2,
    imagem: '/abraz.webp',
    largura: 480,
    altura: 128,
    titulo: 'ABRAZ',
    descricao: 'Associação Brasileira de Alzheimer',
    link: 'https://abraz.org.br/',
  },
  {
    id: 3,
    imagem: '/abrinq.webp',
    largura: 480,
    altura: 358,
    titulo: 'FUNDAÇÃO ABRINQ',
    descricao: 'Pelos Direitos da Criança e do Adolescente',
    link: 'https://www.fadc.org.br/',
  },
]

const apoiadores = [
  { imagem: '/apoio-medicos-sem-fronteiras.webp', largura: 640, altura: 462, nome: 'Médicos Sem Fronteiras' },
  { imagem: '/apoio-raio-x.webp', largura: 640, altura: 460, nome: 'Raio-X' },
]

export default function Credibilidade() {
  return (
    <section id="reconhecimentos" aria-labelledby="reconhecimentos-titulo" className="py-12 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-10 md:mb-16">
          <h2 id="reconhecimentos-titulo" className="text-2xl md:text-4xl font-bold text-[#1a3a16] mb-4">
            Reconhecimentos, parcerias e iniciativas apoiadas
          </h2>
          <p className="text-gray-500 text-lg">
            Conheça os reconhecimentos e as organizações apresentadas pela CP em sua trajetória institucional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-20">
          {credenciais.map((item, index) => (
            <div
              key={item.id}
              className="reveal border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-between text-center shadow-sm hover:shadow-md"
              style={{ minHeight: '280px', '--reveal-delay': `${index * 0.2}s` } as React.CSSProperties}
            >
              <div className="w-full flex items-center justify-center" style={{ aspectRatio: '16/10' }}>
                <img
                  src={item.imagem}
                  alt={item.titulo}
                  width={item.largura}
                  height={item.altura}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="mt-4">
                <div className="w-8 h-0.5 bg-[#4a8c3f] mx-auto mb-4" />
                <p className="font-display text-[#1a3a16] font-bold text-base tracking-widest mb-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="link-instituicao font-display"
                  >
                    {item.titulo}
                  </a>
                </p>
                <p className="text-gray-500 text-sm">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="font-display text-2xl font-bold text-[#1a3a16] mb-2">Também Apoiamos</p>
          <p className="text-gray-500">Organizações que compartilham nossos valores</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto items-center">
          {apoiadores.map((item) => (
            <div key={item.nome} className="w-full flex items-center justify-center" style={{ aspectRatio: '16/9' }}>
              <img
                src={item.imagem}
                alt={item.nome}
                width={item.largura}
                height={item.altura}
                loading="lazy"
                decoding="async"
                className="w-full h-full"
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
