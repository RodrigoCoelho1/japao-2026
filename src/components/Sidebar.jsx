const ALL_TABS = [
  { id: 'home',        label: 'Início',       emoji: '🏠', group: 'main' },
  { id: 'cronograma',  label: 'Roteiro',      emoji: '📅', group: 'main' },
  { id: 'compras',     label: 'Compras',      emoji: '🛍️', group: 'main' },
  { id: 'voos',        label: 'Voos',         emoji: '✈️', group: 'main' },
  { id: 'financeiro',  label: 'Finanças',     emoji: '💰', group: 'main' },
  { id: 'mesada',      label: 'Mesada',       emoji: '💴', group: 'familia' },
  { id: 'presentes',   label: 'Presentes',    emoji: '🎁', group: 'familia' },
  { id: 'bagagem',     label: 'Bagagem',      emoji: '🧳', group: 'familia' },
  { id: 'memorias',    label: 'Memórias',     emoji: '📔', group: 'familia' },
  { id: 'clima',       label: 'Clima',        emoji: '🌦️', group: 'guias' },
  { id: 'comidas',     label: 'Comidas',      emoji: '🍜', group: 'guias' },
  { id: 'mapa',        label: 'Mapa',         emoji: '🗺️', group: 'guias' },
  { id: 'informacoes', label: 'Informações',  emoji: '🌐', group: 'guias' },
  { id: 'checklist',   label: 'Checklist',    emoji: '✅', group: 'guias' },
  { id: 'videos',      label: 'Vídeos',       emoji: '🎬', group: 'guias' },
  { id: 'disneyland',  label: 'Disneyland',   emoji: '🏰', group: 'parques' },
  { id: 'disneysea',   label: 'DisneySea',    emoji: '🌊', group: 'parques' },
  { id: 'usj',         label: 'USJ',           emoji: '🎢', group: 'parques' },
  { id: 'aniversario', label: 'Aniversário',  emoji: '🎂', group: 'private' },
]

export default function Sidebar({ screen, navigate }) {
  const main = ALL_TABS.filter(t => t.group === 'main')
  const familia = ALL_TABS.filter(t => t.group === 'familia')
  const guias = ALL_TABS.filter(t => t.group === 'guias')
  const parques = ALL_TABS.filter(t => t.group === 'parques')
  const priv = ALL_TABS.filter(t => t.group === 'private')

  return (
    <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-56 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 z-40">
      {/* Logo */}
      <div className="px-4 py-5 border-b border-gray-100 dark:border-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-base">🗾</div>
          <div>
            <div className="font-black text-sm text-gray-900 dark:text-slate-100 leading-tight">Japão 2026</div>
            <div className="text-[12px] text-gray-400 dark:text-slate-500">Família Coelho</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2">
        <SidebarGroup label="Principal">
          {main.map(tab => <SidebarItem key={tab.id} tab={tab} active={screen === tab.id} onClick={() => navigate(tab.id)} />)}
        </SidebarGroup>
        <SidebarGroup label="Família">
          {familia.map(tab => <SidebarItem key={tab.id} tab={tab} active={screen === tab.id} onClick={() => navigate(tab.id)} />)}
        </SidebarGroup>
        <SidebarGroup label="Guias">
          {guias.map(tab => <SidebarItem key={tab.id} tab={tab} active={screen === tab.id} onClick={() => navigate(tab.id)} />)}
        </SidebarGroup>
        <SidebarGroup label="Parques">
          {parques.map(tab => <SidebarItem key={tab.id} tab={tab} active={screen === tab.id} onClick={() => navigate(tab.id)} />)}
        </SidebarGroup>
      </nav>

      {/* Private section — always visible, never scrolls out */}
      <div className="px-2 py-2 border-t border-gray-100 dark:border-slate-700">
        <div className="text-[12px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider px-2 mb-1">Privado 🔒</div>
        {priv.map(tab => <SidebarItem key={tab.id} tab={tab} active={screen === tab.id} onClick={() => navigate(tab.id)} />)}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-100 dark:border-slate-700">
        <div className="text-[12px] text-gray-400 dark:text-slate-500 leading-relaxed">
          27 jun – 15 jul 2026<br />
          Tóquio · Kyoto · Osaka
        </div>
      </div>
    </aside>
  )
}

function SidebarGroup({ label, children }) {
  return (
    <div className="mb-3">
      <div className="text-[12px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider px-2 mb-1">{label}</div>
      {children}
    </div>
  )
}

function SidebarItem({ tab, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-left transition-all text-sm font-medium ${
        active
          ? 'bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300'
          : 'text-gray-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-slate-200'
      }`}
    >
      <span className="text-base w-5 text-center">{tab.emoji}</span>
      <span>{tab.label}</span>
      {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-red-500" />}
    </button>
  )
}
