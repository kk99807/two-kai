export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-[70vh] bg-primary text-primary-content rounded-lg mb-16">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold font-serif mb-8">The Beauty of the Book of Revelation</h1>
            <p className="text-xl mb-8">
              Celebrating Pastor Edward A. Robson&apos;s 90th birthday and his groundbreaking research 
              into the 2-Kai patterns in the Book of Revelation.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/patterns" className="btn btn-secondary">Explore Patterns</a>
              <a href="/about" className="btn btn-outline">About Pastor Robson</a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="prose prose-lg mx-auto mb-16">
        <h2 className="text-3xl font-serif text-center mb-8">Discovering the 2-Kai Pattern</h2>
        <p>
          Through decades of careful study, Pastor Edward A. Robson uncovered a remarkable pattern 
          in the Book of Revelation - the 2-Kai Configuration. This divine structure appears 
          throughout the text, revealing the intricate beauty of God&apos;s Word.
        </p>
        <p>
          The 2-Kai pattern consists of carefully balanced phrases connected by the Greek word 
          &ldquo;kai&rdquo; (meaning &ldquo;and&rdquo;), forming beautiful symmetrical structures that enhance our 
          understanding of the text.
        </p>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title font-serif">Interactive Pattern Viewer</h3>
            <p>Explore the 2-Kai patterns with our interactive viewer, showing both Greek and English texts side by side.</p>
            <div className="card-actions justify-end">
              <a href="/patterns" className="btn btn-primary btn-sm">View Patterns</a>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title font-serif">Scripture Search</h3>
            <p>Search through the Book of Revelation and discover the 2-Kai patterns in context.</p>
            <div className="card-actions justify-end">
              <a href="/scripture" className="btn btn-primary btn-sm">Search Scripture</a>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title font-serif">Leave a Birthday Note</h3>
            <p>Share your birthday wishes and thoughts with Pastor Robson as we celebrate his 90th birthday.</p>
            <div className="card-actions justify-end">
              <a href="/contact" className="btn btn-primary btn-sm">Write Note</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 