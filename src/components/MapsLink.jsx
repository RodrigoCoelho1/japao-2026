import { MapPin } from 'lucide-react'

/**
 * Deep-link reutilizável para Google Maps.
 * - Se houver lat/lng, abre o pino exato.
 * - Caso contrário, faz busca por nome (e endereço, se fornecido).
 * - No celular, o link abre direto no app nativo de Maps (com transit).
 *
 * Props:
 *  - name (string, obrigatório): nome do ponto
 *  - lat (number, opcional)
 *  - lng (number, opcional)
 *  - address (string, opcional)
 *  - className (string, opcional): classes Tailwind extras
 *  - label (string, opcional): texto exibido ao lado do ícone (default: "Maps")
 */
export default function MapsLink({ name, lat, lng, address, className = '', label = 'Maps' }) {
  const hasCoords = typeof lat === 'number' && typeof lng === 'number'
  const url = hasCoords
    ? `https://maps.google.com/?q=${lat},${lng}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${name}${address ? ' ' + address : ''}`
      )}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      title="Abrir no Google Maps"
      aria-label={`Abrir ${name} no Google Maps`}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold hover:bg-blue-100 active:scale-95 transition-all border border-blue-100 ${className}`}
    >
      <MapPin className="w-3.5 h-3.5" />
      <span>{label}</span>
    </a>
  )
}
