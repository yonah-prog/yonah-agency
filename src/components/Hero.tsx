export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#FAF7F2] flex flex-col justify-center pt-20 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 20%, #E8DFD0 0%, transparent 50%), radial-gradient(circle at 20% 80%, #F0EBE1 0%, transparent 40%)`
        }}
      />

      {/* Decorative line top-right */}
      <div className="absolute top-32 right-10 md:right-24 flex flex-col gap-1 opacity-30">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px bg-[#C17F4A]" style={{ height: '32px', marginLeft: `${i * 4}px` }} />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full py-20">
        <div className="max-w-4xl">
          {/* Tag */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#C17F4A]" />
            <span className="text-xs font-medium tracking-[0.15em] text-[#C17F4A] uppercase">
              Branding & Marketing Consultant
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#2C2C2C] leading-[1.05] mb-8">
            Translate vision<br />
            <span className="italic text-[#8A8178]">into strategy</span><br />
            that works.
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-[#4A4A4A] max-w-2xl leading-relaxed mb-12 font-light">
            I help companies and organizations clarify their story, sharpen their positioning,
            and turn strategy into products that convert.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#2C2C2C] text-[#FAF7F2] font-medium px-8 py-4 rounded-full hover:bg-[#C17F4A] transition-colors text-sm"
            >
              Let&apos;s Talk
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 text-[#4A4A4A] hover:text-[#C17F4A] font-medium text-sm transition-colors border-b border-[#4A4A4A] hover:border-[#C17F4A] pb-0.5"
            >
              See the work
            </a>
          </div>
        </div>

        {/* Social proof strip */}
        <div className="mt-24 pt-10 border-t border-[#E8DFD0]">
          <p className="text-xs font-medium tracking-[0.12em] text-[#8A8178] uppercase mb-6">
            Working with name brand companies and organizations worldwide
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4 items-center">
            {['Camp HASC', 'PUAH', 'Tech Solutions', 'Turner & Associates', 'Finsco'].map((company) => (
              <span key={company} className="text-[#8A8178] text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
