import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'
import type { Scene } from '@/types'

interface SceneCardProps {
  scene: Scene
}

export default function SceneCard({ scene }: SceneCardProps) {
  const image = scene.metadata?.gambar_referensi
  const judul = getMetafieldValue(scene.metadata?.judul_adegan) || scene.title
  const latar = getMetafieldValue(scene.metadata?.latar)
  const nomor = scene.metadata?.nomor_urut

  return (
    <Link
      href={`/scenes/${scene.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className="aspect-video overflow-hidden bg-gray-100 relative">
        {image ? (
          <img
            src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={judul}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl bg-gradient-to-br from-accent-100 to-brand-100">
            🎬
          </div>
        )}
        {typeof nomor === 'number' && (
          <span className="absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full bg-white/90 text-gray-900 shadow">
            Adegan {nomor}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-2">
          {judul}
        </h3>
        {latar && (
          <p className="mt-1 text-sm text-gray-500">📍 {latar}</p>
        )}
      </div>
    </Link>
  )
}