import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Limenis Global Advisory Inc. | Maritime & Port Operations Consulting',
  description: '30+ years of strategic maritime consulting for port authorities, shipping companies, and logistics firms. Port operations, supply chain, and maritime advisory across 45+ countries.',
  keywords: ['maritime consulting', 'port operations', 'supply chain advisory', 'shipping consulting', 'logistics strategy', 'IMO compliance'],
  authors: [{ name: 'Limenis Global Advisory Inc.' }],
  openGraph: {
    title: 'Limenis Global Advisory Inc. | Maritime & Port Operations Consulting',
    description: '30+ years of strategic maritime consulting for port authorities, shipping companies, and logistics firms. Port operations, supply chain, and maritime advisory across 45+ countries.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Limenis Global Advisory',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Limenis Global Advisory Inc. | Maritime & Port Operations Consulting',
    description: '30+ years of strategic maritime consulting for port authorities, shipping companies, and logistics firms.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
