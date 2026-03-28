import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { SITE } from '@/data/navigation'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://conceptrailindia.com/images/hero-image.jpeg"
        alt="Premium Glass Railing"
        fill
        preload
        className="object-cover opacity-20"
      />

      {/* Theme-aware overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-background/80 to-background" />
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 dot-pattern opacity-40" />

      {/* Accent glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-accent/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-cyan/15 rounded-full blur-[128px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-full">
            <Sparkles size={14} />
            <span className="hidden sm:inline">{SITE.subline}</span>
            <span className="sm:hidden">Glass Railing System</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1]">
            <span className="text-foreground">Where the view</span>
            <br />
            <span className="gradient-text">is the vision.</span>
          </h1>

          <p className="mt-5 sm:mt-8 text-base sm:text-lg md:text-xl text-muted leading-relaxed max-w-xl">
            {SITE.desc}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-hover transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)]"
            >
              Explore Products
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-medium text-foreground bg-foreground/5 border border-border rounded-full hover:bg-foreground/10 hover:border-accent/30 transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-10 sm:mt-16 flex flex-wrap gap-6 sm:gap-10">
            {[
              { value: '7+', label: 'Product Lines' },
              { value: '4', label: 'Finish Options' },
              { value: '100%', label: 'Recyclable' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
