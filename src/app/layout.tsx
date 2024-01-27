import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import type { ReactNode } from 'react'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'FullStack Template',
  description:
    'Next.js 14 + TailwindCSS + ESLint + Supabase + TypeScript + Shadcn/ui + Prisma Accelerate + NextAuth + React Hook Form + Zod'
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>{children}</body>
    </html>
  )
}
