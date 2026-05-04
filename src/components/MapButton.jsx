import { useState } from 'react'

export default function MapButton({ place, className = '' }) {
  const [show, setShow] = useState(false)

  const open = (mode) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place)}&travelmode=${mode}`
    window.open(url, '_blank')
    setShow(false)
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={(e) => { e.stopPropagation(); setShow(s => !s) }}
        className="w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-base hover:bg-blue-200 active:scale-95 transition-all flex-shrink-0"
        title={place}
      >
        🗺️
      </button>

      {show && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setShow(false)} />
          <div className="absolute right-0 top-9 z-50 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 w-52">
            <div className="text-[11px] text-gray-400 mb-2 leading-tight truncate font-medium">📍 {place}</div>
            <div className="space-y-1.5">
              <button
                onClick={() => open('walking')}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl bg-green-50 text-green-700 text-sm font-semibold hover:bg-green-100 active:scale-95 transition-all"
              >
                <span>🚶</span> Andando
              </button>
              <button
                onClick={() => open('transit')}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl bg-blue-50 text-blue-700 text-sm font-semibold hover:bg-blue-100 active:scale-95 transition-all"
              >
                <span>🚇</span> Metrô / Trem
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
