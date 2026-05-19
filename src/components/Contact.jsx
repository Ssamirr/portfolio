import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-gray-200 bg-[#f9f9f9]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-end">
        <div>
          <p className="text-[#ff3c00] text-xs font-bold tracking-widest uppercase mb-4">Contact</p>
          <h2 className="text-4xl md:text-6xl font-black text-[#111] leading-tight">
            Let's work<br />together.
          </h2>
          <p className="text-[#444] text-base mt-6 max-w-sm leading-relaxed">
            Open to new roles and interesting projects. Drop me a message — I reply fast.
          </p>
        </div>

        <div className="space-y-3">
          {[
            { href: 'mailto:ssardarlisamir@gmail.com', Icon: MailIcon, label: 'ssardarlisamir@gmail.com' },
            { href: 'tel:+994504908965', Icon: PhoneIcon, label: '+994 50 490 89 65' },
            { href: 'https://www.linkedin.com/in/samir-sardarli-7256b8204/', Icon: LinkedinIcon, label: 'LinkedIn' },
            { href: 'https://github.com/Ssamirr', Icon: GithubIcon, label: 'GitHub' },
          ].map(({ href, Icon, label }) => (
            <a key={href} href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white border border-gray-200 hover:border-[#ff3c00] rounded-2xl px-6 py-4 group transition-all hover:shadow-sm"
            >
              <div className="flex items-center gap-4">
                <Icon size={18} className="text-[#888] group-hover:text-[#ff3c00] transition-colors" />
                <span className="text-[#111] font-semibold text-sm">{label}</span>
              </div>
              <span className="text-[#bbb] group-hover:text-[#ff3c00] transition-colors font-bold">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
