import { useState } from 'react'
import useStore from '../store/useStore'

const CHILDREN = [
  { id: 'pedro', name: 'Pedro', emoji: '🧑', color: 'blue' },
  { id: 'felipe', name: 'Felipe', emoji: '👦', color: 'green' },
]

const COLORS = {
  blue: {
    header: 'bg-blue-600',
    badge: 'bg-blue-100 text-blue-700',
    bar: 'bg-blue-500',
    barDanger: 'bg-red-500',
    ring: 'ring-blue-200',
    btn: 'bg-blue-600 hover:bg-blue-700',
    light: 'bg-blue-50 border-blue-100',
  },
  green: {
    header: 'bg-green-600',
    badge: 'bg-green-100 text-green-700',
    bar: 'bg-green-500',
    barDanger: 'bg-red-500',
    ring: 'ring-green-200',
    btn: 'bg-green-600 hover:bg-green-700',
    light: 'bg-green-50 border-green-100',
  },
}

const TRIP_DAYS = 19

export default function Mesada() {
  const { mesadaDiaria, setMesadaDiaria, mesadaExpenses, addMesadaExpense, removeMesadaExpense, exchangeRate } = useStore()
  const [tab, setTab] = useState('pedro')
  const [showAdd, setShowAdd] = useState(false)
  const [expForm, setExpForm] = useState({ child: 'pedro', amountYen: '', desc: '' })
  const [editingChild, setEditingChild] = useState(null)
  const [newDiaria, setNewDiaria] = useState('')

  const rate = exchangeRate || 0.033

  const getDiaria = (childId) => mesadaDiaria?.[childId] ?? 3000
  const getTotal = (childId) => getDiaria(childId) * TRIP_DAYS
  const getSpent = (childId) => mesadaExpenses.filter(e => e.child === childId).reduce((s, e) => s + e.amountYen, 0)
  const getRemaining = (childId) => getTotal(childId) - getSpent(childId)

  const handleAddExpense = () => {
    if (!expForm.amountYen) return
    addMesadaExpense({
      child: expForm.child,
      amountYen: parseFloat(expForm.amountYen),
      desc: expForm.desc,
      date: new Date().toLocaleDateString('pt-BR'),
    })
    setExpForm(f => ({ ...f, amountYen: '', desc: '' }))
    setShowAdd(false)
  }

  const handleSaveDiaria = (childId) => {
    const v = parseFloat(newDiaria)
    if (!isNaN(v) && v >= 0) setMesadaDiaria(childId, v)
    setEditingChild(null)
    setNewDiaria('')
  }

  const activeChild = CHILDREN.find(c => c.id === tab)
  const c = COLORS[activeChild.color]

  const totalBoth = CHILDREN.reduce((s, ch) => s + getTotal(ch.id), 0)
  const spentBoth = CHILDREN.reduce((s, ch) => s + getSpent(ch.id), 0)

  return (
    <div className="flex flex-col h-screen">
      <div className="screen-header">
        <h1 className="text-lg font-bold text-gray-900">💴 Mesada dos Filhos</h1>
        <p className="text-xs text-gray-500">Orçamento diário · {TRIP_DAYS} dias · Pedro e Felipe</p>
      </div>

      {/* Summary top bar */}
      <div className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="md:max-w-5xl md:mx-auto">
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-0.5">Orçamento total</div>
              <div className="font-black text-sm text-gray-900">¥{totalBoth.toLocaleString()}</div>
              <div className="text-[12px] text-gray-400">~R${Math.round(totalBoth * rate).toLocaleString()}</div>
            </div>
            <div className="text-center border-x border-gray-100">
              <div className="text-xs text-gray-400 mb-0.5">Gastos</div>
              <div className="font-black text-sm text-gray-900">¥{spentBoth.toLocaleString()}</div>
              <div className="text-[12px] text-gray-400">~R${Math.round(spentBoth * rate).toLocaleString()}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-0.5">Saldo</div>
              <div className={`font-black text-sm ${(totalBoth - spentBoth) < 0 ? 'text-red-600' : 'text-green-600'}`}>
                ¥{(totalBoth - spentBoth).toLocaleString()}
              </div>
              <div className="text-[12px] text-gray-400">~R${Math.round((totalBoth - spentBoth) * rate).toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Child tabs */}
      <div className="bg-white border-b border-gray-100 px-4 py-2 flex gap-2">
        {CHILDREN.map(ch => (
          <button key={ch.id} onClick={() => setTab(ch.id)}
            className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${tab === ch.id ? `text-white ${COLORS[ch.color].header}` : 'bg-gray-100 text-gray-600'}`}>
            {ch.emoji} {ch.name}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto safe-bottom px-4 py-4 md:px-8 md:py-6">
        <div className="md:max-w-5xl md:mx-auto space-y-4">

          {/* Child budget card */}
          <div className={`card overflow-hidden`}>
            <div className={`${c.header} text-white px-4 py-4`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{activeChild.emoji}</div>
                  <div>
                    <div className="font-black text-lg">{activeChild.name}</div>
                    <div className="text-xs opacity-80">{TRIP_DAYS} dias de viagem</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black">¥{getRemaining(tab).toLocaleString()}</div>
                  <div className="text-xs opacity-80">saldo restante</div>
                </div>
              </div>

              {/* Progress bar */}
              <div>
                <div className="flex justify-between text-xs opacity-80 mb-1">
                  <span>¥{getSpent(tab).toLocaleString()} gastos</span>
                  <span>¥{getTotal(tab).toLocaleString()} total</span>
                </div>
                <div className="h-2.5 bg-white/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all"
                    style={{ width: `${Math.min(100, (getSpent(tab) / Math.max(1, getTotal(tab))) * 100)}%` }}
                  />
                </div>
                <div className="text-right text-xs opacity-70 mt-1">
                  {Math.round((getSpent(tab) / Math.max(1, getTotal(tab))) * 100)}% utilizado
                </div>
              </div>
            </div>

            {/* Config row */}
            <div className="px-4 py-3 bg-gray-50 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500">Mesada diária</div>
                {editingChild === tab ? (
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-gray-600 font-bold text-sm">¥</span>
                    <input
                      type="number" inputMode="decimal"
                      value={newDiaria}
                      onChange={e => setNewDiaria(e.target.value)}
                      className="border border-gray-300 rounded-lg px-2 py-1 text-sm w-24 focus:outline-none focus:border-blue-400"
                      autoFocus
                      placeholder={getDiaria(tab)}
                    />
                    <button onClick={() => handleSaveDiaria(tab)} className="text-xs bg-gray-800 text-white px-2 py-1 rounded-lg">OK</button>
                    <button onClick={() => { setEditingChild(null); setNewDiaria('') }} className="text-xs text-gray-400">✕</button>
                  </div>
                ) : (
                  <div className="font-black text-lg text-gray-900">
                    ¥{getDiaria(tab).toLocaleString()}
                    <span className="text-xs text-gray-400 font-normal ml-1">~R${Math.round(getDiaria(tab) * rate).toLocaleString()}/dia</span>
                  </div>
                )}
              </div>
              {editingChild !== tab && (
                <button onClick={() => { setEditingChild(tab); setNewDiaria(getDiaria(tab).toString()) }}
                  className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-xl">
                  ✏️ Editar
                </button>
              )}
            </div>

            <div className="px-4 py-2 border-t border-gray-100 grid grid-cols-2 divide-x divide-gray-100">
              <div className="pr-4 text-center">
                <div className="text-[12px] text-gray-400">Total da viagem</div>
                <div className="font-bold text-sm text-gray-900">¥{getTotal(tab).toLocaleString()}</div>
                <div className="text-[12px] text-gray-400">~R${Math.round(getTotal(tab) * rate).toLocaleString()}</div>
              </div>
              <div className="pl-4 text-center">
                <div className="text-[12px] text-gray-400">Média diária gasta</div>
                <div className="font-bold text-sm text-gray-900">
                  ¥{mesadaExpenses.filter(e => e.child === tab).length > 0
                    ? Math.round(getSpent(tab) / Math.max(1, mesadaExpenses.filter(e => e.child === tab).length)).toLocaleString()
                    : 0}
                </div>
                <div className="text-[12px] text-gray-400">por compra</div>
              </div>
            </div>
          </div>

          {/* Add expense button */}
          <button
            onClick={() => { setExpForm(f => ({ ...f, child: tab })); setShowAdd(true) }}
            className={`w-full ${c.header} text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform`}>
            <span className="text-lg">+</span> Registrar Gasto de {activeChild.name}
          </button>

          {/* Add form */}
          {showAdd && (
            <div className="card p-4 space-y-3">
              <div className="text-sm font-bold text-gray-700">Novo gasto — {CHILDREN.find(c => c.id === expForm.child)?.name}</div>
              <div className="flex gap-2">
                {CHILDREN.map(ch => (
                  <button key={ch.id} onClick={() => setExpForm(f => ({ ...f, child: ch.id }))}
                    className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${expForm.child === ch.id ? `text-white ${COLORS[ch.color].header}` : 'bg-gray-100 text-gray-600'}`}>
                    {ch.emoji} {ch.name}
                  </button>
                ))}
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Valor em ¥</label>
                <input
                  type="number" inputMode="decimal" placeholder="Ex: 1500"
                  value={expForm.amountYen}
                  onChange={e => setExpForm(f => ({ ...f, amountYen: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-base font-bold focus:outline-none focus:border-red-400"
                />
                {expForm.amountYen && (
                  <div className="text-xs text-green-600 mt-1">≈ R${Math.round(parseFloat(expForm.amountYen) * rate).toLocaleString()}</div>
                )}
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">O que comprou?</label>
                <input
                  type="text" placeholder="Ex: Gashapon em Akihabara"
                  value={expForm.desc}
                  onChange={e => setExpForm(f => ({ ...f, desc: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-red-400"
                />
              </div>
              <div className="flex gap-2">
                <button onClick={() => setShowAdd(false)} className="flex-1 bg-gray-100 text-gray-600 font-semibold py-2.5 rounded-xl text-sm">Cancelar</button>
                <button onClick={handleAddExpense} className={`flex-1 text-white font-semibold py-2.5 rounded-xl text-sm ${c.btn}`}>Salvar</button>
              </div>
            </div>
          )}

          {/* Expense history for this child */}
          <div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
              Histórico — {activeChild.name}
            </div>
            {mesadaExpenses.filter(e => e.child === tab).length === 0 ? (
              <div className="card p-8 text-center text-gray-400">
                <div className="text-3xl mb-2">💴</div>
                <div className="text-sm">Nenhum gasto registrado ainda</div>
              </div>
            ) : (
              <div className="space-y-2">
                {mesadaExpenses.filter(e => e.child === tab).map(exp => (
                  <div key={exp.id} className="card p-3 flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 ${c.badge}`}>
                      {activeChild.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm text-gray-900 truncate">{exp.desc || 'Gasto'}</div>
                      <div className="text-xs text-gray-400">{exp.date}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-bold text-sm text-gray-900">¥{exp.amountYen.toLocaleString()}</div>
                      <div className="text-xs text-gray-400">~R${Math.round(exp.amountYen * rate).toLocaleString()}</div>
                    </div>
                    <button onClick={() => removeMesadaExpense(exp.id)} className="text-gray-300 hover:text-red-400 text-xl ml-1 flex-shrink-0">×</button>
                  </div>
                ))}
                <div className="card p-3 bg-gray-50 flex justify-between items-center">
                  <span className="text-sm font-bold text-gray-700">Total gasto por {activeChild.name}</span>
                  <div className="text-right">
                    <div className="font-black text-gray-900">¥{getSpent(tab).toLocaleString()}</div>
                    <div className="text-xs text-gray-500">~R${Math.round(getSpent(tab) * rate).toLocaleString()}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
