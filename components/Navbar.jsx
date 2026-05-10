'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Home',        href: '#home' },
  { label: 'Plants Type', href: '#plants-type' },
  { label: 'Store',       href: '#trending' },
  { label: 'Contact',     href: '#contact' },
]

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeHref, setActiveHref] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 90) {
          setActiveHref('#' + sec.id)
        }
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ── Desktop / Tablet Nav ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between
                   px-12 max-md:px-6 h-16
                   bg-[rgba(26,36,22,0.85)] backdrop-blur-md
                   border-b border-[rgba(255,255,255,0.08)]"
      >
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-2 font-bold text-lg text-[#f0ede6] no-underline"
        >
          <span className="text-2xl">🪴</span>
          FloraVision
          <span className="text-[#6db33f]">.</span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-sm no-underline relative transition-colors duration-200
                  ${activeHref === href
                    ? 'nav-active text-[#f0ede6]'
                    : 'text-[#9aab8e] hover:text-[#f0ede6]'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <button
            className="text-[#9aab8e] hover:text-[#f0ede6] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer"
            aria-label="Search"
          >
            <SearchIcon />
          </button>

          <button
            className="relative text-[#9aab8e] hover:text-[#f0ede6] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer"
            aria-label="Shopping cart, 2 items"
          >
            <CartIcon />
            <span
              className="absolute -top-1.5 -right-2 bg-[#6db33f] text-white text-[10px]
                         font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center"
            >
              2
            </span>
          </button>

          <button
            className="text-[#9aab8e] hover:text-[#f0ede6] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer"
            aria-label="User account"
          >
            <UserIcon />
          </button>

          {/* Hamburger – mobile only */}
          <button
            className="md:hidden flex flex-col gap-[5px] bg-transparent border-none p-0 cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <span className="w-6 h-0.5 bg-[#f0ede6] rounded block" />
            <span className="w-6 h-0.5 bg-[#f0ede6] rounded block" />
            <span className="w-6 h-0.5 bg-[#f0ede6] rounded block" />
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8
                     bg-[rgba(26,36,22,0.98)] backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            className="absolute top-5 right-6 text-3xl text-[#f0ede6] bg-transparent border-none cursor-pointer leading-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-2xl font-medium text-[#f0ede6] no-underline hover:text-[#6db33f] transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
