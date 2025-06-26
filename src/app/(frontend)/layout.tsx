import React from 'react'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'
import Header from '@/components/Header/intex'

import './styles.css'

export const metadata = {
  description: 'Fundacja Horyzont',
  title: 'Fundacja Horyzont',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <main>
          <Navbar />
          <div className="min-h-screen w-full flex flex-col">
            <div className="h-[--navbar-height]" />
            <Header />
            <div className="flex flex-grow flex-col w-full bg-primary">
              <div className="flex-grow flex flex-col w-full">{children}</div>
              <Footer />
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
