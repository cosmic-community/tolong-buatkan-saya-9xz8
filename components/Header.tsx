import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">📖</span>
            <span className="text-lg font-extrabold bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text text-transparent">
              Komik Persahabatan
            </span>
          </Link>
          <nav className="flex items-center gap-1 sm:gap-4">
            <Link
              href="/episodes"
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors"
            >
              Episode
            </Link>
            <Link
              href="/scenes"
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors"
            >
              Adegan
            </Link>
            <Link
              href="/characters"
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors"
            >
              Karakter
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}