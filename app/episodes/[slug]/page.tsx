// app/episodes/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getEpisode } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import SceneCard from '@/components/SceneCard'
import type { Scene } from '@/types'

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const episode = await getEpisode(slug)

  if (!episode) {
    notFound()
  }

  const cover = episode.metadata?.sampul
  const judul = getMetafieldValue(episode.metadata?.judul_episode) || episode.title
  const sinopsis = getMetafieldValue(episode.metadata?.sinopsis)
  const scenes = (episode.metadata?.adegan ?? []) as Scene[]

  const sortedScenes = [...scenes].sort((a, b) => {
    const orderA = a.metadata?.nomor_urut ?? 0
    const orderB = b.metadata?.nomor_urut ?? 0
    return orderA - orderB
  })

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        {cover ? (
          <div className="aspect-[21/9] w-full overflow-hidden bg-gray-200 max-h-[420px]">
            <img
              src={`${cover.imgix_url}?w=1600&h=686&fit=crop&auto=format,compress`}
              alt={judul}
              width={1600}
              height={686}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="aspect-[21/9] max-h-[420px] w-full gradient-hero" />
        )}
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link href="/episodes" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
          ← Kembali ke Episode
        </Link>
        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">{judul}</h1>
        {sinopsis && (
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">{sinopsis}</p>
        )}

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Adegan ({sortedScenes.length})
          </h2>
          {sortedScenes.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {sortedScenes.map((scene) => (
                <SceneCard key={scene.id} scene={scene} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Belum ada adegan untuk episode ini.</p>
          )}
        </div>
      </div>
    </div>
  )
}