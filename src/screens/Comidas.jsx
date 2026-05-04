import { useState } from 'react'
import { FOOD_GUIDE, FOOD_TIPS } from '../data'

function FoodImage({ src, alt, emoji }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className="w-full h-full flex items-center justify-center"><span className="text-6xl">{emoji}</span></div>
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="w-full h-full object-cover"
    />
  )
}

const CATEGORY_COLORS = {
  'Essenciais':      'bg-orange-50',
  'No Combini':      'bg-amber-50',
  'Para as Crianças':'bg-sky-50',
  'Experiências':    'bg-purple-50',
}

export default function Comidas() {
  const [tab, setTab] = useState('guia')
  const [expandedItem, setExpandedItem] = useState(null)

  const tabs = [
    { id: 'guia', label: '🍜 Comidas' },
    { id: 'dicas', label: '💡 Dicas' },
  ]

  return (
    <div className="flex flex-col h-screen">
      <div className="screen-header">
        <h1 className="text-lg font-bold text-gray-900">🍜 Guia de Comidas</h1>
        <p className="text-xs text-gray-500">O que comer · combini · frases em restaurantes</p>
      </div>

      <div className="bg-white border-b border-gray-100 px-4 flex gap-1 overflow-x-auto py-2">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap font-medium flex-shrink-0 transition-all ${tab === t.id ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto safe-bottom px-4 py-4 md:px-8 md:py-6">
        <div className="md:max-w-5xl md:mx-auto space-y-4">

          {tab === 'guia' && FOOD_GUIDE.map(group => (
            <div key={group.category}>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">{group.category}</div>
              <div className="space-y-2 md:grid md:grid-cols-2 md:gap-2 md:space-y-0">
                {group.items.map(item => (
                  <button key={item.name} onClick={() => setExpandedItem(expandedItem === item.name ? null : item.name)}
                    className="card text-left w-full overflow-hidden">
                    {/* Visual banner */}
                    <div className={`w-full relative overflow-hidden ${CATEGORY_COLORS[group.category] ?? 'bg-gray-50'}`} style={{ height: 140 }}>
                      {item.img
                        ? <FoodImage src={item.img} alt={item.name} emoji={item.emoji} />
                        : <div className="w-full h-full flex items-center justify-center"><span className="text-6xl">{item.emoji}</span></div>
                      }
                    </div>
                    {/* Info */}
                    <div className="p-3">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <div className="font-bold text-sm text-gray-900">{item.name}</div>
                          <div className="text-[11px] text-gray-400">{item.jp}</div>
                        </div>
                        <span className="text-gray-400 text-lg flex-shrink-0">{expandedItem === item.name ? '↑' : '↓'}</span>
                      </div>
                      {expandedItem === item.name && (
                        <div className="mt-2 pt-2 border-t border-gray-50">
                          <p className="text-xs text-gray-600 leading-relaxed mb-2">{item.desc}</p>
                          <div className="text-[12px] bg-gray-50 rounded-lg px-2 py-1.5 text-gray-500">
                            📍 {item.where}
                          </div>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}

          {tab === 'dicas' && (
            <>
              <div className="space-y-2 md:grid md:grid-cols-2 md:gap-2 md:space-y-0">
                {FOOD_TIPS.map((tip, i) => (
                  <div key={i} className="card p-4 flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{tip.icon}</span>
                    <p className="text-sm text-gray-700 leading-relaxed">{tip.tip}</p>
                  </div>
                ))}
              </div>
              <div className="card p-4 bg-red-50 border border-red-100">
                <div className="text-sm font-bold text-red-800 mb-2">🎌 Frases úteis em restaurantes</div>
                {[
                  ['Kore wo kudasai', 'こ れ を く だ さ い', 'Quero isso (apontar no cardápio)'],
                  ['Okan jo onegaishimasu', 'お 勘 定 お 願 い し ま す', 'A conta, por favor'],
                  ['Oishi desu', 'お い し い で す', 'Está delicioso!'],
                  ['Arerugi ga arimasu', 'ア レ ル ギ ー が あ り ま す', 'Tenho alergia'],
                ].map(([romaji, jp, pt], i) => (
                  <div key={i} className="py-2 border-b border-red-100 last:border-0">
                    <div className="font-medium text-sm text-red-800">{romaji}</div>
                    <div className="text-xs text-red-600">{jp}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{pt}</div>
                  </div>
                ))}
              </div>
            </>
          )}


        </div>
      </div>
    </div>
  )
}
