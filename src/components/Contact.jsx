import { MailIcon, PhoneIcon, MapPinIcon, GithubIcon, LinkedinIcon, ExternalLinkIcon } from './Icons'

const contacts = [
  {
    icon: MailIcon,
    label: 'Email',
    value: 'ssardarlisamir@gmail.com',
    href: 'mailto:ssardarlisamir@gmail.com',
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '+994 50 490 89 65',
    href: 'tel:+994504908965',
  },
  {
    icon: MapPinIcon,
    label: 'Location',
    value: 'Baku, Azerbaijan',
    href: null,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/Ssamirr',
    href: 'https://github.com/Ssamirr',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/samir-sardarli-7256b8204',
    href: 'https://www.linkedin.com/in/samir-sardarli-7256b8204/',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0f172a]/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sky-400 font-mono text-sm mb-2">// let's connect</p>
          <h2 className="text-4xl font-bold gradient-text">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-blue-400 rounded mx-auto mt-4" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether you have a project in mind
            or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="card group text-center">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-500/20 transition-colors">
                <Icon size={20} className="text-sky-400" />
              </div>
              <p className="text-slate-500 text-xs mb-1">{label}</p>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-sky-400 transition-colors text-sm font-medium flex items-center justify-center gap-1"
                >
                  {value}
                  {href.startsWith('http') && <ExternalLinkIcon size={12} />}
                </a>
              ) : (
                <p className="text-slate-300 text-sm font-medium">{value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="mailto:ssardarlisamir@gmail.com"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/25 text-lg"
          >
            <MailIcon size={20} />
            Send me an email
          </a>
        </div>
      </div>
    </section>
  )
}
