const tabs = [
  { id: 'home', label: 'Início', emoji: '🏠' },
  { id: 'cronograma', label: 'Roteiro', emoji: '📅' },
  { id: 'compras', label: 'Compras', emoji: '🛍️' },
  { id: 'financeiro', label: 'Finanças', emoji: '💰' },
  { id: 'menu', label: 'Menu', emoji: '☰' },
]

export default function BottomNav({ screen, navigate }) {
  const activeMain = ['home', 'cronograma', 'compras', 'financeiro', 'menu'].includes(screen)
    ? screen : 'menu'

  return (
    <nav className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 flex fixed bottom-0 left-0 right-0 z-50"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      {tabs.map(tab => {
        const active = activeMain === tab.id
        return (
          <button key={tab.id} onClick={() => navigate(tab.id)}
            className={`flex-1 flex flex-col items-center py-2 gap-0.5 transition-colors ${active ? 'text-red-600 dark:text-red-400' : 'text-gray-400 dark:text-slate-500'}`}>
            <span className="text-xl leading-none">{tab.emoji}</span>
            <span className={`text-[12px] font-medium ${active ? 'text-red-600 dark:text-red-400' : 'text-gray-400 dark:text-slate-500'}`}>{tab.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
