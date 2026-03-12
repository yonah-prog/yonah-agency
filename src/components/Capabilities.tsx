const capabilities = [
  {
    number: '01',
    title: 'Strategy',
    description: 'Start with clarity. We dig into how your business actually works before we build anything.',
    items: ['Business discovery', 'Competitive analysis', 'Audience definition', 'Story and narrative'],
  },
  {
    number: '02',
    title: 'Branding',
    description: 'A brand that means something. Built to grow with you, not just look good on launch day.',
    items: ['Brand identity', 'Rebrand and refresh', 'Logo design and evolution', 'Brand guidelines and asset systems'],
  },
  {
    number: '03',
    title: 'Websites',
    description: 'Your website should work as hard as you do. Design, development, and content that converts.',
    items: ['Design and development', 'UX/UI strategy', 'SEO-optimized content', 'Ongoing maintenance'],
  },
  {
    number: '04',
    title: 'AI Implementation',
    description: 'Practical AI tools for how your team actually works — without the overwhelm.',
    items: ['AI tool selection', 'Content AI systems', 'CRM and ops integrations', 'Team training and adoption'],
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-[#FAF7F2] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#C17F4A]" />
            <span className="text-xs font-medium tracking-[0.15em] text-[#C17F4A] uppercase">
              What I do
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2C2C2C] leading-tight mb-6">
            Designed for how<br />
            <span className="italic text-[#8A8178]">businesses actually run</span>
          </h2>
          <p className="text-lg text-[#4A4A4A] leading-relaxed font-light">
            I step in where things feel scattered, unclear, or stuck. My work connects strategy
            to execution — shaping brands, building systems, and creating structure so ideas
            don&apos;t just sound good. They work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E8DFD0]">
          {capabilities.map((cap) => (
            <div
              key={cap.number}
              className="bg-[#FAF7F2] p-10 md:p-12 group hover:bg-[#F0EBE1] transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-medium tracking-[0.15em] text-[#C17F4A] uppercase">
                  {cap.number}
                </span>
                <div className="w-6 h-6 rounded-full border border-[#E8DFD0] group-hover:border-[#C17F4A] group-hover:bg-[#C17F4A] transition-all flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <path d="M1 5h8M5 1l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <h3 className="font-serif text-3xl text-[#2C2C2C] mb-4">{cap.title}</h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed mb-8 font-light">{cap.description}</p>

              <ul className="space-y-2">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#8A8178]">
                    <div className="w-1 h-1 rounded-full bg-[#C17F4A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
