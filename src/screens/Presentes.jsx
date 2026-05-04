import { useState } from 'react'
import useStore from '../store/useStore'

const CATEGORIAS = ['🍬 Doce/Comida', '🎎 Artesanato', '👘 Vestuário', '💄 Beleza', '🧸 Brinquedo', '📚 Livro/Manga', '🏠 Casa', '🎌 Souvenir', '🎮 Games']

export default function Presentes() {
  const { presentes, addPresente, removePresente, togglePresenteComprado, exchangeRate } = useStore()
  const [showForm, setShowForm] = useState(false)
  const [filterPessoa, setFilterPessoa] = useState('Todos')
  const [form, setForm] = useState({ para: '', descricao: '', categoria: '🎌 Souvenir', precoYen: '', obs: '' })

  const rate = exchangeRate || 0.033

  // Build dynamic person list from existing entries
  const pessoasFromData = [...new Set(presentes.map(p => p.para).filter(Boolean))]
  const pessoas = ['Todos', ...pessoasFromData]
  const filtered = filterPessoa === 'Todos' ? presentes : presentes.filter(p => p.para === filterPessoa)

  const totalYen = presentes.reduce((s, p) => s + (p.precoYen || 0), 0)
  const gastoYen = presentes.filter(p => p.comprado).reduce((s, p) => s + (p.precoYen || 0), 0)
  const comprados = presentes.filter(p => p.comprado).length

  const handleAdd = () => {
    if (!form.descricao || !form.para) return
    addPresente({ ...form, para: form.para.trim(), precoYen: parseFloat(form.precoYen) || 0, comprado: false })
    setForm({ para: '', descricao: '', categoria: '🎌 Souvenir', precoYen: '', obs: '' })
    setShowForm(false)
  }

  // Group by recipient
  const byPessoa = {}
  filtered.forEach(p => {
    if (!byPessoa[p.para]) byPessoa[p.para] = []
    byPessoa[p.para].push(p)
  })

  return (
    <div className="flex flex-col h-screen">
      <div className="screen-header">
        <h1 className="text-lg font-bold text-gray-900">🎁 Lembrancinhas</h1>
        <p className="text-xs text-gray-500">Presentes para amigos e parentes · {comprados} de {presentes.length}</p>
      </div>

      {/* Summary */}
      <div className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="md:max-w-5xl md:mx-auto grid grid-cols-3 gap-3">
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-0.5">Itens</div>
            <div className="font-black text-lg text-gray-900">{presentes.length}</div>
            <div className="text-[12px] text-gray-400">{comprados} comprados</div>
          </div>
          <div className="text-center border-x border-gray-100">
            <div className="text-xs text-gray-400 mb-0.5">Orçamento</div>
            <div className="font-black text-sm text-gray-900">¥{totalYen.toLocaleString()}</div>
            <div className="text-[12px] text-gray-400">~R${Math.round(totalYen * rate).toLocaleString()}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-0.5">Gasto</div>
            <div className="font-black text-sm text-green-600">¥{gastoYen.toLocaleString()}</div>
            <div className="text-[12px] text-gray-400">~R${Math.round(gastoYen * rate).toLocaleString()}</div>
          </div>
        </div>
        {presentes.length > 0 && (
          <div className="md:max-w-5xl md:mx-auto mt-2">
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: `${(comprados / presentes.length) * 100}%` }} />
            </div>
          </div>
        )}
      </div>

      {/* Filter by person */}
      <div className="bg-white border-b border-gray-100 px-4 py-2 flex gap-2 overflow-x-auto">
        {pessoas.map(p => (
          <button key={p} onClick={() => setFilterPessoa(p)}
            className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap font-medium flex-shrink-0 transition-all ${filterPessoa === p ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
            {p}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto safe-bottom px-4 py-4 md:px-8 md:py-6">
        <div className="md:max-w-5xl md:mx-auto space-y-4">

          {/* Add button */}
          <button onClick={() => setShowForm(true)}
            className="w-full bg-red-600 text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform">
            <span className="text-lg">+</span> Adicionar Lembrancinha
          </button>

          {/* Form */}
          {showForm && (
            <div className="card p-4 space-y-3">
              <div className="text-sm font-bold text-gray-700">Nova lembrancinha</div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Para quem? (nome da pessoa)</label>
                <input type="text" placeholder="Ex: Tia Maria · João do trabalho · Vizinha Ana"
                  value={form.para} onChange={e => setForm(f => ({ ...f, para: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-red-400" />
                {pessoasFromData.length > 0 && (
                  <div className="flex gap-1.5 flex-wrap mt-1.5">
                    {pessoasFromData.map(p => (
                      <button key={p} onClick={() => setForm(f => ({ ...f, para: p }))}
                        className="text-[12px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200">
                        {p}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">O que é?</label>
                <input type="text" placeholder="Ex: Kit de matcha · Figura do Pikachu"
                  value={form.descricao} onChange={e => setForm(f => ({ ...f, descricao: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-red-400" />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Categoria</label>
                <select value={form.categoria} onChange={e => setForm(f => ({ ...f, categoria: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-400">
                  {CATEGORIAS.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Preço estimado (¥)</label>
                <input type="number" inputMode="decimal" placeholder="Ex: 2500"
                  value={form.precoYen} onChange={e => setForm(f => ({ ...f, precoYen: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-400" />
                {form.precoYen && <div className="text-xs text-green-600 mt-1">≈ R${Math.round(parseFloat(form.precoYen) * rate).toLocaleString()}</div>}
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Obs (loja, tamanho, etc.)</label>
                <input type="text" placeholder="Ex: Yodobashi · tamanho M · cor azul"
                  value={form.obs} onChange={e => setForm(f => ({ ...f, obs: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-400" />
              </div>
              <div className="flex gap-2">
                <button onClick={() => setShowForm(false)} className="flex-1 bg-gray-100 text-gray-600 font-semibold py-2.5 rounded-xl text-sm">Cancelar</button>
                <button onClick={handleAdd} className="flex-1 bg-red-600 text-white font-semibold py-2.5 rounded-xl text-sm">Adicionar</button>
              </div>
            </div>
          )}

          {/* List grouped by person */}
          {presentes.length === 0 ? (
            <div className="card p-10 text-center text-gray-400">
              <div className="text-4xl mb-2">🎁</div>
              <div className="text-sm">Nenhuma lembrancinha na lista</div>
              <div className="text-xs mt-1">Adicione presentes para amigos, parentes e colegas</div>
            </div>
          ) : Object.entries(byPessoa).map(([pessoa, items]) => (
            <div key={pessoa}>
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Para {pessoa}</div>
                <div className="text-xs text-gray-400">
                  {items.filter(i => i.comprado).length}/{items.length} · ¥{items.reduce((s, i) => s + (i.precoYen || 0), 0).toLocaleString()}
                </div>
              </div>
              <div className="space-y-2 md:grid md:grid-cols-2 md:gap-2 md:space-y-0">
                {items.map(item => (
                  <div key={item.id} className={`card p-3 flex items-start gap-3 ${item.comprado ? 'opacity-60' : ''}`}>
                    <button onClick={() => togglePresenteComprado(item.id)}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${item.comprado ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                      {item.comprado && <span className="text-white text-[12px] font-black">✓</span>}
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-[12px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full">{item.categoria}</span>
                      </div>
                      <div className={`text-sm font-medium ${item.comprado ? 'line-through text-gray-400' : 'text-gray-900'}`}>{item.descricao}</div>
                      {item.obs && <div className="text-xs text-gray-400 mt-0.5 truncate">{item.obs}</div>}
                      {item.precoYen > 0 && (
                        <div className="text-xs font-bold text-gray-700 mt-1">¥{item.precoYen.toLocaleString()} <span className="font-normal text-gray-400">~R${Math.round(item.precoYen * rate).toLocaleString()}</span></div>
                      )}
                    </div>
                    <button onClick={() => removePresente(item.id)} className="text-gray-300 hover:text-red-400 text-xl flex-shrink-0">×</button>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
