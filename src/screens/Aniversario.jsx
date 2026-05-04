import { useState } from 'react'
import useStore from '../store/useStore'
import { BIRTHDAY_DATA, BIRTHDAY_PIN } from '../data'

function ChecklistItem({ task, done, onToggle }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-50 last:border-0">
      <div className="flex items-center gap-3 py-2">
        <button
          onClick={onToggle}
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${done ? 'bg-pink-500 border-pink-500' : 'border-gray-300'}`}
        >
          {done && <span className="text-white text-[12px] font-black">✓</span>}
        </button>
        <span className="text-lg flex-shrink-0">{task.emoji}</span>
        <span className={`text-sm flex-1 leading-snug ${done ? 'line-through text-gray-400' : 'text-gray-700'}`}>{task.text}</span>
        {(task.detail || task.link) && (
          <button
            onClick={() => setOpen(o => !o)}
            className="text-[11px] px-2 py-0.5 rounded-full bg-pink-50 text-pink-600 font-medium flex-shrink-0"
          >
            {open ? '▲' : 'ℹ️'}
          </button>
        )}
      </div>
      {open && (task.detail || task.link) && (
        <div className="ml-14 mb-2.5 space-y-2">
          {task.detail && (
            <p className="text-xs text-gray-500 leading-relaxed bg-gray-50 rounded-xl p-2.5">{task.detail}</p>
          )}
          {task.link && (
            <a
              href={task.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-pink-500 hover:bg-pink-600 px-3 py-1.5 rounded-xl transition-all"
            >
              🔗 Abrir link
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default function Aniversario() {
  const { birthdayUnlocked, birthdayAttempts, unlockBirthday, lockBirthday, failBirthdayAttempt, birthdayChecklist, toggleBirthdayTask } = useStore()
  const [pin, setPin] = useState('')
  const [shake, setShake] = useState(false)
  const [activeTab, setActiveTab] = useState('plano')

  const handlePin = (digit) => {
    if (pin.length >= 4) return
    const next = pin + digit
    setPin(next)
    if (next.length === 4) {
      if (next === BIRTHDAY_PIN) {
        unlockBirthday()
        setPin('')
      } else {
        failBirthdayAttempt()
        setShake(true)
        setTimeout(() => { setPin(''); setShake(false) }, 600)
      }
    }
  }

  const doneCount = BIRTHDAY_DATA.checklist.filter(t => birthdayChecklist[t.id]).length

  if (!birthdayUnlocked) {
    return (
      <div className="flex flex-col h-screen">
        <div className="screen-header">
          <h1 className="text-lg font-bold text-gray-900">🎂 Módulo Privado</h1>
          <p className="text-xs text-gray-500">Protegido por PIN — acesso restrito</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Aniversário da Elaine</h2>
          <p className="text-sm text-gray-500 text-center mb-8">Plano de surpresa · 09/07 em Kyoto · Gion Matsuri</p>

          {/* PIN dots */}
          <div className={`flex gap-4 mb-8 transition-all ${shake ? 'animate-pulse' : ''}`}>
            {[0,1,2,3].map(i => (
              <div key={i} className={`w-4 h-4 rounded-full border-2 transition-all ${i < pin.length ? 'bg-red-600 border-red-600' : 'border-gray-300'}`} />
            ))}
          </div>

          {birthdayAttempts >= 3 && (
            <p className="text-xs text-red-500 mb-4">Dica: data especial de julho 🎂</p>
          )}

          {/* Numpad */}
          <div className="grid grid-cols-3 gap-3 w-64">
            {[1,2,3,4,5,6,7,8,9,'',0,'⌫'].map((d, i) => (
              <button
                key={i}
                onClick={() => {
                  if (d === '⌫') setPin(p => p.slice(0, -1))
                  else if (d !== '') handlePin(String(d))
                }}
                className={`h-14 rounded-2xl text-xl font-bold transition-all active:scale-95 ${d === '' ? '' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                disabled={d === ''}
              >
                {d}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-6">PIN de 4 dígitos</p>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'plano', label: '🎉 Plano' },
    { id: 'agenda', label: '📅 Agenda' },
    { id: 'fotografas', label: '📸 Fotógrafas' },
    { id: 'festival', label: '🏮 Festival' },
  ]

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-pink-600 text-white px-4 pt-10 pb-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">🎂 Aniversário da Elaine</h1>
            <p className="text-pink-200 text-xs">09/07 · Kyoto · Gion Matsuri 🏮</p>
          </div>
          <button onClick={lockBirthday} className="text-pink-200 text-xs bg-pink-700 px-2 py-1 rounded-lg">Fechar</button>
        </div>
        {/* Tab bar */}
        <div className="flex gap-1 mt-3 overflow-x-auto">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap font-medium flex-shrink-0 transition-all ${activeTab === t.id ? 'bg-white text-pink-700' : 'text-pink-200'}`}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto safe-bottom px-4 py-4 space-y-3">

        {/* PLANO */}
        {activeTab === 'plano' && (
          <>
            <div className="card p-4">
              <div className="text-sm font-bold text-gray-700 mb-1">📋 Checklist da Surpresa</div>
              <div className="text-xs text-gray-500 mb-3">{doneCount} de {BIRTHDAY_DATA.checklist.length} concluídos</div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-pink-500 rounded-full transition-all" style={{ width: `${(doneCount / BIRTHDAY_DATA.checklist.length) * 100}%` }} />
              </div>
              {BIRTHDAY_DATA.checklist.map(task => (
                <ChecklistItem
                  key={task.id}
                  task={task}
                  done={!!birthdayChecklist[task.id]}
                  onToggle={() => toggleBirthdayTask(task.id)}
                />
              ))}
            </div>

            <div className="card p-4">
              <div className="text-sm font-bold text-gray-700 mb-3">🎊 As 4 Camadas da Surpresa</div>
              {[
                { n: '1', emoji: '👘', title: 'Kimono + Fotógrafa em Gion', desc: 'Alugar yukata para toda a família. O fotógrafo aparece como surpresa. Sessão de 60–90 min pelas ruas de Gion durante o Gion Matsuri. As fotos mais bonitas da vida da família.' },
                { n: '2', emoji: '💌', title: 'Pedro e Felipe como cúmplices', desc: 'Combinar antes da viagem. No café da manhã do dia 09, eles entregam um cartão de aniversário que fizeram para a mãe. Simples e muito poderoso.' },
                { n: '3', emoji: '🍱', title: 'Jantar no Gion Suetomo', desc: 'Restaurante kaiseki em Gion. Avisar com antecedência que é aniversário. Esperar um gesto discreto e especial. Confirmar URGENTE — lista de espera longa.' },
                { n: '4', emoji: '🌸', title: 'Quarto decorado no hotel', desc: 'Combinar com o Good Nature Hotel Kyoto para ter flores e mensagem no quarto quando voltarem do jantar. Encerramento perfeito.' },
              ].map(c => (
                <div key={c.n} className="flex gap-3 mb-4">
                  <div className="w-7 h-7 rounded-full bg-pink-100 text-pink-700 font-black text-xs flex items-center justify-center flex-shrink-0">{c.n}</div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900 mb-0.5">{c.emoji} {c.title}</div>
                    <div className="text-xs text-gray-600 leading-relaxed">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* AGENDA */}
        {activeTab === 'agenda' && (
          <div className="card overflow-hidden">
            <div className="bg-pink-50 px-4 py-3 border-b border-pink-100">
              <div className="font-bold text-pink-800">📅 Agenda do Dia 09/07</div>
              <div className="text-xs text-pink-600">Kyoto · Gion Matsuri · Aniversário</div>
            </div>
            <div className="divide-y divide-gray-50">
              {BIRTHDAY_DATA.agenda.map((item, i) => (
                <div key={i} className="p-3 flex items-start gap-3">
                  <div className="text-xs font-mono font-bold text-pink-600 w-12 flex-shrink-0 pt-1">{item.time}</div>
                  <div className="text-xl flex-shrink-0">{item.emoji}</div>
                  <div className="text-sm text-gray-700 flex-1 leading-snug pt-0.5">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FOTÓGRAFAS */}
        {activeTab === 'fotografas' && (
          <div className="space-y-3">
            {BIRTHDAY_DATA.photographers.map((p, i) => (
              <div key={i} className={`card p-4 ${i === 0 ? 'ring-2 ring-pink-400' : ''}`}>
                {i === 0 && <div className="text-[12px] bg-pink-100 text-pink-700 font-bold px-2 py-0.5 rounded-full inline-block mb-2">⭐ Recomendação principal</div>}
                <div className="font-bold text-gray-900 mb-1">{p.name}</div>
                <div className="text-xs text-gray-500 mb-3 leading-relaxed">{p.note}</div>
                <div className="space-y-1.5">
                  <ContactRow icon="📱" label="WhatsApp" value={p.wa} href={`https://wa.me/${p.wa.replace(/\D/g,'')}`} />
                  <ContactRow icon="📧" label="Email" value={p.email} href={`mailto:${p.email}`} />
                  {p.ig && <ContactRow icon="📷" label="Instagram" value={p.ig} href={`https://instagram.com/${p.ig.replace('@','')}`} />}
                  {p.site && <ContactRow icon="🌐" label="Site" value={p.site} href={`https://${p.site}`} />}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FESTIVAL */}
        {activeTab === 'festival' && (
          <>
            <div className="card p-4">
              <div className="text-sm font-bold text-gray-700 mb-2">🏮 Gion Matsuri — Contexto</div>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">{BIRTHDAY_DATA.gionInfo.period}</p>
              <p className="text-xs text-gray-600 leading-relaxed bg-amber-50 border border-amber-200 rounded-xl p-3">{BIRTHDAY_DATA.gionInfo.note09}</p>
            </div>
            <div className="card p-4">
              <div className="text-sm font-bold text-gray-700 mb-2">📍 Melhores pontos para fotos</div>
              {BIRTHDAY_DATA.gionInfo.bestSpots.map((spot, i) => (
                <div key={i} className="flex items-start gap-2 py-1.5 border-b border-gray-50 last:border-0">
                  <span className="text-pink-500 font-black text-xs mt-0.5">•</span>
                  <span className="text-sm text-gray-700">{spot}</span>
                </div>
              ))}
            </div>
            <div className="card p-4">
              <div className="text-sm font-bold text-gray-700 mb-2">💡 Dica da nota</div>
              <p className="text-xs text-gray-600 leading-relaxed italic">"O dia 09/07 foi o melhor possível para esse plano — Gion Matsuri em plena força, o bairro mais bonito de Kyoto no seu melhor momento do ano. Não foi planejado assim, mas ficou perfeito."</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function ContactRow({ icon, label, value, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-800">
      <span>{icon}</span>
      <span className="font-medium text-gray-500 w-16">{label}:</span>
      <span className="flex-1 truncate">{value}</span>
    </a>
  )
}
