import { useState } from 'react'
import { JAPANESE_PHRASES, EMERGENCY_CONTACTS, METRO_LINES, TAX_FREE_GUIDE, CONNECTIVITY_GUIDE, TRANSPORT_TIPS } from '../data'
import MapButton from '../components/MapButton'

export default function Informacoes() {
  const [tab, setTab] = useState('taxfree')
  const [phraseCategory, setPhraseCategory] = useState('Básico')

  const tabs = [
    { id: 'taxfree', label: '🏷️ Tax-Free' },
    { id: 'frases', label: '🗣️ Frases' },
    { id: 'transporte', label: '🚄 Transporte' },
    { id: 'emergencia', label: '🆘 Emergência' },
    { id: 'metro', label: '🚇 Metrô' },
    { id: 'wifi', label: '📶 WiFi & Apps' },
  ]

  const currentPhrases = JAPANESE_PHRASES.find(g => g.category === phraseCategory)

  return (
    <div className="flex flex-col h-screen">
      <div className="screen-header">
        <h1 className="text-lg font-bold text-gray-900">🌐 Informações Úteis</h1>
        <p className="text-xs text-gray-500">Tax-Free · Frases · Transporte · Emergência · Metrô · WiFi & Apps</p>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100 px-4 flex gap-1 overflow-x-auto py-2">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap font-medium flex-shrink-0 transition-all ${tab === t.id ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto safe-bottom px-4 py-4 md:px-8 md:py-6 space-y-3">
        <div className="md:max-w-5xl md:mx-auto space-y-3">

        {/* TAX FREE */}
        {tab === 'taxfree' && (
          <>
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
              <div className="font-bold text-yellow-800 mb-1">🏷️ Tax-Free no Japão</div>
              <div className="text-xs text-yellow-700">Isenção de 10% de imposto de consumo. Disponível para turistas com passaporte. Mínimo: ¥5.000 por loja por dia.</div>
            </div>
            {TAX_FREE_GUIDE.map(step => (
              <div key={step.step} className="card p-4 flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{step.step}</div>
                <div>
                  <div className="font-semibold text-sm text-gray-900 mb-0.5">{step.title}</div>
                  <div className="text-xs text-gray-600 leading-relaxed">{step.desc}</div>
                </div>
              </div>
            ))}
            <div className="card p-4">
              <div className="text-sm font-bold text-gray-700 mb-2">✅ Lojas que participam</div>
              {['Yodobashi Akihabara', 'Sofmap Akihabara', 'BIC Camera', 'UNIQLO', 'LEGO Store', 'OWNDAYS'].map(l => (
                <div key={l} className="flex items-center gap-2 py-1.5 border-b border-gray-50 last:border-0">
                  <span className="text-green-500 font-bold text-xs">✓</span>
                  <span className="text-sm text-gray-700">{l}</span>
                </div>
              ))}
            </div>

            {/* Vídeos relacionados */}
            <div className="card p-4">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">🎬 Vídeos relacionados · Pré-viagem & Tax-Free</div>
              <div className="space-y-2">
                {[
                  { title: 'JAPÃO, O QUE SABER ANTES DE IR? Dicas, roteiros e preços', channel: 'Gaby Coutinho', id: 'gn0OgbR-FaU' },
                  { title: 'COMO PLANEJAR SUA VIAGEM PARA O JAPÃO 🇯🇵 (GUIA COMPLETO!)', channel: 'Djó Takashima', id: 'FAU-vf2swOQ' },
                  { title: 'IMIGRAÇÃO NO JAPÃO — Passo a Passo Visit Japan Web', channel: 'Vai com Bruno', id: 'ZM2Z0rpQufg' },
                  { title: 'JAPÃO! Todas as dicas de viagem que você PRECISA saber!', channel: 'Gabriel Lorenzi', id: 'ebcGah4eyC4' },
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
          </>
        )}

        {/* FRASES */}
        {tab === 'frases' && (
          <>
            <div className="flex gap-2 flex-wrap">
              {JAPANESE_PHRASES.map(g => (
                <button key={g.category} onClick={() => setPhraseCategory(g.category)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${phraseCategory === g.category ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {g.category}
                </button>
              ))}
            </div>
            {currentPhrases && (
              <div className="space-y-2 md:grid md:grid-cols-2 md:gap-2 md:space-y-0">
                {currentPhrases.phrases.map((p, i) => (
                  <div key={i} className="card p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="text-lg font-bold text-gray-900 mb-0.5">{p.jp}</div>
                        <div className="text-sm text-red-600 font-medium mb-1">{p.romaji}</div>
                        <div className="text-xs text-gray-500 bg-gray-50 rounded-lg px-2 py-1">{p.pt}</div>
                      </div>
                      <button
                        onClick={() => {
                          const u = new SpeechSynthesisUtterance(p.jp)
                          u.lang = 'ja-JP'
                          u.rate = 0.8
                          window.speechSynthesis.speak(u)
                        }}
                        className="w-9 h-9 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-lg flex-shrink-0 hover:bg-red-100 active:scale-95 transition-all"
                        title="Ouvir pronúncia"
                      >
                        🔊
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* TRANSPORTE */}
        {tab === 'transporte' && (
          <>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
              <div className="font-bold text-blue-800 mb-1">🚄 Dicas de Transporte — roteiro revisado</div>
              <div className="text-xs text-blue-700">Shinkansen, conexão GRU T2→T3, Suica e o trecho final Tóquio → Narita.</div>
            </div>
            {TRANSPORT_TIPS.map((tip, i) => (
              <div key={i} className="card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{tip.emoji}</span>
                  <div className="font-bold text-sm text-gray-900">{tip.title}</div>
                </div>
                <div className="space-y-1.5">
                  {tip.items.map((it, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <span className="text-green-500 font-bold text-xs mt-0.5">✓</span>
                      <span className="text-xs text-gray-700 leading-relaxed">{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}

        {/* EMERGÊNCIA */}
        {tab === 'emergencia' && (
          <>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-3">
              <div className="font-bold text-red-800 text-sm">🆘 Números de Emergência</div>
              <div className="text-xs text-red-600 mt-0.5">Salve estes números no celular antes de viajar</div>
            </div>
            {EMERGENCY_CONTACTS.map((c, i) => (
              <div key={i} className="card p-4 flex items-center gap-3">
                <div className="text-2xl">{c.icon}</div>
                <a href={`tel:${c.number}`} className="flex-1 active:scale-95 transition-transform">
                  <div className="font-semibold text-sm text-gray-900">{c.label}</div>
                  <div className="text-lg font-black text-red-600">{c.number}</div>
                </a>
                {c.address && <MapButton place={c.address} />}
                <a href={`tel:${c.number}`} className="text-gray-400">📞</a>
              </div>
            ))}
            <div className="card p-4">
              <div className="text-sm font-bold text-gray-700 mb-2">🏥 Hospital mais próximo</div>
              <div className="text-xs text-gray-600">Em Tóquio: Tokyo Medical and Surgical Clinic (+81-3-3436-3028) — falam inglês. Em Kyoto: Japan Baptist Hospital (+81-75-781-5191)</div>
            </div>
            <div className="card p-4">
              <div className="text-sm font-bold text-gray-700 mb-2">🇧🇷 Embaixada do Brasil</div>
              <div className="space-y-1.5">
                <div className="text-xs text-gray-600"><span className="font-medium">Tóquio:</span> +81-3-5404-5211</div>
                <div className="text-xs text-gray-600"><span className="font-medium">Endereço:</span> 2-11-12 Kita-Aoyama, Minato-ku, Tokyo</div>
                <div className="text-xs text-gray-600"><span className="font-medium">Email:</span> brasemb.tokyo@itamaraty.gov.br</div>
              </div>
            </div>
          </>
        )}

        {/* METRÔ */}
        {tab === 'metro' && (
          <>
            <div className="card p-4">
              <div className="text-sm font-bold text-gray-700 mb-3">IC Card — Suica / Pasmo</div>
              <div className="text-xs text-gray-600 leading-relaxed mb-3">O IC Card é um cartão recarregável que funciona em todos os trens, metrôs e até em combinis (7-Eleven, FamilyMart, Lawson). Compre assim que chegar ao Narita.</div>
              {[
                '1. Vá aos guichês de atendimento da JR East no Narita T2',
                '2. Compre por ¥2.000 (¥500 de depósito + ¥1.500 de crédito)',
                '3. Recarregue em qualquer máquina (aceita cartão ou dinheiro)',
                '4. Passe no sensor verde na entrada/saída da catraca',
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-2 py-1.5">
                  <span className="text-red-500 font-bold text-xs mt-0.5">{i+1}.</span>
                  <span className="text-xs text-gray-700">{s.slice(3)}</span>
                </div>
              ))}
            </div>
            {METRO_LINES.map(line => (
              <div key={line.name} className="card p-3 flex items-start gap-3">
                <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1" style={{ background: line.color }} />
                <div>
                  <div className="font-semibold text-sm text-gray-900">{line.name}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{line.desc}</div>
                </div>
              </div>
            ))}
            <div className="card p-4">
              <div className="text-sm font-bold text-gray-700 mb-2">⏱ Último trem</div>
              <div className="text-xs text-gray-600 leading-relaxed">A maioria das linhas em Tóquio tem o último trem entre meia-noite e 1h. Planeje a volta cedo para não precisar de táxi. App recomendado: <span className="font-medium">Google Maps</span> (funciona bem no Japão) ou <span className="font-medium">Japan Official Travel App</span>.</div>
            </div>
          </>
        )}
        {/* WIFI & APPS */}
        {tab === 'wifi' && (
          <>
            <div className="space-y-3">
              {CONNECTIVITY_GUIDE.options.map(opt => (
                <div key={opt.title} className={`card p-4 ${opt.rec ? 'ring-2 ring-green-400' : ''}`}>
                  {opt.rec && <div className="text-[12px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full inline-block mb-2">⭐ Recomendado para família</div>}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{opt.emoji}</span>
                    <div className="font-bold text-sm text-gray-900">{opt.title}</div>
                  </div>
                  <div className="font-bold text-sm text-gray-800 mb-1">💰 {opt.price}</div>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div>
                      <div className="text-[12px] font-bold text-green-700 mb-1">✅ Vantagens</div>
                      {opt.pros.map((p, i) => <div key={i} className="text-xs text-gray-600 mb-0.5">• {p}</div>)}
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-red-600 mb-1">⚠️ Atenção</div>
                      {opt.cons.map((c, i) => <div key={i} className="text-xs text-gray-600 mb-0.5">• {c}</div>)}
                    </div>
                  </div>
                  <div className="text-[12px] bg-gray-50 rounded-lg px-2 py-1.5 text-gray-500">📍 {opt.where}</div>
                </div>
              ))}
            </div>
            <div className="card p-4">
              <div className="text-sm font-bold text-gray-700 mb-1">📱 Apps Essenciais</div>
              <div className="text-xs text-gray-400 mb-3">Toque em  ou  para baixar direto</div>
              <div className="space-y-3">
                {CONNECTIVITY_GUIDE.apps.map(app => (
                  <div key={app.name} className="py-2.5 border-b border-gray-50 last:border-0">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0 mt-0.5">{app.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-sm text-gray-900">{app.name}</span>
                          {app.tag && (
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                              app.tag.startsWith('🔴') ? 'bg-red-100 text-red-700' :
                              app.tag.startsWith('🟡') ? 'bg-amber-100 text-amber-700' :
                              'bg-green-100 text-green-700'
                            }`}>{app.tag}</span>
                          )}
                        </div>
                        <div className="text-xs text-gray-500 leading-relaxed mt-0.5 mb-2">{app.desc}</div>
                        <div className="flex gap-2">
                          {app.ios && (
                            <a href={app.ios} target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-1 text-[11px] font-semibold bg-gray-900 text-white px-2.5 py-1 rounded-lg">
                               App Store
                            </a>
                          )}
                          {app.android && (
                            <a href={app.android} target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-1 text-[11px] font-semibold bg-green-600 text-white px-2.5 py-1 rounded-lg">
                               Play Store
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        </div>
      </div>
    </div>
  )
}
