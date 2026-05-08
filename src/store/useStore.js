import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { BUDGET_CATEGORIES, JR_PASS_ROUTES } from '../data'

const defaultBudgets = Object.fromEntries(
  BUDGET_CATEGORIES.map(c => [c.id, c.default])
)

const useStore = create(
  persist(
    (set, get) => ({
      // Shopping status per item
      shoppingStatus: {},
      setShoppingStatus: (id, status) =>
        set(s => ({ shoppingStatus: { ...s.shoppingStatus, [id]: status } })),

      // Activity checkboxes per day
      activitiesDone: {},
      toggleActivity: (dayIndex, actIndex) =>
        set(s => {
          const key = `${dayIndex}-${actIndex}`
          return { activitiesDone: { ...s.activitiesDone, [key]: !s.activitiesDone[key] } }
        }),

      // Financial
      exchangeRate: 0.033,
      setExchangeRate: (rate) => set({ exchangeRate: parseFloat(rate), exchangeRateManualOverride: true }),
      exchangeRateUpdatedAt: null,
      exchangeRateSource: 'default',
      exchangeRateManualOverride: false,
      setExchangeRateAuto: (rate, source = 'open.er-api.com') =>
        set({
          exchangeRate: parseFloat(rate),
          exchangeRateUpdatedAt: new Date().toISOString(),
          exchangeRateSource: source,
          exchangeRateManualOverride: false,
        }),
      budgets: defaultBudgets,
      setBudget: (cat, val) => set(s => ({ budgets: { ...s.budgets, [cat]: val } })),
      expenses: [],
      addExpense: (exp) =>
        set(s => ({ expenses: [{ ...exp, id: Date.now() }, ...s.expenses] })),
      removeExpense: (id) =>
        set(s => ({ expenses: s.expenses.filter(e => e.id !== id) })),

      // Customs limit (US$4.000 per person)
      customsTotal: 0,
      setCustomsTotal: (v) => set({ customsTotal: v }),

      // Checklist
      checklistDone: {},
      toggleChecklist: (id) =>
        set(s => ({ checklistDone: { ...s.checklistDone, [id]: !s.checklistDone[id] } })),

      // Birthday module
      birthdayUnlocked: false,
      birthdayAttempts: 0,
      unlockBirthday: () => set({ birthdayUnlocked: true, birthdayAttempts: 0 }),
      lockBirthday: () => set({ birthdayUnlocked: false }),
      failBirthdayAttempt: () => set(s => ({ birthdayAttempts: s.birthdayAttempts + 1 })),
      birthdayChecklist: {},
      toggleBirthdayTask: (id) =>
        set(s => ({
          birthdayChecklist: { ...s.birthdayChecklist, [id]: !s.birthdayChecklist[id] }
        })),

      // Mesada (kids allowance)
      mesadaDiaria: { pedro: 3000, felipe: 3000 },
      setMesadaDiaria: (child, amount) =>
        set(s => ({ mesadaDiaria: { ...s.mesadaDiaria, [child]: amount } })),
      mesadaExpenses: [],
      addMesadaExpense: (exp) =>
        set(s => ({ mesadaExpenses: [{ ...exp, id: Date.now() }, ...s.mesadaExpenses] })),
      removeMesadaExpense: (id) =>
        set(s => ({ mesadaExpenses: s.mesadaExpenses.filter(e => e.id !== id) })),

      // Presentes (gift list)
      presentes: [],
      addPresente: (item) =>
        set(s => ({ presentes: [{ ...item, id: Date.now() }, ...s.presentes] })),
      removePresente: (id) =>
        set(s => ({ presentes: s.presentes.filter(p => p.id !== id) })),
      togglePresenteComprado: (id) =>
        set(s => ({ presentes: s.presentes.map(p => p.id === id ? { ...p, comprado: !p.comprado } : p) })),

      // Bagagem (luggage tracker)
      bagagemItens: [],
      addBagagemItem: (item) =>
        set(s => ({ bagagemItens: [{ ...item, id: Date.now() }, ...s.bagagemItens] })),
      removeBagagemItem: (id) =>
        set(s => ({ bagagemItens: s.bagagemItens.filter(b => b.id !== id) })),

      // Memórias (trip diary)
      memorias: {},
      setMemoria: (dayIndex, data) =>
        set(s => ({ memorias: { ...s.memorias, [dayIndex]: data } })),

      // JR Pass tracker
      jrPassUsed: Object.fromEntries(JR_PASS_ROUTES.map((r, i) => [i, false])),
      toggleJrPass: (i) =>
        set(s => ({ jrPassUsed: { ...s.jrPassUsed, [i]: !s.jrPassUsed[i] } })),

      // Dark mode
      darkMode: false,
      toggleDarkMode: () => set(s => ({ darkMode: !s.darkMode })),
    }),
    {
      name: 'japao-2026',
      version: 1,
      migrate: (persistedState, version) => {
        // Estrutura de migração — vazia por enquanto.
        // Quando incrementar a versão, tratar transformações de schema aqui.
        return persistedState
      },
      partialize: (state) => {
        const { birthdayUnlocked, birthdayAttempts, ...rest } = state
        return rest
      },
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.birthdayUnlocked = false
          state.birthdayAttempts = 0
        }
      },
    }
  )
)

export default useStore
