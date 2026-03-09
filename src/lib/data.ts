import {
  Database,
  GitBranch,
  Clock4,
  Building2,
  Lightbulb,
  TruckIcon,
  Hand,
  Cloud,
  Shield,
  Award,
  Navigation2,
} from 'lucide-react'
import type { NavLink, ChallengeItem, SolutionItem, FeatureItem, Particle } from '@/types'
import { Cloude, CostEffective, Data, Doller, Intelliget, Intutive, Legancy, Timer } from '../../public/assets/svg'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Product',
    href: '/product',
    dropdown: [
      { label: 'Overview', href: '/product' },
      { label: 'Features', href: '/product/features' },
      { label: 'Integrations', href: '/product/integrations' },
      { label: 'Pricing', href: '/product/pricing' },
    ],
  },
  {
    label: 'About us',
    href: '/about',
    dropdown: [
      { label: 'Our Story', href: '/about' },
      { label: 'Team', href: '/about/team' },
      { label: 'Careers', href: '/about/careers' },
      { label: 'Press', href: '/about/press' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export const HERO_PARTICLES: Particle[] = [
  { x: 8,  y: 18, s: 3, dur: 5.2, delay: 0.0 },
  { x: 22, y: 72, s: 4, dur: 6.8, delay: 0.6 },
  { x: 38, y: 38, s: 2, dur: 4.5, delay: 1.2 },
  { x: 55, y: 12, s: 3, dur: 7.0, delay: 0.3 },
  { x: 68, y: 58, s: 5, dur: 5.8, delay: 1.0 },
  { x: 80, y: 82, s: 2, dur: 6.4, delay: 1.6 },
  { x: 91, y: 28, s: 4, dur: 4.9, delay: 0.7 },
  { x: 6,  y: 88, s: 3, dur: 7.3, delay: 1.9 },
  { x: 33, y: 92, s: 2, dur: 5.5, delay: 0.2 },
  { x: 60, y: 6,  s: 4, dur: 6.1, delay: 1.1 },
  { x: 16, y: 50, s: 2, dur: 5.0, delay: 0.8 },
  { x: 76, y: 14, s: 3, dur: 6.7, delay: 1.4 },
  { x: 47, y: 64, s: 5, dur: 4.8, delay: 0.4 },
  { x: 94, y: 55, s: 2, dur: 7.1, delay: 1.0 },
  { x: 29, y: 4,  s: 3, dur: 5.6, delay: 1.7 },
  { x: 85, y: 42, s: 4, dur: 6.3, delay: 0.5 },
  { x: 13, y: 62, s: 2, dur: 5.9, delay: 1.3 },
  { x: 52, y: 80, s: 3, dur: 6.6, delay: 0.9 },
]

export const CHALLENGES: ChallengeItem[] = [
  {
    Icon: Legancy,
    description:
      'Legacy applications with outdated data layers that are difficult and costly to maintain or meet current compliant standards.',
  },
  {
    Icon: Data,
    description:
      'Fragmented systems and siloed data preventing shared context and real-time decision-making.',
  },
  {
    Icon: Timer,
    description:
      'Manual, expertise-dependent workflows creating bottlenecks, errors, and operational delays.',
  },
  {
    Icon: Doller,
    description:
      'Modernization projects that require large teams, high budgets, and years before agencies see value.',
  },
]

export const SOLUTIONS: SolutionItem[] = [
  {
    Icon: Intelliget,
    title: 'Intelligent Modernization',
    description:
      'Scalable platform that modernizes legacy applications end-to-end, including data layer migration that traditional agents cannot perform today.',
  },
  {
    Icon: CostEffective,
    title: 'Cost-Effective Delivery',
    description:
      'Enables agencies to deploy and iterate on smaller budgets and real-time, without needing large engineering teams.',
  },
  {
    Icon: Intutive,
    title: 'Intuitive AI-Guided',
    description:
      'Guided flows that make the user navigate the platform and processes seamlessly without much training.',
  },
  {
    Icon: Cloude,
    title: 'Cloud-Native Solutions',
    description:
      'Eliminate data silos and operate on secure, government-grade, pre-populated data, start and deliver high-quality results.',
  },
]

export const BUILD_FEATURES: FeatureItem[] = [
  {
    Icon: Shield,
    title: 'Trusted AI Agents',
    description: 'Government-grade security, enterprise reliability.',
  },
  {
    Icon: Award,
    title: 'Years of Government Domain Expertise',
    description: 'Context-aware intelligence tailored to your domain.',
  },
  {
    Icon: Navigation2,
    title: 'Seamless Execution',
    description:
      'Easy navigations and task completions for all employees. They confirm pre-populated data, start execution from any point, and deliver high quality results across enterprise-grade, secure platforms.',
  },
]

export const MOCK_ROWS: string[][] = [
  ['Case #2024-001', 'Advisory Review', 'In Progress', '85%'],
  ['Case #2024-002', 'Policy Update', 'Completed', '100%'],
  ['Case #2024-003', 'Risk Assessment', 'Pending', '40%'],
]



export const openRoles = [
  { title: 'Senior AI Engineer', department: 'Engineering', location: 'Remote (US)', type: 'Full-time', description: 'Build and improve the AI agent infrastructure that powers government workflow automation. Python, LLMs, and government domain knowledge a plus.' },
  { title: 'Solutions Architect (Federal)', department: 'Customer Success', location: 'Washington, DC', type: 'Full-time', description: 'Design and implement QuantumApps.AI solutions for federal agency customers. Active clearance or clearable preferred.' },
  { title: 'Government Relations Manager', department: 'Policy & Growth', location: 'Washington, DC', type: 'Full-time', description: 'Navigate procurement, build agency relationships, and help government customers adopt AI technology. Hill or OMB experience preferred.' },
  { title: 'Product Designer', department: 'Product', location: 'Remote (US)', type: 'Full-time', description: 'Design intuitive interfaces for government users who need powerful tools without steep learning curves. GovTech experience a big plus.' },
  { title: 'Security Engineer', department: 'Engineering', location: 'Remote (US)', type: 'Full-time', description: 'Own security architecture and compliance operations. Experience with FedRAMP, FISMA, or NIST frameworks required.' },
]



export const faqs = [
  { q: 'How does government procurement work?', a: 'QuantumApps.AI is available through GSA Schedule, and we actively support agency procurement processes including sole-source justifications and cooperative purchasing vehicles.' },
  { q: 'Is there a free trial or pilot program?', a: 'Yes. We offer a structured 90-day Pilot program that allows your agency to deploy and evaluate QuantumApps.AI with a real workflow before full procurement.' },
  { q: 'What does deployment look like?', a: 'Our team provides full deployment support. Most agencies go from contract to first working agent in under 30 days.' },
  { q: 'Can QuantumApps.AI be deployed on-premise?', a: 'Yes. Enterprise plans support fully air-gapped, on-premise, and hybrid cloud deployments to meet strict security requirements.' },
]