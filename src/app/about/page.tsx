export default function AboutPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-center mb-12">About Pastor Edward A. Robson</h1>

        {/* Hero Section */}
        <div className="card bg-primary text-primary-content mb-12">
          <div className="card-body text-center">
            <h2 className="text-2xl font-serif mb-4">Celebrating 90 Years of Faith and Scholarship</h2>
            <p className="text-lg">
              A lifetime dedicated to understanding and sharing the beauty of God&apos;s Word,
              particularly through the discovery of the Two-Kai patterns in the Book of Revelation.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose mx-auto">
          <h2 className="font-serif">Early Life and Ministry</h2>
          <p>
            [This section will be populated with biographical information about Pastor Robson&apos;s
            early life, education, and call to ministry.]
          </p>

          <h2 className="font-serif">Discovery of the Two-Kai Patterns</h2>
          <p>
            Through decades of careful study of the Book of Revelation in its original Greek,
            Pastor Robson discovered a remarkable pattern that appears throughout the text. This
            pattern, which he termed the &ldquo;Two-Kai Configuration,&rdquo; reveals the intricate and
            deliberate structure of the book.
          </p>

          <h2 className="font-serif">Research and Publications</h2>
          <p>
            Pastor Robson&apos;s groundbreaking research has shed new light on the literary structure
            of Revelation. His work demonstrates how the careful use of the Greek word &ldquo;καί&rdquo; (kai)
            creates beautiful symmetrical patterns that enhance our understanding of the text.
          </p>

          <div className="bg-base-200 p-6 rounded-lg my-8">
            <h3 className="font-serif">Key Contributions</h3>
            <ul>
              <li>Identification of the Two-Kai pattern structure</li>
              <li>Analysis of the seven heptads in Revelation</li>
              <li>Documentation of pattern intervals and their significance</li>
              <li>Integration of literary and theological insights</li>
            </ul>
          </div>

          <h2 className="font-serif">Legacy and Impact</h2>
          <p>
            Pastor Robson&apos;s work has opened new avenues for understanding the Book of Revelation,
            demonstrating its careful composition and divine inspiration. His research continues
            to influence scholars and students of Scripture, offering fresh insights into this
            remarkable book.
          </p>

          <div className="card bg-base-100 shadow-xl my-8">
            <div className="card-body">
              <blockquote className="text-lg italic">
                &ldquo;The Two-Kai patterns reveal the remarkable precision with which the Book of
                Revelation was composed, showing us yet another aspect of its divine inspiration.&rdquo;
              </blockquote>
              <p className="text-right">- Pastor Edward A. Robson</p>
            </div>
          </div>

          <h2 className="font-serif">Join the Celebration</h2>
          <p>
            As we celebrate Pastor Robson&apos;s 90th birthday, we invite you to explore the beauty
            of the Two-Kai patterns through this website and to leave your own birthday message
            or memory on our <a href="/contact" className="link link-primary">message wall</a>.
          </p>
        </div>
      </div>
    </div>
  );
} 