import { useState, useEffect, useRef } from 'react'

// Card de frase com Text-to-Speech via Web Speech API
// Funciona offline em navegadores modernos. Lang ja-JP.
export default function FraseCard({ frase, emoji }) {
  const [tocando, setTocando] = useState(false)
  const utterRef = useRef(null)

  useEffect(() => {
    return () => {
      // cleanup ao desmontar
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  const falar = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      alert('Seu navegador não suporta síntese de voz.')
      return
    }
    // Cancela qualquer fala em andamento
    window.speechSynthesis.cancel()

    const u = new SpeechSynthesisUtterance(frase.jp)
    u.lang = 'ja-JP'
    u.rate = 0.9
    u.pitch = 1.0

    // Tenta selecionar uma voz japonesa quando disponível
    const vozes = window.speechSynthesis.getVoices()
    const vozJa = vozes.find(v => v.lang === 'ja-JP') || vozes.find(v => v.lang?.startsWith('ja'))
    if (vozJa) u.voice = vozJa

    u.onstart = () => setTocando(true)
    u.onend = () => setTocando(false)
    u.onerror = () => setTocando(false)

    utterRef.current = u
    window.speechSynthesis.speak(u)
  }

  return (
    <div className="card p-4 flex items-start gap-3">
      <div className="text-2xl flex-shrink-0">{emoji}</div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-gray-500 dark:text-slate-400 font-medium">{frase.pt}</div>
        <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-slate-100 mt-1 leading-snug break-words">
          {frase.jp}
        </div>
        <div className="text-sm italic text-gray-600 dark:text-slate-400 mt-0.5">{frase.romaji}</div>
      </div>
      <button
        onClick={falar}
        aria-label={`Ouvir pronúncia de "${frase.pt}" em japonês`}
        className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all active:scale-90 ${
          tocando
            ? 'bg-red-600 text-white animate-pulse'
            : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-200 hover:bg-red-50 dark:hover:bg-red-950'
        }`}
      >
        <span className="text-lg">{tocando ? '🔈' : '🔊'}</span>
      </button>
    </div>
  )
}
