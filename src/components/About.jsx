export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-gray-200 bg-[#f9f9f9]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-[#ff3c00] text-xs font-bold tracking-widest uppercase mb-4">About</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#111] leading-tight">
            Building interfaces<br />people actually use.
          </h2>
        </div>

        <div className="space-y-5">
          <p className="text-[#333] text-base leading-relaxed">
            I'm a frontend developer with <span className="text-[#111] font-bold">5+ years</span> of experience across iGaming, cybersecurity, and e-commerce. I care about clean code, fast UIs, and shipping things that work.
          </p>
          <p className="text-[#333] text-base leading-relaxed">
            Currently at <span className="text-[#111] font-bold">PixupPlay (Malta)</span> building real-time betting interfaces with React. Previously led frontend at <span className="text-[#111] font-bold">IDDA</span>, delivering a full cybersecurity platform with large-scale data tables, SSR landing, and admin panel.
          </p>
          <p className="text-[#333] text-base leading-relaxed">
            Comfortable with Agile, code reviews, multi-timezone teams, and tight sprint deadlines.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { n: '5+', l: 'Years' },
              { n: '8+', l: 'Companies' },
              { n: '20+', l: 'Projects' },
            ].map(({ n, l }) => (
              <div key={l} className="bg-white border border-gray-200 rounded-2xl p-5">
                <p className="text-[#ff3c00] font-black text-3xl">{n}</p>
                <p className="text-[#555] text-sm mt-1 font-medium">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
