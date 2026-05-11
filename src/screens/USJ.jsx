import useStore from '../store/useStore'
import MapsLink from '../components/MapsLink'

const ZONES = [
  {
    name: 'Super Nintendo World',
    emoji: '🍄',
    desc: 'O reino do Mario em tamanho real — cogumelos gigantes, blocos de interrogação e tudo o que você imagina do universo Nintendo. Área exclusiva e muito concorrida.',
    attractions: [
      { name: "Mario Kart: Koopa's Challenge", type: '🏎️ Dark ride / AR', wait: '60–120 min', tip: '⭐ A atração mais disputada do parque. Corrida de Mario Kart com óculos AR — o cenário é o jogo em tamanho real. Prioridade máxima na abertura ou usar Express Pass.' },
      { name: "Yoshi's Adventure", type: '🦕 Passeio panorâmico', wait: '20–50 min', tip: 'Passeio tranquilo nas costas do Yoshi pelas paisagens coloridas. Ideal para crianças — pode fazer após o Mario Kart quando a fila menor.' },
      { name: 'Power-Up Bands', type: '⌚ Interativo', wait: '—', tip: 'Pulseiras interativas (~¥3.500) que permitem bater nos Question Blocks e coletar moedas. Muito divertido para crianças — comprar na entrada da área.' },
      { name: 'Toad Café', type: '🍽️ Gastronomia', wait: '—', tip: 'Restaurante temático dentro do Super Nintendo World. Pratos e sobremesas inspirados nos personagens — muito fotogênico!' },
    ],
  },
  {
    name: 'Wizarding World of Harry Potter',
    emoji: '⚡',
    desc: 'A Vila de Hogsmeade recriada com perfeição — The Three Broomsticks, Ollivanders, lojas e castelo de Hogwarts ao fundo. Uma das melhores áreas temáticas do mundo.',
    attractions: [
      { name: "Harry Potter and the Forbidden Journey", type: '🧙 Dark ride 4D', wait: '60–120 min', tip: '⭐ A atração principal de Hogwarts — voe com Harry em Quidditch e enfrente o Basilisco. Tecnologia única que mistura set físico com movimentos e projeção. Imperdível!' },
      { name: 'Flight of the Hippogriff', type: '🦅 Montanha-russa', wait: '30–70 min', tip: 'Coaster ao ar livre e rápido com vista do castelo de Hogwarts. Curto mas muito divertido — bom para crianças acima de 1,22m.' },
      { name: 'Ollivander\'s Wand Experience', type: '🪄 Show interativo', wait: '20–30 min', tip: 'Show em que a varinha "escolhe" um visitante na plateia. Chegue cedo — as sessões lotam. Após o show, varinha interativa permite ativar feitiços em pontos espalhados por Hogsmeade.' },
      { name: 'Butterbeer', type: '🍺 Gastronomia', wait: '5–15 min', tip: 'Cerveja amanteigada (sem álcool) — o clássico do universo Potter. Versão frozen é a favorita. Disponível no Three Broomsticks e carrinho externo.' },
    ],
  },
  {
    name: 'Jurassic World',
    emoji: '🦕',
    desc: 'O mundo dos dinossauros com a maior atração do parque. A área recebe a temática atualizada de Jurassic World com cenários incríveis.',
    attractions: [
      { name: 'The Flying Dinosaur', type: '🎢 Roller coaster voador', wait: '60–120 min', tip: '⭐ O maior e mais intenso coaster do USJ — voe de bruços sobre o parque como um pterodáctilo. Um dos melhores coasters de toda a Ásia. Express Pass MUITO recomendado.' },
      { name: 'Jurassic World: The Ride', type: '💦 Passeio aquático', wait: '30–70 min', tip: 'Passeio de barco pelo território dos dinossauros com queda final molhante. Leve capa de chuva — julho é quente e ficar molhado é refrescante!' },
      { name: 'Camp Cretaceous', type: '🏕️ Área interativa', wait: '—', tip: 'Área de encontro com personagens e foto ops com dinossauros. Boa para crianças entre as atrações.' },
    ],
  },
  {
    name: 'Hollywood & New York',
    emoji: '🎬',
    desc: 'Área clássica do parque com a fachada de Hollywood e as famosas atrações originais do Universal Studios.',
    attractions: [
      { name: 'Hollywood Dream – The Ride', type: '🎢 Roller coaster', wait: '40–90 min', tip: '⭐ O coaster clássico e favorito do USJ. Você escolhe a música que toca no fone de ouvido durante a corrida. Versão Backdrop (de costas) tem fila separada e vale muito a pena!' },
      { name: 'Hollywood Dream Backdrop', type: '🎢 Coaster invertido', wait: '30–70 min', tip: 'A mesma trilha do Hollywood Dream mas de costas — sensação completamente diferente e muito intensa. Fila geralmente mais curta que a versão normal.' },
      { name: 'Despicable Me Minion Mayhem', type: '🍌 Simulador', wait: '20–50 min', tip: 'Simulador divertido com os Minions — perfeito para crianças pequenas. Área do Minion Park ao redor é muito fotogênica.' },
    ],
  },
]

const TIPS = [
  { emoji: '⏰', tip: 'Estratégia de abertura: vá DIRETO ao Super Nintendo World — Mario Kart esgota Express Pass em minutos. Chegue 30 min antes da abertura (que em julho pode ser 8h ou 8h30).' },
  { emoji: '🎟️', tip: 'Express Pass 7: garante entrada em 7 atrações sem fila. Em julho (alta temporada) é praticamente obrigatório — sem ele, Mario Kart e Flying Dinosaur podem ter 2h+ de espera.' },
  { emoji: '📱', tip: 'Baixe o app USJ antes de chegar. Mostra tempo de espera em tempo real, mapa, horário dos shows e permite comprar upgrades no dia.' },
  { emoji: '🗺️', tip: 'O USJ é menor que a Disney — dá para fazer tudo em 1 dia COM Express Pass. Sem Express Pass, foque em Mario Kart, Harry Potter e Flying Dinosaur e use a estratégia de abertura certa.' },
  { emoji: '🌧️', tip: 'Julho em Osaka é quente e úmido (34–37°C). Leve roupa leve, protetor solar, toalha pequena e capa de chuva. O Jurassic World Ride vai molhar — planeje isso no roteiro do dia.' },
  { emoji: '🍺', tip: 'Butterbeer (Hogsmeade) e pratos do Toad Café (Nintendo World) são as experiências gastronômicas mais únicas do parque. Reserve estômago para ambos!' },
  { emoji: '🎭', tip: 'Shows ao vivo (One Piece, Attack on Titan, Demon Slayer) mudam por temporada. Verifique a grade no site oficial ou no app antes de ir — vale muito a pena incluir um no roteiro.' },
  { emoji: '🚊', tip: 'Chegada: trem JR Yumesaki Line até a estação Universal City (coberto pelo JR Pass!). Walk de 5 min até a entrada principal. Saindo da estação já tem lojas temáticas na Universal City Walk.' },
  { emoji: '💴', tip: 'Orçamento no parque: ingresso (~¥8.600) + Express Pass 7 (~¥9.800–¥19.800) + Power-Up Band (~¥3.500) + comida (~¥3.000–¥5.000) + souvenirs. Separe ¥30.000–¥40.000/pessoa para um dia completo.' },
  { emoji: '🕒', tip: 'O Flying Dinosaur e o Hollywood Dream têm fila separada para Backdrop (de costas). As filas dessas versões costumam ser bem menores — não pule!' },
]

const RELATED_VIDEOS = [
  { id: 'pyXKioOKLpw', title: 'UNIVERSAL STUDIOS JAPÃO — Tudo que você precisa saber antes de visitar: com todos os preços! 2025', channel: 'Sonhe Alto Viagens' },
  { id: 'gFey4uS-PMc', title: 'Universal Studios Japão — Osaka: Nintendo World, Harry Potter, Flying Dinosaur e mais', channel: 'Vai com Bruno' },
  { id: '4ysjWmtPNmw', title: 'UNIVERSAL STUDIOS JAPAN — Guia completo: roteiro, Express Pass e dicas de visita', channel: 'Canal BR' },
]

export default function USJ({ goBack }) {
  const darkMode = useStore(s => s.darkMode)
  const bg = darkMode ? 'bg-slate-900' : 'bg-gray-50'
  const cardBg = darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'
  const text = darkMode ? 'text-slate-100' : 'text-gray-900'
  const sub = darkMode ? 'text-slate-400' : 'text-gray-500'
  const badge = darkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-600'
  const innerCard = darkMode ? 'bg-slate-700' : 'bg-gray-50'

  return (
    <div className={`flex flex-col h-screen ${bg}`}>
      <div className="screen-header">
        <div className="flex items-center gap-2">
          <button onClick={goBack} className={`text-xl ${sub}`}>‹</button>
          <div className="flex-1 min-w-0">
            <h1 className={`text-lg font-bold ${text}`}>🎢 Universal Studios Japan</h1>
            <p className={`text-xs ${sub}`}>Osaka · 12/07 · Nintendo World · Harry Potter · Flying Dinosaur</p>
          </div>
          <MapsLink name="Universal Studios Japan" lat={34.6654} lng={135.4323} address="Osaka, Japan" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto safe-bottom px-4 py-4 space-y-4 md:max-w-3xl md:mx-auto md:w-full">

        {/* Info rápida */}
        <div className={`rounded-2xl border p-4 ${cardBg}`}>
          <div className={`text-xs font-bold uppercase tracking-wide mb-3 ${sub}`}>Informações Essenciais</div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className={`text-xs ${sub}`}>Ingresso adulto</div>
              <div className={`font-bold text-sm ${text}`}>¥8.600</div>
              <div className={`text-xs ${sub}`}>Preço base · varia por data</div>
            </div>
            <div>
              <div className={`text-xs ${sub}`}>Express Pass 7</div>
              <div className={`font-bold text-sm ${text}`}>¥9.800 – ¥19.800</div>
              <div className={`text-xs ${sub}`}>Alta temporada = preço máximo</div>
            </div>
            <div>
              <div className={`text-xs ${sub}`}>Ingresso criança</div>
              <div className={`font-bold text-sm ${text}`}>¥5.600</div>
              <div className={`text-xs ${sub}`}>4–11 anos</div>
            </div>
            <div>
              <div className={`text-xs ${sub}`}>Abertura em julho</div>
              <div className={`font-bold text-sm ${text}`}>~8h00 – 22h00</div>
              <div className={`text-xs ${sub}`}>Confirmar no app USJ</div>
            </div>
          </div>
          <div className="mt-3 space-y-1.5">
            <a href="https://www.usj.co.jp/web/en/us/tickets" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-blue-500 font-medium">
              🎟️ Comprar ingressos — usj.co.jp
            </a>
            <a href="https://maps.google.com/?q=Universal+Studios+Japan,+Osaka" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-blue-500 font-medium">
              📍 Ver no Google Maps — Universal Studios Japan, Osaka
            </a>
            <a href="https://www.usj.co.jp/web/en/us/plan/app" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-blue-500 font-medium">
              📱 Baixar app oficial USJ
            </a>
          </div>
        </div>

        {/* Áreas do parque */}
        <div className={`rounded-2xl border p-4 ${cardBg}`}>
          <div className={`text-xs font-bold uppercase tracking-wide mb-3 ${sub}`}>🗺️ Principais Áreas do Parque</div>
          <div className="flex flex-wrap gap-2">
            {['🍄 Super Nintendo World', '⚡ Wizarding World', '🦕 Jurassic World', '🎬 Hollywood', '🍌 Minion Park'].map(z => (
              <span key={z} className={`text-xs px-2 py-1 rounded-full ${badge}`}>{z}</span>
            ))}
          </div>
        </div>

        {/* Estratégia do dia */}
        <div className={`rounded-2xl border p-4 ${cardBg}`}>
          <div className={`text-xs font-bold uppercase tracking-wide mb-3 ${sub}`}>🗓️ Estratégia — 12/07 (domingo)</div>
          <div className="space-y-2.5">
            {[
              { time: '07h30', action: 'Saída do hotel em Osaka. Trem JR Yumesaki Line até Universal City (coberto pelo JR Pass).' },
              { time: '08h00', action: 'Chegada — fila de entrada. Julho = alta temporada, chegue antes da abertura.' },
              { time: '08h30', action: "Abertura: corra direto ao Super Nintendo World → Mario Kart: Koopa's Challenge (maior fila do parque)." },
              { time: '10h00', action: 'Yoshi\'s Adventure + fotos na área Nintendo. Comprar Power-Up Bands se quiser.' },
              { time: '11h00', action: 'Wizarding World → Harry Potter and the Forbidden Journey + Flight of the Hippogriff.' },
              { time: '12h30', action: 'Almoço: Three Broomsticks (Hogsmeade) ou Toad Café. Butterbeer obrigatório!' },
              { time: '14h00', action: 'Jurassic World → The Flying Dinosaur (Express Pass recomendado) + Jurassic World Ride.' },
              { time: '15h30', action: 'Hollywood → Hollywood Dream Backdrop (de costas — fila menor!) + Minion Park.' },
              { time: '17h00', action: 'Show ao vivo ou tempo livre. Repetir favoritas com fila menor no fim do dia.' },
              { time: '19h00', action: 'Jantar no parque + compras de souvenir. Área Nintendo tem os itens mais exclusivos.' },
              { time: '21h00', action: 'Saída. Volta ao hotel de trem JR.' },
            ].map((s, i) => (
              <div key={i} className="flex gap-3">
                <span className={`text-xs font-mono font-bold w-12 shrink-0 pt-0.5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>{s.time}</span>
                <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>{s.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dicas */}
        <div className={`rounded-2xl border p-4 ${cardBg}`}>
          <div className={`text-xs font-bold uppercase tracking-wide mb-3 ${sub}`}>💡 Dicas dos Vídeos</div>
          <div className="space-y-3">
            {TIPS.map((t, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-lg leading-none mt-0.5 flex-shrink-0">{t.emoji}</span>
                <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>{t.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Zonas com atrações */}
        {ZONES.map(zone => (
          <div key={zone.name} className={`rounded-2xl border p-4 ${cardBg}`}>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{zone.emoji}</span>
              <div>
                <div className={`font-bold text-sm ${text}`}>{zone.name}</div>
                <div className={`text-xs ${sub}`}>{zone.desc}</div>
              </div>
            </div>
            <div className="space-y-3 mt-3">
              {zone.attractions.map(a => (
                <div key={a.name} className={`rounded-xl p-3 ${innerCard}`}>
                  <div className="flex justify-between items-start gap-2">
                    <div className={`font-semibold text-sm ${text}`}>{a.name}</div>
                    <span className={`text-xs whitespace-nowrap px-2 py-0.5 rounded-full flex-shrink-0 ${badge}`}>{a.type}</span>
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
          <div className={`text-xs font-bold uppercase tracking-wide mb-3 ${sub}`}>💴 Tabela de Preços — Julho 2026</div>
          <div className="space-y-2">
            {[
              { label: 'Ingresso adulto (12+)', price: '¥8.600' },
              { label: 'Ingresso criança (4–11)', price: '¥5.600' },
              { label: 'Express Pass 7 (alta temporada)', price: '¥9.800 – ¥19.800' },
              { label: 'Power-Up Band (Nintendo)', price: '~¥3.500' },
              { label: 'Varinha interativa (Harry Potter)', price: '~¥5.000' },
              { label: 'JR Pass cobre a ida/volta', price: '✓ Yumesaki Line' },
            ].map(r => (
              <div key={r.label} className="flex justify-between items-center">
                <span className={`text-sm ${sub}`}>{r.label}</span>
                <span className={`text-sm font-semibold ${text}`}>{r.price}</span>
              </div>
            ))}
          </div>
          <a href="https://www.usj.co.jp/web/en/us/tickets" target="_blank" rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-xl">
            🎟️ Comprar ingressos oficiais
          </a>
        </div>

        {/* Vídeos relacionados */}
        <div className={`rounded-2xl border p-4 ${cardBg}`}>
          <div className={`text-xs font-bold uppercase tracking-wide mb-3 ${sub}`}>🎬 Vídeos — Universal Studios Japan</div>
          <div className="space-y-2">
            {RELATED_VIDEOS.map(v => (
              <a key={v.id} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer"
                className={`flex items-start gap-3 p-3 rounded-xl ${innerCard}`}>
                <img src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`} alt={v.title}
                  className="w-24 h-14 rounded-lg flex-shrink-0 object-cover" />
                <div>
                  <div className={`text-sm font-semibold leading-snug ${text}`}>{v.title}</div>
                  <div className={`text-xs mt-0.5 ${sub}`}>{v.channel}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
