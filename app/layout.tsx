"use client";

import '../styles/globals.css'
import { Navigation } from '../components/navigation'
import Footer from '../components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className='bg-black text-slate-200'
      lang="en"
    >
      <head></head>
      <body>
        <Navigation/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}