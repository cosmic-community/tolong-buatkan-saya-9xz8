import Link from 'next/link'
import { getEpisodes, getCharacters } from '@/lib/cosmic'
import EpisodeCard from '@/components/EpisodeCard'
import CharacterCard from '@/components/CharacterCard'

export default async function HomePage() {
  const [episodes, characters] = await Promise.all([
    getEpisodes(),
    getCharacters(),
  ])

  const featuredEpisodes = episodes.slice(0, 3)
  const featuredCharacters = characters.slice(0, 4)

  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <span className="text-6xl">📖</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight">
            Komik Persahabatan
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-white/90">
            Sebuah kisah hangat tentang persahabatan antara seorang cowok dan dua
            cewek. Ikuti petualangan mereka adegan demi adegan.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/episodes"
              className="px-6 py-3 rounded-full bg-white text-brand-700 font-semibold hover:bg-gray-100 transition-colors"
            >
              Mulai Baca
            </Link>
            <Link
              href="/characters"
              className="px-6 py-3 rounded-full bg-white/20 text-white font-semibold hover:bg-white/30 transition-colors border border-white/40"
            >
              Kenalan dengan Karakter
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Episodes */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Episode Terbaru</h2>
          <Link href="/episodes" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
            Lihat Semua →
          </Link>
        </div>
        {featuredEpisodes.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Belum ada episode.</p>
        )}
      </section>

      {/* Featured Characters */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Para Karakter</h2>
            <Link href="/characters" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
              Lihat Semua →
            </Link>
          </div>
          {featuredCharacters.length > 0 ? (
            <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
              {featuredCharacters.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Belum ada karakter.</p>
          )}
        </div>
      </section>
    </div>
  )
}