import { useState, useEffect } from 'react'
import useStore from './store/useStore'
import BottomNav from './components/BottomNav'
import Sidebar from './components/Sidebar'
import Home from './screens/Home'
import Cronograma from './screens/Cronograma'
import Compras from './screens/Compras'
import Financeiro from './screens/Financeiro'
import Menu from './screens/Menu'
import Mapa from './screens/Mapa'
import Aniversario from './screens/Aniversario'
import Voos from './screens/Voos'
import Informacoes from './screens/Informacoes'
import Checklist from './screens/Checklist'
import Mesada from './screens/Mesada'
import Presentes from './screens/Presentes'
import Clima from './screens/Clima'
import Bagagem from './screens/Bagagem'
import Comidas from './screens/Comidas'
import Memorias from './screens/Memorias'
import Videos from './screens/Videos'
import DisneySea from './screens/DisneySea'
import Disneyland from './screens/Disneyland'
import USJ from './screens/USJ'

const SCREENS = {
  home: Home,
  cronograma: Cronograma,
  compras: Compras,
  financeiro: Financeiro,
  menu: Menu,
  mapa: Mapa,
  aniversario: Aniversario,
  voos: Voos,
  informacoes: Informacoes,
  checklist: Checklist,
  mesada: Mesada,
  presentes: Presentes,
  clima: Clima,
  bagagem: Bagagem,
  comidas: Comidas,
  memorias: Memorias,
  videos: Videos,
  disneysea: DisneySea,
  disneyland: Disneyland,
  usj: USJ,
}

export default function App() {
  const [screen, setScreen] = useState('home')
  const [history, setHistory] = useState([])
  const darkMode = useStore(s => s.darkMode)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const navigate = (to) => {
    setHistory(h => [...h, screen])
    setScreen(to)
  }

  const goBack = () => {
    const prev = history[history.length - 1] ?? 'home'
    setHistory(h => h.slice(0, -1))
    setScreen(prev)
  }

  const Screen = SCREENS[screen] ?? Home

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 flex">
      {/* Sidebar — desktop only */}
      <Sidebar screen={screen} navigate={navigate} />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 md:ml-56">
        <Screen navigate={navigate} goBack={goBack} screen={screen} />
        {/* Bottom padding so content doesn't go behind mobile nav */}
        <div className="md:hidden h-16" />
      </div>

      {/* Bottom nav — mobile only */}
      <BottomNav screen={screen} navigate={navigate} />
    </div>
  )
}
