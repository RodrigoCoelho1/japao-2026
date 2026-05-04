import useStore from '../store/useStore'

export default function Menu({ navigate }) {
  const { darkMode, toggleDarkMode } = useStore()
  const items = [
    { id: 'clima', emoji: '🌦️', title: 'Clima no Japão', sub: 'Previsão 7 dias · cidades do roteiro', color: 'bg-sky-50 dark:bg-sky-950 border-sky-100 dark:border-sky-800' },
    { id: 'comidas', emoji: '🍜', title: 'Guia de Comidas', sub: 'O que comer · combini · WiFi & Apps', color: 'bg-orange-50 dark:bg-orange-950 border-orange-100 dark:border-orange-800' },
    { id: 'presentes', emoji: '🎁', title: 'Lembrancinhas', sub: 'Presentes para amigos e parentes', color: 'bg-red-50 dark:bg-red-950 border-red-100 dark:border-red-800' },
    { id: 'bagagem', emoji: '🧳', title: 'Controle de Bagagem', sub: 'Peso por mala · limites Qatar Airways', color: 'bg-amber-50 dark:bg-amber-950 border-amber-100 dark:border-amber-800' },
    { id: 'memorias', emoji: '📔', title: 'Memórias da Viagem', sub: 'Diário · registre cada dia', color: 'bg-violet-50 dark:bg-violet-950 border-violet-100 dark:border-violet-800' },
    { id: 'mesada', emoji: '💴', title: 'Mesada dos Filhos', sub: 'Pedro e Felipe · orçamento diário', color: 'bg-yellow-50 dark:bg-yellow-950 border-yellow-100 dark:border-yellow-800' },
    { id: 'mapa', emoji: '🗺️', title: 'Mapa de Compras', sub: 'Roteiro Akihabara + Shinjuku', color: 'bg-green-50 dark:bg-green-950 border-green-100 dark:border-green-800' },
    { id: 'voos', emoji: '✈️', title: 'Voos e Traslados', sub: 'Qatar Airways · JR Pass tracker', color: 'bg-purple-50 dark:bg-purple-950 border-purple-100 dark:border-purple-800' },
    { id: 'informacoes', emoji: '🌐', title: 'Informações Úteis', sub: 'Tax-free · Frases · Emergência · Metrô', color: 'bg-teal-50 dark:bg-teal-950 border-teal-100 dark:border-teal-800' },
    { id: 'checklist', emoji: '✅', title: 'Checklist de Preparação', sub: 'Tarefas pré-viagem por prazo', color: 'bg-lime-50 dark:bg-lime-950 border-lime-100 dark:border-lime-800' },
    { id: 'videos', emoji: '🎬', title: 'Vídeos e Dicas', sub: 'YouTube · guias de viagem · canais BR e EN', color: 'bg-indigo-50 dark:bg-indigo-950 border-indigo-100 dark:border-indigo-800' },
    { id: 'disneyland', emoji: '🏰', title: 'Tokyo Disneyland', sub: 'Atrações exclusivas · Beauty & Beast · Pooh', color: 'bg-pink-50 dark:bg-pink-950 border-pink-100 dark:border-pink-800' },
    { id: 'disneysea', emoji: '🌊', title: 'Tokyo DisneySea', sub: 'O parque mais bonito do mundo · Fantasy Springs', color: 'bg-cyan-50 dark:bg-cyan-950 border-cyan-100 dark:border-cyan-800' },
    { id: 'usj', emoji: '🎢', title: 'Universal Studios Japan', sub: 'Osaka · 12/07 · Nintendo World · Harry Potter · Flying Dinosaur', color: 'bg-purple-50 dark:bg-purple-950 border-purple-100 dark:border-purple-800' },
    { id: 'aniversario', emoji: '🎂', title: 'Aniversário da Elaine', sub: '09/07 · Kyoto · Acesso com PIN 🔒', color: 'bg-rose-50 dark:bg-rose-950 border-rose-100 dark:border-rose-800' },
  ]

  return (
    <div className="flex flex-col h-screen">
      <div className="screen-header">
        <h1 className="text-lg font-bold text-gray-900 dark:text-slate-100">☰ Menu</h1>
        <p className="text-xs text-gray-500 dark:text-slate-400">Japão 2026 · Família Coelho</p>
      </div>

      <div className="flex-1 overflow-y-auto safe-bottom px-4 py-4 md:px-8 md:py-6">
        <div className="md:max-w-5xl md:mx-auto">
          <button onClick={toggleDarkMode} className="w-full flex items-center justify-between p-4 card mb-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">{darkMode ? '\u2600\uFE0F' : '\uD83C\uDF19'}</span>
              <div>
                <div className="text-sm font-semibold text-gray-900 dark:text-slate-100">Modo {darkMode ? 'Claro' : 'Escuro'}</div>
                <div className="text-xs text-gray-500 dark:text-slate-400">Toque para alternar</div>
              </div>
            </div>
            <div className={`w-12 h-6 rounded-full transition-all ${darkMode ? 'bg-blue-500' : 'bg-gray-300'} relative`}>
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${darkMode ? 'left-6' : 'left-0.5'}`} />
            </div>
          </button>
        </div>
        <div className="md:max-w-5xl md:mx-auto md:grid md:grid-cols-2 md:gap-3 space-y-2 md:space-y-0">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => navigate(item.id)}
            className={`${item.color} border w-full rounded-2xl p-4 flex items-center gap-4 text-left active:scale-[0.98] transition-transform`}
          >
            <div className="text-3xl">{item.emoji}</div>
            <div className="flex-1">
              <div className="font-bold text-gray-900 dark:text-slate-100 text-sm">{item.title}</div>
              <div className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">{item.sub}</div>
            </div>
            <span className="text-gray-400 dark:text-slate-500 text-xl">›</span>
          </button>
        ))}
        </div>

        <div className="md:max-w-5xl md:mx-auto space-y-2 mt-4">
        <div className="card p-4 mt-4">
          <div className="text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wide mb-3">Sobre o app</div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500 dark:text-slate-400">Versão</span>
              <span className="font-medium text-gray-700 dark:text-slate-300">1.0.0 · Japão 2026</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-500 dark:text-slate-400">Viagem</span>
              <span className="font-medium text-gray-700 dark:text-slate-300">27/06 – 16/07/2026</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-500 dark:text-slate-400">Destinos</span>
              <span className="font-medium text-gray-700 dark:text-slate-300">Tóquio · Hakone · Kyoto · Osaka</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-500 dark:text-slate-400">Dados offline</span>
              <span className="font-medium text-green-600 dark:text-green-400">✓ Disponível</span>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}
