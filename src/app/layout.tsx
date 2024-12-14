import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

// Initialize the Inter font with a subset and weight
const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['400', '700'] 
})

export const metadata: Metadata = {
  title: 'My Resume Website',
  description: 'Personal resume and portfolio website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
