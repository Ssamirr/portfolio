import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#ff3c00]" />
            <p className="text-[#555] text-sm tracking-widest uppercase font-semibold">Frontend Developer · Baku, AZ</p>
          </div>

          <h1 className="text-7xl md:text-8xl font-black text-[#111] leading-none tracking-tight mb-8">
            Samir<br />
            Sardar<span className="text-[#ff3c00]">li</span>
          </h1>

          <p className="text-[#444] text-lg leading-relaxed mb-8 max-w-md border-l-4 border-[#ff3c00] pl-5">
            5+ years building fast, clean web interfaces. React, TypeScript, Next.js.
            iGaming · Cybersecurity · E-commerce.
          </p>

          <div className="flex items-center gap-4 mb-10">
            <a href="#contact" className="bg-[#111] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#ff3c00] transition-colors text-sm">
              Get in touch
            </a>
            <a href="#experience" className="text-[#111] font-bold text-sm flex items-center gap-2 hover:text-[#ff3c00] transition-colors">
              View work →
            </a>
          </div>

          <div className="flex gap-5 items-center">
            {[
              { href: 'https://github.com/Ssamirr', Icon: GithubIcon },
              { href: 'https://www.linkedin.com/in/samir-sardarli-7256b8204/', Icon: LinkedinIcon },
              { href: 'mailto:ssardarlisamir@gmail.com', Icon: MailIcon },
            ].map(({ href, Icon }) => (
              <a key={href} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="text-[#888] hover:text-[#ff3c00] transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right — photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden bg-gray-100">
              <img src="/profile.jpg" alt="Samir Sardarli" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border-2 border-[#ff3c00] -z-10" />
            <div className="absolute -left-5 bottom-12 bg-white shadow-xl border border-gray-100 rounded-2xl px-4 py-3">
              <p className="text-[#ff3c00] font-black text-2xl leading-none">5+</p>
              <p className="text-[#555] text-xs mt-1 font-medium">Years exp.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech strip */}
      <div className="mt-20 pt-8 border-t border-gray-200 flex flex-wrap gap-8 text-[#999] text-xs tracking-widest uppercase font-semibold">
        {['React.js', 'TypeScript', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind', 'Redux', 'REST APIs'].map(t => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </section>
  )
}
