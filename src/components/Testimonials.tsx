const testimonials = [
  {
    name: 'Judah Mischel',
    title: 'Executive Director, Camp HASC',
    quote: 'Working with Yonah is an absolute pleasure. He is intuitive, professional and exceptionally talented, and has always been right on the mark with all our projects.',
  },
  {
    name: 'Lea Davidson',
    title: 'Executive Director, PUAH',
    quote: 'We engaged Yonah to help develop new initiatives strengthening our branding and fundraising. He distinguished himself through quality, creativity, and understanding our organization\'s deeper needs.',
  },
  {
    name: 'Trins Simon',
    title: 'CEO, Tech Solutions',
    quote: 'His strategic insights and expertise guided us through successful market expansion. The clarity he brought to our brand has been transformative for how we communicate externally.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-[#FAF7F2] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#C17F4A]" />
              <span className="text-xs font-medium tracking-[0.15em] text-[#C17F4A] uppercase">
                Client voices
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2C2C2C] leading-tight">
              What clients<br />
              <span className="italic text-[#8A8178]">have to say</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="self-start md:self-end inline-flex items-center gap-2 text-sm text-[#4A4A4A] hover:text-[#C17F4A] font-medium border-b border-[#4A4A4A] hover:border-[#C17F4A] pb-0.5 transition-colors"
          >
            Work with me
          </a>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`p-8 rounded-2xl ${
                i === 1 ? 'bg-[#2C2C2C] text-[#FAF7F2]' : 'bg-[#F0EBE1] text-[#2C2C2C]'
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1l1.236 2.504L10 3.952l-2 1.948.472 2.75L6 7.25l-2.472 1.4L4 5.9 2 3.952l2.764-.448L6 1z"
                      fill={i === 1 ? '#C17F4A' : '#C17F4A'}
                    />
                  </svg>
                ))}
              </div>

              <blockquote className={`font-serif text-xl italic leading-snug mb-8 ${i === 1 ? 'text-[#FAF7F2]' : 'text-[#2C2C2C]'}`}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold ${
                  i === 1 ? 'bg-[#C17F4A] text-white' : 'bg-[#2C2C2C] text-[#FAF7F2]'
                }`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className={`text-sm font-semibold ${i === 1 ? 'text-[#FAF7F2]' : 'text-[#2C2C2C]'}`}>{t.name}</div>
                  <div className={`text-xs ${i === 1 ? 'text-[#8A8178]' : 'text-[#8A8178]'}`}>{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
