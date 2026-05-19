import { MapPinIcon, CalendarIcon } from './Icons'

const jobs = [
  {
    title: 'Frontend Developer (Remote)',
    company: 'PixupPlay',
    location: 'Malta',
    period: 'May 2025 – Present',
    current: true,
    description: 'B2B iGaming platform serving casino, sportsbook, exchange betting, and payment integration.',
    bullets: [
      'Engineered React-based UI for a real-time iGaming platform supporting 3+ product verticals: casino, sportsbook, and exchange betting',
      'Consumed and integrated RESTful APIs for authentication, promotions, game sessions, transactions, and analytics modules',
      'Connected 5+ external game providers and sportsbook feeds via secure API communication',
      'Delivered 10+ reusable UI components for raffles, daily races, and bonus campaigns, reducing feature delivery time by ~30%',
      'Coordinated with backend engineers to align API contracts and reduce integration defects by over 40%',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Innovation and Digital Development Agency (IDDA)',
    location: 'Baku, Azerbaijan',
    period: 'Apr 2023 – May 2025',
    bullets: [
      'Led frontend development for a multi-part cybersecurity platform covering admin panel, core tool, and marketing landing page',
      'Adopted Next.js SSR for the landing page, achieving measurable improvements in page load speed and SEO ranking',
      'Built advanced data tables and interactive charts handling 100,000+ records',
      'Applied Material-UI and Tailwind CSS across 3 platform modules to maintain consistent, accessible UI standards',
      'Architected a multi-level dynamic filtering system, reducing user search time by an estimated 50%',
      'Performed regular code reviews and performance audits, maintaining fewer than 5% regression defects',
    ],
  },
  {
    title: 'Frontend Developer (Remote)',
    company: 'Nevera Tech',
    location: 'Istanbul, Turkey',
    period: 'Feb 2023 – Jan 2024',
    bullets: [
      'Contributed to 6+ web projects spanning course management, e-commerce, and a football social platform',
      'Shipped responsive React and TypeScript applications aligned with Figma mockups within 2-week sprint cycles',
      'Consumed Node.js REST APIs to enable smooth data flow between frontend views and backend services',
      'Reduced UI bug backlog by 35% through proactive QA collaboration and component-level unit testing',
    ],
  },
  {
    title: 'Frontend Developer (Remote)',
    company: 'Rntr.',
    location: 'Alexandria, NSW, Australia',
    period: 'Aug 2023 – Sep 2023',
    bullets: [
      'Wrote modular vanilla JavaScript and CSS scripts for a fashion-industry rental and sales platform',
      'Coded 15+ UI elements from scratch, improving product page engagement and visual consistency',
      'Resolved 10+ technical issues within legacy codebase and integrated 3 third-party APIs on schedule',
    ],
  },
  {
    title: 'Frontend Developer – Freelance',
    company: 'Avirtel Limited',
    location: 'Remote',
    period: 'Nov 2021 – Feb 2023',
    bullets: [
      'Produced reusable UI components and resolved 20+ bugs, improving application stability across 4 client projects',
      'Optimized rendering performance, reducing average page load time by approximately 25%',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Koder Group',
    location: 'Baku, Azerbaijan',
    period: 'Jul 2021 – Nov 2021',
    bullets: [
      'Constructed interfaces for navigation, data management, and e-commerce flows, serving 1,000+ end users',
      'Refined page layouts and visual design to strengthen brand identity and improve navigation clarity',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Khanbuta Group',
    location: 'Baku, Azerbaijan',
    period: 'Mar 2021 – Jun 2021',
    bullets: [
      'Shipped responsive, cross-browser-compatible features for company web applications',
      'Improved UX across 5+ pages by refining layout structure and interaction patterns',
    ],
  },
  {
    title: 'Frontend Developer (Intern)',
    company: 'Onneks Lab',
    location: 'Baku, Azerbaijan',
    period: 'Oct 2020 – Nov 2020',
    bullets: [
      'Completed 10+ assigned HTML, CSS, and JavaScript tasks, receiving positive feedback on code quality',
      'Acquired core frontend skills and adopted professional coding standards within the first month',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0f172a]/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sky-400 font-mono text-sm mb-2">// where I've worked</p>
          <h2 className="text-4xl font-bold gradient-text">Work Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-blue-400 rounded mx-auto mt-4" />
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500 via-sky-500/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {jobs.map((job, i) => (
              <div key={i} className="relative md:pl-16">
                <div className={`absolute left-4 top-6 w-4 h-4 rounded-full border-2 hidden md:block ${
                  job.current
                    ? 'bg-sky-400 border-sky-400 shadow-lg shadow-sky-400/50'
                    : 'bg-[#0a0f1e] border-sky-500/50'
                }`} />

                <div className="card group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg group-hover:text-sky-400 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-sky-400 font-medium">{job.company}</p>
                    </div>
                    <div className="text-right text-sm text-slate-500 space-y-1">
                      <div className="flex items-center gap-1 justify-end">
                        <CalendarIcon size={12} />
                        <span className={job.current ? 'text-green-400' : ''}>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1 justify-end">
                        <MapPinIcon size={12} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {job.description && (
                    <p className="text-slate-400 text-sm mb-3 italic">{job.description}</p>
                  )}

                  <ul className="space-y-2">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-slate-400 text-sm">
                        <span className="text-sky-400 mt-1 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
