import { getEpisodes } from '@/lib/cosmic'
import EpisodeCard from '@/components/EpisodeCard'

export const metadata = {
  title: 'Episode — Komik Persahabatan',
}

export default async function EpisodesPage() {
  const episodes = await getEpisodes()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Semua Episode</h1>
        <p className="mt-2 text-gray-600">Jelajahi seluruh episode komik persahabatan.</p>
      </div>
      {episodes.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Belum ada episode tersedia.</p>
      )}
    </div>
  )
}