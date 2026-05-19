import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sky-400 font-bold">&lt;Samir Sardarli /&gt;</p>

        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Samir Sardarli. All rights reserved.
        </p>

        <div className="flex gap-4">
          {[
            { href: 'https://github.com/Ssamirr', Icon: GithubIcon },
            { href: 'https://www.linkedin.com/in/samir-sardarli-7256b8204/', Icon: LinkedinIcon },
            { href: 'mailto:ssardarlisamir@gmail.com', Icon: MailIcon },
          ].map(({ href, Icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-400 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
