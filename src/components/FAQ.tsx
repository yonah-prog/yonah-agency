'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'How do I know if this is the right fit?',
    a: 'If you\'re looking for a big agency with layers, this probably isn\'t it. If you want a senior partner who thinks with you, challenges assumptions, and stays close to the work, it usually is. Most good projects start with a little uncertainty.',
  },
  {
    q: 'What does working together actually look like?',
    a: 'We start with a conversation. No pitch. No pressure. I ask questions, listen carefully, and help you clarify what you actually need — sometimes before a scope even exists. From there, we define the work, the pace, and what success looks like.',
  },
  {
    q: "I'm a small team. Is that a problem?",
    a: "Not at all. In many cases, it's an advantage. I work best with small teams and growing organizations who need clarity, structure, and momentum without the overhead of a large agency.",
  },
  {
    q: 'Do I need to have everything figured out before reaching out?',
    a: "Definitely not. Many clients come to me because things feel unclear. My role is often to help you make sense of what's in front of you before anything is designed or built.",
  },
  {
    q: 'What kinds of projects do you usually take on?',
    a: "Brand strategy, branding, websites, and increasingly, helping teams adopt practical AI tools to streamline how they work. Projects don't always fit neatly into a category — and that's usually where the best work happens.",
  },
  {
    q: 'How involved will I need to be?',
    a: "You won't be buried in meetings, but you will be involved. The work is collaborative. I'll guide the process, but your input matters — especially early on, when clarity makes everything easier later.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-[#F0EBE1] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left sticky column */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#C17F4A]" />
                <span className="text-xs font-medium tracking-[0.15em] text-[#C17F4A] uppercase">
                  FAQ
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#2C2C2C] leading-tight mb-6">
                Questions<br />
                <span className="italic text-[#8A8178]">people ask</span>
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed font-light mb-8">
                (Or at least the ones they should!)
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#2C2C2C] text-[#FAF7F2] font-medium px-7 py-3.5 rounded-full hover:bg-[#C17F4A] transition-colors text-sm"
              >
                Ask me directly
              </a>
            </div>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-3 space-y-0 divide-y divide-[#E8DFD0]">
            {faqs.map((faq, i) => (
              <div key={i} className="py-6">
                <button
                  className="w-full flex items-start justify-between gap-4 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-base font-medium text-[#2C2C2C]">{faq.q}</span>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-[#2C2C2C]/20 flex items-center justify-center transition-all ${open === i ? 'bg-[#C17F4A] border-[#C17F4A]' : ''}`}>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className={`transition-transform ${open === i ? 'rotate-180' : ''}`}
                    >
                      <path
                        d="M1 3l4 4 4-4"
                        stroke={open === i ? 'white' : '#2C2C2C'}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <div className="mt-4 pr-10">
                    <p className="text-[#4A4A4A] leading-relaxed font-light">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
