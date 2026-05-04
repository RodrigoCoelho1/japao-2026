import { useState } from 'react'
import useStore from '../store/useStore'
import { STORES, SHOPPING_ITEMS, SHOPPING_PLAN } from '../data'
import MapButton from '../components/MapButton'

const DAY_COLORS = {
  orange: {
    header: 'bg-orange-500 text-white',
    badge: 'bg-orange-100 text-orange-700',
    dot: 'bg-orange-400',
    time: 'text-orange-600',
    border: 'border-orange-200',
    storeTag: 'bg-orange-50 text-orange-700 border border-orange-200',
  },
  blue: {
    header: 'bg-blue-600 text-white',
    badge: 'bg-blue-100 text-blue-700',
    dot: 'bg-blue-400',
    time: 'text-blue-600',
    border: 'border-blue-200',
    storeTag: 'bg-blue-50 text-blue-700 border border-blue-200',
  },
  green: {
    header: 'bg-green-600 text-white',
    badge: 'bg-green-100 text-green-700',
    dot: 'bg-green-400',
    time: 'text-green-600',
    border: 'border-green-200',
    storeTag: 'bg-green-50 text-green-700 border border-green-200',
  },
}

const AREA_COLOR = {
  Shinjuku: 'bg-orange-100 text-orange-700',
  Shibuya: 'bg-blue-100 text-blue-700',
  Osaka: 'bg-green-100 text-green-700',
}

export default function Mapa() {
  const { shoppingStatus } = useStore()
  const [activeArea, setActiveArea] = useState('Todos')
  const [filterItem, setFilterItem] = useState(null)

  const areas = ['Todos', 'Shinjuku', 'Shibuya', 'Osaka']
  const filtered = STORES.filter(s => {
    if (activeArea !== 'Todos' && s.area !== activeArea) return false
    if (filterItem && !s.items.includes(filterItem)) return false
    return true
  })

  return (
    <div className="flex flex-col h-screen">
      <div className="screen-header">
        <h1 className="text-lg font-bold text-gray-900">🗺️ Mapa de Compras</h1>
        <p className="text-xs text-gray-500">Shinjuku 29/06 · Shibuya 30/06 · Osaka 11/07</p>
      </div>

      {/* Area filter */}
      <div className="bg-white border-b border-gray-100 px-4 py-2 flex gap-2 overflow-x-auto">
        {areas.map(area => (
          <button key={area} onClick={() => { setActiveArea(area); setFilterItem(null) }}
            className={`text-xs px-3 py-1.5 rounded-full font-medium flex-shrink-0 transition-all ${activeArea === area ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
            {area}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto safe-bottom px-4 py-4 md:px-8 md:py-6">
        <div className="md:max-w-5xl md:mx-auto space-y-4">

          {/* Shopping Plan cards — one per day */}
          {(activeArea === 'Todos' ? SHOPPING_PLAN : SHOPPING_PLAN.filter(d => {
            if (activeArea === 'Shinjuku') return d.color === 'orange'
            if (activeArea === 'Shibuya') return d.color === 'blue'
            if (activeArea === 'Osaka') return d.color === 'green'
            return true
          })).map(dayPlan => {
            const c = DAY_COLORS[dayPlan.color]
            return (
              <div key={dayPlan.day} className="card overflow-hidden">
                <div className={`${c.header} px-4 py-3 flex items-start justify-between`}>
                  <div>
                    <div className="font-bold text-sm flex items-center gap-2">
                      🛍️ {dayPlan.day}
                      {dayPlan.optional && (
                        <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded-full font-medium">opcional</span>
                      )}
                    </div>
                    <div className="text-xs opacity-90 mt-0.5">{dayPlan.label}</div>
                  </div>
                </div>
                {dayPlan.note && (
                  <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
                    <p className="text-xs text-gray-500">💡 {dayPlan.note}</p>
                  </div>
                )}
                <div className="divide-y divide-gray-50">
                  {dayPlan.stops.map((stop, i) => {
                    const store = stop.store ? STORES.find(s => s.id === stop.store) : null
                    return (
                      <div key={i} className="p-3 flex items-start gap-3">
                        <div className={`text-xs font-mono font-bold w-12 flex-shrink-0 pt-0.5 ${c.time}`}>{stop.time}</div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-gray-800">{stop.action}</div>
                          {store && (
                            <div className="flex items-center gap-1.5 mt-1">
                              <span className={`text-[11px] px-1.5 py-0.5 rounded-full font-medium ${c.storeTag}`}>📍 {store.area}</span>
                              <span className="text-[11px] text-gray-400">🕐 {store.hours}</span>
                            </div>
                          )}
                        </div>
                        {store && (
                          <a
                            href={`https://maps.google.com/?q=${encodeURIComponent(store.name + ', Japan')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm hover:bg-blue-200 active:scale-95 transition-all flex-shrink-0 mt-0.5"
                            title={store.name}
                          >
                            🗺️
                          </a>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}

          {/* Filter by item */}
          <div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Filtrar por item</div>
            <div className="flex gap-2 flex-wrap">
              <button onClick={() => setFilterItem(null)}
                className={`text-xs px-2.5 py-1 rounded-full font-medium ${!filterItem ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                Todos
              </button>
              {SHOPPING_ITEMS.map(item => (
                <button key={item.id} onClick={() => setFilterItem(item.id === filterItem ? null : item.id)}
                  className={`text-xs px-2.5 py-1 rounded-full font-medium ${filterItem === item.id ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {item.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Store cards */}
          <div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
              {filtered.length} loja{filtered.length !== 1 ? 's' : ''}{activeArea !== 'Todos' ? ` em ${activeArea}` : ''}
            </div>
            <div className="space-y-3 md:grid md:grid-cols-2 md:gap-3 md:space-y-0">
              {filtered.map(store => {
                const storeItems = store.items.map(id => ({ id, item: SHOPPING_ITEMS.find(i => i.id === id) })).filter(x => x.item)
                const areaColor = AREA_COLOR[store.area] || 'bg-gray-100 text-gray-600'
                return (
                  <div key={store.id} className="card p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-sm text-gray-900">{store.name}</div>
                        <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                          <span className={`text-[12px] px-1.5 py-0.5 rounded-full font-medium ${areaColor}`}>{store.area}</span>
                          <span className="text-[12px] text-gray-400">🕐 {store.hours}</span>
                          {store.sunday && <span className="text-[12px] text-green-600">✓ Domingo</span>}
                        </div>
                      </div>
                      <MapButton place={`${store.name}, ${store.area === 'Osaka' ? 'Osaka' : 'Tokyo'}, Japan`} />
                    </div>

                    <div className="text-xs text-gray-500 mb-2">🚇 {store.metro}</div>
                    {store.note && <div className="text-xs text-gray-500 mb-3 bg-gray-50 rounded-lg p-2">💡 {store.note}</div>}

                    <div className="text-[12px] font-bold text-gray-400 uppercase tracking-wide mb-1">Itens disponíveis</div>
                    <div className="space-y-1">
                      {storeItems.map(({ id, item }) => {
                        const status = shoppingStatus[id] || 'a_comprar'
                        const isBought = ['comprado', 'despachado'].includes(status)
                        return (
                          <div key={id} className={`flex items-center justify-between text-xs py-1 border-b border-gray-50 last:border-0 ${isBought ? 'opacity-50' : ''}`}>
                            <span className={`${isBought ? 'line-through text-gray-400' : 'text-gray-700'}`}>{isBought ? '✓ ' : ''}{item.name}</span>
                            <span className="font-bold text-gray-600">¥{item.yen.toLocaleString()}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Metro / transport tips */}
          <div className="card p-4">
            <div className="text-sm font-bold text-gray-700 mb-3">🚇 Trajetos de Compras</div>
            {[
              ['Hotel → Lojas Shinjuku (29/06)', 'Sunroute Plaza Shinjuku · tudo a pé em 5–10 min · LEGO, UNIQLO, Yodobashi'],
              ['Shinjuku → Shibuya (30/06)', 'JR Yamanote (sentido Shibuya) · 10 min · ¥180 · ou metrô · saída Hachiko'],
              ['BIC Camera → Shibuya Sky', 'A pé · 8 min · pela Scramble Square / Shibuya Stream'],
              ['Kyoto → Osaka Shinsaibashi (11/07)', 'Hankyu Kyoto Line → Kawaramachi → Shinsaibashi · 30 min · ¥400'],
              ['IC Card (Suica)', 'Compre no Narita. Use em todos os trens, metrôs e combinis. Recarregue nas máquinas.'],
            ].map(([r, d], i) => (
              <div key={i} className="py-2 border-b border-gray-50 last:border-0">
                <div className="font-semibold text-xs text-gray-800">{r}</div>
                <div className="text-xs text-gray-500 mt-0.5">{d}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
