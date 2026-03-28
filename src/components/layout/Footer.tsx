'use client'

import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, SITE, FOOTER_PRODUCT_LINKS } from '@/data/navigation'
import { Mail, Phone, MapPin, Download } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="relative border-t border-border bg-surface">
      {/* Gradient glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Column 1 — Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={SITE.logoUrl}
                alt={SITE.name}
                width={36}
                height={36}
                className={`h-9 w-auto ${theme === 'dark' ? 'brightness-200' : ''}`}
              />
              <span className="text-lg font-semibold tracking-tight text-foreground">
                {SITE.name}
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              {SITE.tagline}
            </p>
            <p className="text-xs text-muted/50">
              {SITE.subline}
            </p>
            <a
              href={SITE.catalog}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-foreground/5 border border-border rounded-full hover:bg-foreground/10 hover:border-accent/30 transition-all"
            >
              <Download size={14} className="text-accent" />
              Download Catalog
            </a>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted/50 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Products */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted/50 mb-5">
              Products
            </h3>
            <ul className="space-y-3">
              {FOOTER_PRODUCT_LINKS.map(name => (
                <li key={name}>
                  <Link
                    href="/products"
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted/50 mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-0.5 shrink-0" />
                <a href={`mailto:${SITE.email}`} className="text-sm text-muted hover:text-foreground transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-cyan mt-0.5 shrink-0" />
                <a href={`tel:${SITE.phone}`} className="text-sm text-muted hover:text-foreground transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-emerald mt-0.5 shrink-0" />
                <span className="text-sm text-muted">
                  {SITE.address}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted/50">
            &copy; 2025 Concept Rail. All rights reserved.
          </p>
          <p className="text-xs text-muted/30 italic">
            Where the view is the vision
          </p>
        </div>
      </div>
    </footer>
  )
}
