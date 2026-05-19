export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#111] font-black text-lg">SS<span className="text-[#ff3c00]">.</span></p>
        <p className="text-[#888] text-sm font-medium">© {new Date().getFullYear()} Samir Sardarli</p>
        <a href="mailto:ssardarlisamir@gmail.com" className="text-[#888] hover:text-[#ff3c00] text-sm font-medium transition-colors">
          ssardarlisamir@gmail.com
        </a>
      </div>
    </footer>
  )
}
