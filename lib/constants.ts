import { Anchor, Globe, BarChart3, Shield, Cpu, Users } from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

export const STATS = [
  { value: 30, suffix: '+', label: 'Years of Excellence' },
  { value: 120, suffix: '+', label: 'Ports Advised' },
  { value: 45, suffix: '', label: 'Countries Served' },
  { value: 2, prefix: '$', suffix: 'B+', label: 'Assets Optimized' },
]

export const SERVICES = [
  {
    icon: Anchor,
    title: 'Port Operations Advisory',
    description: 'Strategic guidance for port authorities seeking to optimize terminal throughput, reduce vessel turnaround times, and modernize operations infrastructure.',
  },
  {
    icon: Globe,
    title: 'Supply Chain Strategy',
    description: 'End-to-end logistics consulting from procurement through last-mile delivery, leveraging data analytics and global trade corridor expertise.',
  },
  {
    icon: BarChart3,
    title: 'Maritime Analytics',
    description: 'Predictive modeling and performance benchmarking for fleet management, route optimization, and cargo planning across global shipping lanes.',
  },
  {
    icon: Shield,
    title: 'Regulatory & Compliance',
    description: 'Navigation of IMO regulations, environmental standards, and port state control requirements with proactive compliance frameworks.',
  },
  {
    icon: Cpu,
    title: 'Digital Transformation',
    description: 'Integration of IoT, blockchain, and AI-powered systems to modernize port operations, enhance visibility, and drive operational excellence.',
  },
  {
    icon: Users,
    title: 'Leadership & Governance',
    description: 'Board advisory, executive coaching, and organizational design for maritime enterprises navigating strategic transformation.',
  },
]

export const INSIGHTS = [
  {
    tag: 'INDUSTRY REPORT',
    title: 'The Future of Autonomous Port Operations: A 2030 Outlook',
    date: 'Feb 2026',
  },
  {
    tag: 'POLICY BRIEF',
    title: 'IMO 2030 Decarbonization Targets: What Port Operators Need to Know',
    date: 'Jan 2026',
  },
  {
    tag: 'CASE STUDY',
    title: 'How a Mid-Size Terminal Doubled Throughput in 18 Months',
    date: 'Dec 2025',
  },
]

export const FOOTER_LINKS = {
  services: [
    { label: 'Port Operations', href: '#services' },
    { label: 'Supply Chain', href: '#services' },
    { label: 'Maritime Analytics', href: '#services' },
    { label: 'Compliance', href: '#services' },
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Leadership', href: '#about' },
    { label: 'Insights', href: '#insights' },
    { label: 'Careers', href: '#contact' },
  ],
  connect: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Contact', href: '#contact' },
    { label: 'Book a Call', href: '#contact' },
    { label: 'Newsletter', href: '#newsletter' },
  ],
}
