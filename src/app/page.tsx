export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-primary-focus to-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-8 leading-tight">
              The Beauty of the Book of Revelation
            </h1>
            <p className="text-xl lg:text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
              Celebrating Pastor Edward A. Robson&apos;s 90th birthday and his groundbreaking research 
              into the 2-Kai patterns in the Book of Revelation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/patterns" className="btn btn-secondary btn-lg text-lg px-8">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Explore Patterns
              </a>
              <a href="/about" className="btn btn-outline btn-lg text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                About Pastor Robson
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Discovering the 2-Kai Pattern
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
              Through decades of careful study, Pastor Edward A. Robson uncovered a remarkable pattern 
              in the Book of Revelation - the 2-Kai Configuration. This divine structure appears 
              throughout the text, revealing the intricate beauty of God&apos;s Word.
            </p>
            <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
              The 2-Kai pattern consists of carefully balanced phrases connected by the Greek word 
              &ldquo;kai&rdquo; (meaning &ldquo;and&rdquo;), forming beautiful symmetrical structures that enhance our 
              understanding of the text.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
            <div className="text-center">
              <div className="text-6xl font-serif text-primary mb-4">καί</div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">The Greek Word &ldquo;Kai&rdquo;</h3>
              <p className="text-gray-600 leading-relaxed">
                The simple word &ldquo;and&rdquo; in Greek reveals profound structural patterns when examined 
                carefully throughout Revelation&apos;s intricate composition.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Interactive Pattern Viewer</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Explore the 2-Kai patterns with our interactive viewer, showing both Greek and English texts side by side.
            </p>
            <a href="/patterns" className="inline-flex items-center text-primary font-semibold hover:text-primary-focus transition-colors group-hover:translate-x-1">
              View Patterns 
              <svg className="w-4 h-4 ml-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group">
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-secondary mb-4">Scripture Search</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Search through the Book of Revelation and discover the 2-Kai patterns in context.
            </p>
            <a href="/scripture" className="inline-flex items-center text-secondary font-semibold hover:text-secondary-focus transition-colors group-hover:translate-x-1">
              Search Scripture 
              <svg className="w-4 h-4 ml-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-accent mb-4">Leave a Birthday Note</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Share your birthday wishes and thoughts with Pastor Robson as we celebrate his 90th birthday.
            </p>
            <a href="/contact" className="inline-flex items-center text-accent font-semibold hover:text-accent-focus transition-colors group-hover:translate-x-1">
              Write Note 
              <svg className="w-4 h-4 ml-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Join the Celebration
            </h2>
            <p className="text-lg lg:text-xl mb-8 opacity-90 leading-relaxed">
              Be part of Pastor Robson&apos;s 90th birthday celebration by exploring his remarkable 
              discoveries and sharing your own birthday wishes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/about" className="btn btn-white text-primary btn-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Learn His Story
              </a>
              <a href="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary btn-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Leave a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}