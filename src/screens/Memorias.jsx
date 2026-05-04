import { useState } from 'react'
import useStore from '../store/useStore'
import { ITINERARY } from '../data'

const MOODS = ['😄', '🤩', '😊', '😮', '😂', '🥰', '😴', '🥵', '🌧️', '🤔']

export default function Memorias() {
  const { memorias, setMemoria } = useStore()
  const [selected, setSelected] = useState(0)
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState({ mood: '😄', titulo: '', texto: '' })

  const day = ITINERARY[selected]
  const mem = memorias[selected]

  const startEdit = () => {
    setDraft(mem || { mood: '😄', titulo: '', texto: '' })
    setEditing(true)
  }

  const save = () => {
    setMemoria(selected, draft)
    setEditing(false)
  }

  const filledCount = ITINERARY.filter((_, i) => memorias[i]?.texto).length

  return (
    <div className="flex flex-col h-screen">
      <div className="screen-header">
        <h1 className="text-lg font-bold text-gray-900">📔 Memórias da Viagem</h1>
        <p className="text-xs text-gray-500">{filledCount} de {ITINERARY.length} dias registrados</p>
      </div>

      {/* Day selector */}
      <div className="bg-white border-b border-gray-100 px-4 py-2 overflow-x-auto">
        <div className="flex gap-1.5">
          {ITINERARY.map((d, i) => {
            const hasMem = !!memorias[i]?.texto
            return (
              <button key={i} onClick={() => { setSelected(i); setEditing(false) }}
                className={`flex-shrink-0 w-10 h-10 rounded-xl text-xs font-bold flex flex-col items-center justify-center transition-all ${selected === i ? 'bg-red-600 text-white' : hasMem ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                <span className="text-[9px] leading-none">{hasMem ? (memorias[i]?.mood || '📔') : ''}</span>
                <span>{i + 1}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto safe-bottom px-4 py-4 md:px-8 md:py-6">
        <div className="md:max-w-5xl md:mx-auto space-y-4">

          {/* Day info */}
          <div className="card p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center font-black text-red-600">{selected + 1}</div>
              <div>
                <div className="font-bold text-gray-900">{day.city}</div>
                <div className="text-xs text-gray-400">{day.date}</div>
                {day.hotel && <div className="text-xs text-gray-400">🏨 {day.hotel}</div>}
              </div>
            </div>
          </div>

          {/* Memory display or edit */}
          {!editing ? (
            <>
              {mem?.texto ? (
                <div className="card p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl">{mem.mood}</span>
                    <div>
                      <div className="font-bold text-gray-900">{mem.titulo || 'Memória do dia'}</div>
                      <div className="text-xs text-gray-400">Dia {selected + 1} · {day.city}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{mem.texto}</p>
                  <button onClick={startEdit} className="mt-3 text-xs text-gray-400 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50">✏️ Editar memória</button>
                </div>
              ) : (
                <div className="card p-8 text-center">
                  <div className="text-4xl mb-3">📝</div>
                  <div className="text-sm text-gray-600 mb-1">Nenhuma memória para este dia ainda</div>
                  <div className="text-xs text-gray-400 mb-4">Registre como foi o dia, o que viveram, o que sentiram</div>
                  <button onClick={startEdit} className="bg-red-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl active:scale-95 transition-transform">
                    ✍️ Registrar memória
                  </button>
                </div>
              )}

              {/* Day activities as reminder */}
              <div className="card p-4">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Roteiro do dia</div>
                {day.activities.slice(0, 4).map((a, i) => (
                  <div key={i} className="text-xs text-gray-600 py-1 border-b border-gray-50 last:border-0">{a}</div>
                ))}
              </div>
            </>
          ) : (
            <div className="card p-4 space-y-4">
              <div className="text-sm font-bold text-gray-700">✍️ Registrar memória — Dia {selected + 1}</div>

              {/* Mood */}
              <div>
                <label className="text-xs text-gray-500 mb-2 block">Como foi o dia?</label>
                <div className="flex gap-2 flex-wrap">
                  {MOODS.map(m => (
                    <button key={m} onClick={() => setDraft(d => ({ ...d, mood: m }))}
                      className={`text-2xl w-10 h-10 rounded-xl flex items-center justify-center transition-all ${draft.mood === m ? 'bg-red-100 ring-2 ring-red-400' : 'bg-gray-100'}`}>
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Título (opcional)</label>
                <input type="text" placeholder={`Ex: O dia mais incrível em ${day.city}`}
                  value={draft.titulo} onChange={e => setDraft(d => ({ ...d, titulo: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-red-400" />
              </div>

              {/* Text */}
              <div>
                <label className="text-xs text-gray-500 mb-1 block">O que aconteceu? O que sentiram?</label>
                <textarea
                  rows={6}
                  placeholder={`Escreva livremente sobre o dia em ${day.city}... O que comeram? Algum momento especial? O que os filhos acharam?`}
                  value={draft.texto} onChange={e => setDraft(d => ({ ...d, texto: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-red-400 resize-none"
                />
              </div>

              <div className="flex gap-2">
                <button onClick={() => setEditing(false)} className="flex-1 bg-gray-100 text-gray-600 font-semibold py-2.5 rounded-xl text-sm">Cancelar</button>
                <button onClick={save} className="flex-1 bg-red-600 text-white font-semibold py-2.5 rounded-xl text-sm">Salvar memória</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
