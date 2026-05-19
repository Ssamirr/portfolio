import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#home" className="text-[#111] font-black text-xl tracking-tight">
          SS<span className="text-[#ff3c00]">.</span>
        </a>

        <ul className="hidden md:flex gap-10">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-[#555] hover:text-[#111] text-sm font-semibold transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>


        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-[#111] transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-[#111] transition-all ${open ? 'opacity-0 w-0' : 'w-4'}`} />
            <span className={`block w-6 h-0.5 bg-[#111] transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="block text-[#333] hover:text-[#ff3c00] font-semibold text-base" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
