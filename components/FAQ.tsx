export const FAQ_ITENS = [
  {
    pergunta: 'Quais serviços de cuidadores de idosos a CP oferece?',
    resposta:
      'A CP oferece cuidador de idosos 24 horas, cuidador diurno, cuidador noturno, acompanhante hospitalar, cuidados pós-cirúrgicos em casa e cuidado para idosos com Alzheimer, Parkinson e outras condições neurodegenerativas. A equipe reúne cuidadores de idosos e técnicos de enfermagem, e a combinação ideal é definida a partir da rotina e das necessidades específicas de cada família.',
  },
  {
    pergunta: 'Como funciona a contratação de um cuidador de idosos?',
    resposta:
      'O processo começa pelo contato com a CP via WhatsApp. A equipe avalia as necessidades do caso, considerando a rotina, a condição de saúde e as preferências da família, e seleciona o profissional mais adequado, dentro de um processo próprio de entrevista, seleção e treinamento, e acompanha o atendimento para realizar os ajustes necessários, incluindo eventuais reposições.',
  },
  {
    pergunta: 'Quanto custa um cuidador de idosos?',
    resposta:
      'O valor depende do formato do plantão, como 6, 8, 12 ou 24 horas, e das necessidades do caso, incluindo a frequência mensal ou avulsa e a exigência de cuidados mais técnicos. A CP realiza uma avaliação inicial para indicar a opção adequada e informar as condições de contratação, com clareza sobre o que está incluso no valor.',
  },
  {
    pergunta: 'O cuidador de idosos pode aplicar injeção, insulina ou administrar medicamentos?',
    resposta:
      'Não. Aplicar injeções, insulina ou administrar medicamentos por via mais técnica são procedimentos reservados aos técnicos de enfermagem, não aos cuidadores de idosos. Quando o caso exige esse tipo de cuidado, a CP indica um técnico de enfermagem da própria equipe, preparado para esse tipo de atendimento. Já o apoio na rotina de medicação, lembrar horários e organizar a cartela de remédios, por exemplo, faz parte do trabalho do cuidador.',
  },
  {
    pergunta: 'Quando a família deve contratar um cuidador de idosos?',
    resposta:
      'Não existe uma idade exata que determine o momento certo, mas alguns sinais costumam indicar essa necessidade: dificuldade para realizar atividades básicas sozinho, quedas frequentes, esquecimentos que colocam a rotina em risco, alta hospitalar ou pós-cirúrgica e a sobrecarga de um familiar que vem assumindo esse cuidado sem apoio. Diagnósticos como Alzheimer e Parkinson também costumam ser o momento em que as famílias buscam ajuda profissional. A CP pode avaliar o caso e indicar o formato de atendimento mais adequado, mesmo antes de uma decisão definitiva.',
  },
  {
    pergunta: 'Cuidador de idosos é obrigado a cuidar da alimentação do idoso?',
    resposta:
      'O apoio na alimentação faz parte da rotina de cuidado, o que inclui auxiliar o idoso na hora das refeições e seguir as orientações de dieta indicadas pela família ou pela equipe médica. Já o preparo das refeições em si pode variar de caso para caso: em alguns plantões o cuidador também cozinha, em outros a família prefere manter esse papel. Esse ponto é combinado com a CP na avaliação inicial, de acordo com a rotina de cada família.',
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-titulo"
      style={{ background: '#ffffff' }}
      className="py-[64px] md:py-[96px]"
    >
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span
            style={{
              display: 'inline-block',
              color: '#4a8c3f',
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 600,
              fontSize: 12,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: 16,
            }}
          >
            Dúvidas Frequentes
          </span>
          <h2
            id="faq-titulo"
            style={{
              color: '#1a3a16',
              fontWeight: 900,
              lineHeight: 1.15,
              margin: 0,
              fontSize: 'clamp(24px, 4vw, 40px)',
            }}
          >
            Dúvidas frequentes sobre cuidadores de idosos
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQ_ITENS.map((item) => (
            <details
              key={item.pergunta}
              className="faq-item"
              style={{
                background: '#f8f8f6',
                border: '1px solid #e8ede8',
                borderRadius: 10,
              }}
            >
              <summary
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  padding: '20px 24px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display), serif',
                    fontWeight: 700,
                    fontSize: 17,
                    lineHeight: 1.4,
                    color: '#1a3a16',
                    margin: 0,
                  }}
                >
                  {item.pergunta}
                </h3>
                <svg
                  className="faq-icon"
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4a8c3f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{ flexShrink: 0 }}
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </summary>
              <p
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 400,
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: '#555',
                  margin: 0,
                  padding: '0 24px 22px',
                }}
              >
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
