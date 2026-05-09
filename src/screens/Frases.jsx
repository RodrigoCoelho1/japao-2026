import { useState, useMemo } from 'react'
import { FRASES, CATEGORIAS } from '../data/frases'
import FraseCard from '../components/FraseCard'

export default function Frases({ goBack }) {
  const [cat, setCat] = useState(CATEGORIAS[0].id)

  const frasesFiltradas = useMemo(
    () => FRASES.filter(f => f.categoria === cat),
    [cat]
  )

  const catAtual = CATEGORIAS.find(c => c.id === cat)

  return (
    <div className="flex flex-col h-screen">
      <div className="screen-header">
        <div className="flex items-center gap-3">
          {goBack && (
            <button
              onClick={goBack}
              className="text-gray-500 dark:text-slate-400 text-xl active:scale-95"
              aria-label="Voltar"
            >
              ‹
            </button>
          )}
          <div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-slate-100">🗣️ Frases em Japonês</h1>
            <p className="text-xs text-gray-500 dark:text-slate-400">
              30 frases de sobrevivência · toque 🔊 para ouvir
            </p>
          </div>
        </div>
      </div>

      {/* Abas de categoria — scroll horizontal no mobile */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-700 px-3 py-2 overflow-x-auto">
        <div className="flex gap-2 md:max-w-5xl md:mx-auto">
          {CATEGORIAS.map(c => {
            const active = c.id === cat
            return (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  active
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-slate-700'
                }`}
              >
                <span className="mr-1">{c.emoji}</span>
                {c.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Lista de frases */}
      <div className="flex-1 overflow-y-auto safe-bottom px-4 py-4 md:px-8 md:py-6">
        <div className="md:max-w-5xl md:mx-auto md:grid md:grid-cols-2 md:gap-3 space-y-2 md:space-y-0">
          {frasesFiltradas.map(f => (
            <FraseCard key={f.id} frase={f} emoji={catAtual?.emoji} />
          ))}
        </div>

        <div className="md:max-w-5xl md:mx-auto mt-4">
          <div className="card p-3 text-xs text-gray-500 dark:text-slate-400">
            💡 A pronúncia usa a síntese de voz do navegador. Para vozes japonesas reais,
            instale o pacote de idioma japonês no sistema (iOS/Android já vem com).
          </div>
        </div>
      </div>
    </div>
  )
}
