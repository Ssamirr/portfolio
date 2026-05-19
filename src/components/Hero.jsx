import { useEffect, useState } from 'react'
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, MapPinIcon } from './Icons'

const roles = [
  'Frontend Developer',
  'React Specialist',
  'TypeScript Engineer',
  'UI/UX Builder',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sky-400 text-sm font-medium">Available for opportunities</span>
          </div>

          <div>
            <p className="text-slate-400 text-lg mb-2 font-mono">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">
              Samir{' '}
              <span className="gradient-text">Sardarli</span>
            </h1>
            <div className="text-2xl md:text-3xl font-semibold text-slate-300 h-10">
              <span className="text-sky-400">{displayed}</span>
              <span className="animate-pulse text-sky-400">|</span>
            </div>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
            Frontend Developer with <span className="text-sky-400 font-semibold">5+ years</span> of experience crafting
            high-performance web applications. Specialized in React, TypeScript, and modern UI development.
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPinIcon size={14} className="text-sky-400" /> Baku, Azerbaijan
            </span>
            <span className="flex items-center gap-1.5">
              <MailIcon size={14} className="text-sky-400" /> ssardarlisamir@gmail.com
            </span>
            <span className="flex items-center gap-1.5">
              <PhoneIcon size={14} className="text-sky-400" /> +994 50 490 89 65
            </span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/25"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="border border-sky-500/50 hover:border-sky-400 text-sky-400 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:bg-sky-500/10"
            >
              View Experience
            </a>
          </div>

          <div className="flex gap-4 pt-2">
            {[
              { href: 'https://github.com/Ssamirr', Icon: GithubIcon },
              { href: 'https://www.linkedin.com/in/samir-sardarli-7256b8204/', Icon: LinkedinIcon },
              { href: 'mailto:ssardarlisamir@gmail.com', Icon: MailIcon },
            ].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-sky-500/20 border border-slate-700 hover:border-sky-500/50 text-slate-400 hover:text-sky-400 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 blur-xl opacity-30 scale-110" />
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-sky-500/50 overflow-hidden bg-[#1e293b]">
              <img
                src="/profile.jpg"
                alt="Samir Sardarli"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-5xl font-bold gradient-text select-none" style={{ display: 'none' }} id="initials-fallback">SS</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#1e293b] border border-slate-700 rounded-xl px-4 py-2 shadow-xl">
              <span className="text-sky-400 font-bold text-lg">5+</span>
              <p className="text-slate-400 text-xs">Years Exp.</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#1e293b] border border-slate-700 rounded-xl px-4 py-2 shadow-xl">
              <span className="text-sky-400 font-bold text-lg">8+</span>
              <p className="text-slate-400 text-xs">Companies</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs font-mono">scroll down</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  )
}
