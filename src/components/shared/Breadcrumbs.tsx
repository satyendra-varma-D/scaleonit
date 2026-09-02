import React from 'react'

interface BreadcrumbsProps {
  items: { label: string; path?: string }[]
  onNavigate: (path: string) => void
}

export default function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null

  // Schema.org BreadcrumbList JSON-LD payload
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://scaleonit.com/',
      },
      ...items.map((it, idx) => ({
        '@type': 'ListItem',
        position: idx + 2,
        name: it.label,
        item: it.path ? `https://scaleonit.com${it.path}` : undefined,
      })),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-mid-text">
        <button
          onClick={() => onNavigate('/')}
          className="hover:text-onit font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-onit rounded px-1"
        >
          Home
        </button>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1
          return (
            <React.Fragment key={item.label}>
              <span className="text-slate-300" aria-hidden="true">
                /
              </span>
              {item.path && !isLast ? (
                <button
                  onClick={() => onNavigate(item.path!)}
                  className="hover:text-onit font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-onit rounded px-1"
                >
                  {item.label}
                </button>
              ) : (
                <span className="font-semibold text-midnight" aria-current="page">
                  {item.label}
                </span>
              )}
            </React.Fragment>
          )
        })}
      </nav>
    </>
  )
}
