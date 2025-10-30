import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rishita Bhatt - Software Developer',
  description: 'Software Developer and CSE Master\'s student at Santa Clara University. Passionate about turning ideas into intuitive web applications.',
  keywords: ['software developer', 'web developer', 'react', 'nextjs', 'typescript', 'portfolio'],
  authors: [{ name: 'Rishita Bhatt' }],
  openGraph: {
    title: 'Rishita Bhatt - Software Developer',
    description: 'Software Developer and CSE Master\'s student at Santa Clara University.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-gray-100`}>
        {children}
      </body>
    </html>
  )
}
