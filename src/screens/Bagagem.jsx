import { useState } from 'react'
import useStore from '../store/useStore'
import { SHOPPING_ITEMS } from '../data'

const PESSOAS = ['Rodrigo', 'Elaine', 'Pedro', 'Felipe']
const TIPOS = [
  { id: 'despacho', label: 'Despacho', limit: 30, icon: '🧳' },
  { id: 'mao', label: 'Mão', limit: 7, icon: '👜' },
  { id: 'mochila', label: 'Mochila', limit: 10, icon: '🎒' },
]

// Estimated typical weights for quick-add
const PESO_REFERENCIA = [
  { group: 'Roupas', items: [
    { nome: 'Camiseta', peso: 0.2 },
    { nome: 'Calça jeans', peso: 0.7 },
    { nome: 'Calça de tecido', peso: 0.4 },
    { nome: 'Short / bermuda', peso: 0.2 },
    { nome: 'Vestido', peso: 0.3 },
    { nome: 'Blusa / moletom', peso: 0.5 },
    { nome: 'Casaco / jaqueta leve', peso: 0.8 },
    { nome: 'Casaco impermeável (chuva)', peso: 0.4 },
    { nome: 'Pijama', peso: 0.3 },
    { nome: 'Meias (5 pares)', peso: 0.2 },
    { nome: 'Cuecas/calcinhas (5)', peso: 0.2 },
    { nome: 'Sutiã', peso: 0.1 },
    { nome: 'Roupas de banho', peso: 0.3 },
    { nome: 'Regata / camiseta térmica', peso: 0.15 },
    { nome: 'Boné / chapéu', peso: 0.1 },
    { nome: 'Toalha de secagem rápida', peso: 0.2 },
  ]},
  { group: 'Calçados', items: [
    { nome: 'Tênis esportivo', peso: 0.8 },
    { nome: 'Tênis casual / All Star', peso: 0.6 },
    { nome: 'Sandália / chinelo', peso: 0.4 },
    { nome: 'Sapato social', peso: 0.9 },
    { nome: 'Crocs / slide', peso: 0.3 },
  ]},
  { group: 'Eletrônicos', items: [
    { nome: 'Notebook + carregador', peso: 2.0 },
    { nome: 'Tablet (iPad) + case', peso: 0.6 },
    { nome: 'Carregador celular USB-C', peso: 0.1 },
    { nome: 'Carregador celular Lightning', peso: 0.1 },
    { nome: 'Carregador rápido 65W (GaN)', peso: 0.15 },
    { nome: 'Cabo USB-C (2 unidades)', peso: 0.05 },
    { nome: 'Cabo Lightning', peso: 0.03 },
    { nome: 'Power bank 20.000mAh', peso: 0.35 },
    { nome: 'Power bank 10.000mAh', peso: 0.2 },
    { nome: 'Fone Bluetooth (over-ear)', peso: 0.25 },
    { nome: 'Fone intra-auricular (earbuds)', peso: 0.05 },
    { nome: 'DJI Osmo Pocket + acessórios', peso: 0.4 },
    { nome: 'Câmera compacta', peso: 0.3 },
    { nome: 'Adaptador de tomada JP (tipo A)', peso: 0.1 },
    { nome: 'Extensão/régua de tomadas', peso: 0.2 },
    { nome: 'Cartão SD / microSD', peso: 0.01 },
    { nome: 'Kindle / e-reader', peso: 0.2 },
    { nome: 'Apple Watch / smartwatch + carregador', peso: 0.1 },
    { nome: 'AirTag (rastreador de mala)', peso: 0.01 },
    { nome: 'Suporte celular (tripé/selfie stick)', peso: 0.2 },
  ]},
  { group: 'Higiene / Saúde', items: [
    { nome: 'Necessaire completa', peso: 1.0 },
    { nome: 'Shampoo + condicionador (100ml)', peso: 0.2 },
    { nome: 'Sabonete / gel de banho (100ml)', peso: 0.12 },
    { nome: 'Desodorante', peso: 0.1 },
    { nome: 'Pasta de dente + escova', peso: 0.1 },
    { nome: 'Creme hidratante', peso: 0.15 },
    { nome: 'Protetor solar FPS 50+', peso: 0.2 },
    { nome: 'Repelente de insetos', peso: 0.15 },
    { nome: 'Secador de cabelo', peso: 0.6 },
    { nome: 'Maquiagem (estojo)', peso: 0.5 },
    { nome: 'Remédios (kit completo)', peso: 0.4 },
    { nome: 'Antialérgico / anti-inflamatório', peso: 0.05 },
    { nome: 'Protetor labial', peso: 0.02 },
    { nome: 'Band-Aid / curativo p/ bolhas', peso: 0.05 },
    { nome: 'Álcool gel (100ml)', peso: 0.12 },
    { nome: 'Lenços umedecidos', peso: 0.1 },
    { nome: 'Cortador de unha / lixa', peso: 0.05 },
  ]},
  { group: 'Mochila (dia a dia)', items: [
    { nome: 'Mochila (vazia)', peso: 0.6 },
    { nome: 'Garrafa de água reutilizável', peso: 0.15 },
    { nome: 'Guarda-chuva dobrável', peso: 0.3 },
    { nome: 'Capa de chuva compacta', peso: 0.15 },
    { nome: 'Sacola eco-bag (compras)', peso: 0.05 },
    { nome: 'Pochete / shoulder bag', peso: 0.2 },
    { nome: 'Carteira / porta-passaporte', peso: 0.15 },
    { nome: 'Passaporte + cópias', peso: 0.1 },
    { nome: 'Yen em espécie', peso: 0.05 },
    { nome: 'JR Pass (impresso)', peso: 0.02 },
    { nome: 'Snacks de viagem', peso: 0.3 },
    { nome: 'Óculos de sol', peso: 0.05 },
    { nome: 'Caneta + bloco de notas', peso: 0.1 },
    { nome: 'Saco ziplock (líquidos avião)', peso: 0.02 },
  ]},
  { group: 'Compras Japão (ida)', items: [
    { nome: 'LEGO 75419 UCS (9.023 peças)', peso: 5.5 },
    { nome: 'Roupas UNIQLO (3 peças)', peso: 0.8 },
    { nome: 'Sony WH-1000XM6', peso: 0.3 },
    { nome: 'DJI Osmo Pocket 4', peso: 0.4 },
    { nome: 'SSD Sony 1TB', peso: 0.1 },
    { nome: 'Anker 737 Power Bank', peso: 0.35 },
  ]},
  { group: 'Compras Japão (souvenirs)', items: [
    { nome: 'Kit KitKat sabores JP (caixa)', peso: 0.5 },
    { nome: 'Doces / snacks combini', peso: 1.0 },
    { nome: 'Matcha em pó (lata)', peso: 0.3 },
    { nome: 'Sake / whisky japonês', peso: 1.2 },
    { nome: 'Mangas / artbooks', peso: 1.2 },
    { nome: 'Brinquedos / figuras (Gachapon etc.)', peso: 0.5 },
    { nome: 'Cerâmica / chopsticks artesanais', peso: 0.4 },
    { nome: 'Camisetas temáticas (anime/game)', peso: 0.5 },
    { nome: 'Souvenirs diversos (5kg estimado)', peso: 5.0 },
    { nome: 'Itens de papelaria japonesa', peso: 0.3 },
    { nome: 'Cosméticos japoneses', peso: 0.4 },
    { nome: 'Toalha / tenugui japonesa', peso: 0.1 },
  ]},
  { group: 'Viagem / Avião', items: [
    { nome: 'Almofada de pescoço', peso: 0.3 },
    { nome: 'Máscara de dormir', peso: 0.03 },
    { nome: 'Protetor auricular', peso: 0.01 },
    { nome: 'Livro / revista', peso: 0.4 },
    { nome: 'Meias de compressão', peso: 0.1 },
    { nome: 'Necessaire avião (mini)', peso: 0.3 },
    { nome: 'Organizador de mala (cubo)', peso: 0.15 },
    { nome: 'Saco de roupa suja', peso: 0.05 },
    { nome: 'Cadeado de mala TSA', peso: 0.1 },
    { nome: 'Etiqueta de bagagem', peso: 0.02 },
    { nome: 'Cinta de mala', peso: 0.1 },
  ]},
]

const COLORS = {
  Rodrigo: { bar: 'bg-blue-500', badge: 'bg-blue-100 text-blue-700', header: 'bg-blue-600' },
  Elaine: { bar: 'bg-pink-500', badge: 'bg-pink-100 text-pink-700', header: 'bg-pink-600' },
  Pedro: { bar: 'bg-green-500', badge: 'bg-green-100 text-green-700', header: 'bg-green-600' },
  Felipe: { bar: 'bg-purple-500', badge: 'bg-purple-100 text-purple-700', header: 'bg-purple-600' },
}

export default function Bagagem() {
  const { bagagemItens, addBagagemItem, removeBagagemItem, shoppingStatus } = useStore()
  const darkMode = useStore(s => s.darkMode)
  const [pessoa, setPessoa] = useState('Rodrigo')
  const [tipo, setTipo] = useState('despacho')
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ nome: '', peso: '', pessoa: 'Rodrigo', tipo: 'despacho' })
  const [showRef, setShowRef] = useState(false)
  const [refGroup, setRefGroup] = useState('Roupas')

  // JS-based dark mode classes (bypassa cache do Service Worker)
  const activeBagBtn = darkMode ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-white'
  const inactiveBagBtn = darkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-600'
  const addBtn = darkMode ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-white'
  const cardBg = darkMode ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-white border-gray-100 text-gray-900'
  const sub = darkMode ? 'text-slate-400' : 'text-gray-500'
  const sub2 = darkMode ? 'text-slate-500' : 'text-gray-400'

  const handleAdd = () => {
    if (!form.nome || !form.peso) return
    addBagagemItem({ ...form, peso: parseFloat(form.peso) })
    setForm(f => ({ ...f, nome: '', peso: '' }))
    setShowForm(false)
  }

  const getWeight = (p, t) => bagagemItens.filter(i => i.pessoa === p && i.tipo === t).reduce((s, i) => s + i.peso, 0)
  const getItems = (p, t) => bagagemItens.filter(i => i.pessoa === p && i.tipo === t)

  // Estimate weight from purchased shopping items (rough estimates)
  const shoppingWeight = SHOPPING_ITEMS
    .filter(i => ['comprado', 'despachado'].includes(shoppingStatus[i.id]))
    .reduce((s, i) => s + (i.pesoKg || 0.5), 0)

  const tipoObj = TIPOS.find(t => t.id === tipo)
  const usedKg = getWeight(pessoa, tipo)
  const limitKg = tipoObj.limit
  const pct = Math.min(100, (usedKg / limitKg) * 100)
  const c = COLORS[pessoa]

  return (
    <div className="flex flex-col h-screen">
      <div className="screen-header">
        <h1 className="text-lg font-bold text-gray-900 dark:text-slate-100">🧳 Controle de Bagagem</h1>
        <p className="text-xs text-gray-500 dark:text-slate-400">Qatar Airways · 30kg despacho + 7kg mão + mochila por pessoa</p>
      </div>

      {/* Summary row */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-700 px-4 py-2 overflow-x-auto">
        <div className="flex gap-3 md:justify-center">
          {PESSOAS.map(p => {
            const despacho = getWeight(p, 'despacho')
            const mao = getWeight(p, 'mao')
            const mochila = getWeight(p, 'mochila')
            const over = despacho > 30 || mao > 7 || mochila > 10
            return (
              <button key={p} onClick={() => setPessoa(p)}
                className={`flex-shrink-0 text-center px-3 py-2 rounded-xl transition-all ${pessoa === p ? COLORS[p].badge + ' ring-2 ring-current' : 'bg-gray-50 dark:bg-slate-800 text-gray-500 dark:text-slate-400'}`}>
                <div className="text-xs font-bold">{p}</div>
                <div className="text-[12px]">🧳{despacho.toFixed(1)} · 👜{mao.toFixed(1)} · 🎒{mochila.toFixed(1)}</div>
                {over && <div className="text-[9px] text-red-500 font-bold">⚠️ EXCEDE</div>}
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto safe-bottom px-4 py-4 md:px-8 md:py-6">
        <div className="md:max-w-5xl md:mx-auto space-y-4">

          {/* Person + type selector */}
          <div className="flex gap-2">
            {PESSOAS.map(p => (
              <button key={p} onClick={() => setPessoa(p)}
                className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${pessoa === p ? COLORS[p].header + ' text-white' : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300'}`}>
                {p}
              </button>
            ))}
          </div>

          {/* Bag type tabs */}
          <div className="flex gap-2">
            {TIPOS.map(t => (
              <button key={t.id} onClick={() => setTipo(t.id)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${tipo === t.id ? activeBagBtn : inactiveBagBtn}`}>
                {t.icon} {t.label} <span className="text-xs opacity-70">(max {t.limit}kg)</span>
              </button>
            ))}
          </div>

          {/* Weight gauge */}
          <div className={`rounded-2xl border p-4 ${cardBg}`}>
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className={`font-black text-2xl ${darkMode ? 'text-slate-100' : 'text-gray-900'}`}>{usedKg.toFixed(1)} <span className={`text-base font-normal ${sub2}`}>/ {limitKg}kg</span></div>
                <div className={`text-xs ${sub}`}>{tipoObj.icon} Bagagem {tipoObj.label} · {pessoa}</div>
              </div>
              <div className="text-right">
                <div className={`text-lg font-black ${usedKg > limitKg ? 'text-red-500' : 'text-green-500'}`}>
                  {usedKg > limitKg ? '⚠️ +'+(usedKg - limitKg).toFixed(1) : (limitKg - usedKg).toFixed(1)+' kg'}
                </div>
                <div className={`text-xs ${sub2}`}>{usedKg > limitKg ? 'acima do limite' : 'disponível'}</div>
              </div>
            </div>
            <div className={`h-3 rounded-full overflow-hidden ${darkMode ? 'bg-slate-700' : 'bg-gray-100'}`}>
              <div className={`h-full rounded-full transition-all ${pct >= 100 ? 'bg-red-500' : pct >= 85 ? 'bg-amber-400' : c.bar}`}
                style={{ width: `${pct}%` }} />
            </div>
            {tipo === 'despacho' && shoppingWeight > 0 && (
              <div className={`mt-2 text-xs ${sub2}`}>💡 Compras marcadas: ~{shoppingWeight.toFixed(1)}kg estimado</div>
            )}
          </div>

          {/* Add item button */}
          <button onClick={() => { setForm(f => ({ ...f, pessoa, tipo })); setShowForm(true) }}
            className={`w-full font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform text-sm ${addBtn}`}>
            <span className="text-lg">+</span> Adicionar item à bagagem
          </button>

          {/* Form */}
          {showForm && (
            <div className="card p-4 space-y-3">
              <div className="text-sm font-bold text-gray-700">Novo item</div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Item</label>
                <input type="text" placeholder="Ex: Tênis Nike · Cabo de força · Livros"
                  value={form.nome} onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gray-400" />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Peso (kg)</label>
                <input type="number" inputMode="decimal" step="0.1" placeholder="Ex: 1.5"
                  value={form.peso} onChange={e => setForm(f => ({ ...f, peso: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gray-400" />
              </div>
              <div className="flex gap-2">
                <button onClick={() => setShowForm(false)} className="flex-1 bg-gray-100 text-gray-600 font-semibold py-2.5 rounded-xl text-sm">Cancelar</button>
                <button onClick={handleAdd} className="flex-1 bg-gray-800 text-white font-semibold py-2.5 rounded-xl text-sm">Salvar</button>
              </div>
            </div>
          )}

          {/* Weight reference / quick-add */}
          <div className="card overflow-hidden">
            <button onClick={() => setShowRef(v => !v)}
              className="w-full flex items-center justify-between p-4 text-left">
              <div>
                <div className="font-semibold text-sm text-gray-900 dark:text-slate-100">⚖️ Referência de pesos</div>
                <div className="text-xs text-gray-400 dark:text-slate-500 mt-0.5">Toque em qualquer item para adicionar à bagagem de {pessoa}</div>
              </div>
              <span className="text-gray-400 text-lg ml-2">{showRef ? '↑' : '↓'}</span>
            </button>

            {showRef && (
              <div className="border-t border-gray-50">
                {/* Group tabs */}
                <div className="flex gap-1 overflow-x-auto px-3 py-2">
                  {PESO_REFERENCIA.map(g => (
                    <button key={g.group} onClick={() => setRefGroup(g.group)}
                      className={`text-[12px] px-2.5 py-1 rounded-full whitespace-nowrap font-medium flex-shrink-0 transition-all ${refGroup === g.group ? activeBagBtn : inactiveBagBtn}`}>
                      {g.group}
                    </button>
                  ))}
                </div>
                {/* Items */}
                <div className="px-3 pb-3 space-y-1">
                  {PESO_REFERENCIA.find(g => g.group === refGroup)?.items.map(ref => (
                    <button key={ref.nome}
                      onClick={() => addBagagemItem({ nome: ref.nome, peso: ref.peso, pessoa, tipo })}
                      className="w-full flex items-center justify-between py-2 px-3 rounded-xl bg-gray-50 dark:bg-slate-800 active:bg-gray-100 dark:active:bg-slate-700 transition-all text-left">
                      <div className="text-sm text-gray-800 dark:text-slate-200">{ref.nome}</div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs text-gray-400 dark:text-slate-500">~{ref.peso}kg</span>
                        <span className="w-6 h-6 rounded-full bg-gray-800 dark:bg-indigo-600 text-white dark:text-white flex items-center justify-center text-base font-bold leading-none">+</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Items list */}
          {getItems(pessoa, tipo).length > 0 && (
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Itens adicionados</div>
              <div className="space-y-1.5">
                {getItems(pessoa, tipo).map(item => (
                  <div key={item.id} className="card p-3 flex items-center gap-3">
                    <div className="flex-1 text-sm text-gray-800 dark:text-slate-200">{item.nome}</div>
                    <div className="font-bold text-sm text-gray-900 dark:text-slate-100">{item.peso}kg</div>
                    <button onClick={() => removeBagagemItem(item.id)} className="text-gray-300 dark:text-slate-600 hover:text-red-400 text-xl">×</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Qatar tip */}
          <div className="card p-4 bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-800">
            <div className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-2">✈️ Qatar Airways — Regras de Bagagem</div>
            <div className="space-y-1.5 text-xs text-blue-700 dark:text-blue-400">
              <div>• <strong>Despacho:</strong> 30kg por pessoa · 4 pessoas = 120kg total</div>
              <div>• <strong>Mão:</strong> 1 peça até 7kg (mala de cabine)</div>
              <div>• <strong>Mochila:</strong> 1 item pessoal (mochila/bolsa) — vai sob o assento da frente</div>
              <div>• <strong>Power banks:</strong> SOMENTE na mão ou mochila — proibido no despacho</div>
              <div>• <strong>Líquidos mão:</strong> máx 100ml por frasco, em saco plástico transparente</div>
              <div>• <strong>Excesso:</strong> ~QAR 150 por kg acima do limite (~R$230/kg)</div>
              <div>• <strong>Dica:</strong> Use a mochila para eletrônicos, documentos e itens do dia</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
