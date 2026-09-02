# ONIT Phase 2 — Codebase & Product Architecture Audit

**Document Version:** 1.0.0  
**Date:** September 2, 2026  
**Auditor:** Antigravity / DeepMind AI Pair Programmer  
**Product:** ONIT by ScaleOnIt — The AI-Native Operating Platform for Software Delivery & IT Operations  
**Status:** Audit & Strategic Architecture Phase (Read-only Analysis)

---

## Executive Summary

This architecture audit establishes the baseline technical reality of the current ONIT repository versus the target product requirements for **Phase 2 (Product Implementation & Operational Workflows)**.

The current codebase is an **ultra-high-fidelity interactive frontend presentation and marketing SPA (Single Page Application)** built with React 19, Tailwind CSS v4, and Vite 8. It effectively demonstrates the vision, UX aesthetic, category positioning, and conceptual multi-agent workflows of ONIT. However, all agent execution, data flows, lead generation, requirements drafting, and integrations are currently **mocked, simulated in client-side React state, or static demonstration data**.

This audit details the gap analysis across 20 distinct technical dimensions and maps a phased, non-destructive path to transition ONIT from an interactive showcase into a functional, multi-tenant operating platform.

---

## 1. Current Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                               CURRENT ARCHITECTURE                              │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Browser / Client Runtime (React 19 + TypeScript)                              │
│  ├── Navigation (Hash Listener)                                                 │
│  ├── View Dispatcher (home vs. talk-to-us)                                      │
│  ├── 16 Vertical Homepage Sections (Hero, Problem, Platform, Workforce, etc.)  │
│  ├── Interactive Simulators (Agent Console, Governance Demo, Context Pipeline)  │
│  └── In-Memory State (useState / useEffect / local JS data arrays)             │
│                                                                                 │
│  Vite 8 Build & Dev Server                                                     │
│  ├── @tailwindcss/vite (Tailwind v4 theme engine)                              │
│  ├── figmaSiteConfiguration (HTML tag & schema injector)                       │
│  └── Static File Server (robots.txt, sitemap.xml)                              │
│                                                                                 │
│  Backend / Database / API: ⚠️ NONE (100% Client-Side Static Bundle)             │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

- **Pattern:** Pure Single-Page Application (SPA) client bundle.
- **Data Layer:** Zero persistent storage (no IndexedDB, no localStorage, no database).
- **Communication:** Zero live API requests, WebSockets, or HTTP backends. All interactions resolve in synchronous or timer-based (`setTimeout`) local state updates.

---

## 2. Current Application Structure

```
ScaleOnIT/
├── .figma/
│   └── make/site.json               # Site configuration metadata (SEO, OG tags, GA ID)
├── public/
│   ├── favicon.svg                  # Brand favicon
│   └── sitemap.xml                  # XML sitemap (single URL: https://scaleonit.com/)
├── src/
│   ├── components/
│   │   ├── AdoptionSection.tsx       # 3-phase adoption model (Use -> Connect -> Operate)
│   │   ├── AgentConsoleSection.tsx   # Simulated terminal console with simulated streaming logs
│   │   ├── AIWorkforceSection.tsx    # 8 interactive AI worker profile cards
│   │   ├── ArchitectureSection.tsx   # 7-layer SDLC architecture accordion
│   │   ├── CategorySection.tsx       # Orbiting system category diagram
│   │   ├── ConnectSection.tsx        # Rotating hub & 8 integration category cards
│   │   ├── ConnectedContextSection.tsx # 8-stage interactive artifact handoff pipeline
│   │   ├── CTASection.tsx            # Bottom call to action & architecture link
│   │   ├── Footer.tsx                # Multi-column footer with anchor triggers
│   │   ├── FutureSection.tsx         # Vision equation (People + Process + Data...)
│   │   ├── GovernanceSection.tsx     # 8 governance pillars + interactive approval simulator
│   │   ├── HeroSection.tsx           # Hero with pulsating 9-stage lifecycle chain
│   │   ├── IntelligenceSection.tsx   # Task-to-intelligence mapping matrix & 10 pillars
│   │   ├── Navigation.tsx            # Sticky header with anchor scrolling & talk-to-us link
│   │   ├── OrchestratorSection.tsx   # 10-layer goal decomposition stepper
│   │   ├── PlatformSection.tsx       # 11-capability selector & detail inspector
│   │   ├── ProblemSection.tsx        # Before/After interactive fragmentation graph
│   │   ├── TalkToUsPage.tsx          # Full-page booking, lead form, FAQ & schedule simulator
│   │   └── TransformationSection.tsx # Role-based persona Q&A (Founder, CTO, Delivery...)
│   ├── imports/
│   │   └── pasted_text/
│   │       └── onit-tech-website-brief.md # Original foundational brand brief
│   ├── App.tsx                       # Root view router (home vs. talk-to-us) & hash watcher
│   ├── index.css                     # Font imports, Tailwind v4 @theme, custom keyframe animations
│   ├── main.tsx                      # React DOM root render
│   └── vite-env.d.ts                 # TypeScript Vite environment definitions
├── AGENTS.md                         # Project development rules & canonical structure
├── index.html                        # HTML entry point with Figma comment slots
├── package.json                      # React 19, Vite 8, Tailwind v4 dependencies
├── tsconfig.json                     # TypeScript compiler configuration
└── vite.config.ts                    # Vite plugins, aliases, HTML transforms, robots middleware
```

---

## 3. Current Modules & Features

| Module / Section | Current Feature Set | Implementation Type |
|---|---|---|
| **GROW** | Lead qualification, opportunity tracking, AI SDR mention | Static metadata card in `PlatformSection` |
| **DISCOVER** | Requirements gathering, BRD generation, user stories, AI Business Analyst | Interactive profile in `AIWorkforceSection`, artifact viewer in `ConnectedContextSection`, log simulation in `AgentConsoleSection` |
| **DESIGN** | UX flows, wireframes, design systems, AI UX Designer | Flow artifact in `ConnectedContextSection`, console step in `AgentConsoleSection` |
| **ENGINEER** | Architecture docs, PR generation, code review, AI Solution Architect, AI Engineering Agent | Dual worker profiles in `AIWorkforceSection`, PR preview in `ConnectedContextSection`, interactive policy simulator in `GovernanceSection` |
| **QUALITY** | Test strategies, test cases, automated testing, quality gates, AI QA Engineer | Worker profile in `AIWorkforceSection`, test report card in `ConnectedContextSection` |
| **DELIVER** | Sprint tracking, release records, AI Project Manager, AI DevOps Engineer | Dual worker profiles in `AIWorkforceSection`, release artifact in `ConnectedContextSection` |
| **SERVE** | Support ticketing, SLA monitoring, AI Support Agent, AI Customer Success | Worker profile in `AIWorkforceSection`, support ticket card in `ConnectedContextSection` |
| **PEOPLE** | Capacity planning, skills matrix, utilization, AI Resource Agent | Static metadata card in `PlatformSection` |
| **FINANCE** | Budget tracking, invoice drafts, margin analysis, AI Finance Agent | Worker profile in `AIWorkforceSection`, intelligence rule in `IntelligenceSection` |
| **INTELLIGENCE** | Model routing (Reasoning, Coding, Analytical, Deterministic, RAG) | 6-card task matrix and 10-pill architecture in `IntelligenceSection` |
| **CONNECT** | 8 categories (CRM, ERP, Dev, PM, Cloud, Data, Comms, Custom), 10 protocols | Rotating hub with 8 categories in `ConnectSection` |
| **Talk to Us** | 30-min architect scheduling, focus area selector, stack picker, FAQ accordion, submission simulator | Interactive multi-step form with stateful confirmation screen in `TalkToUsPage` |

---

## 4. Existing Workflows

All existing workflows operate strictly in client-side memory:

1. **Hash Navigation Workflow:**  
   Clicking a navigation or footer item triggers `handleLinkClick` -> updates `window.location.hash` -> sets `currentView` to `'home'` or `'talk-to-us'` -> executes `scrollIntoView` for section anchors.
2. **Interactive Capability Exploration:**  
   Clicking any of the 11 capability buttons in `PlatformSection.tsx` updates `selected` state -> finds matching object in `modules` array -> displays metadata.
3. **Agent Console Log Simulation:**  
   `AgentConsoleSection.tsx` uses a `useEffect` timer interval (1800ms) to append items from `liveLog` into `log` state, loops after 4000ms back to `initialLog`.
4. **Governance Approval Simulation:**  
   `GovernanceSection.tsx` displays a simulated deployment request (`deploy --env production`). Clicking "Approve Deployment" or "Reject" updates `decision` state and changes the card color. "Reset demo" reverts state to `pending`.
5. **Interactive Consultation Booking:**  
   `TalkToUsPage.tsx` handles date/slot selection, tech stack chip multi-selection, and form input validation. On submit, sets `isSubmitting(true)`, waits 900ms via `setTimeout`, and displays a confirmation screen with the submitted data.

---

## 5. Existing Data Structures

Data is structured as local TypeScript/JavaScript arrays within individual component files:

- **Modules Array (`PlatformSection.tsx`):**
  ```typescript
  { id: string, name: string, icon: string, desc: string, workflows: string[], ai: string[], color: string, bg: string, border: string, accent: string }
  ```
- **Workers Array (`AIWorkforceSection.tsx`):**
  ```typescript
  { id: string, name: string, icon: string, status: string, role: string, goal: string, context: string[], tools: string[], actions: string[], output: string, approval: string, module: string, color: string, bg: string, border: string, dot: string }
  ```
- **Stages Pipeline (`ConnectedContextSection.tsx`):**
  ```typescript
  { id: string, label: string, icon: string, artifact: string, preview: string[], format: string, color: string, bg: string, border: string }
  ```
- **Integration Categories (`ConnectSection.tsx`):**
  ```typescript
  { id: string, label: string, color: string, bg: string, border: string, systems: string[] }
  ```
- **Layers Array (`ArchitectureSection.tsx`):**
  ```typescript
  { num: number, title: string, subtitle: string, color: string, bg: string, border: string, accent: string, items: string[], detail: string }
  ```

---

## 6. Existing AI Implementation

- **Current Status:** **100% Mocked / Conceptual Representation.**
- There are no LLM API calls (OpenAI, Anthropic, Gemini, Ollama, Hugging Face, etc.).
- There is no vector database or RAG implementation (Chroma, Pinecone, pgvector, Qdrant).
- There is no autonomous agent loop or prompt orchestration (LangChain, LlamaIndex, AutoGen, CrewAI).
- **Value:** The data models in `AIWorkforceSection.tsx` and `IntelligenceSection.tsx` already correctly define the exact **ontology** of agents needed for Phase 2: Role, Goal, Context, Tools, Actions, Output, Permissions, and Human Approval Gates.

---

## 7. Existing Integrations

- **Current Status:** **100% Showcase / Metadata List.**
- No live OAuth 2.0 flows, webhooks, or third-party SDKs are installed or connected.
- The 30+ tools listed in `ConnectSection.tsx` (Salesforce, SAP, Jira, GitHub, AWS, Snowflake, Slack, etc.) exist only as string labels inside the `categories` array.

---

## 8. Current Routing & Navigation

- **Router Type:** Custom hash-based view switcher in [`src/App.tsx`](file:///c:/Users/pavan/Downloads/ScaleOnIT/src/App.tsx).
- **Supported Hash Routes:**
  - `#talk-to-us`, `#contact`, `#demo` -> Renders `<TalkToUsPage />`
  - `#hero`, `#problem`, `#platform-intro`, `#architecture`, `#intelligence`, `#ai-workforce`, `#agent-console`, `#connected-context`, `#orchestration`, `#connect`, `#governance`, `#platform`, `#transformation`, `#adoption`, `#future`, `#cta` -> Renders `<main>` homepage and scrolls to DOM ID.
- **Limitations:**
  - Does not support standard clean URL paths (`/grow`, `/platform/discover`, `/workspace`).
  - Search engines only index the single root URL `https://scaleonit.com/`.

---

## 9. Current Authentication & Authorization

- **Current Status:** **None.**
- No user session state, cookies, JWT tokens, RBAC models, or login/registration screens exist.
- Everyone accessing the application sees the public presentation view.

---

## 10. Current Design System

The application has a **complete, polished, enterprise-grade design system**:

- **Typography:** Google Fonts `Inter` (Body/Display) and `JetBrains Mono` (Terminal/Code/Metrics).
- **Color Palette (defined in `src/index.css` via Tailwind v4 `@theme`):**
  - `--color-midnight`: `#0B1220` (Dark background & heavy headings)
  - `--color-onit`: `#2563EB` (Primary Brand Blue)
  - `--color-onit-hover`: `#1D4ED8` (Primary Hover State)
  - `--color-onit-light`: `#EFF6FF` (Soft Blue Tint)
  - `--color-ai-violet`: `#7C3AED` (AI / Agent Accents)
  - `--color-ai-light`: `#F5F3FF` (AI Soft Violet Tint)
  - `--color-data-cyan`: `#0891B2` (Data & Integration Accent)
  - `--color-cyan-light`: `#ECFEFF` (Cyan Soft Tint)
  - `--color-pearl`: `#F8FAFC` (Subtle off-white background)
  - `--color-soft`: `#F1F5F9` (Card/Pill background)
  - `--color-border-base`: `#E2E8F0` (Border standard)
  - `--color-mid-text`: `#475569` (Secondary body text)
- **Micro-Animations:** Custom CSS keyframes in `index.css` (`lifecycle-pulse`, `flow-dot`, `blink-cursor`, `slide-in-up`, `pulse-status`, `float-up`).
- **Accessibility:** Reduced-motion media query handling in `src/index.css`, `aria-pressed`, `aria-expanded`, semantic `<nav>`, `<main>`, `<section>`, `<footer>`.

---

## 11. Current Technical Stack

- **Runtime:** React 19.0.0, React DOM 19.0.0
- **Language:** TypeScript 5.7.0
- **Styling Engine:** Tailwind CSS v4.0.0 with `@tailwindcss/vite`
- **Build Tool:** Vite 8.0.5 with `@vitejs/plugin-react`
- **Code Quality:** oxfmt 0.2.0
- **Node & Environment:** Node.js 22+, ES Modules (`"type": "module"`)

---

## 12. Current Deployment Setup

- Hosted inside Figma Make preview & build pipeline.
- Production build script: `vite build` (outputs static assets to `dist/`).
- `vite.config.ts` includes custom middlewares for `/robots.txt` generation and HTML comment slot replacement for OpenGraph, Twitter, and Schema.org JSON-LD tags.

---

## 13. Reusable Components

The existing component library provides significant reusable building blocks for Phase 2 UI:

1. **`Navigation.tsx`**: Header with logo, responsive mobile drawer, and CTA navigation.
2. **`Footer.tsx`**: Comprehensive sitemap footer with capability and solution links.
3. **`TalkToUsPage.tsx`**: Reusable form elements, expert cards, calendar slot pickers, FAQ accordions, and confirmation dialogs.
4. **`AgentConsoleSection.tsx` (Terminal Sub-component)**: The terminal window frame with pulse indicators and timestamped log streaming can be reused directly as an **Agent Execution Console / Debugger**.
5. **`GovernanceSection.tsx` (Approval Modal/Card)**: The policy decision card (`Requested Action`, `Policy`, `Requested by`, `Approve`/`Reject`) can be extracted as the universal **Human-in-the-Loop Approval Modal**.
6. **`ConnectedContextSection.tsx` (Artifact Inspector)**: The multi-stage pipeline and artifact viewer can be converted into the **Project Lifecycle Breadcrumb & Artifact Viewer**.

---

## 14. Technical Debt

1. **Co-located Hardcoded Data:** Data arrays (`modules`, `workers`, `layers`, `stages`, `categories`) are embedded directly inside JSX files instead of residing in centralized, typed domain modules (`src/data/` or `src/types/`).
2. **Duplicate Data Definitions:** Concepts (e.g., worker roles, capability definitions) are repeated across `HeroSection`, `AIWorkforceSection`, `PlatformSection`, `ArchitectureSection`, and `Footer`.
3. **Single File Monoliths:** `TalkToUsPage.tsx` (800 lines) mixes consultation booking, contact forms, FAQ state, calendar selection, and expert rosters in a single file.
4. **Lack of URL History State:** Navigating between capabilities or views does not update browser history or support deep linking.

---

## 15. Prototype vs. Production-Ready Areas

| Area | Current Status | Production Readiness Assessment |
|---|---|---|
| **Design System & Tokens** | Production Ready | Colors, typography, spacing, and micro-interactions are polished, cohesive, and enterprise-grade. |
| **Public Landing Page UI** | Production Ready | The 16 homepage sections deliver a compelling, high-converting presentation of the platform. |
| **Contact / Booking UI** | 85% Ready | Form validation and UI are solid; needs connection to a real webhook/API endpoint (e.g., Resend, SendGrid, or CRM). |
| **Agent Execution Engine** | 0% (Prototype) | Currently mocked via `setInterval`/`setTimeout`. Needs real backend agent execution engine. |
| **Prospect Research Engine** | 0% (Prototype) | UI descriptions exist; needs real scraper/API orchestration and verification pipeline. |
| **BDE Call & Voice Integration** | 0% (Prototype) | Conceptual; needs WebRTC / Vapi / ElevenLabs / Twilio provider integration. |
| **Requirements / BRD Editor** | 10% (Prototype) | Static previews exist; needs interactive draft editor with PM approval and baseline locking. |
| **Project Workspace** | 0% (Prototype) | Conceptual; needs project context store, task breakdown, and technical baseline tracker. |

---

## 16. What Can Be Reused

1. **100% of the Public Landing Page:** Can remain intact as the public face of ScaleOnIt / ONIT.
2. **Design Tokens & CSS Animations:** `src/index.css` is completely reusable for all Phase 2 operational workspaces.
3. **UI Component Patterns:** Badge styles, accordion panels, dark-mode terminal cards, approval decision widgets, and status pills.
4. **Data Schemas & Types:** The TypeScript structures representing Agents, Capabilities, Lifecycles, and Governance layers can be extracted directly into `@types/onit.ts`.

---

## 17. What Needs Refactoring

1. **Extract Data Models:** Move all static mock arrays into dedicated typed files in `src/data/` (`capabilities.ts`, `workers.ts`, `integrations.ts`, `architecture.ts`).
2. **Modularize Large Components:** Decompose `TalkToUsPage.tsx` into smaller sub-components (`BookingCalendar`, `InquiryForm`, `ExpertCard`, `FaqAccordion`).
3. **Upgrade Routing Infrastructure:** Introduce path-based view routing or a lightweight router allowing the public marketing site and internal operational workspaces to coexist cleanly.

---

## 18. What is Missing for ONIT Phase 2 (Gap Analysis)

To fulfill the Phase 2 product direction, the following core operational layers must be designed and built:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                          PHASE 2 REQUIRED CAPABILITIES                          │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  1. GROW — Prospect Intelligence Engine                                         │
│     ├── Natural-Language Prompt Parser & Parameter Extractor                     │
│     ├── Structured Search Filter & Query Builder                                │
│     ├── Multi-Source Research Orchestrator (APIs, Scrapers, Datasets)           │
│     ├── Evidence & Verification Engine (VERIFIED, UNVERIFIED, CONTRADICTED)     │
│     └── Company & Person Intelligence Dossiers (Fact vs. Signal vs. Inference)  │
│                                                                                 │
│  2. AI Outbound Calling & BDE Workspace                                         │
│     ├── Provider-Agnostic Calling Dispatcher (Vapi, ElevenLabs, Twilio)         │
│     ├── AI SDR Qualification Script & Goal Engine                               │
│     ├── Live Call Assistant & 5-Minute Periodic Transcript Ingestion             │
│     └── Project Copilot during BDE calls (Contextual Q&A over Dossier)          │
│                                                                                 │
│  3. Project Workspace & Requirements Engine                                     │
│     ├── One-Click Conversion: Qualified Lead -> Project Workspace               │
│     ├── Context Binder (Calls, Transcripts, Company/Person Intel, Docs)         │
│     ├── Draft BRD / FRD / User Story Generator                                  │
│     ├── PM Decision & Baseline Lock Workflow                                    │
│     └── Client Approval & Change Request Tracking Engine                        │
│                                                                                 │
│  4. Technical Baseline & SDLC Governance Engine                                 │
│     ├── Technical Approach Specification (Stack, DB, APIs, Infra, Security)     │
│     ├── UI/UX Prototype Handoff (Figma Make, Bolt, Replit -> Engineering)       │
│     ├── Engineering Agent Environment Interface (Local LLM / Git / Tests)       │
│     └── Production Deployment Human Approval Gate                               │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 19. Recommended Target Architecture

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                       ONIT TARGET ARCHITECTURE                                         │
├────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                        │
│  PRESENTATION LAYER                                                                                    │
│  ├── Public Marketing & Solutions (Existing Landing Pages & SEO Routes)                                │
│  ├── BDE / Sales Intelligence Workspace (Prospecting, Dossiers, Call Center, Live Copilot)            │
│  ├── PM & Delivery Command Center (Project Context, BRD Editor, Baseline Governance, Approvals)       │
│  └── Engineering & QA Console (Technical Baseline, Code Agent Orchestrator, Quality Gates)             │
│                                                                                                        │
│  ORCHESTRATION & AGENT WORKFORCE LAYER                                                                │
│  ├── Model Router & Provider Gateway (Deterministic Logic, RAG, Reasoning, Coding, Local LLMs)        │
│  ├── AI Workforce Execution Engine (SDR, Business Analyst, Architect, QA, PM, DevOps Agents)          │
│  ├── Voice Calling Orchestrator (Provider-Agnostic Voice Gateway: Vapi / ElevenLabs / WebRTC)          │
│  └── Human-in-the-Loop Policy & Approval Engine (PM Authority, Client Sign-off, Deployment Gates)     │
│                                                                                                        │
│  CONTEXT & DATA LAYER                                                                                  │
│  ├── Connected Context Store (Sales Transcripts, Company Dossiers, BRDs, PRs, Tickets)                 │
│  ├── Verification & Fact Engine (Sources, URLs, Evidence Text, Verification Status, Confidence)        │
│  └── Open Integration Hub (ONIT Connect: CRM, Jira, GitHub, Slack, Cloud APIs, Webhooks)               │
│                                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 20. Recommended Implementation Order

To maintain strict code quality, zero regressions, and zero invented/fake implementations, development should proceed in 6 measured steps:

### Step 1: Foundation & Data Normalization (Non-Destructive)
- Centralize existing capability, worker, and architecture data in `src/data/`.
- Establish TypeScript domain interfaces for `CompanyIntelligence`, `PersonIntelligence`, `VerificationEvidence`, `LeadRecord`, `ProjectContext`, `RequirementBaseline`, and `TechnicalBaseline`.
- Set up route dispatcher allowing seamless switching between Public Marketing (`home`, `talk-to-us`) and Phase 2 Operational Workspaces.

### Step 2: GROW — Prospect Intelligence & Research Engine UI
- Build the dual-input Prospecting Interface (Natural-Language Prompt + Guided Parameter Search).
- Build the **Evidence & Verification Inspector** displaying verification badges (`VERIFIED`, `PARTIALLY VERIFIED`, `UNVERIFIED`, `CONTRADICTED`, `STALE`) with source URLs, retrieved dates, and raw snippets.
- Build the **Company Intelligence Dossier** and **Person Intelligence Dossier** (distinguishing Fact, Signal, and AI Inference).

### Step 3: AI Calling & BDE Live Workspace
- Build the multi-lead AI Call Dispatcher with voice configuration options.
- Build the **BDE Live Call Workspace** featuring real-time rolling transcript ingestion (5-minute chunk processor) and the **Project Copilot** sidecar for live contextual Q&A.

### Step 4: Project Workspace & Requirements Baseline
- Implement the "Promote Lead to Project" context consolidation workflow.
- Build the **Requirements & BRD Studio**: automated draft generation, PM review/edit tools, and client baseline lock/approval flow.

### Step 5: Technical Baseline & SDLC Governance
- Build the Technical Approach definition template (Stack, DB, APIs, Cloud, CI/CD).
- Build the **Human-in-the-Loop Governance Panel** for approval of design baselines, code merges, and production deployment authorization.

### Step 6: Backend Integration & Live Provider Bridges
- Wire research scrapers/APIs, LLM routing endpoints, and voice calling providers (Vapi/ElevenLabs) to replace the UI mock adapters with live services.

---

## Audit Conclusion & Next Actions

The existing ONIT codebase provides an exceptional visual and conceptual foundation. Phase 2 can build directly upon this foundation without deleting or rewriting existing marketing components.

**Current State:** Ready for user review and approval of this architectural plan. No modifying code changes will be initiated until explicit approval is granted.
