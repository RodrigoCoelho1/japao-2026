import { useState } from 'react'
import useStore from '../store/useStore'
import { BUDGET_CATEGORIES } from '../data'

export default function Financeiro() {
  const { exchangeRate, setExchangeRate, expenses, addExpense, removeExpense, budgets, setBudget } = useStore()
  const [tab, setTab] = useState('conversor')
  const [yenInput, setYenInput] = useState('')
  const [brlInput, setBrlInput] = useState('')
  const [expForm, setExpForm] = useState({ amount: '', category: 'alimentacao', desc: '' })
  const [showAddExp, setShowAddExp] = useState(false)

  const rate = exchangeRate || 0.033

  const totalSpent = expenses.reduce((s, e) => s + e.amountYen, 0)
  const totalBudget = Object.values(budgets).reduce((s, v) => s + v, 0)

  const byCategory = BUDGET_CATEGORIES.map(cat => {
    const spent = expenses.filter(e => e.category === cat.id).reduce((s, e) => s + e.amountYen, 0)
    const budget = budgets[cat.id] || cat.default
    return { ...cat, spent, budget, pct: Math.min(100, (spent / budget) * 100) }
  })

  const handleAddExpense = () => {
    if (!expForm.amount) return
    addExpense({ amountYen: parseFloat(expForm.amount), category: expForm.category, desc: expForm.desc, date: new Date().toLocaleDateString('pt-BR') })
    setExpForm({ amount: '', category: 'alimentacao', desc: '' })
    setShowAddExp(false)
  }

  const tabs = [
    { id: 'conversor', label: '💱 Câmbio' },
    { id: 'gastos', label: '📊 Gastos' },
    { id: 'orcamento', label: '🎯 Orçamento' },
    { id: 'historico', label: '📋 Histórico' },
  ]

  return (
    <div className="flex flex-col h-screen">
      <div className="screen-header">
        <h1 className="text-lg font-bold text-gray-900">💰 Controle Financeiro</h1>
        <p className="text-xs text-gray-500">¥1 = R${rate.toFixed(3)} · US$4.000/pessoa de isenção</p>
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

        {/* CONVERSOR */}
        {tab === 'conversor' && (
          <>
            <div className="card p-4">
              <div className="text-sm font-bold text-gray-700 mb-3">Conversor de Câmbio</div>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Valor em ¥ (Iene)</label>
                  <input
                    type="number" inputMode="decimal" placeholder="Ex: 10000"
                    value={yenInput}
                    onChange={e => { setYenInput(e.target.value); setBrlInput(e.target.value ? (parseFloat(e.target.value) * rate).toFixed(2) : '') }}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:border-red-400"
                  />
                  {yenInput && <div className="text-right text-sm text-green-700 font-bold mt-1">= R$ {(parseFloat(yenInput) * rate).toFixed(2)}</div>}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-xs text-gray-400 px-2">ou</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Valor em R$ (Real)</label>
                  <input
                    type="number" inputMode="decimal" placeholder="Ex: 330"
                    value={brlInput}
                    onChange={e => { setBrlInput(e.target.value); setYenInput(e.target.value ? Math.round(parseFloat(e.target.value) / rate).toString() : '') }}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:border-red-400"
                  />
                  {brlInput && <div className="text-right text-sm text-green-700 font-bold mt-1">= ¥ {Math.round(parseFloat(brlInput) / rate).toLocaleString()}</div>}
                </div>
              </div>
            </div>
            <div className="card p-4">
              <div className="text-sm font-bold text-gray-700 mb-3">Câmbio de referência</div>
              <div className="flex items-center gap-3 mb-3">
                <input
                  type="number" inputMode="decimal" step="0.001"
                  value={rate}
                  onChange={e => setExchangeRate(e.target.value)}
                  className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-400"
                />
                <span className="text-sm text-gray-600">R$/¥</span>
              </div>
              <p className="text-xs text-gray-500">Referência: ¥1 = R$0,033 (abril/2026). Atualize conforme o câmbio do dia.</p>
            </div>
            <div className="card p-4">
              <div className="text-sm font-bold text-gray-700 mb-3">Referências rápidas</div>
              {[[1000, 'Lanche/Combini'], [5000, 'Almoço família'], [10000, 'Jantar bom'], [50000, 'Eletrônico médio'], [100000, 'Eletrônico premium']].map(([yen, label]) => (
                <div key={yen} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                  <span className="text-xs text-gray-500">{label}</span>
                  <div className="text-right">
                    <span className="text-xs font-bold text-gray-900">¥{yen.toLocaleString()}</span>
                    <span className="text-xs text-gray-400 ml-2">≈ R${Math.round(yen * rate).toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* GASTOS */}
        {tab === 'gastos' && (
          <>
            <div className="grid grid-cols-2 gap-2">
              <div className="card p-3 text-center">
                <div className="text-xs text-gray-500 mb-1">Total gasto</div>
                <div className="text-lg font-black text-gray-900">¥{totalSpent.toLocaleString()}</div>
                <div className="text-xs text-gray-500">~R${Math.round(totalSpent * rate).toLocaleString()}</div>
              </div>
              <div className="card p-3 text-center">
                <div className="text-xs text-gray-500 mb-1">Saldo do orçamento</div>
                <div className={`text-lg font-black ${totalSpent > totalBudget ? 'text-red-600' : 'text-green-600'}`}>¥{(totalBudget - totalSpent).toLocaleString()}</div>
                <div className="text-xs text-gray-500">~R${Math.round((totalBudget - totalSpent) * rate).toLocaleString()}</div>
              </div>
            </div>

            <button onClick={() => setShowAddExp(true)}
              className="w-full bg-red-600 text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-2">
              <span className="text-lg">+</span> Registrar Gasto
            </button>

            {showAddExp && (
              <div className="card p-4 space-y-3">
                <div className="text-sm font-bold text-gray-700">Novo gasto</div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Valor em ¥</label>
                  <input type="number" inputMode="decimal" placeholder="Ex: 5000"
                    value={expForm.amount} onChange={e => setExpForm(f => ({ ...f, amount: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-400" />
                  {expForm.amount && <div className="text-xs text-green-600 mt-1">≈ R${Math.round(parseFloat(expForm.amount) * rate).toLocaleString()}</div>}
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Categoria</label>
                  <select value={expForm.category} onChange={e => setExpForm(f => ({ ...f, category: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-400">
                    {BUDGET_CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.icon} {c.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Descrição (opcional)</label>
                  <input type="text" placeholder="Ex: Ramen Ichiran Shinjuku"
                    value={expForm.desc} onChange={e => setExpForm(f => ({ ...f, desc: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-400" />
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setShowAddExp(false)} className="flex-1 bg-gray-100 text-gray-600 font-semibold py-2.5 rounded-xl text-sm">Cancelar</button>
                  <button onClick={handleAddExpense} className="flex-1 bg-red-600 text-white font-semibold py-2.5 rounded-xl text-sm">Salvar</button>
                </div>
              </div>
            )}

            {/* by category */}
            <div className="card p-4">
              <div className="text-sm font-bold text-gray-700 mb-3">Por categoria</div>
              {byCategory.map(cat => (
                <div key={cat.id} className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-700">{cat.icon} {cat.label}</span>
                    <span className="text-xs font-bold text-gray-900">¥{cat.spent.toLocaleString()} / ¥{cat.budget.toLocaleString()}</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all ${cat.pct >= 100 ? 'bg-red-500' : cat.pct >= 80 ? 'bg-amber-400' : 'bg-green-500'}`}
                      style={{ width: `${cat.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Customs limit */}
            <div className="card p-4 bg-blue-50 border border-blue-100">
              <div className="text-sm font-bold text-blue-800 mb-1">🛃 Limite Alfandegário Brasileiro</div>
              <div className="text-xs text-blue-700">US$4.000 por pessoa · Família: US$16.000 total</div>
              <div className="text-xs text-blue-600 mt-2">Valores acima geram multa de 60% sobre o excedente. Com câmbio atual, US$4.000 ≈ R${Math.round(4000 * 5.7).toLocaleString()}</div>
            </div>

            {/* Vídeos relacionados */}
            <div className="card p-4">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">🎬 Vídeos relacionados · Custos & Orçamento</div>
              <div className="space-y-2">
                {[
                  { title: 'TOKYO: Quanto custa e o que fazer? Minha experiência REAL', channel: 'Gaby Coutinho', id: '8fr0jldN0ZM' },
                  { title: 'JAPÃO, O QUE SABER ANTES DE IR? Dicas, roteiros e preços', channel: 'Gaby Coutinho', id: 'gn0OgbR-FaU' },
                  { title: 'Barato ou Caro? Meus gastos no Japão', channel: 'Vai com Bruno', id: '_p9POx39Nf8' },
                  { title: 'Preços no Japão — Tour completo no 7 Eleven', channel: 'Vai com Bruno', id: '9ZdWeDbaLf8' },
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

        {/* ORÇAMENTO */}
        {tab === 'orcamento' && (
          <div className="space-y-3">
            <p className="text-xs text-gray-500 px-1">Defina o limite por categoria em ¥ (ienes).</p>
            {BUDGET_CATEGORIES.map(cat => (
              <div key={cat.id} className="card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{cat.icon}</span>
                  <div className="font-semibold text-sm text-gray-900">{cat.label}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 font-bold">¥</span>
                  <input
                    type="number" inputMode="decimal"
                    value={budgets[cat.id] || cat.default}
                    onChange={e => setBudget(cat.id, parseFloat(e.target.value) || 0)}
                    className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm font-bold focus:outline-none focus:border-red-400"
                  />
                </div>
                <div className="text-xs text-gray-400 mt-1">≈ R${Math.round((budgets[cat.id] || cat.default) * rate).toLocaleString()}</div>
              </div>
            ))}
            <div className="card p-4 bg-gray-50">
              <div className="flex justify-between">
                <span className="font-bold text-gray-700">Orçamento total</span>
                <div className="text-right">
                  <div className="font-black text-gray-900">¥{totalBudget.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">~R${Math.round(totalBudget * rate).toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* HISTÓRICO */}
        {tab === 'historico' && (
          <>
            {expenses.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <div className="text-4xl mb-2">🧾</div>
                <div className="text-sm">Nenhum gasto registrado ainda</div>
              </div>
            ) : (
              expenses.map(exp => {
                const cat = BUDGET_CATEGORIES.find(c => c.id === exp.category)
                return (
                  <div key={exp.id} className="card p-3 flex items-center gap-3">
                    <div className="text-2xl flex-shrink-0">{cat?.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-gray-900 truncate">{exp.desc || cat?.label}</div>
                      <div className="text-xs text-gray-500">{exp.date} · {cat?.label}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-bold text-sm text-gray-900">¥{exp.amountYen.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">~R${Math.round(exp.amountYen * rate).toLocaleString()}</div>
                    </div>
                    <button onClick={() => removeExpense(exp.id)} className="text-gray-300 hover:text-red-400 text-lg ml-1">×</button>
                  </div>
                )
              })
            )}
          </>
        )}
        </div>
      </div>
    </div>
  )
}
