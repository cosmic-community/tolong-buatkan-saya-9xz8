import { getCharacters } from '@/lib/cosmic'
import CharacterCard from '@/components/CharacterCard'

export const metadata = {
  title: 'Karakter — Komik Persahabatan',
}

export default async function CharactersPage() {
  const characters = await getCharacters()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Para Karakter</h1>
        <p className="mt-2 text-gray-600">Kenali tokoh-tokoh dalam komik persahabatan ini.</p>
      </div>
      {characters.length > 0 ? (
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Belum ada karakter tersedia.</p>
      )}
    </div>
  )
}