const groups = [
  {
    label: 'Frontend',
    items: ['React.js', 'TypeScript', 'JavaScript ES6+', 'Next.js', 'HTML5 & CSS3', 'Redux', 'Tailwind CSS', 'Material-UI', 'Sass', 'jQuery'],
  },
  {
    label: 'Backend & CMS',
    items: ['Node.js', 'MongoDB', 'Strapi', 'REST APIs'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Figma', 'Jira', 'ClickUp', 'Agile/Scrum', 'Code Review', 'Performance Optimization', 'SEO'],
  },
]

const langs = [
  { name: 'Azerbaijani', level: 'Native', code: 'AZ' },
  { name: 'English', level: 'Full Professional', code: 'EN' },
  { name: 'Turkish', level: 'Full Professional', code: 'TR' },
  { name: 'Russian', level: 'Elementary', code: 'RU' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#ff3c00] text-xs font-bold tracking-widest uppercase mb-4">Skills</p>
        <h2 className="text-4xl md:text-5xl font-black text-[#111] mb-16">Tech stack.</h2>

        <div className="space-y-0">
          {groups.map(({ label, items }) => (
            <div key={label} className="grid md:grid-cols-[180px_1fr] gap-6 items-start border-t border-gray-200 py-8">
              <p className="text-[#333] text-sm font-bold uppercase tracking-wider pt-1">{label}</p>
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <span key={item} className="text-sm text-[#333] font-medium border border-gray-300 bg-white hover:border-[#ff3c00] hover:text-[#ff3c00] px-4 py-2 rounded-full transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="grid md:grid-cols-[180px_1fr] gap-6 items-start border-t border-gray-200 py-8">
            <p className="text-[#333] text-sm font-bold uppercase tracking-wider pt-1">Languages</p>
            <div className="flex flex-wrap gap-3">
              {langs.map(({ name, level, code }) => (
                <div key={name} className="flex items-center gap-3 bg-white border border-gray-200 hover:border-[#ff3c00] rounded-xl px-4 py-3 transition-colors group cursor-default">
                  <span className="w-9 h-9 rounded-lg bg-gray-100 group-hover:bg-[#ff3c00] flex items-center justify-center text-xs font-black text-[#111] group-hover:text-white transition-colors">
                    {code}
                  </span>
                  <div>
                    <p className="text-[#111] text-sm font-bold leading-none">{name}</p>
                    <p className="text-[#666] text-xs mt-1">{level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
