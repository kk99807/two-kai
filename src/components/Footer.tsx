export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
      <div>
        <p className="font-serif text-lg">&ldquo;Blessed is the one who reads aloud the words of this prophecy…&rdquo;</p>
        <p className="italic">– Revelation 1:3</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="/about" className="link link-hover">About Pastor Robson</a>
          <a href="/patterns" className="link link-hover">Explore Patterns</a>
          <a href="/contact" className="link link-hover">Contact</a>
        </div>
      </div>
      <div>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </div>
    </footer>
  )
} 