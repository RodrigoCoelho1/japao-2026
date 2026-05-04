import useStore from '../store/useStore'

const WORLDS = [
  {
    name: 'Celestial Park',
    emoji: '🌌',
    desc: 'Hub central do parque — jardins ao ar livre com atrações estrelares e restaurantes. A entrada principal com visual deslumbrante.',
    attractions: [
      { name: 'Constellation Carousel', type: '🎠 Carrossel', wait: '15–30 min', tip: 'Carrossel temático de constelações. Lindo para fotos — visite de noite para o melhor efeito.' },
      { name: 'Starfall Racers', type: '🎢 Coaster duplo', wait: '60–120 min', tip: '⭐ Duelo de montanhas-russas lado a lado — duas pistas competem entre si. Um dos melhores coasters do parque!' },
      { name: 'Astronomica', type: '🎡 Roda gigante', wait: '20–40 min', tip: 'Roda gigante temática com cápsulas fechadas. Ótima vista panorâmica do parque inteiro.' },
    ],
  },
  {
    name: 'Dark Universe',
    emoji: '🧟',
    desc: 'Mundo dos monstros clássicos da Universal — Drácula, Frankenstein, Múmia e criatura do pântano. Assustador mas incrível!',
    attractions: [
      { name: 'Monsters Unchained: The Frankenstein Experiment', type: '💀 Simulador/Dark ride', wait: '40–90 min', tip: '⭐ A atração âncora do Dark Universe. Tecnologia de realidade aumentada misturada com sets físicos. Imperdível!' },
      { name: 'Curse of the Werewolf', type: '🐺 Montanha-russa', wait: '50–100 min', tip: 'Coaster de alta velocidade no escuro com efeitos de lobisomem. Muito intenso e emocionante.' },
      { name: 'Darkmoor Boarding School', type: '🏚️ Dark ride', wait: '30–60 min', tip: 'Passeio pela escola de bruxaria sombria com efeitos de projeção e animatrônicos.' },
    ],
  },
  {
    name: 'Ministry of Magic',
    emoji: '⚡',
    desc: 'O mundo do Harry Potter adulto em Paris — o Ministério da Magia em todo seu esplendor. Parte do universo Wizarding World.',
    attractions: [
      { name: 'Harry Potter and the Battle at the Ministry', type: '🧙 Dark ride 4D', wait: '60–120 min', tip: '⭐ A joia do parque! Batalha de magos em carriagem com projeção e efeitos práticos misturados. Tecnologia de ponta nunca vista em outros parques.' },
      { name: 'Le Cirque Arcanus', type: '🎪 Show', wait: '20–30 min', tip: 'Show de criaturas mágicas inspirado em Animais Fantásticos. Performances ao vivo impressionantes.' },
      { name: 'Butterbeer Cart', type: '🍺 Gastronomia', wait: '5–15 min', tip: 'Cerveja amanteigada (sem álcool) — um clássico do universo Potter. Versão frozen é a favorita no calor!' },
      { name: 'Wand Experience', type: '🪄 Interativo', wait: '0 min', tip: 'Pontos de interação com varinhas espalhados pela área. Compre varinha interativa na loja.' },
    ],
  },
  {
    name: 'Isle of Berk',
    emoji: '🐉',
    desc: 'A ilha dos vikings de Como Treinar Seu Dragão! Encontre o Banguela e voe pelos céus de Berk.',
    attractions: [
      { name: 'Here Be Dragons', type: '🐉 Show/Encontro', wait: '20–40 min', tip: 'Encontro com o Banguela e outros dragões animatrônicos de tamanho real. Incrível para crianças e adultos!' },
      { name: 'Hiccup\'s Wing Gliders', type: '🪂 Voo simulado', wait: '40–80 min', tip: '⭐ Voo de asa-delta com o Banguela sobre Berk — experiência de voo imersiva com movimentos suaves. Família toda vai adorar.' },
      { name: 'Dragon Racer\'s Rally', type: '🎢 Coaster familiar', wait: '30–60 min', tip: 'Corrida de dragões em montanha-russa familiar — sem inversões, ótimo para todas as idades.' },
      { name: 'The Untrainable Dragon', type: '🎭 Show ao vivo', wait: '20 min', tip: 'Show de treinamento de dragões com personagens em cena. Muito divertido para crianças.' },
    ],
  },
  {
    name: 'Super Nintendo World',
    emoji: '🍄',
    desc: 'O reino do Mario em escala incrível! Cogumelos gigantes, Question Blocks e tudo que você imagina do mundo Nintendo.',
    attractions: [
      { name: 'Mario Kart: Bowser\'s Challenge', type: '🏎️ Kart/AR', wait: '60–120 min', tip: '⭐ Corrida de Mario Kart com AR headset — jogue em 3D físico o jogo mais amado do Nintendo. Fila grande o dia todo — priorize ao abrir.' },
      { name: 'Yoshi\'s Adventure', type: '🦕 Passeio', wait: '20–50 min', tip: 'Passeio tranquilo nas costas do Yoshi pelas paisagens coloridas. Perfeito para crianças e fotos.' },
      { name: 'Donkey Kong Country: Mine-Cart Madness', type: '⛏️ Montanha-russa', wait: '50–100 min', tip: '⭐ Exclusivo do Epic Universe! Coaster do Donkey Kong diferente da versão japonesa — não pule!' },
      { name: 'Power-Up Bands', type: '⌚ Interativo', wait: '—', tip: 'Pulseiras interativas (¥~$40) que permitem bater nos Question Blocks e coletar moedas pelo parque. Muito divertido!' },
    ],
  },
]

const TIPS = [
  { emoji: '🗺️', tip: 'O Epic Universe fica em Orlando, Flórida — é um parque DIFERENTE do Universal Studios Japan (Osaka). Se o roteiro inclui Osaka, visite o USJ. O Epic Universe é para quem vai à Florida.' },
  { emoji: '📅', tip: 'Epic Universe abriu em 22 de maio de 2025. É o maior investimento da Universal em décadas — tecnologicamente muito superior a qualquer parque atual.' },
  { emoji: '🎟️', tip: 'Ingresso de 1 dia: a partir de US$119 (preço base, sobe em datas de maior demanda). Universal Express Pass: US$80–200 por pessoa. Reserve online com antecedência.' },
  { emoji: '📱', tip: 'Baixe o app Universal Orlando Resort. Compre Express Pass no app. Mario Kart e Harry Potter Battle at the Ministry são os que mais precisam de Express ou fila longa.' },
  { emoji: '⏰', tip: 'Estratégia de abertura: vá direto ao Super Nintendo World (Mario Kart) ou Harry Potter (Battle at the Ministry) — ambos têm as maiores filas do dia.' },
  { emoji: '🍺', tip: 'Butterbeer no Ministry of Magic e Duff Beer em Springfield (se estiver no mesmo ingresso/park hopper). Experimentar a gastronomia temática é parte da experiência.' },
  { emoji: '🌡️', tip: 'Orlando em julho é muito quente e chuvoso. Leve roupa leve, protetor solar, capa de chuva. Chuvas de verão são rápidas — espere em área coberta e passa em 20 min.' },
  { emoji: '🐉', tip: 'Isle of Berk surpreende — mesmo quem não é fã de Como Treinar Seu Dragão fica impressionado com os dragões animatrônicos. Hiccup\'s Wing Gliders é melhor que o Soaring da Disney segundo muitos.' },
  { emoji: '🌌', tip: 'Starfall Racers (Celestial Park) é considerado pelos creators do YouTube um dos melhores coasters do mundo — uma das atrações mais bem avaliadas do parque.' },
  { emoji: '💡', tip: 'VPD Play fez ranking completo de todas as atrações do Epic Universe — assista antes de ir para saber o que priorizar e o que pode pular com segurança.' },
]

export default function EpicUniverse({ goBack }) {
  const darkMode = useStore(s => s.darkMode)
  const bg = darkMode ? 'bg-slate-900' : 'bg-gray-50'
  const cardBg = darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'
  const text = darkMode ? 'text-slate-100' : 'text-gray-900'
  const sub = darkMode ? 'text-slate-400' : 'text-gray-500'
  const badge = darkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-600'

  return (
    <div className={`flex flex-col h-screen ${bg}`}>
      <div className="screen-header">
        <div className="flex items-center gap-2">
          <button onClick={goBack} className={`text-xl ${darkMode ? 'text-slate-400' : 'text-gray-400'}`}>‹</button>
          <div>
            <h1 className={`text-lg font-bold ${text}`}>🎢 Epic Universe</h1>
            <p className={`text-xs ${sub}`}>Universal Orlando, Florida · Aberto em maio 2025</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto safe-bottom px-4 py-4 space-y-4 md:max-w-3xl md:mx-auto md:w-full">

        {/* Aviso importante */}
        <div className={`rounded-2xl border p-4 ${darkMode ? 'bg-amber-950 border-amber-800' : 'bg-amber-50 border-amber-200'}`}>
          <div className={`text-sm font-bold mb-1 ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>⚠️ Atenção: Epic Universe é em Orlando, Florida</div>
          <div className={`text-xs ${darkMode ? 'text-amber-400' : 'text-amber-700'}`}>
            Este parque fica nos EUA — não no Japão. É diferente do Universal Studios Japan (USJ) em Osaka.
            Se o roteiro da família Coelho inclui apenas o Japão, o parque japonês é o USJ (Osaka).
            O Epic Universe é para viagens à Florida. Esta página serve como referência para planejamento futuro.
          </div>
        </div>

        {/* Info rápida */}
        <div className={`rounded-2xl border p-4 ${cardBg}`}>
          <div className={`text-xs font-bold uppercase tracking-wide mb-3 ${sub}`}>Informações Essenciais</div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className={`text-xs ${sub}`}>Ingresso (1 dia)</div>
              <div className={`font-bold text-sm ${text}`}>A partir de US$119</div>
              <div className={`text-xs ${sub}`}>Preço base, varia por data</div>
            </div>
            <div>
              <div className={`text-xs ${sub}`}>Universal Express</div>
              <div className={`font-bold text-sm ${text}`}>US$80 – 200</div>
              <div className={`text-xs ${sub}`}>Skip the line em atrações</div>
            </div>
            <div>
              <div className={`text-xs ${sub}`}>Abertura</div>
              <div className={`font-bold text-sm ${text}`}>22 de maio de 2025</div>
              <div className={`text-xs ${sub}`}>O mais novo parque Universal</div>
            </div>
            <div>
              <div className={`text-xs ${sub}`}>Localização</div>
              <div className={`font-bold text-sm ${text}`}>Orlando, Florida</div>
              <div className={`text-xs ${sub}`}>Próximo ao Universal Studios</div>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Universal+Epic+Universe,+Orlando,+Florida"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-2 text-xs text-blue-500 font-medium"
          >
            📍 Ver no Google Maps — Epic Universe Orlando
          </a>
          <a
            href="https://www.universalorlando.com/web/en/us/theme-parks/epic-universe"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 flex items-center gap-2 text-xs text-blue-500 font-medium"
          >
            🌐 Site oficial — universalorlando.com
          </a>
        </div>

        {/* 5 Mundos */}
        <div className={`rounded-2xl border p-4 ${cardBg}`}>
          <div className={`text-xs font-bold uppercase tracking-wide mb-3 ${sub}`}>🗺️ Os 5 Mundos do Epic Universe</div>
          <div className="flex flex-wrap gap-2 mb-3">
            {['🌌 Celestial Park', '🧟 Dark Universe', '⚡ Ministry of Magic', '🐉 Isle of Berk', '🍄 Super Nintendo World'].map(p => (
              <span key={p} className={`text-xs px-2 py-1 rounded-full ${badge}`}>{p}</span>
            ))}
          </div>
          <a
            href="https://www.universalorlando.com/web/en/us/theme-parks/epic-universe/park-map"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-blue-500 font-medium"
          >
            🗺️ Ver mapa oficial do parque
          </a>
        </div>

        {/* Dicas dos vídeos */}
        <div className={`rounded-2xl border p-4 ${cardBg}`}>
          <div className={`text-xs font-bold uppercase tracking-wide mb-3 ${sub}`}>💡 Dicas dos Vídeos do YouTube</div>
          <div className="space-y-3">
            {TIPS.map((t, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-lg leading-none mt-0.5">{t.emoji}</span>
                <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>{t.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mundos com atrações */}
        {WORLDS.map(world => (
          <div key={world.name} className={`rounded-2xl border p-4 ${cardBg}`}>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{world.emoji}</span>
              <div>
                <div className={`font-bold text-sm ${text}`}>{world.name}</div>
                <div className={`text-xs ${sub}`}>{world.desc}</div>
              </div>
            </div>
            <div className="space-y-3 mt-3">
              {world.attractions.map(a => (
                <div key={a.name} className={`rounded-xl p-3 ${darkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                  <div className="flex justify-between items-start gap-2">
                    <div className={`font-semibold text-sm ${text}`}>{a.name}</div>
                    <span className={`text-xs whitespace-nowrap px-2 py-0.5 rounded-full ${badge}`}>{a.type}</span>
                  </div>
                  {a.wait !== '—' && <div className={`text-xs mt-1 ${sub}`}>⏱ Fila esperada: {a.wait}</div>}
                  <div className={`text-xs mt-1 ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>💡 {a.tip}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Ingressos */}
        <div className={`rounded-2xl border p-4 ${cardBg}`}>
          <div className={`text-xs font-bold uppercase tracking-wide mb-3 ${sub}`}>💴 Ingressos & Opções 2025</div>
          <div className="space-y-2">
            {[
              { label: 'Ingresso 1 dia (base)', price: 'A partir de US$119' },
              { label: 'Ingresso 1 dia (alta temporada)', price: 'Até US$179+' },
              { label: 'Universal Express Pass', price: 'US$80 – 200 / pessoa' },
              { label: 'Park-to-Park (+ Universal Studios)', price: '+US$30–50' },
              { label: 'Annual Pass (All Parks)', price: 'A partir de US$600/ano' },
            ].map(r => (
              <div key={r.label} className="flex justify-between items-center">
                <span className={`text-sm ${sub}`}>{r.label}</span>
                <span className={`text-sm font-semibold ${text}`}>{r.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Estratégia */}
        <div className={`rounded-2xl border p-4 ${cardBg}`}>
          <div className={`text-xs font-bold uppercase tracking-wide mb-3 ${sub}`}>🗓️ Estratégia Recomendada para 1 Dia</div>
          <div className="space-y-2">
            {[
              { time: '08h30', action: 'Chegue ao portão. O parque enche rápido — julho é época de alta demanda em Orlando.' },
              { time: '09h00', action: 'Abertura: vá direto ao Super Nintendo World → Mario Kart: Bowser\'s Challenge (maior fila do dia).' },
              { time: '10h30', action: 'Ministry of Magic → Harry Potter and the Battle at the Ministry (usar Express Pass se tiver).' },
              { time: '12h00', action: 'Almoço temático no Celestial Park ou Ministry of Magic (Butterbeer obrigatório!).' },
              { time: '13h30', action: 'Celestial Park → Starfall Racers (duelo de coasters — um dos melhores do parque).' },
              { time: '15h00', action: 'Dark Universe → Monsters Unchained + Curse of the Werewolf.' },
              { time: '17h00', action: 'Isle of Berk → Hiccup\'s Wing Gliders + Encontro com os dragões.' },
              { time: '18h30', action: 'Volta ao Super Nintendo World para Donkey Kong (fila menor no fim do dia).' },
              { time: '20h00', action: 'Compras e experiências noturnas. Parque com iluminação é muito bonito à noite.' },
            ].map((s, i) => (
              <div key={i} className="flex gap-3">
                <span className={`text-xs font-mono font-bold w-12 shrink-0 pt-0.5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>{s.time}</span>
                <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>{s.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vídeos relacionados */}
        <div className={`rounded-2xl border p-4 ${cardBg}`}>
          <div className={`text-xs font-bold uppercase tracking-wide mb-3 ${sub}`}>🎬 Vídeos Relacionados</div>
          <div className="space-y-2">
            {[
              { title: 'MELHORES E PIORES ATRAÇÕES DO EPIC UNIVERSE! RANKING COMPLETO', channel: 'VPD Play', id: 'i9gv5p56EIs' },
              { title: '10 dicas do parque EPIC UNIVERSE da Universal Orlando!', channel: 'Lorenzi Magic Dicas', id: 'uJGTLpabEx8' },
            ].map(v => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-start gap-3 p-3 rounded-xl ${darkMode ? 'bg-slate-700' : 'bg-gray-50'}`}
              >
                <img
                  src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                  alt={v.title}
                  className="w-24 h-14 rounded-lg flex-shrink-0 object-cover"
                />
                <div>
                  <div className={`text-sm font-semibold ${text}`}>{v.title}</div>
                  <div className={`text-xs ${sub}`}>{v.channel}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
