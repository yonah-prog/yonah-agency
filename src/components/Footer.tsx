export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#2C2C2C] text-[#FAF7F2]">
      {/* CTA Bar */}
      <div className="border-b border-[#FAF7F2]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#FAF7F2] leading-tight mb-2">
              Let&apos;s connect.<br />
              <span className="italic text-[#8A8178]">Ready to help your business.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#C17F4A] text-white font-medium px-8 py-4 rounded-full hover:bg-[#D4956A] transition-colors text-sm"
          >
            Let&apos;s get on a call
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Footer nav */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="font-serif text-lg text-[#FAF7F2]">
          Yonah Friedman
        </div>
        <nav className="flex flex-wrap gap-6">
          {['Capabilities', 'About', 'FAQ', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs text-[#8A8178] hover:text-[#FAF7F2] uppercase tracking-wider transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <p className="text-xs text-[#8A8178]">
          &copy; {year} Yonah Friedman. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
