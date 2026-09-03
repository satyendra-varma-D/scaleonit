import MasterHero from '../home/MasterHero'
import EcosystemProblem from '../home/EcosystemProblem'
import SixSystemsSection from '../home/SixSystemsSection'
import EcosystemFlowSection from '../home/EcosystemFlowSection'
import DeliverOnitSection from '../home/DeliverOnitSection'
import MasterIntelligenceSection from '../home/MasterIntelligenceSection'
import RoleBenefitsSection from '../home/RoleBenefitsSection'
import TargetAudienceSection from '../home/TargetAudienceSection'
import EcosystemRoadmapSection from '../home/EcosystemRoadmapSection'
import EcosystemFAQSection from '../home/EcosystemFAQSection'
import MasterCTA from '../home/MasterCTA'

interface HomePageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-transparent text-slate-900 selection:bg-orange-500/20 selection:text-[#FF5500]">
      {/* 01. WHAT IS SCALEONIT? — Hero */}
      <MasterHero onNavigate={onNavigate} />

      {/* 02. WHY DOES IT EXIST? — Explain the Problem */}
      <EcosystemProblem />

      {/* 03. THE SIX SYSTEMS — One platform. Six connected systems. */}
      <SixSystemsSection onNavigate={onNavigate} />

      {/* 04. HOW THE SYSTEMS CONNECT — The work moves from one system to the next */}
      <EcosystemFlowSection />

      {/* 05. WHERE WE ARE STARTING — DELIVER / ONIT (5-step process) */}
      <DeliverOnitSection onNavigate={onNavigate} />

      {/* 06. HOW AI HELPS — AI where it actually helps */}
      <MasterIntelligenceSection />

      {/* 07. WHY THE ECOSYSTEM MATTERS — The value is in the connection */}
      <RoleBenefitsSection />

      {/* 08. WHO IS IT FOR? — Built for IT and software service businesses */}
      <TargetAudienceSection />

      {/* 09. ECOSYSTEM ROADMAP — We are building the ecosystem one system at a time */}
      <EcosystemRoadmapSection />

      {/* 10. FAQ / AEO — Questions about ScaleOnIt */}
      <EcosystemFAQSection />

      {/* 11. FINAL CTA — Bring your business together */}
      <MasterCTA onNavigate={onNavigate} />
    </div>
  )
}

