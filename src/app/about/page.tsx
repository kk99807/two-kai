import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Photo */}
      <div className="relative bg-gradient-to-br from-primary via-primary-focus to-secondary text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                Pastor Edward A. Robson
              </h1>
              <div className="text-xl lg:text-2xl mb-8 opacity-90">
                Celebrating 90 Years of Faith and Scholarship
              </div>
              <p className="text-lg lg:text-xl leading-relaxed opacity-80 max-w-2xl">
                A lifetime dedicated to understanding and sharing the beauty of God&apos;s Word, 
                particularly through the discovery of the 2-Kai patterns in the Book of Revelation.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/20 rounded-2xl blur-xl"></div>
                <Image 
                  src="/pastor-robson-portrait.jpg" 
                  alt="Pastor Edward A. Robson in his study" 
                  width={320}
                  height={400}
                  className="relative w-80 h-auto rounded-2xl shadow-2xl border-4 border-white/30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* 2-Kai Discovery Highlight */}
        <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">
              The 2-Kai Discovery
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Through decades of careful study of the Book of Revelation in its original Greek, 
                Pastor Robson discovered a remarkable pattern that appears throughout the text. This 
                pattern, which he termed the &ldquo;2-Kai Configuration,&rdquo; reveals the intricate and 
                deliberate structure of the book.
              </p>
              <p className="text-lg leading-relaxed">
                His groundbreaking research has shed new light on the literary structure of Revelation, 
                demonstrating how the careful use of the Greek word &ldquo;καί&rdquo; (kai) creates beautiful 
                symmetrical patterns that enhance our understanding of the text.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-serif font-bold text-primary mb-4">Key Contributions</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Identification of the 2-Kai pattern structure</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Analysis of the seven heptads in Revelation</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Documentation of pattern intervals and their significance</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Integration of literary and theological insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Life & Ministry Timeline */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-primary mb-3">Early Life & Ministry</h3>
            <p className="text-gray-600 leading-relaxed">
              Pastor Robson&apos;s journey of faith began early, leading to a lifetime of dedicated ministry 
              and biblical scholarship that would eventually unveil remarkable discoveries.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-secondary mb-3">Research & Discovery</h3>
            <p className="text-gray-600 leading-relaxed">
              Years of meticulous study in the original Greek text led to the groundbreaking discovery 
              of the 2-Kai patterns, revealing new depths in Revelation&apos;s structure.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-accent mb-3">Legacy & Impact</h3>
            <p className="text-gray-600 leading-relaxed">
              His work continues to influence scholars and students worldwide, opening new avenues 
              for understanding Scripture&apos;s divine inspiration and careful composition.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-base-200 to-base-300 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl text-primary/20 font-serif mb-4">&ldquo;</div>
            <blockquote className="text-xl lg:text-2xl font-serif text-primary leading-relaxed mb-6">
              The 2-Kai patterns reveal the remarkable precision with which the Book of 
              Revelation was composed, showing us yet another aspect of its divine inspiration.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-0.5 bg-primary"></div>
              <cite className="text-lg font-medium text-primary">Pastor Edward A. Robson</cite>
              <div className="w-12 h-0.5 bg-primary"></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary text-white rounded-3xl p-8 lg:p-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Join the Celebration</h2>
          <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            As we celebrate Pastor Robson&apos;s 90th birthday, we invite you to explore the beauty 
            of the 2-Kai patterns through this website and to leave your own birthday message 
            or memory.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Leave a Message
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}