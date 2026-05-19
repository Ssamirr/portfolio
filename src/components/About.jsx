const highlights = [
  { label: 'iGaming', desc: 'Real-time betting platforms with React' },
  { label: 'Cybersecurity', desc: 'Complex dashboards & data visualization' },
  { label: 'E-commerce', desc: 'Responsive storefronts & product UX' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0f172a]/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sky-400 font-mono text-sm mb-2">// who am I</p>
          <h2 className="text-4xl font-bold gradient-text">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-blue-400 rounded mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left – text */}
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p className="text-slate-300 text-lg">
              I'm a <span className="text-sky-400 font-semibold">Frontend Developer</span> with over{' '}
              <span className="text-sky-400 font-semibold">5 years</span> of experience building
              high-performance web applications used by real users across the globe.
            </p>
            <p>
              I specialize in <span className="text-slate-300 font-medium">React</span>,{' '}
              <span className="text-slate-300 font-medium">TypeScript</span>, and{' '}
              <span className="text-slate-300 font-medium">JavaScript</span> — translating complex
              business requirements into clean, maintainable interfaces that are fast, accessible, and
              easy to iterate on.
            </p>
            <p>
              I've worked across diverse industries — from B2B iGaming platforms in Malta to cybersecurity
              tools in Baku — and I'm equally comfortable leading frontend architecture or shipping
              pixel-perfect UI within a tight sprint deadline.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {['React.js', 'TypeScript', 'Next.js', 'Redux', 'Node.js', 'MongoDB', 'Strapi'].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs bg-sky-500/10 border border-sky-500/20 text-sky-400 px-3 py-1.5 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right – domain cards */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Domains I've worked in</p>
            {highlights.map(({ label, desc }) => (
              <div
                key={label}
                className="flex items-start gap-4 bg-[#1e293b] border border-slate-700/50 hover:border-sky-500/40 rounded-2xl px-5 py-4 transition-all duration-200 group"
              >
                <div className="w-2 h-2 rounded-full bg-sky-400 mt-2 shrink-0 group-hover:shadow-[0_0_8px_2px_rgba(56,189,248,0.5)] transition-all" />
                <div>
                  <p className="text-white font-semibold">{label}</p>
                  <p className="text-slate-400 text-sm mt-0.5">{desc}</p>
                </div>
              </div>
            ))}

            {/* Quick facts */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { value: '5+', label: 'Years' },
                { value: '8+', label: 'Companies' },
                { value: '10+', label: 'Projects' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-[#1e293b] border border-slate-700/50 rounded-2xl py-4 text-center">
                  <p className="text-2xl font-bold text-sky-400">{value}</p>
                  <p className="text-slate-500 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
