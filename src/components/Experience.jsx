const jobs = [
  {
    title: 'Full Stack Developer',
    company: 'PixupPlay',
    location: 'Malta · Remote',
    period: '2025 - 2026',
    current: false,
    bullets: [
      'Engineered scalable full-stack applications with React, Node.js, and Express',
      'Architected and implemented backend APIs covering authentication, promotions, game sessions, transactions, and analytics',
      'Integrated external game providers and sportsbook feeds through secure API communication',
      'Developed UI components for raffles, daily races, and bonus campaigns with full backend integration',
      'Managed user data, betting records, game logs, and campaign histories using MongoDB',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'IDDA',
    location: 'Baku, Azerbaijan',
    period: '2023 - 2025',
    bullets: [
      'Led frontend development for a multi-module cybersecurity platform covering admin panel, core tool, and SSR landing page',
      'Engineered advanced data tables and interactive charts to handle large-scale datasets',
      'Architected a multi-level filtering system that significantly reduced analyst search time',
      'Conducted regular code reviews and performance audits within a cross-functional team',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Nevera Tech',
    location: 'Istanbul · Remote',
    period: '2023 - 2024',
    bullets: [
      'Delivered multiple projects including a course platform, e-commerce store, and football social app',
      'Shipped React and TypeScript applications aligned with Figma designs within short sprint cycles',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Rntr.',
    location: 'Australia · Remote',
    period: 'Aug 2023 - Sep 2023',
    bullets: [
      'Crafted a suite of reusable UI components for a fashion rental platform using vanilla JavaScript and CSS',
      'Integrated multiple third-party APIs within a short-term contract',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Avirtel Limited',
    location: 'Remote · Freelance',
    period: '2021 - 2023',
    bullets: [
      'Maintained and enhanced UI components across multiple client projects',
      'Resolved rendering performance issues and cleared backlog bugs across deliverables',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Koder Group',
    location: 'Baku',
    period: 'Jul 2021 - Nov 2021',
    bullets: ['Developed e-commerce and data management interfaces serving a large end-user base'],
  },
  {
    title: 'Frontend Developer',
    company: 'Khanbuta Group',
    location: 'Baku',
    period: 'Mar 2021 - Jun 2021',
    bullets: ['Shipped responsive, cross-browser-compatible features for company web applications'],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Onneks Lab',
    location: 'Baku',
    period: 'Oct 2020 - Nov 2020',
    bullets: ['Completed HTML, CSS, and JS tasks; adopted professional coding standards'],
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
                      <span className="text-[#ff3c00] shrink-0 mt-1.5 text-xs">●</span>
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
