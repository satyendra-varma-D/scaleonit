import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import CategorySection from './components/CategorySection'
import ArchitectureSection from './components/ArchitectureSection'
import IntelligenceSection from './components/IntelligenceSection'
import AIWorkforceSection from './components/AIWorkforceSection'
import AgentConsoleSection from './components/AgentConsoleSection'
import ConnectedContextSection from './components/ConnectedContextSection'
import OrchestratorSection from './components/OrchestratorSection'
import ConnectSection from './components/ConnectSection'
import GovernanceSection from './components/GovernanceSection'
import PlatformSection from './components/PlatformSection'
import TransformationSection from './components/TransformationSection'
import AdoptionSection from './components/AdoptionSection'
import FutureSection from './components/FutureSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import TalkToUsPage from './components/TalkToUsPage'

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'talk-to-us'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      if (hash === '#talk-to-us' || hash === '#contact' || hash === '#demo') {
        return 'talk-to-us'
      }
    }
    return 'home'
  })

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === '#talk-to-us' || hash === '#contact' || hash === '#demo') {
        setCurrentView('talk-to-us')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash && hash !== '#' && hash !== '#hero') {
        setCurrentView('home')
        setTimeout(() => {
          const el = document.querySelector(hash)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          }
        }, 50)
      } else {
        setCurrentView('home')
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigate = (view: 'home' | 'talk-to-us', sectionHash?: string) => {
    setCurrentView(view)
    if (view === 'talk-to-us') {
      window.location.hash = '#talk-to-us'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      if (sectionHash) {
        window.location.hash = sectionHash
        setTimeout(() => {
          const el = document.querySelector(sectionHash)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          }
        }, 50)
      } else {
        window.location.hash = '#hero'
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="min-h-full bg-white text-midnight" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Navigation currentView={currentView} onNavigate={handleNavigate} />

      {currentView === 'talk-to-us' ? (
        <main>
          <TalkToUsPage onBackToHome={() => handleNavigate('home')} />
        </main>
      ) : (
        <main>
          {/* 01 — What is this? */}
          <HeroSection />

          {/* 02 — The Problem */}
          <ProblemSection />

          {/* 03 — The New Operating Model */}
          <CategorySection />

          {/* 04 — Architecture */}
          <ArchitectureSection />

          {/* 05 — Intelligence */}
          <IntelligenceSection />

          {/* 06 — AI Workforce */}
          <AIWorkforceSection />

          {/* 07 — Agent Execution */}
          <AgentConsoleSection />

          {/* 08 — Connected Context */}
          <ConnectedContextSection />

          {/* 09 — Orchestration */}
          <OrchestratorSection />

          {/* 10 — Connect Existing Systems */}
          <ConnectSection />

          {/* 11 — Governance */}
          <GovernanceSection />

          {/* 12 — Complete Platform */}
          <PlatformSection />

          {/* 13 — Business Transformation */}
          <TransformationSection />

          {/* 14 — Adoption */}
          <AdoptionSection />

          {/* 15 — The Future */}
          <FutureSection />

          {/* 16 — Final CTA */}
          <CTASection onNavigateToTalkToUs={() => handleNavigate('talk-to-us')} />
        </main>
      )}

      <Footer
        onNavigateToTalkToUs={() => handleNavigate('talk-to-us')}
        onNavigateToSection={(hash) => handleNavigate('home', hash)}
      />
    </div>
  )
}

