import { useState } from 'react'
import useStore from '../store/useStore'
import { ITINERARY } from '../data'
import MapButton from '../components/MapButton'

const typeStyle = {
  travel:   { bg: 'bg-purple-50 border-purple-200', dot: 'bg-purple-400', badge: 'bg-purple-100 text-purple-700' },
  shopping: { bg: 'bg-green-50 border-green-200',  dot: 'bg-green-500',  badge: 'bg-green-100 text-green-700' },
  birthday: { bg: 'bg-pink-50 border-pink-200',    dot: 'bg-pink-500',   badge: 'bg-pink-100 text-pink-700' },
  disney:   { bg: 'bg-blue-50 border-blue-200',    dot: 'bg-blue-500',   badge: 'bg-blue-100 text-blue-700' },
  normal:   { bg: 'bg-white border-gray-100',       dot: 'bg-red-500',    badge: 'bg-gray-100 text-gray-600' },
}

const alertStyle = {
  red:    'bg-red-50 border-red-200 text-red-700',
  yellow: 'bg-amber-50 border-amber-200 text-amber-700',
  green:  'bg-emerald-50 border-emerald-200 text-emerald-700',
}

function getTripDayIndex() {
  const today = new Date(); today.setHours(0,0,0,0)
  const start = new Date('2026-06-27'); start.setHours(0,0,0,0)
  const diff = Math.floor((today - start) / 86400000)
  return diff >= 0 && diff < ITINERARY.length ? diff : -1
}

export default function Cronograma({ navigate }) {
  const [expanded, setExpanded] = useState(null)
  const { activitiesDone, toggleActivity } = useStore()
  const todayIndex = getTripDayIndex()

  return (
    <div className="flex flex-col h-screen">
      <div className="screen-header">
        <h1 className="text-lg font-bold text-gray-900">📅 Roteiro da Viagem</h1>
        <p className="text-xs text-gray-500 mt-0.5">27 jun – 16 jul 2026 · 20 dias · Família Coelho</p>
      </div>

      <div className="flex-1 overflow-y-auto safe-bottom px-4 py-3 md:px-8 md:py-4">
        <div className="md:max-w-5xl md:mx-auto md:grid md:grid-cols-2 md:gap-3 space-y-2 md:space-y-0">
        {ITINERARY.map((day, i) => {
          const s = typeStyle[day.type]
          const isToday = i === todayIndex
          const open = expanded === i
          const doneCount = day.activities.filter((_, ai) => activitiesDone[`${i}-${ai}`]).length

          return (
            <div key={i} className={`${s.bg} border rounded-2xl overflow-hidden transition-all ${isToday ? 'ring-2 ring-red-500' : ''}`}>
              <button
                onClick={() => setExpanded(open ? null : i)}
                className="w-full text-left p-3 flex items-center gap-3"
              >
                {/* Day number */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 ${isToday ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {i + 1}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[12px] font-mono font-bold text-gray-400">{day.date}</span>
                    {isToday && <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.5 rounded-full font-bold">HOJE</span>}
                    {day.type === 'shopping' && <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${s.badge}`}>COMPRAS</span>}
                    {day.type === 'disney' && <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${s.badge}`}>🏰 PARQUE</span>}
                    {day.type === 'birthday' && <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${s.badge}`}>🎂 ANIVERSÁRIO</span>}
                  </div>
                  <div className="font-semibold text-sm text-gray-900 truncate">{day.city}</div>
                  {day.hotel && <div className="text-xs text-gray-500 truncate">🏨 {day.hotel}</div>}
                  {!day.hotel && <div className="text-xs text-gray-500 truncate">{day.note}</div>}
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  {day.activities.length > 0 && (
                    <span className="text-xs text-gray-400">{doneCount}/{day.activities.length}</span>
                  )}
                  <span className={`text-gray-400 transition-transform ${open ? 'rotate-90' : ''}`}>›</span>
                </div>
              </button>

              {open && (
                <div className="border-t border-gray-100 px-3 pb-3 pt-2 space-y-1">
                  {day.hotel && (
                    <div className="bg-blue-50 rounded-xl p-2 mb-2 flex items-center gap-2">
                      <span className="text-base">🏨</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-blue-800">{day.hotel}</div>
                        <div className="text-xs text-blue-600">{day.note}</div>
                      </div>
                      <MapButton place={`${day.hotel}, Japan`} />
                    </div>
                  )}
                  <div className="text-[12px] font-bold text-gray-400 uppercase tracking-wide mb-1">Atividades do dia</div>
                  {day.activities.map((act, ai) => {
                    const done = !!activitiesDone[`${i}-${ai}`]
                    return (
                      <button
                        key={ai}
                        onClick={() => toggleActivity(i, ai)}
                        className="w-full flex items-start gap-2 py-1.5 text-left"
                      >
                        <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${done ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                          {done && <span className="text-white text-[12px] font-black">✓</span>}
                        </div>
                        <span className={`text-sm leading-snug ${done ? 'line-through text-gray-400' : 'text-gray-700'}`}>{act}</span>
                      </button>
                    )
                  })}
                  {day.alert && (
                    <div className={`mt-2 rounded-xl border p-2.5 ${alertStyle[day.alert.level]}`}>
                      <p className="text-xs font-medium leading-snug">{day.alert.text}</p>
                    </div>
                  )}

                  {day.planB && day.planB.length > 0 && (
                    <div className="mt-3 pt-2 border-t border-gray-100">
                      <div className="text-[12px] font-bold text-amber-600 uppercase tracking-wide mb-1">🔄 Plano B</div>
                      {day.planB.map((alt, bi) => (
                        <div key={bi} className="text-sm text-gray-600 py-1 pl-2 border-l-2 border-amber-200 mb-1">{alt}</div>
                      ))}
                    </div>
                  )}

                  {day.planC && day.planC.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-gray-100">
                      <div className="text-[12px] font-bold text-blue-600 uppercase tracking-wide mb-1">🔄 Plano C</div>
                      {day.planC.map((alt, ci) => (
                        <div key={ci} className="text-sm text-gray-600 py-1 pl-2 border-l-2 border-blue-200 mb-1">{alt}</div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}
