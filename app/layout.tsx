import type { Metadata } from 'next'
import {Poppins} from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import React from 'react'
import Footer from '@/components/Footer'
import cn from 'classnames'

const poppins = Poppins({weight: ['300','400', '600'], subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, 'relative')}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
