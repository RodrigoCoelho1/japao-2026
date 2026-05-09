import useStore from '../store/useStore'
import MapsLink from '../components/MapsLink'

const LANDS = [
  {
    name: 'World Bazaar',
    emoji: '🏬',
    desc: 'Entrada coberta inspirada na Main Street EUA dos anos 1900. Ótima para compras e lojas temáticas.',
    attractions: [
      { name: 'Omnibus', type: '🚌 Transporte', wait: '5 min', tip: 'Ônibus de dois andares que percorre o World Bazaar. Bom para descansar.' },
    ],
  },
  {
    name: 'Adventureland',
    emoji: '🌴',
    desc: 'Selva tropical e aventura. Lar do Jungle Cruise e do Pirates of the Caribbean.',
    attractions: [
      { name: 'Pirates of the Caribbean', type: '🏴‍☠️ Barco', wait: '20–40 min', tip: 'Versão atualizada com Jack Sparrow. Fila curta na maior parte do dia — boa opção no meio da tarde.' },
      { name: 'Jungle Cruise: Wildlife Expeditions', type: '🐊 Barco', wait: '20–50 min', tip: 'Clássico com animatrônicos de animais. Versão japonesa tem jokes únicos (em japonês mas visualmente engraçado).' },
      { name: 'Western River Railroad', type: '🚂 Trem', wait: '10–25 min', tip: 'Trem a vapor que contorna o Westernland. Boa opção para relaxar com crianças.' },
    ],
  },
  {
    name: 'Westernland',
    emoji: '🤠',
    desc: 'O Velho Oeste americano. Big Thunder Mountain é a atração estrela desta área.',
    attractions: [
      { name: 'Big Thunder Mountain', type: '⛏️ Montanha-russa', wait: '40–90 min', tip: '⭐ A atração mais popular do Westernland. Muito divertida para toda a família — sem inversões, perfeita para iniciantes em coaster.' },
      { name: 'Tom Sawyer Island Rafts', type: '⛵ Barco', wait: '10–20 min', tip: 'Balsas para a Ilha Tom Sawyer — área de exploração livre. Ótima pausa para crianças.' },
    ],
  },
  {
    name: 'Critter Country',
    emoji: '🌊',
    desc: 'Área campestre com o Splash Mountain. Prepare-se para se molhar!',
    attractions: [
      { name: 'Splash Mountain', type: '💦 Bote com queda', wait: '40–100 min', tip: 'Queda final de 16m — você VAI se molhar. Leve poncho ou troque depois. Fila menor no início ou fim do dia.' },
      { name: 'Beaver Brothers Explorer Canoes', type: '🛶 Canoa', wait: '10–20 min', tip: 'Canoa por remo com ajuda dos convidados — experiência única. Disponível apenas em certos horários.' },
    ],
  },
  {
    name: 'Fantasyland',
    emoji: '🏰',
    desc: 'A área mais icônica — o coração da Disneyland. Beauty and the Beast e Pooh ficam aqui.',
    attractions: [
      { name: 'Beauty and the Beast: Belle\'s Village', type: '🕌 Passeio', wait: '60–120 min', tip: '⭐ EXCLUSIVO do Tokyo Disneyland — não existe em nenhum outro parque Disney do mundo! Passeio dançante no castelo da Fera. Prioridade máxima: Premier Access obrigatório.' },
      { name: 'Pooh\'s Hunny Hunt', type: '🐝 Passeio', wait: '60–120 min', tip: '⭐ Exclusivo do Tokyo Disneyland. Carrinhos sem trilho que se movem magicamente. Tecnologia única no mundo — imperdível!' },
      { name: 'Peter Pan\'s Flight', type: '🧚 Voo', wait: '40–80 min', tip: 'Clássico reimaginado. Fila longa mas experiência única — tente com Premier Access ou no encerramento do parque.' },
      { name: 'It\'s a Small World', type: '🌍 Barco', wait: '10–30 min', tip: 'Clássico de barco com bonecos do mundo inteiro. Fila geralmente curta — bom para qualquer horário.' },
      { name: 'Snow White\'s Mine Adventure', type: '🍎 Mini coaster', wait: '30–60 min', tip: 'Versão redesenhada da clássica Branca de Neve. Mais imersiva e detalhada.' },
      { name: 'Dumbo the Flying Elephant', type: '🐘 Voo', wait: '20–40 min', tip: 'Elefantes voadores — clássico Disney. Vai direto se tiver criança pequena.' },
      { name: 'Pinocchio\'s Daring Journey', type: '🪆 Passeio', wait: '15–30 min', tip: 'Percurso pela história do Pinóquio com animatrônicos.' },
      { name: 'Haunted Mansion', type: '👻 Mansão', wait: '30–60 min', tip: 'A casa mal-assombrada mais famosa da Disney. Versão japonesa tem Holiday Haunted Mansion em outubro.' },
    ],
  },
  {
    name: 'Toontown',
    emoji: '🎨',
    desc: 'Cidade animada do Mickey e Minnie Mouse. Recentemente renovada com Minnie\'s Style Studio.',
    attractions: [
      { name: 'Minnie\'s Style Studio', type: '👗 Encontro', wait: '20–40 min', tip: 'Encontro com a Minnie em estúdio de moda exclusivo. Foto garantida!' },
      { name: 'Chip \'n\' Dale\'s Gadgetcoaster', type: '🎢 Mini coaster', wait: '20–45 min', tip: 'Mini montanha-russa para crianças. Charmoso e divertido.' },
      { name: 'Roger Rabbit\'s Car Toon Spin', type: '🐰 Passeio', wait: '20–50 min', tip: 'Carrinhos que giram pelo Toontown. Divertido para família.' },
    ],
  },
  {
    name: 'Tomorrowland',
    emoji: '🚀',
    desc: 'Futuro estilizado dos anos 50. Space Mountain e Buzz Lightyear são os destaques.',
    attractions: [
      { name: 'Space Mountain', type: '🌌 Montanha-russa', wait: '40–80 min', tip: 'Montanha-russa no escuro pelo espaço. Clássico absoluto — não deixe de fazer!' },
      { name: 'Buzz Lightyear\'s Astro Blasters', type: '🎯 Interativo', wait: '30–60 min', tip: 'Jogo de tiro com pistola de raio laser. Tente bater o recorde de pontos da família!' },
      { name: 'Star Tours: The Adventures Continue', type: '🛸 Simulador', wait: '20–50 min', tip: 'Simulador de voo Star Wars com roteiro aleatório a cada vez. Pode fazer mais de uma vez!' },
      { name: 'Monsters, Inc. Ride & Go Seek!', type: '🔦 Passeio', wait: '30–60 min', tip: '⭐ EXCLUSIVO do Tokyo Disneyland! Passeio com lanternas para procurar monstros no escuro. Imperdível.' },
      { name: 'Grand Circuit Raceway', type: '🏎️ Kart', wait: '20–40 min', tip: 'Carrinhos elétricos numa pista — crianças adoram.' },
    ],
  },
]

const TIPS = [
  { emoji: '👑', tip: 'Beauty and the Beast e Pooh\'s Hunny Hunt são exclusivos do Tokyo Disneyland — não existem em nenhum outro parque Disney do mundo. São as prioridades absolutas. Compre Premier Access logo ao abrir o parque.' },
  { emoji: '📱', tip: 'Baixe o Tokyo Disney Resort App antes de ir. Às 09h00 em ponto (abertura), compre Premier Access imediatamente para Beauty and the Beast e depois Pooh\'s Hunny Hunt.' },
  { emoji: '⏰', tip: 'Chegue 40 min antes da abertura. Posicione-se perto do portão da Fantasyland (direita da entrada). Ao abrir, vá direto para Beauty and the Beast — fila forma rápido.' },
  { emoji: '🎡', tip: 'Julio é alta temporada. Espere filas de 90–120 min em Beauty and the Beast e Pooh sem Premier Access. Vale muito o investimento de ¥2.000/pessoa.' },
  { emoji: '🎠', tip: 'Haunted Mansion Holiday (outubro): se sua viagem incluir outubro, a mansão tem decoração especial de Halloween. Mas seu roteiro é junho/julho.' },
  { emoji: '🍔', tip: 'Restaurante Friar\'s Nook serve turkey leg (pernil de peru) — especialidade da Disney. Queen of Hearts Banquet Hall para refeição completa em ambiente temático.' },
  { emoji: '🎆', tip: 'Show noturno no Castelo: Electrical Parade Dreamlights às 20h30 na maioria dos dias de verão. Consulte calendário no app.' },
  { emoji: '🛍️', tip: 'Compras: World Bazaar tem a maior loja de lembranças. Produtos exclusivos do Japão incluem itens com design japonês do Mickey e Minnie. Reserve tempo no final do dia.' },
  { emoji: '🚝', tip: 'Acesso: JR Keiyō Line até Maihama, depois Disney Resort Line (monorail) até Tokyo Disneyland Station. Com JR Pass, a Keiyō não é coberta — compre passagem normal.' },
  { emoji: '🎟️', tip: 'Monsters, Inc. Ride & Go Seek é outro exclusivo japonês fantástico — não pule! Diferente de tudo que existe em outros parques Disney.' },
]

export default function Disneyland({ goBack }) {
  const darkMode = useStore(s => s.darkMode)
  const bg = darkMode ? 'bg-slate-900' : 'bg-gray-50'
  const cardBg = darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'
  const text = darkMode ? 'text-slate-100' : 'text-gray-900'
  const sub = darkMode ? 'text-slate-400' : 'text-gray-500'
  const badge = darkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-600'
  const tipBg = darkMode ? 'bg-pink-950 border-pink-800' : 'bg-pink-50 border-pink-100'
  const tipText = darkMode ? 'text-pink-300' : 'text-pink-800'

  return (
    <div className={`flex flex-col h-screen ${bg}`}>
      <div className="screen-header">
        <div className="flex items-center gap-2">
          <button onClick={goBack} className={`text-xl ${darkMode ? 'text-slate-400' : 'text-gray-400'}`}>‹</button>
          <div className="flex-1 min-w-0">
            <h1 className={`text-lg font-bold ${text}`}>🏰 Tokyo Disneyland</h1>
            <p className={`text-xs ${sub}`}>Urayasu, Chiba · Atrações exclusivas japonesas imperdíveis</p>
          </div>
          <MapsLink name="Tokyo Disneyland" lat={35.6329} lng={139.8804} address="Urayasu, Chiba, Japan" />
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
              <div className={`text-xs ${sub}`}>Varia por data/tier</div>
            </div>
            <div>
              <div className={`text-xs ${sub}`}>Premier Access</div>
              <div className={`font-bold text-sm ${text}`}>¥2.000 / atração</div>
              <div className={`text-xs ${sub}`}>Pago via app TDR</div>
            </div>
            <div>
              <div className={`text-xs ${sub}`}>Horário típico</div>
              <div className={`font-bold text-sm ${text}`}>08h – 22h</div>
              <div className={`text-xs ${sub}`}>Varia por temporada</div>
            </div>
            <div>
              <div className={`text-xs ${sub}`}>Acesso</div>
              <div className={`font-bold text-sm ${text}`}>Maihama + Monorail</div>
              <div className={`text-xs ${sub}`}>JR Keiyō (não coberta JR Pass)</div>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Tokyo+Disneyland,+Urayasu,+Chiba,+Japan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-2 text-xs text-blue-500 font-medium"
          >
            📍 Ver no Google Maps — Tokyo Disneyland
          </a>
          <a
            href="https://www.tokyodisneyresort.jp/en/tdl/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 flex items-center gap-2 text-xs text-blue-500 font-medium"
          >
            🌐 Site oficial — tokyodisneyresort.jp
          </a>
        </div>

        {/* Exclusivos */}
        <div className={`rounded-2xl border p-4 ${tipBg}`}>
          <div className={`text-xs font-bold uppercase tracking-wide mb-2 ${tipText}`}>⭐ Exclusivos do Tokyo Disneyland</div>
          <div className="space-y-1">
            {[
              'Beauty and the Beast: Belle\'s Village — passeio dançante no castelo',
              'Pooh\'s Hunny Hunt — carrinhos sem trilho com tecnologia única',
              'Monsters, Inc. Ride & Go Seek — lanternas para encontrar monstros',
              'Haunted Mansion Holiday — decoração especial (out–nov)',
            ].map(e => (
              <div key={e} className={`text-sm ${tipText}`}>• {e}</div>
            ))}
          </div>
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
            <div className={`mt-3 p-2 rounded-lg text-xs border ${darkMode ? 'bg-amber-950 border-amber-800 text-amber-300' : 'bg-amber-50 border-amber-100 text-amber-800'}`}>
              💡 Compre ingressos no site oficial com antecedência. Em julho (alta temporada) os ingressos podem esgotar online. Não há venda na bilheteria para não-residentes sem reserva prévia.
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

        {/* Mapa */}
        <div className={`rounded-2xl border p-4 ${cardBg}`}>
          <div className={`text-xs font-bold uppercase tracking-wide mb-3 ${sub}`}>🗺️ Mapa & Áreas Temáticas</div>
          <div className="flex flex-wrap gap-2 mb-3">
            {['🏬 World Bazaar', '🌴 Adventureland', '🤠 Westernland', '🌊 Critter Country', '🏰 Fantasyland', '🎨 Toontown', '🚀 Tomorrowland'].map(p => (
              <span key={p} className={`text-xs px-2 py-1 rounded-full ${badge}`}>{p}</span>
            ))}
          </div>
          <a
            href="https://www.tokyodisneyresort.jp/en/tdl/map.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-blue-500 font-medium"
          >
            🗺️ Ver mapa oficial do parque
          </a>
        </div>

        {/* Atrações por área */}
        {LANDS.map(land => (
          <div key={land.name} className={`rounded-2xl border p-4 ${cardBg}`}>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{land.emoji}</span>
              <div>
                <div className={`font-bold text-sm ${text}`}>{land.name}</div>
                <div className={`text-xs ${sub}`}>{land.desc}</div>
              </div>
            </div>
            <div className="space-y-3 mt-3">
              {land.attractions.map(a => (
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

        {/* Estratégia */}
        <div className={`rounded-2xl border p-4 ${cardBg}`}>
          <div className={`text-xs font-bold uppercase tracking-wide mb-3 ${sub}`}>🗓️ Estratégia Recomendada para 1 Dia</div>
          <div className="space-y-2">
            {[
              { time: '08h20', action: 'Chegue ao portão. Abra o Tokyo Disney Resort App — deixe a tela do Premier Access pronta para comprar assim que entrar.' },
              { time: '09h00', action: 'Parque abre! Entre e compre Premier Access imediatamente via app: Beauty and the Beast → Pooh\'s Hunny Hunt → Monsters Inc.' },
              { time: '09h05', action: 'Corra direto para Fantasyland. Pooh\'s Hunny Hunt tem menor fila nos primeiros 30 min.' },
              { time: '10h30', action: 'Beauty and the Beast (horário do Premier Access) → Peter Pan\'s Flight.' },
              { time: '11h00', action: 'Tomorrowland: Space Mountain + Monsters Inc. (Premier Access) + Buzz Lightyear.' },
              { time: '13h00', action: 'Almoço em Westernland ou Adventureland. Évite os restaurantes de fast food no pico.' },
              { time: '14h30', action: 'Westernland: Big Thunder Mountain. Critter Country: Splash Mountain (leve poncho!).' },
              { time: '17h00', action: 'Adventureland: Pirates of the Caribbean + Jungle Cruise. Toontown: Minnie e Roger Rabbit.' },
              { time: '19h00', action: 'Jantar leve. Posicione-se para Electrical Parade Dreamlights (confirme horário no app).' },
              { time: '20h30', action: 'Parade noturna e show de fogos no Castelo (Wish). Compras no World Bazaar no encerramento.' },
            ].map((s, i) => (
              <div key={i} className="flex gap-3">
                <span className={`text-xs font-mono font-bold w-12 shrink-0 pt-0.5 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>{s.time}</span>
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
              { title: 'TOKYO DISNEYLAND: ROTEIRO COMPLETO PARA APROVEITAR!', channel: 'VPD Play', id: 'bVCi8jP9S0g' },
              { title: 'Disneyland Tokyo — INGRESSOS — COMO CHEGAR — ATRAÇÕES', channel: 'Vai com Bruno', id: '7oykv7bWMU0' },
              { title: 'TOKYO DISNEYLAND RESORT: TUDO SOBRE A DISNEY DO JAPÃO!', channel: 'VPD Play', id: 'Pyn0m656Ssk' },
              { title: 'DISNEY JAPÃO: Como chegar, melhores atrações e dicas! 2025', channel: 'Sonhe Alto Viagens', id: 'SMfoA5CweXk' },
              { title: 'Disney Tokyo de metrô — Passo a passo', channel: 'Vai com Bruno', id: 'vO-E54thbv8' },
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
