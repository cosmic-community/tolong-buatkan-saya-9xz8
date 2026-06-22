export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-sm text-gray-500">
          📖 Komik Persahabatan — Sebuah kisah tentang persahabatan
        </p>
        <p className="text-xs text-gray-400 mt-2">
          &copy; {new Date().getFullYear()} Komik Persahabatan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}