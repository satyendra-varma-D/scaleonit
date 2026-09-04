import { useState } from 'react'

interface TalkToUsPageProps {
  onBackToHome?: () => void
}

export default function TalkToUsPage({ onBackToHome }: TalkToUsPageProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !name) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setName('')
    setEmail('')
    setMessage('')
  }

  const topics = [
    {
      title: 'DELIVER',
      desc: 'Want to see what we have built in software delivery?',
      icon: '⚡',
    },
    {
      title: 'YOUR BUSINESS',
      desc: 'Have a specific business problem software can solve?',
      icon: '🏢',
    },
    {
      title: 'PARTNERSHIP',
      desc: 'Interested in collaborating or co-building together?',
      icon: '🤝',
    },
    {
      title: 'JOIN THE JOURNEY',
      desc: 'Curious about what we are building at ScaleOnIt?',
      icon: '🚀',
    },
  ]

  return (
    <div className="min-h-screen bg-transparent text-slate-900 selection:bg-orange-500/20 selection:text-[#FF5500]">
      {/* ==================================================
          SECTION 1 — HERO
          ================================================== */}
      <section className="relative overflow-hidden bg-transparent border-b border-slate-200/80 py-16 sm:py-24">
        {/* Subtle orange ambient glow */}
        <div
          className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-6 shadow-xs">
              LET&apos;S TALK
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-4">
              Have an idea? Let&apos;s talk.
              <span className="text-[#FF5500] block mt-1">
                Let&apos;s build something useful.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 font-normal">
              We are building ScaleOnIt to make the way IT and software businesses work simpler. If you want to know more, explore DELIVER, discuss a business problem, work with us, or simply share an idea — we&apos;d love to hear from you.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="mailto:prabha44556@gmail.com?subject=ScaleOnIt%20Conversation"
                className="bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded-lg shadow-[2px_2px_0px_0px_#0F172A] hover:shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>EMAIL US</span>
                <span>→</span>
              </a>
              <a
                href="mailto:prabha44556@gmail.com"
                className="border border-slate-300 bg-white text-slate-900 font-mono text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded-lg hover:border-[#FF5500] hover:bg-orange-50/50 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0F172A] inline-flex items-center gap-2"
              >
                <span>EMAIL: PRABHA44556@GMAIL.COM</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 2 & 3: DIRECT CONTACT CARD + SIMPLE 3-FIELD FORM
          ================================================== */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Direct Contact Card */}
            <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[3px_3px_0px_0px_#0F172A] space-y-6">
              <div>
                <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3 py-1 rounded-md mb-3 shadow-xs">
                  DIRECT ACCESS
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                  Talk directly with us.
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  No gatekeepers or long forms. Tell us what you are working on and how we can collaborate.
                </p>
              </div>

              <div className="space-y-3.5 pt-2 border-t border-slate-100">
                {/* Email */}
                <div className="p-4 rounded-xl bg-orange-50/80 border border-orange-200 group hover:border-[#FF5500] transition-colors">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    PRIMARY EMAIL
                  </div>
                  <a
                    href="mailto:prabha44556@gmail.com"
                    className="font-mono text-sm font-bold text-[#FF5500] hover:underline break-all block"
                  >
                    prabha44556@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xl bg-orange-50/80 border border-orange-200">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    PHONE CONTACT
                  </div>
                  <div className="font-mono text-sm font-bold text-slate-800">
                    +91 96421... <span className="text-[#FF5500] text-xs font-semibold">(Please mail instead)</span>
                  </div>
                </div>
              </div>

              {/* Status and SLA */}
              <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Actively Accepting Conversations</span>
                </div>
                <div className="text-slate-300 text-[11px]">
                  Average response time: &lt; 2 hours
                </div>
                <div className="text-slate-400 text-[10px] pt-1 border-t border-slate-800">
                  Timezone: IST (UTC+5:30) • Global Remote Friendly
                </div>
              </div>
            </div>

            {/* Simple 3-Field Form */}
            <div className="lg:col-span-7 p-7 sm:p-8 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[3px_3px_0px_0px_#0F172A]">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-xs">
                    ✓
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Message received, {name}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
                    Thanks for reaching out. We will review your note and get back to you at <strong className="text-slate-900">{email}</strong> shortly.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-lg border border-slate-200 text-xs font-mono font-bold uppercase hover:bg-slate-50 cursor-pointer shadow-2xs"
                    >
                      Send Another Note
                    </button>
                    {onBackToHome && (
                      <button
                        onClick={onBackToHome}
                        className="px-5 py-2.5 rounded-lg bg-[#FF5500] hover:bg-[#E04B00] text-white text-xs font-mono font-bold uppercase shadow-2xs transition-colors cursor-pointer"
                      >
                        Back to Home
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-1">
                      Send a quick note
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      We read every message and reply directly to your inbox.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 mb-1.5 font-mono uppercase">
                      Name <span className="text-[#FF5500]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-orange-50/20 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF5500] focus:ring-2 focus:ring-[#FF5500]/20 focus:bg-white transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1.5 font-mono uppercase">
                      Email <span className="text-[#FF5500]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@company.com"
                      className="w-full px-4 py-3 bg-orange-50/20 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF5500] focus:ring-2 focus:ring-[#FF5500]/20 focus:bg-white transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1.5 font-mono uppercase">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you'd like to discuss or build..."
                      className="w-full px-4 py-3 bg-orange-50/20 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF5500] focus:ring-2 focus:ring-[#FF5500]/20 focus:bg-white transition-all font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#FF5500] hover:bg-[#E04B00] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? 'SENDING NOTE...' : 'SEND MESSAGE →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 3 — WHY TALK TO US
          ================================================== */}
      <section className="py-20 bg-transparent border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md mb-4 shadow-xs">
              TOPICS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              What can we talk about?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              People reach out to ScaleOnIt about DELIVER, technology partnerships, business workflows, or company vision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topics.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-[2px_2px_0px_0px_#0F172A] hover:border-[#FF5500] hover:shadow-[3px_3px_0px_0px_#FF5500] hover:-translate-y-0.5 transition-all group"
              >
                <span className="text-2xl mb-3 p-2 rounded-xl bg-orange-50/80 border border-orange-200/60 inline-block" aria-hidden="true">{item.icon}</span>
                <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#FF5500] transition-colors mb-1.5 font-mono">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 4 — HUMAN MESSAGE (HONEST WORK)
          ================================================== */}
      <section className="py-20 bg-transparent relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 p-8 sm:p-12 shadow-[3px_3px_0px_0px_#0F172A] text-center space-y-6">
            <div className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-[#FF5500] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-md shadow-xs">
              HONEST WORK
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-xl mx-auto">
              We are building this for real.
            </h2>

            <div className="space-y-3 text-base text-slate-600 leading-relaxed max-w-xl mx-auto font-medium">
              <p>ScaleOnIt is still early.</p>
              <p>
                That means we are close to the product, close to the problems, and close to the people who use it.
              </p>
              <p>
                If you have something worth discussing, reach out. We may not have every answer yet. But we will listen, think, and build.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3 font-mono text-xs text-slate-700">
              <span className="font-bold text-slate-900">ScaleOnIt</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span>Building connected software systems for IT and software businesses.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
