const pillars = [
  {
    title: 'How I Work',
    body: 'I ask a lot of questions upfront. Not to slow things down — but to make sure we\'re solving the right problem before building anything.',
  },
  {
    title: 'What Clients Value',
    body: 'Clarity, responsiveness, and a sense that someone is actually thinking alongside them — not just delivering assets.',
  },
  {
    title: 'What I\'m Not',
    body: 'This isn\'t a high-volume agency model. I don\'t disappear behind layers of process. You work directly with me, start to finish.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-[#2C2C2C] py-24 md:py-32 text-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#C17F4A]" />
              <span className="text-xs font-medium tracking-[0.15em] text-[#C17F4A] uppercase">
                About
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#FAF7F2] leading-tight mb-8">
              I step in so you<br />
              <span className="italic text-[#8A8178]">can stay focused.</span>
            </h2>
            <p className="text-[#E8DFD0] text-lg leading-relaxed font-light mb-8">
              Most clients come to me when things feel unclear, scattered, or harder than they should be.
              My role is to bring structure — to help you see what matters, decide what to do next,
              and execute with intention.
            </p>
            <p className="text-[#8A8178] text-base leading-relaxed font-light">
              I work hands-on, stay close to the details, and think beyond any single deliverable.
              The goal isn&apos;t just a better brand or a better website. It&apos;s work that supports
              how you actually operate and grow.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 border border-[#FAF7F2]/30 text-[#FAF7F2] text-sm font-medium px-7 py-3.5 rounded-full hover:bg-[#FAF7F2] hover:text-[#2C2C2C] transition-all"
            >
              Let&apos;s connect
            </a>
          </div>

          {/* Right column — pillars */}
          <div className="space-y-0 divide-y divide-[#FAF7F2]/10">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="py-8 first:pt-0 last:pb-0">
                <h3 className="text-sm font-medium tracking-wide text-[#C17F4A] mb-3 uppercase">
                  {pillar.title}
                </h3>
                <p className="text-[#E8DFD0] leading-relaxed font-light">{pillar.body}</p>
              </div>
            ))}

            {/* Pull quote */}
            <div className="pt-10">
              <blockquote className="font-serif text-xl md:text-2xl italic text-[#FAF7F2] leading-snug">
                &ldquo;Good business leaders create a vision, articulate the vision, passionately
                own the vision, and relentlessly drive it to completion.&rdquo;
              </blockquote>
              <p className="mt-4 text-xs text-[#8A8178] tracking-wider uppercase">
                — Mason Adams, CEO Finsco
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
