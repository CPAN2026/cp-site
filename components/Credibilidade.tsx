'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'

const credenciais = [
  {
    id: 1,
    imagem: '/gran-awards.png',
    titulo: 'GRAN AWARDS',
    descricao: 'Excelência de Qualidade 2017',
  },
  {
    id: 2,
    imagem: '/abraz.png',
    titulo: 'ABRAZ',
    descricao: 'Associação Brasileira de Alzheimer',
  },
  {
    id: 3,
    imagem: '/abrinq.png',
    titulo: 'FUNDAÇÃO ABRINQ',
    descricao: 'Pelos Direitos da Criança e do Adolescente',
  },
]

const apoiadores = [
  { imagem: '/apoio-medicos-sem-fronteiras.png', nome: 'Médicos Sem Fronteiras' },
  { imagem: '/apoio-raio-x.png', nome: 'Raio-X' },
]

export default function Credibilidade() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-12 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1a3a16] mb-4">
            Reconhecimento e Credibilidade
          </h2>
          <p className="text-gray-500 text-lg">
            Parcerias e premiações que validam nossa excelência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-20">
          {credenciais.map((item, index) => (
            <div
              key={item.id}
              className="border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-between text-center shadow-sm hover:shadow-md transition-shadow"
              style={{
                minHeight: '280px',
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.6s ease ${index * 0.2}s`,
              }}
            >
              <div className="w-full flex items-center justify-center" style={{ aspectRatio: '16/10' }}>
                <img src={item.imagem} alt={item.titulo} className="w-full h-full" style={{ objectFit: 'contain' }} />
              </div>
              <div className="mt-4">
                <div className="w-8 h-0.5 bg-[#4a8c3f] mx-auto mb-4" />
                <h3 className="text-[#1a3a16] font-bold text-base tracking-widest mb-2">{item.titulo}</h3>
                <p className="text-gray-500 text-sm">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-[#1a3a16] mb-2">Também Apoiamos</h3>
          <p className="text-gray-500">Organizações que compartilham nossos valores</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto items-center">
          {apoiadores.map((item) => (
            <div key={item.nome} className="w-full flex items-center justify-center" style={{ aspectRatio: '16/9' }}>
              <img src={item.imagem} alt={item.nome} className="w-full h-full" style={{ objectFit: 'contain' }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
