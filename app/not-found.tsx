import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <span className="text-6xl">🔍</span>
      <h1 className="mt-6 text-3xl font-extrabold text-gray-900">Halaman Tidak Ditemukan</h1>
      <p className="mt-3 text-gray-600">
        Maaf, halaman yang kamu cari tidak ada.
      </p>
      <Link
        href="/"
        className="inline-block mt-8 px-6 py-3 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </div>
  )
}