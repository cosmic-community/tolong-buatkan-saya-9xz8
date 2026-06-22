import { getScenes } from '@/lib/cosmic'
import SceneCard from '@/components/SceneCard'

export const metadata = {
  title: 'Adegan — Komik Persahabatan',
}

export default async function ScenesPage() {
  const scenes = await getScenes()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Semua Adegan</h1>
        <p className="mt-2 text-gray-600">Telusuri setiap adegan dalam komik ini.</p>
      </div>
      {scenes.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scenes.map((scene) => (
            <SceneCard key={scene.id} scene={scene} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Belum ada adegan tersedia.</p>
      )}
    </div>
  )
}