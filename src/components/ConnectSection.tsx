import { useState } from 'react'

const categories = [
  {
    id: 'crm', label: 'CRM', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200',
    systems: ['Salesforce', 'HubSpot', 'Microsoft Dynamics', 'Pipedrive'],
  },
  {
    id: 'erp', label: 'ERP', color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-200',
    systems: ['SAP', 'Oracle', 'NetSuite', 'Microsoft Dynamics ERP'],
  },
  {
    id: 'dev', label: 'Dev & Code', color: 'text-slate-700', bg: 'bg-slate-50', border: 'border-slate-200',
    systems: ['GitHub', 'GitLab', 'Azure DevOps', 'Bitbucket'],
  },
  {
    id: 'project', label: 'Project Mgmt', color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200',
    systems: ['Jira', 'Linear', 'Monday.com', 'Asana'],
  },
  {
    id: 'cloud', label: 'Cloud', color: 'text-data-cyan', bg: 'bg-cyan-light', border: 'border-cyan-200',
    systems: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes'],
  },
  {
    id: 'data', label: 'Data', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200',
    systems: ['Snowflake', 'Databricks', 'BigQuery', 'PostgreSQL'],
  },
  {
    id: 'comms', label: 'Communication', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200',
    systems: ['Slack', 'Microsoft Teams', 'Email (SMTP)', 'Zoom'],
  },
  {
    id: 'custom', label: 'Custom & APIs', color: 'text-mid-text', bg: 'bg-soft', border: 'border-border-base',
    systems: ['REST APIs', 'GraphQL', 'Webhooks', 'Custom connectors'],
  },
]

const protocols = ['REST APIs', 'Webhooks', 'OAuth 2.0', 'API Keys', 'Events', 'Data Sync', 'Bi-directional', 'Field Mapping', 'Scheduled Sync', 'Custom Connectors']

export default function ConnectSection() {
  const [activeCategory, setActiveCategory] = useState('crm')
  const cat = categories.find((c) => c.id === activeCategory)!

  return (
    <section id="connect" className="py-28 bg-midnight overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-data-cyan mb-6 border border-data-cyan/20 bg-data-cyan/5 px-4 py-2 rounded-full">
            ONIT Connect
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Your stack doesn&apos;t<br />have to disappear.<br />
            <span className="text-slate-400">It just has to connect.</span>
          </h2>
          <p className="text-base text-slate-400 max-w-xl mx-auto">
            ONIT is designed to work with the systems you already run. Keep what works. Connect what matters. Replace only what you want to replace.
          </p>
        </div>

        {/* Three-pillar message */}
        <div className="grid grid-cols-3 gap-4 mb-14 max-w-2xl mx-auto">
          {[
            { headline: 'KEEP WHAT WORKS', sub: 'Preserve your existing stack' },
            { headline: 'CONNECT WHAT MATTERS', sub: 'Bridge tools through ONIT' },
            { headline: 'REPLACE WHAT YOU WANT', sub: 'Adopt at your own pace' },
          ].map((p) => (
            <div key={p.headline} className="text-center p-4 rounded-xl border border-white/8 bg-white/[0.03]">
              <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-data-cyan mb-1">{p.headline}</div>
              <div className="text-xs text-slate-500">{p.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Hub visualization */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-72 h-72">
              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-20 h-20 rounded-2xl bg-data-cyan flex flex-col items-center justify-center shadow-xl shadow-data-cyan/30">
                  <span className="text-white font-extrabold text-sm leading-none tracking-tight">ONIT</span>
                  <span className="text-cyan-100 text-[9px] font-semibold tracking-widest uppercase mt-1">Connect</span>
                </div>
              </div>

              {/* Rings */}
              <div className="absolute inset-0 rounded-full border border-data-cyan/10 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-4 rounded-full border border-data-cyan/8" />

              {/* Category nodes */}
              {categories.map((c, i) => {
                const angle = (i / categories.length) * 360
                const rad = (angle * Math.PI) / 180
                const r = 110
                const cx = 50 + (r / 2.8) * Math.cos(rad)
                const cy = 50 + (r / 2.8) * Math.sin(rad)
                const isActive = c.id === activeCategory
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCategory(c.id)}
                    aria-pressed={isActive}
                    className="absolute"
                    style={{ left: `${cx}%`, top: `${cy}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    <div className={`text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-lg border transition-all duration-150 whitespace-nowrap ${
                      isActive
                        ? `${c.bg} ${c.border} ${c.color} shadow-md scale-110`
                        : 'border-white/15 bg-white/5 text-slate-400 hover:text-white hover:border-white/30'
                    }`}>
                      {c.label}
                    </div>
                  </button>
                )
              })}

              {/* Lines from center to nodes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                {categories.map((c, i) => {
                  const angle = (i / categories.length) * 360
                  const rad = (angle * Math.PI) / 180
                  const r = 110
                  const cx = 50 + (r / 2.8) * Math.cos(rad)
                  const cy = 50 + (r / 2.8) * Math.sin(rad)
                  return (
                    <line
                      key={c.id}
                      x1="50%" y1="50%"
                      x2={`${cx}%`} y2={`${cy}%`}
                      stroke={c.id === activeCategory ? 'rgba(8,145,178,0.4)' : 'rgba(255,255,255,0.05)'}
                      strokeWidth={c.id === activeCategory ? 1.5 : 1}
                    />
                  )
                })}
              </svg>
            </div>
          </div>

          {/* Detail panel */}
          <div>
            <div className={`rounded-2xl border ${cat.border} ${cat.bg} p-6 mb-6`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`text-sm font-bold uppercase tracking-wider ${cat.color}`}>{cat.label}</div>
                <span className="text-[10px] text-mid-text">Integration category</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {cat.systems.map((s) => (
                  <span key={s} className={`text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border ${cat.border} ${cat.color}`}>
                    {s}
                  </span>
                ))}
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border ${cat.border} text-mid-text`}>
                  + more
                </span>
              </div>
              <p className="text-xs text-mid-text leading-relaxed">
                These represent example systems in this category. ONIT Connect is designed to work with your existing stack through standard protocols. Contact us to discuss specific integration requirements.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-mid-text mb-3">Connection Protocols</div>
              <div className="flex flex-wrap gap-2">
                {protocols.map((p) => (
                  <span key={p} className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg border border-white/10 bg-white/[0.04] text-slate-400">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl border border-data-cyan/20 bg-data-cyan/5">
              <div className="text-xs font-semibold text-data-cyan mb-1">Don&apos;t replace your stack. Connect it.</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                ONIT CONNECT + ONIT intelligence + ONIT workflows + AI workers — operating across your existing systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
