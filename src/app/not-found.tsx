import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: 'linear-gradient(180deg, #200055 0%, #1a0045 100%)' }}
    >
      <div className="text-center">
        <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">404</p>
        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4">Page not found</h1>
        <p className="text-purple-200/60 text-lg mb-10">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-colors"
        >
          Go back home
        </Link>
      </div>
    </main>
  )
}
