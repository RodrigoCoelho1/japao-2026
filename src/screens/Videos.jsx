import { useState } from 'react'
import useStore from '../store/useStore'

const TAGS = ['Todos', 'Geral', 'Tóquio', 'Kyoto', 'Osaka', 'Compras', 'Comida', 'Disneyland', 'DisneySea', 'USJ']

const VIDEOS = [
  // === GERAL / PLANEJAMENTO ===
  { id: 'ebcGah4eyC4', title: 'JAPÃO! Todas as dicas de viagem que você PRECISA saber!', channel: 'Gabriel Lorenzi - Dicas de Viagem', lang: '🇧🇷', tags: ['Geral'], desc: 'Dicas essenciais pré-viagem: cartão de crédito, chip, JR Pass, Visit Japan Web, etiqueta japonesa e muito mais.' },
  { id: 'cFDfCsaP5M0', title: 'Roteiros perfeitos pelo JAPÃO! Quais cidades conhecer? 7, 12, 15 e 20 dias!', channel: 'Gabriel Lorenzi - Dicas de Viagem', lang: '🇧🇷', tags: ['Geral', 'Tóquio', 'Kyoto', 'Osaka'], desc: 'Como montar roteiros de 7 a 20 dias no Japão: quais cidades priorizar e como encaixar cada destino.' },
  { id: 'FAU-vf2swOQ', title: 'COMO PLANEJAR SUA VIAGEM PARA O JAPÃO 🇯🇵 (GUIA COMPLETO!)', channel: 'Djó Takashima', lang: '🇧🇷', tags: ['Geral'], desc: 'Guia completo de planejamento: passagem, chip, hotel, JR Pass, câmbio, seguro e como montar o itinerário.' },
  { id: 'ZM2Z0rpQufg', title: 'IMIGRAÇÃO NO JAPÃO — Passo a Passo para preencher o Visit Japan Web', channel: 'Vai com Bruno', lang: '🇧🇷', tags: ['Geral'], desc: 'Tutorial completo para preencher o Visit Japan Web antes de pousar no Japão e agilizar a imigração.' },
  { id: '_p9POx39Nf8', title: 'Barato ou Caro? Meus gastos no Japão', channel: 'Vai com Bruno', lang: '🇧🇷', tags: ['Geral'], desc: 'Análise real de gastos por dia no Japão: hotel, comida, transporte e atrações. Vale mais ou menos que o esperado?' },
  { id: 'IbLUg9ma1j4', title: 'Paguei apenas R$ 6.000,00 para viajar na Classe Executiva QSuite', channel: 'Vai com Bruno', lang: '🇧🇷', tags: ['Geral'], desc: 'Como conseguir a QSuite da Qatar Airways por R$6.000 usando milhas. Detalhes da experiência e dicas para conseguir.' },
  { id: '7_YBzyLXAXc', title: 'Como ir do Aeroporto Narita de Tokyo para o centro', channel: 'Vai com Bruno', lang: '🇧🇷', tags: ['Geral', 'Tóquio'], desc: 'Todas as opções para sair do Narita: Narita Express (N\'EX), Skyliner, ônibus limousine e preços comparados.' },
  { id: 'juzaVLkEOLY', title: '124h criando o SCRAPBOOK da minha viagem de 1 mês p/ JAPÃO!', channel: 'Paula Stephânia', lang: '🇧🇷', tags: ['Geral'], desc: 'Vlog criativo de uma viagem de 1 mês no Japão — memórias, cultura kawaii e registro visual completo da aventura.' },
  { id: 'gn0OgbR-FaU', title: 'JAPÃO, O QUE SABER ANTES DE IR? Dicas, roteiros e preços', channel: 'Gaby Coutinho', lang: '🇧🇷', tags: ['Geral'], desc: 'Guia pré-viagem com visão geral: dicas práticas, sugestões de roteiro e referência de preços para planejar a viagem.' },

  // === TÓQUIO ===
  { id: 'pG-yNQTvPxw', title: 'CHEGAMOS NO JAPÃO: PRIMEIRO DIA CONHECENDO TÓQUIO! | VLOG DO JAPÃO #1', channel: 'VPD Play', lang: '🇧🇷', tags: ['Tóquio'], desc: 'Vlog do primeiro dia em Tóquio: desembarque, Shinjuku, combini, primeiras impressões e dicas práticas.' },
  { id: 'X09izfxPasQ', title: 'TÓQUIO: VISITA AO TEMPLO E COMIDINHAS EM ASAKUSA! | VLOG DO JAPÃO #3', channel: 'VPD Play', lang: '🇧🇷', tags: ['Tóquio', 'Comida'], desc: 'Vlog em Asakusa: Templo Senso-ji, Rua Nakamise, comidinhas típicas e a atmosfera do bairro histórico de Tóquio.' },
  { id: 'GyeZ9_tkXkM', title: 'O que fazer em Tóquio — Roteiro completo', channel: 'Vai com Bruno', lang: '🇧🇷', tags: ['Tóquio'], desc: 'Roteiro completo de Tóquio: Shibuya, Shinjuku, Asakusa, Harajuku, Akihabara — o que fazer e priorizar.' },
  { id: 'YAlaZ9QtUcE', title: 'Como visitar o Monte Fuji — saindo de Tokyo', channel: 'Vai com Bruno', lang: '🇧🇷', tags: ['Tóquio', 'Geral'], desc: 'Como fazer o bate-volta ao Monte Fuji saindo de Tóquio: opções de trem, ônibus, e o que ver em Hakone.' },
  { id: 'jupEux9xXmM', title: 'Como é uma praia no Japão? Surpresas e curiosidades!', channel: 'Lucas & Kaho Brazuca', lang: '🇧🇷', tags: ['Tóquio', 'Geral'], desc: 'Como são as praias japonesas? Comparativo com o Brasil, curiosidades culturais e o que esperar ao visitar.' },
  { id: '8fr0jldN0ZM', title: 'TOKYO: Quanto custa e o que fazer? Minha experiência REAL no Japão', channel: 'Gaby Coutinho', lang: '🇧🇷', tags: ['Tóquio', 'Geral'], desc: 'Experiência real em Tóquio: quanto custa cada parte da viagem (hotel, comida, transporte) e o que fazer na cidade.' },

  // === COMPRAS ===
  { id: 'RPLYBXKPijo', title: 'COMPRINHAS do JAPÃO com TODOS OS PREÇOS e DICAS de LOJAS!', channel: 'Status Viajante', lang: '🇧🇷', tags: ['Compras', 'Tóquio'], desc: 'Guia completo de compras no Japão: lojas recomendadas, Tax-Free, preços reais e os melhores souvenirs.' },
  { id: 'AH5Rs0eop_Y', title: 'O MELHOR LUGAR para comprar eletrônicos do mundo — Compras Japan', channel: 'Vai com Bruno', lang: '🇧🇷', tags: ['Compras', 'Tóquio'], desc: 'Akihabara como destino de eletrônicos: o que comprar, onde ir, Tax-Free e como aproveitar ao máximo.' },
  { id: 'bxHYXHKOO0g', title: 'Melhores lojas para compras no Japão', channel: 'Vai com Bruno', lang: '🇧🇷', tags: ['Compras'], desc: 'As melhores lojas para comprar no Japão: Don Quijote, Yodobashi, Bic Camera, UNIQLO e lojas de departamento.' },
  { id: 'UcwM3xPEZ3g', title: 'Compras no Japão: Vale a pena mesmo? TUDO o que você PRECISA saber antes de Ir! + TUDO QUE COMPREI!', channel: 'Gaby Coutinho', lang: '🇧🇷', tags: ['Compras'], desc: 'Vale a pena comprar no Japão? Dicas pré-viagem, Tax-Free, e haul completo do que a autora trouxe — referência prática para a lista de compras.' },

  // === COMIDA ===
  { id: '9ZdWeDbaLf8', title: 'Preços no Japão — Tour completo no 7 Eleven', channel: 'Vai com Bruno', lang: '🇧🇷', tags: ['Comida'], desc: 'Tour completo pelo 7 Eleven japonês com todos os preços: onigiri, bento, sobremesas e snacks exclusivos.' },

  // === KYOTO ===
  { id: 'b0_H-0SLwXs', title: 'Quioto — Roteiro completo de 3 dias', channel: 'Vai com Bruno', lang: '🇧🇷', tags: ['Kyoto'], desc: 'Roteiro de 3 dias em Kyoto: Fushimi Inari, Arashiyama, Kinkaku-ji, Gion e como usar o transporte local.' },
  { id: 'c2f7a05zvxk', title: 'KYOTO: 2 DIAS E MEIO CONHECENDO A CIDADE | VLOG DO JAPÃO #4', channel: 'VPD Play', lang: '🇧🇷', tags: ['Kyoto'], desc: 'Vlog de Kyoto em 2 dias: Fushimi Inari às 5h da manhã, Arashiyama, Gion de noite e experiências culturais.' },

  // === OSAKA / USJ ===
  { id: 'gFey4uS-PMc', title: 'Universal Studios Japão — Osaka: Nintendo World, Harry Potter, Flying Dinosaur e mais', channel: 'Vai com Bruno', lang: '🇧🇷', tags: ['Osaka', 'USJ'], desc: 'Guia completo do USJ em Osaka: Super Nintendo World, Wizarding World of Harry Potter, Express Pass e dicas.' },
  { id: 'pyXKioOKLpw', title: 'UNIVERSAL STUDIOS JAPÃO — Tudo que você precisa saber antes de visitar: com todos os preços! 2025', channel: 'Sonhe Alto Viagens', lang: '🇧🇷', tags: ['Osaka', 'USJ'], desc: 'Guia 2025 do USJ com preços atualizados, como comprar ingressos e Express Pass, e estratégia de visita.' },
  { id: '4ysjWmtPNmw', title: 'UNIVERSAL STUDIOS JAPAN — Guia completo: roteiro, Express Pass e dicas de visita', channel: 'Canal BR', lang: '🇧🇷', tags: ['Osaka', 'USJ'], desc: 'Roteiro completo do USJ: como aproveitar o dia, quais atrações priorizar, o que vale o Express Pass e os destaques de cada área temática.' },

  // === DISNEYLAND ===
  { id: '7oykv7bWMU0', title: 'Disneyland Tokyo — INGRESSOS — COMO CHEGAR — ATRAÇÕES', channel: 'Vai com Bruno', lang: '🇧🇷', tags: ['Disneyland', 'DisneySea'], desc: 'Tudo sobre o Tokyo Disneyland: como comprar ingressos, chegar ao parque, melhores atrações e dicas de estratégia.' },
  { id: 'vO-E54thbv8', title: 'Disney Tokyo de metrô — Passo a passo', channel: 'Vai com Bruno', lang: '🇧🇷', tags: ['Disneyland', 'DisneySea'], desc: 'Como chegar de metrô ao Tokyo Disney Resort: estação Maihama, Disney Resort Line (monorail) e dicas práticas.' },
  { id: 'Pyn0m656Ssk', title: 'TOKYO DISNEYLAND RESORT: TUDO SOBRE A DISNEY DO JAPÃO!', channel: 'VPD Play', lang: '🇧🇷', tags: ['Disneyland', 'DisneySea'], desc: 'Overview completo do Tokyo Disney Resort: diferenças entre Disneyland e DisneySea, preços, ingressos e o que esperar.' },
  { id: 'bVCi8jP9S0g', title: 'TOKYO DISNEYLAND: ROTEIRO COMPLETO PARA APROVEITAR!', channel: 'VPD Play', lang: '🇧🇷', tags: ['Disneyland'], desc: 'Roteiro completo para o Tokyo Disneyland: order of operations, Priority Pass, filas e atrações imperdíveis.' },
  { id: 'SMfoA5CweXk', title: 'DISNEY JAPÃO: Como chegar, melhores atrações, todos os preços e dicas! 2025', channel: 'Sonhe Alto Viagens', lang: '🇧🇷', tags: ['Disneyland', 'DisneySea'], desc: 'Guia 2025 dos parques Disney no Japão: como chegar, ingressos, melhores atrações de cada parque e dicas essenciais.' },

  // === DISNEYSEA ===
  { id: 'eBNWlbDhYso', title: 'A Disney mais incrível do mundo — Tokyo DisneySea', channel: 'Vai com Bruno', lang: '🇧🇷', tags: ['DisneySea'], desc: 'Por que o DisneySea é considerado o melhor parque da Disney no mundo. Atrações, Fantasy Springs e estratégia.' },
  { id: 'Lk10Mi_cobM', title: 'ROTEIRO COMPLETO DO TOKYO DISNEYSEA, O PARQUE MAIS LEGAL E DIFERENTE DA DISNEY!', channel: 'VPD Play', lang: '🇧🇷', tags: ['DisneySea'], desc: 'Roteiro completo para aproveitar o DisneySea: todos os ports of call, Fantasy Springs e dicas de priorização.' },

]

export default function Videos() {
  const [tag, setTag] = useState('Todos')
  const [search, setSearch] = useState('')
  const darkMode = useStore(s => s.darkMode)

  const inactiveBtn = darkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-600'
  const activeTagBtn = darkMode ? 'bg-slate-200 text-slate-900' : 'bg-gray-800 text-white'

  const filtered = VIDEOS.filter(v => {
    if (tag !== 'Todos' && !v.tags.includes(tag)) return false
    if (search && !v.title.toLowerCase().includes(search.toLowerCase()) && !v.channel.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  // Group channels for the summary card
  const channels = [...new Set(VIDEOS.map(v => v.channel))]

  return (
    <div className="flex flex-col h-screen">
      <div className="screen-header">
        <h1 className={`text-lg font-bold ${darkMode ? 'text-slate-100' : 'text-gray-900'}`}>🎬 Vídeos e Dicas</h1>
        <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>{VIDEOS.length} vídeos selecionados · canais brasileiros</p>
      </div>

      {/* Filtros */}
      <div className={`border-b px-4 py-2 space-y-2 ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-100'}`}>
        {/* Busca */}
        <input
          type="text"
          placeholder="Buscar vídeo ou canal..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className={`w-full text-sm px-3 py-1.5 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-600 text-slate-200 placeholder-slate-500' : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400'} focus:outline-none`}
        />
        {/* Tags */}
        <div className="flex gap-1 overflow-x-auto pb-0.5">
          {TAGS.map(t => (
            <button key={t} onClick={() => setTag(t)}
              className={`text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap font-medium flex-shrink-0 ${tag === t ? activeTagBtn : inactiveBtn}`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto safe-bottom px-4 py-3 md:px-8 md:py-5">
        <div className="md:max-w-5xl md:mx-auto space-y-2">
          <div className={`text-xs mb-1 ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>{filtered.length} vídeo{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}</div>

          {filtered.map(v => (
            <a key={v.id} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer"
              className="card p-3.5 flex gap-3 items-start active:scale-[0.98] transition-transform">
              {/* Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                alt={v.title}
                className="w-24 h-14 rounded-lg flex-shrink-0 object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className={`font-semibold text-xs leading-snug mb-0.5 ${darkMode ? 'text-slate-100' : 'text-gray-900'}`}>{v.title}</div>
                <div className={`text-[11px] mb-1 font-medium ${darkMode ? 'text-red-400' : 'text-red-600'}`}>{v.lang} {v.channel}</div>
                <div className={`text-[11px] leading-relaxed ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>{v.desc}</div>
                <div className="flex gap-1 mt-1.5 flex-wrap">
                  {v.tags.map(t => (
                    <span key={t} className={`text-[10px] px-1.5 py-0.5 rounded-full ${inactiveBtn}`}>{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}

          {filtered.length === 0 && (
            <div className={`text-center py-10 ${darkMode ? 'text-slate-400' : 'text-gray-400'}`}>
              <div className="text-3xl mb-2">🔍</div>
              <div className="text-sm">Nenhum vídeo encontrado</div>
            </div>
          )}

          {/* Canais */}
          <div className={`card p-4 border mt-2 ${darkMode ? 'bg-blue-950 border-blue-800' : 'bg-blue-50 border-blue-100'}`}>
            <div className={`text-sm font-bold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>📺 Canais nesta seleção</div>
            <div className={`space-y-1 text-xs ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
              <div>🇧🇷 <strong>Vai com Bruno</strong> — Bruno Queiroz · dicas práticas e roteiros detalhados</div>
              <div>🇧🇷 <strong>VPD Play</strong> — vlogs completos da viagem com família · Disney e parques</div>
              <div>🇧🇷 <strong>Gabriel Lorenzi - Dicas de Viagem</strong> — roteiros e planejamento</div>
              <div>🇧🇷 <strong>Sonhe Alto Viagens</strong> — Disney Japão 2025 com preços atualizados</div>
              <div>🇧🇷 <strong>Djó Takashima</strong> — guia completo de planejamento</div>
              <div>🇧🇷 <strong>Canal BR</strong> — Universal Studios Japan · roteiro e dicas</div>
              <div>🇧🇷 <strong>Status Viajante</strong> — compras e preços no Japão</div>
              <div>🇧🇷 <strong>Lucas & Kaho Brazuca</strong> — vida e experiências no Japão</div>
              <div>🇧🇷 <strong>Paula Stephânia</strong> — vlog criativo · viagem de 1 mês</div>
              <div>🇧🇷 <strong>Gaby Coutinho</strong> (@Eunascipraviajar) — experiência real, custos e compras no Japão</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
