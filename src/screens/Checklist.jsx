import { useState } from 'react'
import useStore from '../store/useStore'
import { CHECKLIST_ITEMS } from '../data'

const URGENCY = [
  { id: 'agora', label: '🔴 Fazer Agora', sub: 'Reservas críticas — esgotam rápido', color: 'text-red-700', badge: 'bg-red-100 text-red-700' },
  { id: 'urgente', label: '🟡 Urgente', sub: 'Maio–Junho · antes da alta temporada', color: 'text-amber-700', badge: 'bg-amber-100 text-amber-700' },
  { id: 'em-breve', label: '🟢 Em Breve', sub: 'Semanas antes da viagem', color: 'text-green-700', badge: 'bg-green-100 text-green-700' },
  { id: 'ultima-hora', label: '🔵 Última Hora', sub: 'Semana da viagem', color: 'text-blue-700', badge: 'bg-blue-100 text-blue-700' },
]

export default function Checklist() {
  const { checklistDone, toggleChecklist, darkMode } = useStore()
  const [expanded, setExpanded] = useState({})

  const totalDone = CHECKLIST_ITEMS.filter(i => checklistDone[i.id]).length
  const total = CHECKLIST_ITEMS.length

  const cardBg = darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'
  const textMain = darkMode ? 'text-slate-100' : 'text-gray-800'
  const textSub = darkMode ? 'text-slate-400' : 'text-gray-400'
  const detailBg = darkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-50 text-gray-600'
  const headerBg = darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-100'
  const progressBg = darkMode ? 'bg-slate-700' : 'bg-gray-100'
  const headingText = darkMode ? 'text-slate-100' : 'text-gray-900'
  const headingSub = darkMode ? 'text-slate-400' : 'text-gray-500'

  const toggleExpand = (id, e) => {
    e.stopPropagation()
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="flex flex-col h-screen">
      <div className={`screen-header ${headerBg}`}>
        <h1 className={`text-lg font-bold ${headingText}`}>✅ Checklist de Preparação</h1>
        <p className={`text-xs ${headingSub}`}>{totalDone} de {total} itens concluídos</p>
      </div>

      {/* Progress */}
      <div className={`border-b px-4 py-3 ${headerBg}`}>
        <div className="flex items-center justify-between mb-1.5">
          <span className={`text-xs ${textSub}`}>Progresso geral</span>
          <span className={`text-xs font-bold ${headingText}`}>{Math.round((totalDone / total) * 100)}%</span>
        </div>
        <div className={`h-2 rounded-full overflow-hidden ${progressBg}`}>
          <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: `${(totalDone / total) * 100}%` }} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto safe-bottom px-4 py-4 md:px-8 md:py-6 space-y-5">
        <div className="md:max-w-5xl md:mx-auto space-y-5">
        {URGENCY.map(urg => {
          const items = CHECKLIST_ITEMS.filter(i => i.urgency === urg.id)
          const done = items.filter(i => checklistDone[i.id]).length
          return (
            <div key={urg.id}>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className={`text-sm font-bold ${urg.color}`}>{urg.label}</div>
                  <div className={`text-xs ${textSub}`}>{urg.sub}</div>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${urg.badge}`}>{done}/{items.length}</span>
              </div>
              <div className="space-y-2">
                {items.map(item => {
                  const isDone = !!checklistDone[item.id]
                  const isExpanded = !!expanded[item.id]
                  return (
                    <div
                      key={item.id}
                      className={`rounded-2xl border overflow-hidden transition-all ${cardBg} ${isDone ? 'opacity-60' : ''}`}
                    >
                      {/* Main row — tap to toggle done */}
                      <button
                        onClick={() => toggleChecklist(item.id)}
                        className="w-full p-3 flex items-start gap-3 text-left"
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${isDone ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                          {isDone && <span className="text-white text-[12px] font-black">✓</span>}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-sm leading-snug font-medium ${isDone ? 'line-through text-gray-400' : textMain}`}>
                            {item.text}
                          </div>
                          <div className={`text-[11px] mt-0.5 ${textSub}`}>{item.category}</div>
                        </div>
                        {/* Expand toggle if has detail */}
                        {(item.detail || item.link) && (
                          <button
                            onClick={(e) => toggleExpand(item.id, e)}
                            className={`text-[11px] px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5 font-medium transition-all ${isExpanded ? 'bg-blue-100 text-blue-700' : darkMode ? 'bg-slate-600 text-slate-300' : 'bg-gray-100 text-gray-500'}`}
                          >
                            {isExpanded ? 'fechar ▲' : 'detalhes ▼'}
                          </button>
                        )}
                      </button>

                      {/* Expanded detail */}
                      {isExpanded && (item.detail || item.link) && (
                        <div className={`px-4 pb-3 border-t ${darkMode ? 'border-slate-700' : 'border-gray-50'}`}>
                          {item.detail && (
                            <p className={`text-xs leading-relaxed mt-2.5 ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                              {item.detail}
                            </p>
                          )}
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 mt-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-xl transition-all"
                            >
                              🔗 Abrir site de reserva
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}

        </div>
        <div className={`card p-4 border md:max-w-5xl md:mx-auto ${darkMode ? 'bg-blue-950 border-blue-800' : 'bg-blue-50 border-blue-100'}`}>
          <div className={`text-sm font-bold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>💡 Endereço para envio Japan Post</div>
          <div className={`font-mono text-xs leading-relaxed ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
            Rodrigo Gomes Coelho<br />
            SQS 302 BL D APT 102<br />
            BRASILIA DF 70338-040<br />
            BRAZIL
          </div>
        </div>
      </div>
    </div>
  )
}
