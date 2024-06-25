import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import NavBar from './components/NavBar'





export const metadata: Metadata = {
  title: 'DgeGrdzeli',
  description: 'ვებსაიტი სადაც შეგიძლიათ თითქმის ყველა ქართული სადღეგრძელო ნახოთ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        
      <NavBar />
        <main className="relative overflow-hidden">
        {children}
        </main>
        
      
      
      </body>
    </html>
  )
}