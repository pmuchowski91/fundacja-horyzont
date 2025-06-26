'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
import { useViewportSize } from '@mantine/hooks'
import { cn } from '@/utils/ui'

interface NavLinkType {
  name: string
  path: string
}

const navLinks: NavLinkType[] = [
  { name: 'Kim jesteśmy', path: '/who-we-are' },
  { name: 'O nas', path: '/about-us' },
  { name: 'Czym się zajmujemy', path: '/what-we-do' },
  { name: 'Kontakt', path: '/contact' },
]

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { width } = useViewportSize()

  const isMobile = width < 768

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenuOnMobile = () => {
    if (isMobile) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed w-full flex items-center z-50 px-8 h-[--navbar-height] bg-nav-primary text-nav-secondary">
      <nav className="flex justify-between items-center w-full">
        <Link href="/" className="font-bold">
          <Image alt="Horyzont Logo" height={80} src="/logo.svg" width={178} />
        </Link>
        <ul
          className={cn(
            'flex items-center gap-8',
            isMenuOpen &&
              'bg-nav-primary flex-col fixed top-[--navbar-height] right-0 bottom-0 w-1/2 p-8 transform transition-transform duration-300 ease-in-out translate-x-0',
            !isMenuOpen &&
              isMobile &&
              'bg-nav-primary flex-col fixed top-[--navbar-height] right-0 bottom-0 w-1/2 p-8 transform transition-transform duration-300 ease-in-out translate-x-full',
          )}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="text-nav-secondary font-bold uppercase"
                onClick={closeMenuOnMobile}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          aria-labelledby="Menu Toggle Button"
          className="block md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <XIcon className="size-6 text-nav-secondary" />
          ) : (
            <MenuIcon className="size-6 text-nav-secondary" />
          )}
        </button>
      </nav>
    </header>
  )
}
