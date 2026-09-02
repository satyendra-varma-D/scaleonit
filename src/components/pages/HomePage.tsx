import HeroSection from '../HeroSection'
import ProblemSection from '../ProblemSection'
import CategorySection from '../CategorySection'
import ArchitectureSection from '../ArchitectureSection'
import IntelligenceSection from '../IntelligenceSection'
import AIWorkforceSection from '../AIWorkforceSection'
import AgentConsoleSection from '../AgentConsoleSection'
import ConnectedContextSection from '../ConnectedContextSection'
import OrchestratorSection from '../OrchestratorSection'
import ConnectSection from '../ConnectSection'
import GovernanceSection from '../GovernanceSection'
import PlatformSection from '../PlatformSection'
import TransformationSection from '../TransformationSection'
import AdoptionSection from '../AdoptionSection'
import FutureSection from '../FutureSection'
import CTASection from '../CTASection'

interface HomePageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
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
      <CTASection onNavigateToTalkToUs={() => onNavigate('/demo')} />
    </main>
  )
}
