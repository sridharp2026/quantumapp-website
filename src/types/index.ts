import type { LucideIcon } from 'lucide-react'

export interface NavDropdownItem {
  label: string
  href: string
}

export interface NavLink {
  label: string
  href: string
  dropdown?: NavDropdownItem[]
}

export interface ChallengeItem {
  Icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>
  description: string
}

export interface SolutionItem {
  Icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}

export interface FeatureItem {
  Icon: LucideIcon
  title: string
  description: string
}

export interface Particle {
  x: number
  y: number
  s: number
  dur: number
  delay: number
}
