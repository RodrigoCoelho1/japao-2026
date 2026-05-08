import useStore from '../store/useStore'
import MapsLink from '../components/MapsLink'

const PORTS = [
  {
    name: 'Mediterranean Harbor',
    emoji: '⚓',
    desc: 'Entrada do parque, inspirada nos portos do Mediterrâneo. Hub central para shows aquáticos e o famoso Fantasmic!',
    attractions: [
      { name: 'DisneySea Transit Steamer Line', type: '🚢 Passeio', wait: '5–20 min', tip: 'Ótimo para descansar os pés — conecta os ports.' },
      { name: 'DisneySea Electric Railway', type: '🚃 Transporte', wait: '5–10 min', tip: 'Conecta American Waterfront ao Port Discovery rapidamente.' },
    ],
  },
  {
    name: 'American Waterfront',
    emoji: '🗽',
    desc: 'Nova York dos anos 1900 com o famoso Tower of Terror. Ideal para fotos com a torre icônica.',
    attractions: [
      { name: 'Tower of Terror', type: '💀 Queda livre', wait: '60–120 min', tip: 'Priorize logo na abertura ou compre Premier Access (¥2.000). Uma das melhores do mundo — versão exclusiva do Japão!' },
      { name: 'Toy Story Mania!', type: '🎯 Interativo', wait: '40–80 min', tip: 'Jogo de tiro em 4D com os personagens do Toy Story. Fila menor de manhã.' },
      { name: 'Big City Vehicles', type: '🚕 Passeio', wait: '5 min', tip: 'Passeio em veículos vintage pelos arredores.' },
      { name: 'Turtle Talk', type: '🐢 Show', wait: '15–30 min', tip: 'Crush do Procurando Nemo interage em tempo real com o público. Japonês, mas divertido visualmente!' },
    ],
  },
  {
    name: 'Lost River Delta',
    emoji: '🌿',
    desc: 'Selva tropical com inspiração em ruínas mesoamericanas. Indiana Jones e Raging Spirits ficam aqui.',
    attractions: [
      { name: 'Indiana Jones Adventure: Temple of the Crystal Skull', type: '🏛️ Aventura', wait: '60–100 min', tip: 'Similar ao da Disneyland CA mas com cenários exclusivos. Versão mais elaborada! Priorize cedo.' },
      { name: 'Raging Spirits', type: '🔥 Montanha-russa', wait: '40–90 min', tip: 'Montanha-russa com looping — única looping do Disney Resort. Fechada para reforma em alguns períodos.' },
      { name: 'The Jungle Waterboat', type: '💦 Bote', wait: '20–40 min', tip: 'Passeio tranquilo de bote. Ótimo para recuperar o fôlego entre atrações intensas.' },
    ],
  },
  {
    name: 'Arabian Coast',
    emoji: '🕌',
    desc: 'Mundo das Mil e Uma Noites com o Aladdin. Área muito instagramável e encantadora à noite.',
    attractions: [
      { name: 'Sindbad\'s Storybook Voyage', type: '🎶 Barco', wait: '10–30 min', tip: 'Passeio de barco suave com animatrônicos incríveis. Fila pequena — não pule! Uma das joias escondidas do parque.' },
      { name: 'The Magic Lamp Theater', type: '🎭 Show 3D', wait: '15–30 min', tip: 'Show do Gênio em 3D. Muito engraçado mesmo sem entender japonês!' },
      { name: 'Caravan Carousel', type: '🎠 Carrossel', wait: '10–25 min', tip: 'Carrossel de 2 andares com decoração árabe. Crianças adoram!' },
      { name: 'Jasmine\'s Flying Carpets', type: '🪁 Voo', wait: '15–30 min', tip: 'Carpetes voadores ao estilo Aladdin. Divertido para a família.' },
    ],
  },
  {
    name: 'Mermaid Lagoon',
    emoji: '🧜',
    desc: 'Mundo subaquático da Pequena Sereia — área interna e externa. Perfeita para crianças pequenas.',
    attractions: [
      { name: 'Flounder\'s Flying Fish Coaster', type: '🐟 Mini coaster', wait: '20–40 min', tip: 'Mini montanha-russa para crianças. Fila costuma ser longa — vá no início do dia.' },
      { name: 'Jumpin\' Jellyfish', type: '🪂 Queda suave', wait: '15–30 min', tip: 'Subida e descida suave em formato de águas-vivas.' },
      { name: 'Ariel\'s Playground', type: '🏊 Play area', wait: '0 min', tip: 'Área de exploração para crianças com escaladas e descobertas. Gratuita e sem fila!' },
      { name: 'Mermaid Lagoon Theater (Under the Sea)', type: '🎭 Show', wait: '15–30 min', tip: 'Musical da Pequena Sereia com acrobatas e efeitos especiais. Imperdível!' },
    ],
  },
  {
    name: 'Mysterious Island',
    emoji: '🌋',
    desc: 'Dentro de um vulcão — área mais dramática do parque. Lar de Journey to the Center of the Earth.',
    attractions: [
      { name: 'Journey to the Center of the Earth', type: '🌋 Aventura/Queda', wait: '60–120 min', tip: '⭐ A atração mais icônica do DisneySea. Compre Premier Access logo na abertura! Impossível pegar na fila depois das 9h nos fins de semana.' },
      { name: '20,000 Leagues Under the Sea', type: '🔭 Submarino', wait: '20–50 min', tip: 'Submarino com viagem ao fundo do mar. Fila menor que Journey — faça depois.' },
    ],
  },
  {
    name: 'Port Discovery',
    emoji: '🔬',
    desc: 'Área futurista com o Soaring! O melhor visual dos parques Disney para crianças e adultos.',
    attractions: [
      { name: 'Soaring: Fantastic Flight', type: '🦅 Voo simulado', wait: '60–100 min', tip: '⭐ Imperdível! Voo aéreo pelos cenários do mundo com vento e aromas. Premier Access altamente recomendado.' },
      { name: 'Aquatopia', type: '💦 Bote', wait: '20–50 min', tip: 'Botes que giram e derrapam de forma aleatória na água. Pode molhar! Ótimo para o calor de julho.' },
    ],
  },
  {
    name: 'Fantasy Springs ✨ NOVO 2024',
    emoji: '❄️',
    desc: 'Área mais nova do parque (2024). Frozen, Enrolados e Peter Pan num cenário de tirar o fôlego.',
    attractions: [
      { name: 'Frozen Kingdom: Anna and Elsa\'s Frozen Journey', type: '❄️ Barco', wait: '60–120 min', tip: '⭐ Atração nova mais concorrida do parque. Premier Access esgota rapidíssimo. Compre ao abrir o app às 8h!' },
      { name: 'Rapunzel\'s Lantern Festival', type: '🏹 Montanha-russa', wait: '60–100 min', tip: 'Montanha-russa suave com visual deslumbrante de Enrolados. Familiar e linda.' },
      { name: 'Peter Pan\'s Never Land Adventure', type: '🧚 Voo', wait: '60–120 min', tip: 'Versão renovada e muito melhorada do clássico Peter Pan. Tecnologia de ponta com cabines voadoras.' },
      { name: 'Fairy Tinker Bell\'s Busy Buggy', type: '🌿 Passeio', wait: '30–60 min', tip: 'Passeio para crianças pela natureza da Sininho. Mais tranquilo que as atrações principais.' },
      { name: 'Souvenir Shop & Fantasy Springs Hotel', type: '🛍️ Compras', wait: '—', tip: 'Produtos exclusivos da área de Fantasy Springs. Grand Château Hotel fica aqui — experiência premium.' },
    ],
  },
]

const TIPS = [
  { emoji: '📱', tip: 'Baixe o app Tokyo Disney Resort antes de ir e crie conta no site oficial. Os Premier Access precisam ser comprados no app assim que o parque abre.' },
  { emoji: '⏰', tip: 'Chegue 30–45 min antes da abertura. Fique próximo à porta de entrada para correr para Fantasy Springs ou Journey to the Center of the Earth.' },
  { emoji: '💴', tip: 'Premier Access (antiga Priority Pass): ¥2.000 por pessoa por atração. Compre para Journey to the Center of the Earth, Frozen Journey e Soaring primeiro.' },
  { emoji: '🎡', tip: 'O parque fica lotado em julho — período de férias escolares japonesas. Espere filas de 90–120 min nas principais. Fins de semana são os piores dias.' },
  { emoji: '🍴', tip: 'Café da manhã no Magellan\'s ou Refettorio. Jantar early bird antes das 17h evita espera. O ramen de Mysterious Island é muito popular.' },
  { emoji: '🌃', tip: 'O parque à noite é mágico — show Fantasmic! acontece no Mediterranean Harbor (confirme datas). A iluminação noturna é espetacular.' },
  { emoji: '🎒', tip: 'Mochila obrigatória: protetor solar, ponchos de chuva, garrafa de água (julho é muito quente e úmido). Há bebedouros gratuitos.' },
  { emoji: '📸', tip: 'Fantasy Springs tem o melhor cenário para fotos — visite ao meio-dia (menos contraste de sombra) ou fim de tarde.' },
  { emoji: '🔗', tip: 'Compre ingressos no site oficial Tokyo Disney Resort com antecedência. Ingressos do dia podem esgotar — especialmente julho.' },
  { emoji: '🚝', tip: 'Do Hotel Maihama: Disney Resort Line (monorail) até Tokyo DisneySea Station. ¥260 por trecho ou incluso no passaporte do parque com saída do Tokyo Station.' },
]

export default function DisneySea({ goBack }) {
  const darkMode = useStore(s => s.darkMode)
  const bg = darkMode ? 'bg-slate-900' : 'bg-gray-50'
  const cardBg = darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'
  const text = darkMode ? 'text-slate-100' : 'text-gray-900'
  const sub = darkMode ? 'text-slate-400' : 'text-gray-500'
  const badge = darkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-600'
  const tipBg = darkMode ? 'bg-blue-950 border-blue-800' : 'bg-blue-50 border-blue-100'
  const tipText = darkMode ? 'text-blue-300' : 'text-blue-800'

  return (
    <div className={`flex flex-col h-screen ${bg}`}>
      <div className="screen-header">
        <div className="flex items-center gap-2">
          <button onClick={goBack} className={`text-xl ${darkMode ? 'text-slate-400' : 'text-gray-400'}`}>‹</button>
          <div className="flex-1 min-w-0">
            <h1 className={`text-lg font-bold ${text}`}>🌊 Tokyo DisneySea</h1>
            <p className={`text-xs ${sub}`}>Urayasu, Chiba · O parque mais bonito da Disney no mundo</p>
          </div>
          <MapsLink name="Tokyo DisneySea" lat={35.6267} lng={139.8851} address="Urayasu, Chiba, Japan" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto safe-bottom px-4 py-4 space-y-4 md:max-w-3xl md:mx-auto md:w-full">

        {/* Info rápida */}
        <div className={`rounded-2xl border p-4 ${cardBg}`}>
          <div className={`text-xs font-bold uppercase tracking-wide mb-3 ${sub}`}>Informações Essenciais</div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className={`text-xs ${sub}`}>Ingresso adulto (1 dia)</div>
              <div className={`font-bold text-sm ${text}`}>¥7.900 – ¥10.900</div>
              <div className={`text-xs ${sub}`}>Preço varia por data/tier</div>
            </div>
            <div>
              <div className={`text-xs ${sub}`}>Premier Access</div>
              <div className={`font-bold text-sm ${text}`}>¥2.000 / atração</div>
              <div className={`text-xs ${sub}`}>Pago via app TDR</div>
            </div>
            <div>
              <div className={`text-xs ${sub}`}>Horário típico</div>
              <div className={`font-bold text-sm ${text}`}>09h – 21h</div>
              <div className={`text-xs ${sub}`}>Até 22h em alta temporada</div>
            </div>
            <div>
              <div className={`text-xs ${sub}`}>Acesso</div>
              <div className={`font-bold text-sm ${text}`}>Maihama + Monorail</div>
              <div className={`text-xs ${sub}`}>Linha JR Keiyō do Tokyo Stn</div>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Tokyo+DisneySea,+Urayasu,+Chiba,+Japan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-2 text-xs text-blue-500 font-medium"
          >
            📍 Ver no Google Maps — Tokyo DisneySea
          </a>
          <a
            href="https://www.tokyodisneyresort.jp/en/tds/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 flex items-center gap-2 text-xs text-blue-500 font-medium"
          >
            🌐 Site oficial — tokyodisneyresort.jp
          </a>
        </div>

        {/* Ingressos detalhados */}
        <div className={`rounded-2xl border p-4 ${cardBg}`}>
          <div className={`text-xs font-bold uppercase tracking-wide mb-3 ${sub}`}>💴 Ingressos & Preços 2025</div>
          <div className="space-y-2">
            {[
              { label: 'Criança / Child (4–11 anos)', price: '¥4.700 – ¥6.400' },
              { label: 'Júnior / Junior (12–17 anos)', price: '¥6.600 – ¥8.900' },
              { label: 'Adulto / Adult (18–64 anos)', price: '¥7.900 – ¥10.900' },
              { label: 'Senior (65+ anos)', price: '¥7.000 – ¥9.500' },
            ].map(r => (
              <div key={r.label} className="flex justify-between items-center">
                <span className={`text-sm ${sub}`}>{r.label}</span>
                <span className={`text-sm font-semibold ${text}`}>{r.price}</span>
              </div>
            ))}
            <div className={`mt-3 p-2 rounded-lg text-xs ${tipBg} ${tipText}`}>
              ⚠️ Preços variam conforme data (Tier 1–6). Verifique sempre no site oficial antes de comprar. Fantasy Springs Hotel exclusivo para hóspedes com acesso antecipado ao parque.
            </div>
          </div>
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

        {/* Mapa do parque */}
        <div className={`rounded-2xl border p-4 ${cardBg}`}>
          <div className={`text-xs font-bold uppercase tracking-wide mb-3 ${sub}`}>🗺️ Mapa & Ports of Call</div>
          <div className={`text-xs mb-2 ${sub}`}>8 áreas temáticas + Fantasy Springs (área mais nova, aberta em 2024)</div>
          <div className="flex flex-wrap gap-2">
            {['⚓ Mediterranean Harbor', '🗽 American Waterfront', '🌿 Lost River Delta', '🕌 Arabian Coast', '🧜 Mermaid Lagoon', '🌋 Mysterious Island', '🔬 Port Discovery', '❄️ Fantasy Springs'].map(p => (
              <span key={p} className={`text-xs px-2 py-1 rounded-full ${badge}`}>{p}</span>
            ))}
          </div>
          <a
            href="https://www.tokyodisneyresort.jp/en/tds/map.html"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-2 text-xs text-blue-500 font-medium"
          >
            🗺️ Ver mapa oficial do parque
          </a>
        </div>

        {/* Atrações por área */}
        {PORTS.map(port => (
          <div key={port.name} className={`rounded-2xl border p-4 ${cardBg}`}>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{port.emoji}</span>
              <div>
                <div className={`font-bold text-sm ${text}`}>{port.name}</div>
                <div className={`text-xs ${sub}`}>{port.desc}</div>
              </div>
            </div>
            <div className="space-y-3 mt-3">
              {port.attractions.map(a => (
                <div key={a.name} className={`rounded-xl p-3 ${darkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                  <div className="flex justify-between items-start gap-2">
                    <div className={`font-semibold text-sm ${text}`}>{a.name}</div>
                    <span className={`text-xs whitespace-nowrap px-2 py-0.5 rounded-full ${badge}`}>{a.type}</span>
                  </div>
                  <div className={`text-xs mt-1 ${sub}`}>⏱ Fila esperada: {a.wait}</div>
                  <div className={`text-xs mt-1 ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>💡 {a.tip}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Estratégia de visita */}
        <div className={`rounded-2xl border p-4 ${cardBg}`}>
          <div className={`text-xs font-bold uppercase tracking-wide mb-3 ${sub}`}>🗓️ Estratégia Recomendada para 1 Dia</div>
          <div className="space-y-2">
            {[
              { time: '08h30', action: 'Chegue ao portão. Abra o app TDR e esteja pronto para comprar Premier Access às 09h00 em ponto.' },
              { time: '09h00', action: 'Compre Premier Access: Journey to the Center of the Earth + Frozen Journey + Soaring (em ordem de prioridade).' },
              { time: '09h05', action: 'Corra para Fantasy Springs → Anna and Elsa Frozen Journey (fila menor logo na abertura).' },
              { time: '10h30', action: 'Mysterious Island → Journey to the Center of the Earth (se não comprou PA, tente logo após Frozen).' },
              { time: '12h00', action: 'Almoço — Magellan\'s ou Refettorio (Mediterranean Harbor). Evite pico 12h–13h.' },
              { time: '13h30', action: 'Port Discovery → Soaring + Aquatopia. Arabian Coast → Sindbad (fila curta — não pule!).' },
              { time: '16h00', action: 'American Waterfront → Tower of Terror (Premier Access ou fila se < 45 min). Toy Story Mania!' },
              { time: '18h00', action: 'Jantar cedo. Lost River Delta → Indiana Jones + Raging Spirits.' },
              { time: '20h00', action: 'Mediterranean Harbor para o show noturno (Fantasmic! ou show de luzes dependendo da temporada).' },
            ].map((s, i) => (
              <div key={i} className="flex gap-3">
                <span className={`text-xs font-mono font-bold w-12 shrink-0 pt-0.5 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{s.time}</span>
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
              { title: 'A Disney mais incrível do mundo — Tokyo DisneySea', channel: 'Vai com Bruno', id: 'eBNWlbDhYso' },
              { title: 'ROTEIRO COMPLETO DO TOKYO DISNEYSEA', channel: 'VPD Play', id: 'Lk10Mi_cobM' },
              { title: 'DISNEY JAPÃO: Como chegar, melhores atrações, todos os preços e dicas! 2025', channel: 'Sonhe Alto Viagens', id: 'SMfoA5CweXk' },
              { title: 'TOKYO DISNEYLAND RESORT: TUDO SOBRE A DISNEY DO JAPÃO!', channel: 'VPD Play', id: 'Pyn0m656Ssk' },
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
