import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'
import type { Character } from '@/types'

interface CharacterCardProps {
  character: Character
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const illustration = character.metadata?.ilustrasi
  const nama = getMetafieldValue(character.metadata?.nama) || character.title
  const peran = getMetafieldValue(character.metadata?.peran)

  return (
    <Link
      href={`/characters/${character.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className="aspect-[3/4] overflow-hidden bg-gray-100">
        {illustration ? (
          <img
            src={`${illustration.imgix_url}?w=600&h=800&fit=crop&auto=format,compress`}
            alt={nama}
            width={300}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl bg-gradient-to-br from-brand-100 to-accent-100">
            👤
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
          {nama}
        </h3>
        {peran && (
          <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full bg-brand-50 text-brand-700">
            {peran}
          </span>
        )}
      </div>
    </Link>
  )
}