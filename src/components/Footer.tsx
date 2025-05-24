export default function Footer() {
  return (
    <footer className="bg-primary text-primary-content">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Scripture Quote */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-lg font-semibold mb-3">Scripture</h3>
            <blockquote className="text-sm opacity-90 leading-relaxed">
              "Blessed is the one who reads aloud the words of this prophecy…"
            </blockquote>
            <cite className="text-xs opacity-75 italic block mt-2">– Revelation 1:3</cite>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h3 className="font-serif text-lg font-semibold mb-3">Explore</h3>
            <div className="space-y-2">
              <a href="/about" className="block link link-hover text-sm hover:text-white transition-colors">
                About Pastor Robson
              </a>
              <a href="/patterns" className="block link link-hover text-sm hover:text-white transition-colors">
                Explore Patterns
              </a>
              <a href="/scripture" className="block link link-hover text-sm hover:text-white transition-colors">
                Scripture Search
              </a>
            </div>
          </div>

          {/* Celebration Info */}
          <div className="text-center md:text-right">
            <h3 className="font-serif text-lg font-semibold mb-3">Celebration</h3>
            <p className="text-sm opacity-90 leading-relaxed mb-2">
              Join us in celebrating Pastor Robson's 90th birthday and his remarkable discoveries.
            </p>
            <a href="/contact" className="inline-flex items-center gap-1 text-sm link link-hover hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Leave a Message
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
            <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
            <p className="text-xs">
              Celebrating the Two-Kai patterns in Revelation
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}