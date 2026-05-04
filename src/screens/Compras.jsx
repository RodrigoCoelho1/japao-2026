import { useState } from 'react'
import useStore from '../store/useStore'
import { SHOPPING_ITEMS } from '../data'
import MapButton from '../components/MapButton'

const STATUS = [
  { id: 'a_comprar', label: 'A comprar', color: 'bg-gray-100 text-gray-600' },
  { id: 'encontrado', label: 'Encontrado', color: 'bg-blue-100 text-blue-700' },
  { id: 'comprado', label: 'Comprado ✓', color: 'bg-green-100 text-green-700' },
  { id: 'despachado', label: 'Despachado 📦', color: 'bg-purple-100 text-purple-700' },
]

const TAG_COLORS = {
  Presentes: 'bg-orange-100 text-orange-700',
  Vestuário: 'bg-blue-100 text-blue-700',
  Eletrônico: 'bg-indigo-100 text-indigo-700',
  Games: 'bg-green-100 text-green-700',
}

export default function Compras() {
  const { shoppingStatus, setShoppingStatus, exchangeRate } = useStore()
  const [expanded, setExpanded] = useState(null)
  const [filterTag, setFilterTag] = useState('Todos')

  const tags = ['Todos', ...new Set(SHOPPING_ITEMS.map(i => i.tag))]
  const filtered = filterTag === 'Todos' ? SHOPPING_ITEMS : SHOPPING_ITEMS.filter(i => i.tag === filterTag)

  const totalYen = SHOPPING_ITEMS.reduce((s, i) => s + i.yen, 0)
  const spentYen = SHOPPING_ITEMS
    .filter(i => ['comprado', 'despachado'].includes(shoppingStatus[i.id]))
    .reduce((s, i) => s + i.yen, 0)
  const boughtCount = Object.values(shoppingStatus).filter(s => ['comprado', 'despachado'].includes(s)).length

  const rate = exchangeRate || 0.033

  return (
    <div className="flex flex-col h-screen">
      <div className="screen-header">
        <h1 className="text-lg font-bold text-gray-900">🛍️ Lista de Compras</h1>
        <p className="text-xs text-gray-500">¥1 = R${rate.toFixed(3)} · Tax-free com passaporte (mín. ¥5.000)</p>
      </div>

      {/* Summary bar */}
      <div className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-gray-600 font-medium">{boughtCount} de {SHOPPING_ITEMS.length} comprados</span>
          <span className="text-xs font-bold text-gray-900">¥{spentYen.toLocaleString()} / ¥{totalYen.toLocaleString()}</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-red-500 rounded-full transition-all" style={{ width: `${(spentYen / totalYen) * 100}%` }} />
        </div>
        <div className="text-xs text-gray-400 mt-1 text-right">~R${Math.round(spentYen * rate).toLocaleString()} gastos de ~R${Math.round(totalYen * rate).toLocaleString()}</div>
      </div>

      {/* Filter tags */}
      <div className="bg-white border-b border-gray-100 px-4 py-2 flex gap-2 overflow-x-auto">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setFilterTag(tag)}
            className={`text-xs px-3 py-1 rounded-full whitespace-nowrap font-medium flex-shrink-0 transition-colors ${filterTag === tag ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600'}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto safe-bottom px-4 py-3 md:px-8 md:py-4">
        <div className="md:max-w-5xl md:mx-auto md:grid md:grid-cols-2 md:gap-3 space-y-2 md:space-y-0">
        {filtered.map(item => {
          const status = shoppingStatus[item.id] || 'a_comprar'
          const statusObj = STATUS.find(s => s.id === status)
          const open = expanded === item.id
          const isBought = ['comprado', 'despachado'].includes(status)

          return (
            <div key={item.id} className={`card overflow-hidden ${isBought ? 'opacity-70' : ''}`}>
              <button
                onClick={() => setExpanded(open ? null : item.id)}
                className="w-full text-left p-3 flex items-center gap-3"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className={`text-[12px] px-1.5 py-0.5 rounded-full font-medium ${TAG_COLORS[item.tag] || 'bg-gray-100 text-gray-600'}`}>{item.tag}</span>
                    {item.taxFree && <span className="text-[12px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded-full font-medium">Tax-Free</span>}
                  </div>
                  <div className={`font-semibold text-sm ${isBought ? 'line-through text-gray-400' : 'text-gray-900'}`}>{item.name}</div>
                  <div className="text-xs text-gray-500 truncate mt-0.5 flex items-center gap-1.5">
                    <span>📍 {item.store}</span>
                    <MapButton place={`${item.store}, Tokyo, Japan`} />
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-black text-sm text-gray-900">¥{item.yen.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">~R${Math.round(item.yen * rate).toLocaleString()}</div>
                </div>
              </button>

              {/* Status selector */}
              <div className="px-3 pb-3 flex gap-1.5 flex-wrap">
                {STATUS.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setShoppingStatus(item.id, s.id)}
                    className={`text-[11px] px-2 py-1 rounded-full font-medium transition-all ${status === s.id ? s.color + ' ring-1 ring-current' : 'bg-gray-50 text-gray-500'}`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Expanded note */}
              {open && item.note && (
                <div className="mx-3 mb-3 p-2.5 bg-amber-50 border border-amber-200 rounded-xl">
                  <p className="text-xs text-amber-800 leading-relaxed">💡 {item.note}</p>
                </div>
              )}
            </div>
          )
        })}

        </div>
        {/* Total card */}
        <div className="card p-4 mt-2 md:max-w-5xl md:mx-auto">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Resumo total</div>
          {SHOPPING_ITEMS.map(item => {
            const s = shoppingStatus[item.id] || 'a_comprar'
            const isBought = ['comprado', 'despachado'].includes(s)
            return (
              <div key={item.id} className={`flex justify-between py-1 border-b border-gray-50 last:border-0 ${isBought ? 'text-green-600' : 'text-gray-600'}`}>
                <span className="text-xs truncate max-w-[60%]">{isBought ? '✓ ' : ''}{item.name}</span>
                <span className="text-xs font-semibold">¥{item.yen.toLocaleString()}</span>
              </div>
            )
          })}
          <div className="flex justify-between pt-2 mt-1 border-t border-gray-200">
            <span className="text-sm font-bold text-gray-900">Total estimado</span>
            <div className="text-right">
              <div className="font-black text-sm text-gray-900">¥{totalYen.toLocaleString()}</div>
              <div className="text-xs text-gray-500">~R${Math.round(totalYen * rate).toLocaleString()}</div>
            </div>
          </div>
          <div className="mt-2 p-2 bg-blue-50 rounded-xl">
            <p className="text-xs text-blue-700">💡 Isenção alfandegária: US$4.000/pessoa. Família tem US$16.000 total. Valores estimados estão dentro da isenção individual.</p>
          </div>
        </div>

        {/* Vídeos relacionados */}
        <div className="card p-4 mt-2 md:max-w-5xl md:mx-auto">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">🎬 Vídeos relacionados · Compras</div>
          <div className="space-y-2">
            {[
              { title: 'Compras no Japão: Vale a pena mesmo? + TUDO QUE COMPREI!', channel: 'Gaby Coutinho', id: 'UcwM3xPEZ3g' },
              { title: 'COMPRINHAS do JAPÃO com TODOS OS PREÇOS e DICAS de LOJAS!', channel: 'Status Viajante', id: 'RPLYBXKPijo' },
              { title: 'O MELHOR LUGAR para comprar eletrônicos do mundo', channel: 'Vai com Bruno', id: 'AH5Rs0eop_Y' },
              { title: 'Melhores lojas para compras no Japão', channel: 'Vai com Bruno', id: 'bxHYXHKOO0g' },
            ].map(v => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-2 rounded-xl bg-gray-50 active:scale-[0.98] transition-transform"
              >
                <img
                  src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                  alt={v.title}
                  className="w-24 h-14 rounded-lg flex-shrink-0 object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-gray-900 leading-snug">{v.title}</div>
                  <div className="text-[11px] text-red-600 font-medium mt-0.5">🇧🇷 {v.channel}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
