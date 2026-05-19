import { useEffect, useRef } from 'react'

const categories = [
  {
    title: 'Core',
    color: 'sky',
    skills: ['React.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks & Libraries',
    color: 'blue',
    skills: ['Next.js', 'Redux', 'Tailwind CSS', 'Material-UI', 'Sass', 'jQuery'],
  },
  {
    title: 'Backend & CMS',
    color: 'indigo',
    skills: ['Node.js', 'MongoDB', 'Strapi', 'REST APIs'],
  },
  {
    title: 'Tools & Workflow',
    color: 'violet',
    skills: ['Git', 'Figma', 'Jira', 'ClickUp', 'Agile/Scrum', 'Code Review', 'Performance Optimization', 'SEO'],
  },
]

const colorMap = {
  sky:    { dot: 'bg-sky-400',    border: 'border-sky-500/30', text: 'text-sky-400',    bg: 'bg-sky-500/10',    hover: 'hover:border-sky-400/60 hover:bg-sky-500/15' },
  blue:   { dot: 'bg-blue-400',   border: 'border-blue-500/30', text: 'text-blue-400',  bg: 'bg-blue-500/10',   hover: 'hover:border-blue-400/60 hover:bg-blue-500/15' },
  indigo: { dot: 'bg-indigo-400', border: 'border-indigo-500/30', text: 'text-indigo-400', bg: 'bg-indigo-500/10', hover: 'hover:border-indigo-400/60 hover:bg-indigo-500/15' },
  violet: { dot: 'bg-violet-400', border: 'border-violet-500/30', text: 'text-violet-400', bg: 'bg-violet-500/10', hover: 'hover:border-violet-400/60 hover:bg-violet-500/15' },
}

const allTech = [
  'React.js', 'TypeScript', 'JavaScript', 'Next.js', 'Redux',
  'Tailwind CSS', 'HTML5', 'CSS3', 'Material-UI', 'Sass',
  'Git', 'Figma', 'REST APIs', 'Node.js', 'MongoDB', 'Strapi',
]

const languages = [
  { name: 'Azerbaijani', level: 'Native',            code: 'AZ', color: 'bg-sky-600' },
  { name: 'English',     level: 'Full Professional', code: 'EN', color: 'bg-blue-700' },
  { name: 'Turkish',     level: 'Full Professional', code: 'TR', color: 'bg-red-700' },
  { name: 'Russian',     level: 'Elementary',        code: 'RU', color: 'bg-slate-600' },
]

function Marquee() {
  const track = [...allTech, ...allTech]
  return (
    <div className="overflow-hidden py-4 mb-16 relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0f1e] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0f1e] to-transparent z-10 pointer-events-none" />
      <div
        className="flex gap-4 w-max"
        style={{ animation: 'marquee 28s linear infinite' }}
      >
        {track.map((tech, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-5 py-2.5 rounded-full border border-slate-700 bg-[#1e293b] text-slate-300 text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sky-400 font-mono text-sm mb-2">// what I work with</p>
        <h2 className="text-4xl font-bold gradient-text">Technical Skills</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-blue-400 rounded mx-auto mt-4" />
      </div>

      {/* Scrolling marquee */}
      <Marquee />

      {/* Category grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {categories.map(({ title, color, skills }) => {
          const c = colorMap[color]
          return (
            <div key={title} className={`rounded-2xl border ${c.border} bg-[#111827] p-5 flex flex-col gap-3`}>
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                <span className={`text-xs font-semibold uppercase tracking-widest ${c.text}`}>{title}</span>
              </div>
              {skills.map((s) => (
                <div
                  key={s}
                  className={`rounded-lg border ${c.border} ${c.hover} px-3 py-2 text-sm text-slate-300 transition-all duration-200 cursor-default`}
                >
                  {s}
                </div>
              ))}
            </div>
          )
        })}
      </div>

      {/* Languages */}
      <div className="rounded-2xl border border-slate-700/50 bg-[#111827] p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Languages</p>
        <div className="flex flex-wrap gap-4">
          {languages.map(({ name, level, code, color }) => (
            <div
              key={name}
              className="flex items-center gap-3 bg-[#0f172a] border border-slate-700 hover:border-sky-500/40 rounded-xl px-4 py-3 transition-all duration-200"
            >
              <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center shrink-0`}>
                <span className="text-white text-xs font-bold tracking-wide">{code}</span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-none">{name}</p>
                <p className="text-slate-500 text-xs mt-1">{level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
