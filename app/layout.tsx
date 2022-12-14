"use client";

import '../styles/globals.css'
import { Navigation } from '../components/navigation'
import { ModalProvider } from '../context/modal';
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
      <head>
        <title>My Resume</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </head>
      <body>
        <ModalProvider>
          <Navigation/>
          <main>
            {children}
          </main>
          <Footer/>
        </ModalProvider>
      </body>
    </html>
  )
}