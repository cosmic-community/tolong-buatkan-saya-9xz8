// app/characters/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCharacter, getMetafieldValue } from '@/lib/cosmic'

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const character = await getCharacter(slug)

  if (!character) {
    notFound()
  }

  const ilustrasi = character.metadata?.ilustrasi
  const nama = getMetafieldValue(character.metadata?.nama) || character.title
  const peran = getMetafieldValue(character.metadata?.peran)
  const kepribadian = getMetafieldValue(character.metadata?.kepribadian)
  const deskripsi = getMetafieldValue(character.metadata?.deskripsi)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link href="/characters" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
        ← Kembali ke Karakter
      </Link>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
          {ilustrasi ? (
            <img
              src={`${ilustrasi.imgix_url}?w=1000&h=1200&fit=crop&auto=format,compress`}
              alt={nama}
              width={500}
              height={600}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="aspect-[5/6] flex items-center justify-center text-7xl bg-gradient-to-br from-brand-100 to-accent-100">
              👤
            </div>
          )}
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">{nama}</h1>
          {peran && (
            <span className="inline-block mt-3 px-4 py-1.5 text-sm font-semibold rounded-full bg-brand-50 text-brand-700">
              {peran}
            </span>
          )}

          {kepribadian && (
            <div className="mt-6">
              <h2 className="text-lg font-bold text-gray-900 mb-2">Kepribadian</h2>
              <p className="text-gray-600 leading-relaxed">{kepribadian}</p>
            </div>
          )}

          {deskripsi && (
            <div className="mt-6">
              <h2 className="text-lg font-bold text-gray-900 mb-2">Deskripsi</h2>
              <p className="text-gray-600 leading-relaxed">{deskripsi}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}