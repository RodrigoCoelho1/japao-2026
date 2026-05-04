import { useEffect, useState } from 'react'
import { ITINERARY } from '../data'

const CITY_COORDS = {
  'Tóquio': { lat: 35.6762, lon: 139.6503 },
  'Tokyo': { lat: 35.6762, lon: 139.6503 },
  'Hakone': { lat: 35.2323, lon: 139.1069 },
  'Kyoto': { lat: 35.0116, lon: 135.7681 },
  'Osaka': { lat: 34.6937, lon: 135.5023 },
}

const WMO = {
  0: { desc: 'Céu limpo', icon: '☀️' },
  1: { desc: 'Principalmente limpo', icon: '🌤️' },
  2: { desc: 'Parcialmente nublado', icon: '⛅' },
  3: { desc: 'Encoberto', icon: '☁️' },
  45: { desc: 'Névoa', icon: '🌫️' },
  48: { desc: 'Névoa com gelo', icon: '🌫️' },
  51: { desc: 'Chuvisco leve', icon: '🌦️' },
  53: { desc: 'Chuvisco', icon: '🌦️' },
  55: { desc: 'Chuvisco intenso', icon: '🌧️' },
  61: { desc: 'Chuva leve', icon: '🌧️' },
  63: { desc: 'Chuva moderada', icon: '🌧️' },
  65: { desc: 'Chuva forte', icon: '🌧️' },
  71: { desc: 'Neve leve', icon: '🌨️' },
  80: { desc: 'Pancadas de chuva', icon: '🌦️' },
  81: { desc: 'Pancadas moderadas', icon: '🌧️' },
  95: { desc: 'Tempestade', icon: '⛈️' },
  99: { desc: 'Tempestade com granizo', icon: '⛈️' },
}

function getWmo(code) {
  return WMO[code] || { desc: 'Variável', icon: '🌡️' }
}

// Get unique cities in trip order
const TRIP_CITIES = []
const seen = new Set()
ITINERARY.forEach(day => {
  const city = Object.keys(CITY_COORDS).find(c => day.city.includes(c))
  if (city && !seen.has(city)) { seen.add(city); TRIP_CITIES.push(city) }
})

export default function Clima() {
  const [selectedCity, setSelectedCity] = useState(TRIP_CITIES[0] || 'Tóquio')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const coords = CITY_COORDS[selectedCity]
    if (!coords) return
    setLoading(true)
    setError(null)
    setWeather(null)
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode,precipitation_probability_max&timezone=Asia%2FTokyo&forecast_days=7`)
      .then(r => r.json())
      .then(data => { setWeather(data.daily); setLoading(false) })
      .catch(() => { setError('Sem conexão — tente novamente'); setLoading(false) })
  }, [selectedCity])

  const days = weather ? weather.time.map((date, i) => ({
    date,
    max: Math.round(weather.temperature_2m_max[i]),
    min: Math.round(weather.temperature_2m_min[i]),
    rain: Math.round(weather.precipitation_sum[i] * 10) / 10,
    rainProb: weather.precipitation_probability_max[i],
    code: weather.weathercode[i],
  })) : []

  const formatDate = (dateStr) => {
    const d = new Date(dateStr + 'T00:00:00')
    return d.toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' })
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="screen-header">
        <h1 className="text-lg font-bold text-gray-900 dark:text-slate-100">🌦️ Clima no Japão</h1>
        <p className="text-xs text-gray-500 dark:text-slate-400">Previsão 7 dias · Open-Meteo · dados em tempo real</p>
      </div>

      {/* City selector */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-700 px-4 py-2 flex gap-2 overflow-x-auto">
        {TRIP_CITIES.map(city => (
          <button key={city} onClick={() => setSelectedCity(city)}
            className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap font-medium flex-shrink-0 transition-all ${selectedCity === city ? 'bg-red-600 text-white' : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300'}`}>
            {city}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto safe-bottom px-4 py-4 md:px-8 md:py-6">
        <div className="md:max-w-5xl md:mx-auto space-y-3">

          {loading && (
            <div className="card p-10 text-center text-gray-400">
              <div className="text-3xl mb-2 animate-pulse">🌡️</div>
              <div className="text-sm">Carregando previsão...</div>
            </div>
          )}

          {error && (
            <div className="card p-6 text-center">
              <div className="text-3xl mb-2">📡</div>
              <div className="text-sm text-gray-600">{error}</div>
              <button onClick={() => setSelectedCity(s => s)} className="mt-3 text-xs bg-red-600 text-white px-4 py-2 rounded-xl">Tentar novamente</button>
            </div>
          )}

          {days.length > 0 && (
            <>
              {/* Today highlight */}
              <div className="card overflow-hidden">
                <div className="bg-red-600 text-white px-4 py-4">
                  <div className="text-xs opacity-80 mb-1">{formatDate(days[0].date)} · {selectedCity}</div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-5xl font-black">{days[0].max}°</div>
                      <div className="text-red-200 text-sm">{getWmo(days[0].code).desc}</div>
                      <div className="text-red-200 text-xs mt-1">Mín {days[0].min}° · Chuva {days[0].rainProb}%</div>
                    </div>
                    <div className="text-7xl">{getWmo(days[0].code).icon}</div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-red-50 dark:bg-red-950">
                  {days[0].rainProb > 60 && <div className="text-xs text-red-700 dark:text-red-300 font-medium">☂️ Alta chance de chuva — leve guarda-chuva!</div>}
                  {days[0].max > 33 && <div className="text-xs text-orange-700 dark:text-orange-300 font-medium">🥵 Calor intenso — hidrate-se bastante e use protetor solar</div>}
                  {days[0].max <= 33 && days[0].rainProb <= 40 && <div className="text-xs text-green-700 dark:text-green-300 font-medium">✅ Dia favorável para passeios ao ar livre</div>}
                </div>
              </div>

              {/* 6-day forecast */}
              <div className="card p-4">
                <div className="text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wide mb-3">Próximos 6 dias</div>
                <div className="space-y-2 md:grid md:grid-cols-2 md:gap-2 md:space-y-0">
                  {days.slice(1).map((day, i) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-50 dark:border-slate-700 last:border-0 md:border-0 md:bg-gray-50 dark:md:bg-slate-800 md:rounded-xl md:px-3">
                      <div className="text-2xl w-8 text-center flex-shrink-0">{getWmo(day.code).icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-gray-700 dark:text-slate-200 capitalize">{formatDate(day.date)}</div>
                        <div className="text-[12px] text-gray-400 dark:text-slate-500">{getWmo(day.code).desc}</div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-sm font-bold text-gray-900 dark:text-slate-100">{day.max}° <span className="text-gray-400 dark:text-slate-500 font-normal">{day.min}°</span></div>
                        {day.rainProb > 30 && <div className="text-[12px] text-blue-500 dark:text-blue-300">💧 {day.rainProb}%</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* July in Japan tip */}
              <div className="card p-4 bg-amber-50 dark:bg-amber-950 border border-amber-100 dark:border-amber-800">
                <div className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-2">🌸 Julho no Japão</div>
                <div className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">Verão quente e úmido. Temperaturas entre 28°C e 36°C em Tóquio e Osaka. Kyoto costuma ser ainda mais quente. Chuvas são comuns à tarde (tsuyu). Leve roupas leves, protetor solar e guarda-chuva compacto.</div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  )
}
