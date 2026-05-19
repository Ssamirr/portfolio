import { GraduationCapIcon } from './Icons'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sky-400 font-mono text-sm mb-2">// academic background</p>
        <h2 className="text-4xl font-bold gradient-text">Education</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-blue-400 rounded mx-auto mt-4" />
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="card flex gap-6 items-start">
          <div className="w-14 h-14 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
            <GraduationCapIcon size={26} className="text-sky-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-xl">
              Bachelor of Science, Industrial Engineering
            </h3>
            <p className="text-sky-400 font-medium mt-1">Baku Engineering University</p>
            <p className="text-slate-500 text-sm mt-1">Baku, Azerbaijan &nbsp;•&nbsp; Sep 2014 – Jun 2019</p>
          </div>
        </div>
      </div>
    </section>
  )
}
