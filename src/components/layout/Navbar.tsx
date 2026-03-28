'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/data/navigation'
import { useTheme } from '@/components/ThemeProvider'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-nav-bg backdrop-blur-xl border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <Image
            src={SITE.logoUrl}
            alt={SITE.name}
            width={36}
            height={36}
            className={`h-8 sm:h-9 w-auto ${theme === 'dark' ? 'brightness-200' : ''}`}
          />
          <span className="text-sm sm:text-base font-semibold tracking-tight text-foreground">
            {SITE.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                isActive(link.href)
                  ? 'text-foreground font-medium bg-foreground/5'
                  : 'text-muted hover:text-foreground hover:bg-foreground/5'
              }`}
            >
              {link.label}
              {/* Active indicator dot */}
              {isActive(link.href) && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-full flex items-center justify-center text-muted hover:text-foreground hover:bg-foreground/5 transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-hover transition-all duration-200 shadow-[0_0_20px_rgba(124,58,237,0.3)]"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Right */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-full flex items-center justify-center text-muted hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="w-9 h-9 flex items-center justify-center text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-nav-bg backdrop-blur-xl border-t border-border">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 text-base rounded-xl transition-all ${
                  isActive(link.href)
                    ? 'text-foreground font-medium bg-accent/10 border border-accent/20'
                    : 'text-muted hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {isActive(link.href) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                )}
                {link.label}
              </Link>
            ))}
            <div className="pt-3 px-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-accent rounded-full shadow-[0_0_20px_rgba(124,58,237,0.3)]"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
