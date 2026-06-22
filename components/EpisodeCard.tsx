import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'
import type { Episode } from '@/types'

interface EpisodeCardProps {
  episode: Episode
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  const cover = episode.metadata?.sampul
  const judul = getMetafieldValue(episode.metadata?.judul_episode) || episode.title
  const sinopsis = getMetafieldValue(episode.metadata?.sinopsis)
  const sceneCount = episode.metadata?.adegan?.length ?? 0

  return (
    <Link
      href={`/episodes/${episode.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className="aspect-video overflow-hidden bg-gray-100">
        {cover ? (
          <img
            src={`${cover.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={judul}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl gradient-hero text-white">
            📖
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
            {judul}
          </h3>
          <span className="shrink-0 px-2.5 py-1 text-xs font-semibold rounded-full bg-accent-50 text-accent-700">
            {sceneCount} adegan
          </span>
        </div>
        {sinopsis && (
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">{sinopsis}</p>
        )}
      </div>
    </Link>
  )
}