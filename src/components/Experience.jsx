const jobs = [
  {
    title: 'Frontend Developer',
    company: 'PixupPlay',
    location: 'Malta · Remote',
    period: '2025 — Present',
    current: true,
    bullets: [
      'Built React UI for real-time iGaming platform — casino, sportsbook, exchange betting',
      'Integrated 5+ external game providers via RESTful APIs',
      'Delivered 10+ reusable components, cut feature delivery time by ~30%',
      'Reduced integration defects by 40% through tight backend coordination',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'IDDA',
    location: 'Baku, Azerbaijan',
    period: '2023 — 2025',
    bullets: [
      'Led frontend for a multi-module cybersecurity platform (admin, core tool, landing)',
      'Next.js SSR landing — improved load speed and SEO rankings',
      'Data tables handling 100,000+ records with interactive analytics charts',
      'Dynamic filtering system cut analyst search time by ~50%',
      'Regular code reviews — <5% regression rate across sprints',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Nevera Tech',
    location: 'Istanbul · Remote',
    period: '2023 — 2024',
    bullets: [
      '6+ projects: course platform, e-commerce, football social app',
      'React + TypeScript, Figma-aligned, 2-week sprints',
      'Reduced UI bug backlog by 35% via QA collaboration',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Rntr.',
    location: 'Australia · Remote',
    period: 'Aug — Sep 2023',
    bullets: [
      'Vanilla JS & CSS for a fashion rental/sales platform',
      '15+ UI components from scratch, 3 third-party API integrations',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Avirtel Limited',
    location: 'Remote · Freelance',
    period: '2021 — 2023',
    bullets: [
      '20+ bugs resolved across 4 client projects',
      'Reduced page load time by ~25% via render optimization',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Koder Group',
    location: 'Baku',
    period: 'Jul — Nov 2021',
    bullets: ['Navigation, data management & e-commerce UI serving 1,000+ users'],
  },
  {
    title: 'Frontend Developer',
    company: 'Khanbuta Group',
    location: 'Baku',
    period: 'Mar — Jun 2021',
    bullets: ['Responsive, cross-browser features; improved UX across 5+ pages'],
  },
  {
    title: 'Intern',
    company: 'Onneks Lab',
    location: 'Baku',
    period: 'Oct — Nov 2020',
    bullets: ['First professional role — HTML, CSS, JS; positive feedback on code quality'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-gray-200 bg-[#f9f9f9]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#ff3c00] text-xs font-bold tracking-widest uppercase mb-4">Experience</p>
        <h2 className="text-4xl md:text-5xl font-black text-[#111] mb-16">Where I've worked.</h2>

        <div>
          {jobs.map((job, i) => (
            <div key={i} className="grid md:grid-cols-[220px_1fr] gap-6 border-t border-gray-200 py-10 group">
              <div>
                <p className={`text-sm font-bold mb-1 ${job.current ? 'text-[#ff3c00]' : 'text-[#555]'}`}>
                  {job.period}
                </p>
                <p className="text-[#888] text-xs font-medium">{job.location}</p>
              </div>
              <div>
                <div className="flex items-baseline gap-3 mb-4">
                  <h3 className="text-[#111] font-black text-xl group-hover:text-[#ff3c00] transition-colors">{job.company}</h3>
                  <span className="text-[#666] text-sm font-medium">{job.title}</span>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="text-[#444] text-sm flex gap-3 leading-relaxed">
                      <span className="text-[#ff3c00] shrink-0 mt-0.5 font-bold">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
