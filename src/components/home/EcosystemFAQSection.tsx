import { useState } from 'react'

export default function EcosystemFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: 'What is ScaleOnIt?',
      a: 'ScaleOnIt is a connected business platform for IT and software service companies. It connects sales, customer requirements, software delivery, people, finances and customer service in one ecosystem.',
    },
    {
      q: 'What are the six ScaleOnIt systems?',
      a: 'The six systems are GROW, DISCOVER, DELIVER, PEOPLE, FINANCIALS and SERVE. Each system handles a different part of the business while working as part of the same ecosystem.',
    },
    {
      q: 'What is DELIVER?',
      a: "DELIVER is ScaleOnIt's software delivery system. It helps teams move from customer requirements to software through planning, development, testing and release.",
    },
    {
      q: 'What is ONIT?',
      a: 'ONIT is the technology powering the DELIVER system today. It helps automate and support software delivery work.',
    },
    {
      q: 'How do the six systems work together?',
      a: 'The systems are designed to share information and follow the same business flow. A customer can move from GROW to DISCOVER, then into DELIVER and later into SERVE, while PEOPLE and FINANCIALS support the work.',
    },
    {
      q: 'Who is ScaleOnIt for?',
      a: 'ScaleOnIt is designed for IT service companies, software development companies and businesses that manage customer projects, teams and software delivery.',
    },
    {
      q: 'Is ScaleOnIt only an AI software development platform?',
      a: 'No. AI is one part of ScaleOnIt. The larger goal is to connect the different systems that run an IT and software service business.',
    },
  ]

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions about ScaleOnIt"
      className="py-20 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50/90 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Questions about ScaleOnIt
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Direct answers about our platform, the six systems, and how we operate.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx

            return (
              <div
                key={idx}
                className={`rounded-2xl bg-white/95 backdrop-blur-md border transition-all ${
                  isOpen
                    ? 'border-[#FF5500] shadow-[3px_3px_0px_0px_#FF5500]'
                    : 'border-slate-200 shadow-[2px_2px_0px_0px_#0F172A] hover:border-slate-400'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-orange-50/30 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-base text-slate-900">
                    {faq.q}
                  </span>
                  <span className="font-mono text-base font-bold text-[#FF5500] w-7 h-7 rounded-lg bg-orange-50 border border-orange-200/80 flex items-center justify-center shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
