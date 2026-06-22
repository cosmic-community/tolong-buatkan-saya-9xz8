// app/scenes/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getScene, getMetafieldValue } from '@/lib/cosmic'
import type { Character } from '@/types'

export default async function ScenePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const scene = await getScene(slug)

  if (!scene) {
    notFound()
  }

  const image = scene.metadata?.gambar_referensi
  const judul = getMetafieldValue(scene.metadata?.judul_adegan) || scene.title
  const latar = getMetafieldValue(scene.metadata?.latar)
  const naskah = getMetafieldValue(scene.metadata?.naskah)
  const deskripsiVisual = getMetafieldValue(scene.metadata?.deskripsi_visual)
  const nomor = scene.metadata?.nomor_urut
  const karakter = (scene.metadata?.karakter ?? []) as Character[]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link href="/scenes" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
        ← Kembali ke Adegan
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {typeof nomor === 'number' && (
          <span className="px-3 py-1 text-sm font-bold rounded-full bg-brand-50 text-brand-700">
            Adegan {nomor}
          </span>
        )}
        {latar && (
          <span className="text-sm text-gray-500">📍 {latar}</span>
        )}
      </div>

      <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">{judul}</h1>

      {image && (
        <div className="mt-6 rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
          <img
            src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={judul}
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {deskripsiVisual && (
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Deskripsi Visual</h2>
          <p className="text-gray-600 leading-relaxed">{deskripsiVisual}</p>
        </div>
      )}

      {naskah && (
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Naskah</h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
              {naskah}
            </pre>
          </div>
        </div>
      )}

      {karakter.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Karakter dalam Adegan</h2>
          <div className="flex flex-wrap gap-4">
            {karakter.map((char) => {
              const nama = getMetafieldValue(char.metadata?.nama) || char.title
              const ilustrasi = char.metadata?.ilustrasi
              return (
                <Link
                  key={char.id}
                  href={`/characters/${char.slug}`}
                  className="flex items-center gap-3 bg-white rounded-full pr-4 pl-1 py-1 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center text-lg">
                    {ilustrasi ? (
                      <img
                        src={`${ilustrasi.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                        alt={nama}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      '👤'
                    )}
                  </span>
                  <span className="text-sm font-medium text-gray-900">{nama}</span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}