export default function Contact() {
  return (
    <section id="contact" className="bg-[#FAF7F2] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#C17F4A]" />
              <span className="text-xs font-medium tracking-[0.15em] text-[#C17F4A] uppercase">
                Let&apos;s work together
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-[#2C2C2C] leading-tight mb-8">
              Ready to<br />
              <span className="italic text-[#8A8178]">get started?</span>
            </h2>
            <p className="text-lg text-[#4A4A4A] leading-relaxed font-light mb-10 max-w-md">
              Need help with a project, or just have a question about the work?
              I&apos;m here. No pitch, no pressure — just a real conversation.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F0EBE1] flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 4l6 5 6-5M2 4h12v9H2V4z" stroke="#C17F4A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#8A8178] uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:collab@yonah.agency" className="text-sm text-[#2C2C2C] hover:text-[#C17F4A] transition-colors font-medium">
                    collab@yonah.agency
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#F0EBE1] rounded-3xl p-8 md:p-10">
            <h3 className="font-serif text-2xl text-[#2C2C2C] mb-8">Send a message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#8A8178] uppercase tracking-wider mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-4 py-3 text-sm text-[#2C2C2C] placeholder-[#8A8178]/50 focus:outline-none focus:border-[#C17F4A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#8A8178] uppercase tracking-wider mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-4 py-3 text-sm text-[#2C2C2C] placeholder-[#8A8178]/50 focus:outline-none focus:border-[#C17F4A] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-[#8A8178] uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-4 py-3 text-sm text-[#2C2C2C] placeholder-[#8A8178]/50 focus:outline-none focus:border-[#C17F4A] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#8A8178] uppercase tracking-wider mb-2">
                  What are you working on?
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me a bit about your project or challenge..."
                  className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-4 py-3 text-sm text-[#2C2C2C] placeholder-[#8A8178]/50 focus:outline-none focus:border-[#C17F4A] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2C2C2C] text-[#FAF7F2] font-medium py-4 rounded-xl hover:bg-[#C17F4A] transition-colors text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
