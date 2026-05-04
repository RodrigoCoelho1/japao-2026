import { useState, useEffect } from 'react'
import useStore from '../store/useStore'
import { ITINERARY, SHOPPING_ITEMS } from '../data'

const DarkToggle = () => {
  const { darkMode, toggleDarkMode } = useStore()
  return (
    <button onClick={toggleDarkMode} className="ml-auto p-2 rounded-full bg-white/20 hover:bg-white/30 active:scale-90 transition-all" title={darkMode ? 'Modo Claro' : 'Modo Escuro'}>
      <span className="text-lg">{darkMode ? '☀️' : '🌙'}</span>
    </button>
  )
}

const DEPARTURE = new Date('2026-06-27T20:30:00-03:00')
const TRIP_START = new Date('2026-06-27')
const TRIP_END = new Date('2026-07-16')

function getDaysUntil(target) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const t = new Date(target)
  t.setHours(0, 0, 0, 0)
  const diff = t - today
  return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24)))
}

function getTripPhase() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const start = new Date(TRIP_START)
  start.setHours(0, 0, 0, 0)
  const end = new Date(TRIP_END)
  end.setHours(23, 59, 59, 999)

  if (today < start) return { phase: 'pre', dayIndex: -1 }
  if (today > end) return { phase: 'post', dayIndex: -1 }
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24))
  return { phase: 'during', dayIndex: diff }
}

export default function Home({ navigate }) {
  const { shoppingStatus, exchangeRate } = useStore()
  const [tripPhase, setTripPhase] = useState(() => getTripPhase())
  const [daysLeft, setDaysLeft] = useState(() => getDaysUntil(DEPARTURE))
  const { phase, dayIndex } = tripPhase

  useEffect(() => {
    const update = () => {
      setDaysLeft(getDaysUntil(DEPARTURE))
      setTripPhase(getTripPhase())
    }
    const id = setInterval(update, 30000)
    document.addEventListener('visibilitychange', update)
    window.addEventListener('focus', update)
    window.addEventListener('pageshow', update)
    return () => {
      clearInterval(id)
      document.removeEventListener('visibilitychange', update)
      window.removeEventListener('focus', update)
      window.removeEventListener('pageshow', update)
    }
  }, [])

  const boughtCount = Object.values(shoppingStatus).filter(s => s === 'comprado' || s === 'despachado').length
  const totalItems = SHOPPING_ITEMS.length

  const totalSpentYen = SHOPPING_ITEMS
    .filter(i => shoppingStatus[i.id] === 'comprado' || shoppingStatus[i.id] === 'despachado')
    .reduce((sum, i) => sum + i.yen, 0)

  // Timezone clock
  const [jpTime, setJpTime] = useState('')
  const [brTime, setBrTime] = useState('')
  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setJpTime(now.toLocaleTimeString('pt-BR', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit' }))
      setBrTime(now.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit' }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  // Live exchange rate
  const [liveRate, setLiveRate] = useState(null)
  useEffect(() => {
    fetch('https://api.frankfurter.app/latest?from=JPY&to=BRL')
      .then(r => r.json())
      .then(d => setLiveRate(d.rates?.BRL))
      .catch(() => {})
  }, [])

  const today = phase === 'during' ? ITINERARY[dayIndex] : null
  const tomorrow = phase === 'during' && dayIndex < ITINERARY.length - 1 ? ITINERARY[dayIndex + 1] : null

  return (
    <div className="flex flex-col h-screen overflow-y-auto safe-bottom">
      {/* Header */}
      <div className="bg-red-600 text-white px-4 pt-10 pb-6 md:px-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-3xl">🗾</span>
          <div>
            <h1 className="text-xl font-bold leading-tight">Japão 2026</h1>
            <p className="text-red-200 text-xs">Rodrigo · Elaine · Pedro · Felipe</p>
          </div>
          <DarkToggle />
        </div>

        {phase === 'pre' && (
          <div className="mt-4 bg-red-700 rounded-2xl p-4 text-center">
            <div className="text-5xl font-black tracking-tight">{daysLeft}</div>
            <div className="text-red-200 text-sm mt-1">dias para o embarque 🛫</div>
            <div className="text-red-300 text-xs mt-1">27 de junho · GRU 20h30 · Qatar Airways QR780</div>
          </div>
        )}

        {phase === 'during' && today && (
          <div className="mt-4 bg-red-700 rounded-2xl p-4">
            <div className="text-xs text-red-300 uppercase tracking-wide mb-1">Hoje — Dia {dayIndex + 1} de 20</div>
            <div className="font-bold text-lg">{today.city}</div>
            <div className="text-red-200 text-sm">{today.note}</div>
          </div>
        )}

        {phase === 'post' && (
          <div className="mt-4 bg-red-700 rounded-2xl p-4 text-center">
            <div className="text-4xl mb-1">🏡</div>
            <div className="font-bold">Viagem concluída!</div>
            <div className="text-red-200 text-sm">Que memórias incríveis</div>
          </div>
        )}
      </div>

      <div className="px-4 py-4 space-y-3 md:px-8 md:py-6">
        {/* Stats row */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
          <StatCard emoji="✈️" value="20" label="dias" />
          <StatCard emoji="🏙️" value="4" label="cidades" />
          <StatCard emoji="🛍️" value={`${boughtCount}/${totalItems}`} label="compras" />
          <StatCard emoji="💰" value={totalSpentYen > 0 ? `¥${Math.round(totalSpentYen/1000)}k` : '¥0'} label="gastos" />
          <StatCard emoji="🏨" value="5" label="hotéis" />
          <StatCard emoji="🎫" value="JR" label="pass 21d" />
        </div>

        {/* Timezone + rate */}
        <div className="grid grid-cols-2 gap-2">
          <div className="card p-3 flex items-center gap-3">
            <div className="text-2xl">🇯🇵</div>
            <div>
              <div className="text-[12px] text-gray-400">Japão (JST)</div>
              <div className="font-black text-lg text-gray-900 leading-tight">{jpTime}</div>
            </div>
          </div>
          <div className="card p-3 flex items-center gap-3">
            <div className="text-2xl">🇧🇷</div>
            <div>
              <div className="text-[12px] text-gray-400">Brasil (BRT)</div>
              <div className="font-black text-lg text-gray-900 leading-tight">{brTime}</div>
            </div>
          </div>
        </div>

        {/* Live rate */}
        {liveRate && (
          <div className="card p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">💱</span>
              <div>
                <div className="text-[12px] text-gray-400">Câmbio ao vivo · Frankfurter</div>
                <div className="font-black text-sm text-gray-900">¥1 = R$ {liveRate.toFixed(4)}</div>
              </div>
            </div>
            <div className="text-[12px] text-gray-400 text-right">
              ¥10.000<br />= R${Math.round(10000 * liveRate).toLocaleString()}
            </div>
          </div>
        )}

        {/* Quick access */}
        <div>
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Acesso rápido</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            <QuickCard emoji="📅" title="Roteiro" sub="20 dias completos" onClick={() => navigate('cronograma')} color="blue" />
            <QuickCard emoji="🛍️" title="Compras" sub={`${totalItems} itens · R$${Math.round(SHOPPING_ITEMS.reduce((s,i)=>s+i.brl,0)).toLocaleString()}`} onClick={() => navigate('compras')} color="green" />
            <QuickCard emoji="✈️" title="Voos" sub="Qatar Airways" onClick={() => navigate('voos')} color="purple" />
            <QuickCard emoji="💰" title="Finanças" sub={`¥${totalSpentYen.toLocaleString()} gastos`} onClick={() => navigate('financeiro')} color="yellow" />
          </div>
        </div>

        {/* Today's schedule if in trip */}
        {phase === 'during' && today && (
          <div>
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Hoje</h2>
            <div className="card p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">📍</span>
                <div>
                  <div className="font-semibold text-sm">{today.city}</div>
                  {today.hotel && <div className="text-xs text-gray-500">{today.hotel}</div>}
                </div>
              </div>
              {today.activities.slice(0, 3).map((a, i) => (
                <div key={i} className="text-sm text-gray-700 py-1 border-b border-gray-50 last:border-0">{a}</div>
              ))}
            </div>
          </div>
        )}

        {/* Countdown segments */}
        {phase === 'pre' && (
          <div>
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Próximos marcos</h2>
            <div className="space-y-2">
              <MilestoneCard date="27/06" label="Embarque GRU 20h30 · QR780" emoji="🛫" days={daysLeft} />
              <MilestoneCard date="01/07" label="Tokyo Disneyland 🏰" emoji="🏰" days={getDaysUntil(new Date('2026-07-01T00:00:00-03:00'))} />
              <MilestoneCard date="09/07" label="Aniversário da Elaine 🎂 · Kyoto" emoji="🎂" days={getDaysUntil(new Date('2026-07-09T00:00:00-03:00'))} />
            </div>
          </div>
        )}

        {/* Checklist progress */}
        <div className="card p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-sm">Compras do Japão</span>
            <span className="text-xs text-gray-500">{boughtCount} de {totalItems} itens</span>
          </div>
          <div className="h-2 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-500 rounded-full transition-all"
              style={{ width: `${(boughtCount / totalItems) * 100}%` }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-2">
            Total estimado: ¥{SHOPPING_ITEMS.reduce((s,i)=>s+i.yen,0).toLocaleString()} · ~R${SHOPPING_ITEMS.reduce((s,i)=>s+i.brl,0).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ emoji, value, label }) {
  return (
    <div className="card p-3 text-center">
      <div className="text-xl">{emoji}</div>
      <div className="font-black text-lg text-gray-900 dark:text-slate-100">{value}</div>
      <div className="text-xs text-gray-500 dark:text-slate-400">{label}</div>
    </div>
  )
}

function QuickCard({ emoji, title, sub, onClick, color }) {
  const colors = {
    blue: 'bg-blue-50 dark:bg-blue-950 border-blue-100 dark:border-blue-800',
    green: 'bg-green-50 dark:bg-green-950 border-green-100 dark:border-green-800',
    purple: 'bg-purple-50 dark:bg-purple-950 border-purple-100 dark:border-purple-800',
    yellow: 'bg-yellow-50 dark:bg-yellow-950 border-yellow-100 dark:border-yellow-800',
  }
  return (
    <button onClick={onClick} className={`${colors[color]} border rounded-2xl p-3 text-left w-full active:scale-95 transition-transform`}>
      <div className="text-2xl mb-1">{emoji}</div>
      <div className="font-semibold text-sm text-gray-900 dark:text-slate-100">{title}</div>
      <div className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">{sub}</div>
    </button>
  )
}

function MilestoneCard({ date, label, emoji, days }) {
  return (
    <div className="card p-3 flex items-center gap-3">
      <div className="text-2xl">{emoji}</div>
      <div className="flex-1">
        <div className="font-medium text-sm text-gray-900">{label}</div>
        <div className="text-xs text-gray-500">{date}</div>
      </div>
      <div className="text-right">
        <div className="text-lg font-black text-red-600">{days}</div>
        <div className="text-xs text-gray-400">dias</div>
      </div>
    </div>
  )
}
