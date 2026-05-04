import useStore from '../store/useStore'
import { FLIGHTS, TRANSFERS, JR_PASS_ROUTES, HOTEL_ADDRESSES } from '../data'

export default function Voos() {
  const { jrPassUsed, toggleJrPass } = useStore()
  const usedCount = Object.values(jrPassUsed).filter(Boolean).length

  return (
    <div className="flex flex-col h-screen">
      <div className="screen-header">
        <h1 className="text-lg font-bold text-gray-900">✈️ Voos e Traslados</h1>
        <p className="text-xs text-gray-500">LATAM (BSB↔GRU) + Qatar (intl) · 4 pax · XELXKN / 7UJSLT</p>
      </div>

      <div className="flex-1 overflow-y-auto safe-bottom px-4 py-4 md:px-8 md:py-6">
        <div className="md:max-w-5xl md:mx-auto space-y-4">

        {/* Flight cards */}
        <div className="md:grid md:grid-cols-2 md:gap-4 space-y-4 md:space-y-0">
        {FLIGHTS.map(f => (
          <div key={f.type} className="card overflow-hidden">
            <div className={`px-4 py-3 ${f.type === 'ida' ? 'bg-red-600' : 'bg-blue-700'} text-white flex items-center gap-2`}>
              <span className="text-xl">{f.type === 'ida' ? '🛫' : '🛬'}</span>
              <div>
                <div className="font-bold text-sm">{f.type === 'ida' ? 'Voo de Ida' : 'Voo de Volta'}</div>
                <div className="text-xs opacity-80">{f.airline}</div>
              </div>
            </div>
            <div className="divide-y divide-gray-50">
              {f.legs.map((leg, i) => (
                <div key={i} className="p-4">
                  {leg.layover && (
                    <div className="text-xs text-gray-400 bg-gray-50 rounded-lg px-2 py-1 mb-3 text-center">⏱ Conexão: {leg.layover}</div>
                  )}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex-1">
                      <div className="font-black text-lg text-gray-900">{leg.dep.split('·')[1]?.trim()}</div>
                      <div className="text-xs text-gray-600 font-medium">{leg.from}</div>
                      <div className="text-xs text-gray-400">{leg.dep.split('·')[0]?.trim()}</div>
                    </div>
                    <div className="flex flex-col items-center px-2">
                      <div className="text-xs text-gray-400">{leg.duration}</div>
                      <div className="text-gray-300 text-lg">→</div>
                      <div className="text-[12px] font-bold text-gray-500">{leg.flight}</div>
                    </div>
                    <div className="flex-1 text-right">
                      <div className="font-black text-lg text-gray-900">{leg.arr.split('·')[1]?.trim()}</div>
                      <div className="text-xs text-gray-600 font-medium">{leg.to}</div>
                      <div className="text-xs text-gray-400">{leg.arr.split('·')[0]?.trim()}</div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="text-[12px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{leg.aircraft}</span>
                    <span className="text-[12px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{leg.class}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        </div>

        {/* Transfers */}
        <div className="card overflow-hidden">
          <div className="bg-purple-600 text-white px-4 py-3 flex items-center gap-2">
            <span className="text-xl">🚄</span>
            <div>
              <div className="font-bold text-sm">Traslados entre Cidades</div>
              <div className="text-xs opacity-80">Shinkansen · JR Lines · Narita Express</div>
            </div>
          </div>
          <div className="divide-y divide-gray-50">
            {TRANSFERS.map((t, i) => (
              <div key={i} className="p-3 flex items-start gap-3">
                <div className="text-xs font-mono font-bold text-purple-600 w-10 flex-shrink-0 pt-0.5">{t.date}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-sm font-bold text-gray-900">{t.from}</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-sm font-bold text-gray-900">{t.to}</span>
                  </div>
                  <div className="text-[12px] bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded-full inline-block mb-1 font-medium">{t.mode}</div>
                  <div className="text-xs text-gray-500">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hotel addresses (mostrar para taxistas) */}
        <div className="card overflow-hidden">
          <div className="bg-orange-600 text-white px-4 py-3 flex items-center gap-2">
            <span className="text-xl">📍</span>
            <div>
              <div className="font-bold text-sm">Endereços dos hotéis</div>
              <div className="text-xs opacity-80">Mostre ao taxista · toque para copiar/abrir no Maps</div>
            </div>
          </div>
          <div className="divide-y divide-gray-50">
            {Object.entries(HOTEL_ADDRESSES).map(([name, addr]) => (
              <div key={name} className="p-3">
                <div className="text-sm font-bold text-gray-900 mb-1">{name}</div>
                <button
                  onClick={() => navigator.clipboard?.writeText(addr.ja)}
                  className="w-full text-left bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 mb-1.5 active:scale-[0.99]"
                  title="Toque para copiar"
                >
                  <div className="text-base text-gray-900 font-medium leading-tight" lang="ja">{addr.ja}</div>
                  <div className="text-[11px] text-orange-700 mt-0.5">📋 Toque para copiar (mostre ao taxista)</div>
                </button>
                <div className="flex items-center justify-between gap-2">
                  <div className="text-[11px] text-gray-500 flex-1 leading-tight">{addr.en}</div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr.ja)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="text-[11px] bg-blue-600 text-white px-2 py-1 rounded-full font-medium flex-shrink-0"
                  >🗺️ Maps</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* JR Pass tracker */}
        <div className="card overflow-hidden">
          <div className="bg-green-600 text-white px-4 py-3">
            <div className="font-bold text-sm">🎫 JR Pass Tracker</div>
            <div className="text-xs opacity-80">{usedCount} de {JR_PASS_ROUTES.length} trajetos utilizados</div>
          </div>
          <div className="p-2">
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-3 mx-1">
              <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: `${(usedCount / JR_PASS_ROUTES.length) * 100}%` }} />
            </div>
            {JR_PASS_ROUTES.map((route, i) => (
              <button
                key={i}
                onClick={() => toggleJrPass(i)}
                className="w-full flex items-center gap-3 p-2 rounded-xl text-left"
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${jrPassUsed[i] ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                  {jrPassUsed[i] && <span className="text-white text-[12px] font-black">✓</span>}
                </div>
                <span className={`text-sm ${jrPassUsed[i] ? 'line-through text-gray-400' : 'text-gray-700'}`}>{route.route}</span>
              </button>
            ))}
          </div>
          <div className="mx-3 mb-3 p-2.5 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-xs text-amber-800">⚠️ Power banks só vão na bagagem de mão. JR Pass: mostre no guichê, não nas catracas automáticas.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
