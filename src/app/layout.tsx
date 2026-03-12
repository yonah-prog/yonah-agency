import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yonah Friedman — Branding & Marketing Consultant',
  description: 'I help companies and organizations clarify their story, sharpen their positioning, and turn strategy into products that convert.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
