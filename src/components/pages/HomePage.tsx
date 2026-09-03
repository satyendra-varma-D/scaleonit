import MasterHero from '../home/MasterHero'
import EcosystemProblem from '../home/EcosystemProblem'
import EcosystemPhilosophy from '../home/EcosystemPhilosophy'
import SixSystemsSection from '../home/SixSystemsSection'
import RoleBenefitsSection from '../home/RoleBenefitsSection'
import MasterIntelligenceSection from '../home/MasterIntelligenceSection'
import EcosystemFlowSection from '../home/EcosystemFlowSection'
import DeliverOnitSection from '../home/DeliverOnitSection'
import BiggerVisionSection from '../home/BiggerVisionSection'
import MasterCTA from '../home/MasterCTA'

interface HomePageProps {
  onNavigate: (path: string, anchor?: string) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main className="bg-transparent text-slate-900 selection:bg-orange-500/20 selection:text-[#FF5500]">
      {/* 01 — HERO: ScaleOnIt Vision & Interactive Ecosystem Matrix */}
      <MasterHero onNavigate={onNavigate} />

      {/* 02 — THE PROBLEM: Why Businesses Need Better Connected Systems */}
      <EcosystemProblem />

      {/* 03 — THE IDEA: Different Problems. Different Systems. One Ecosystem. */}
      <EcosystemPhilosophy />

      {/* 04 — SIX PRODUCTS: GROW / DISCOVER / DELIVER / PEOPLE / MONEY / SERVE */}
      <SixSystemsSection onNavigate={onNavigate} />

      {/* 05 — HOW IT HELPS: Business Leaders / Teams / Operations / Customers */}
      <RoleBenefitsSection />

      {/* 06 — INTELLIGENCE: Specialized Intelligence Built into the Work */}
      <MasterIntelligenceSection />

      {/* 07 — HOW THE ECOSYSTEM WORKS: Multi-Directional Connected Context */}
      <EcosystemFlowSection />

      {/* 08 — STARTING WITH DELIVER: Introducing Flagship ONIT */}
      <DeliverOnitSection onNavigate={onNavigate} />

      {/* 09 — THE BIGGER VISION: Building the Ecosystem One System at a Time */}
      <BiggerVisionSection />

      {/* 10 — FINAL CTA: Future-Oriented Invitation to Explore ScaleOnIt & ONIT */}
      <MasterCTA onNavigate={onNavigate} />
    </main>
  )
}
