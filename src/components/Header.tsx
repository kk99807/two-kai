import Link from 'next/link'

export default function Header() {
  return (
    <header className="navbar bg-gradient-to-r from-[#f8f4e9]/70 to-[#f5f1e6]/70 shadow-sm border-b border-[#e6e0d3] mb-8">
      <div className="navbar-start">
        <div className="dropdown bg-parchment">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-parchment rounded-box w-52 border border-[#e6e0d3]">
            <li><Link href="/patterns" className="text-gray-700 hover:bg-primary/90 hover:text-primary font-medium">Patterns</Link></li>
            <li><Link href="/scripture" className="text-gray-700 hover:bg-primary/90 hover:text-primary font-medium">Scripture</Link></li>
            <li><Link href="/about" className="text-gray-700 hover:bg-primary/90 hover:text-primary font-medium">About</Link></li>
            <li><Link href="/contact" className="text-gray-700 hover:bg-primary/90 hover:text-primary font-medium">Contact</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-serif">Two Kai</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/patterns" className="hover:bg-black/5 rounded-lg">Patterns</Link></li>
          <li><Link href="/scripture" className="hover:bg-black/5 rounded-lg">Scripture</Link></li>
          <li><Link href="/about" className="hover:bg-black/5 rounded-lg">About</Link></li>
          <li><Link href="/contact" className="hover:bg-black/5 rounded-lg">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/contact" className="btn btn-primary shadow-md">Leave a Birthday Note</Link>
      </div>
    </header>
  )
}