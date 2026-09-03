import { useEffect } from 'react'
import { useRouter } from './utils/router'
import { updateDocumentSEO } from './data/seo'

// Layout
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'

// Pages
import HomePage from './components/pages/HomePage'
import PlatformHubPage from './components/pages/PlatformHubPage'
import AIWorkforcePage from './components/pages/AIWorkforcePage'
import ArchitecturePage from './components/pages/ArchitecturePage'
import SecurityPage from './components/pages/SecurityPage'
import SolutionsPage from './components/pages/SolutionsPage'
import CompanyPage from './components/pages/CompanyPage'
import TalkToUsPage from './components/TalkToUsPage'
import NotFoundPage from './components/pages/NotFoundPage'

// Dedicated Capability Pages (Phase C)
import DiscoverPage from './components/pages/capabilities/DiscoverPage'
import EngineerPage from './components/pages/capabilities/EngineerPage'
import QualityPage from './components/pages/capabilities/QualityPage'
import DeliverPage from './components/pages/capabilities/DeliverPage'
import ServePage from './components/pages/capabilities/ServePage'
import IntelligencePage from './components/pages/capabilities/IntelligencePage'
import ConnectPage from './components/pages/capabilities/ConnectPage'

import InteractiveBackgroundCanvas from './components/shared/InteractiveBackgroundCanvas'

export default function App() {
  const { currentPath, navigate } = useRouter()

  // Update Document Head SEO (Title, Meta Description, Open Graph, Canonical) dynamically
  useEffect(() => {
    updateDocumentSEO(currentPath)
  }, [currentPath])

  const renderRoute = () => {
    // 1. Homepage
    if (currentPath === '/') {
      return <HomePage onNavigate={navigate} />
    }

    // 2. Platform Hub
    if (currentPath === '/platform') {
      return <PlatformHubPage onNavigate={navigate} />
    }

    // 3. Dedicated Capability Routes (with clean /deliver alias)
    if (currentPath === '/platform/discover') {
      return <DiscoverPage onNavigate={navigate} />
    }
    if (currentPath === '/platform/engineer') {
      return <EngineerPage onNavigate={navigate} />
    }
    if (currentPath === '/platform/quality') {
      return <QualityPage onNavigate={navigate} />
    }
    if (currentPath === '/platform/deliver' || currentPath === '/deliver') {
      return <DeliverPage onNavigate={navigate} />
    }
    if (currentPath === '/platform/serve') {
      return <ServePage onNavigate={navigate} />
    }
    if (currentPath === '/platform/intelligence') {
      return <IntelligencePage onNavigate={navigate} />
    }
    if (currentPath === '/platform/connect') {
      return <ConnectPage onNavigate={navigate} />
    }

    // 4. AI Workforce Dedicated Page
    if (currentPath === '/ai-workforce') {
      return <AIWorkforcePage onNavigate={navigate} />
    }

    // 5. Architecture Dedicated Page
    if (currentPath === '/architecture') {
      return <ArchitecturePage onNavigate={navigate} />
    }

    // 6. Security & Governance Dedicated Page
    if (currentPath === '/security') {
      return <SecurityPage onNavigate={navigate} />
    }

    // 7. Solutions Routes
    if (currentPath === '/solutions/it-services') {
      return <SolutionsPage slug="it-services" onNavigate={navigate} />
    }
    if (currentPath === '/solutions/software-development') {
      return <SolutionsPage slug="software-development" onNavigate={navigate} />
    }
    if (currentPath === '/solutions') {
      return <SolutionsPage slug="it-services" onNavigate={navigate} />
    }

    // 8. Company Dedicated Page (with clean /about alias)
    if (currentPath === '/company' || currentPath === '/about') {
      return <CompanyPage onNavigate={navigate} />
    }

    // 9. Demo / Talk To Us / Contact Page
    if (currentPath === '/demo' || currentPath === '/talk-to-us' || currentPath === '/contact') {
      return <TalkToUsPage onBackToHome={() => navigate('/')} />
    }


    // 10. 404 Catch-All
    return <NotFoundPage onNavigate={navigate} />
  }

  return (
    <div
      className="relative min-h-full bg-white text-slate-900 selection:bg-orange-500/20 selection:text-[#FF5500]"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* Global Interactive Constellation & Ambient Mesh Canvas */}
      <InteractiveBackgroundCanvas />

      <Navigation currentPath={currentPath} onNavigate={navigate} />

      <main className="relative z-10">
        {renderRoute()}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  )
}
