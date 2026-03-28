import type { Metadata } from 'next'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Gallery — Concept Rail',
  description: 'Explore our portfolio of stunning glass railing installations across residential and commercial projects.',
}

export default function GalleryPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-20 sm:py-36 text-center overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-emerald/10 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Portfolio
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Project <span className="gradient-text">Gallery</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted max-w-2xl mx-auto">
            Explore our portfolio of stunning glass railing installations across residential and commercial projects
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <GalleryGrid />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-32 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-accent/15 rounded-full blur-[120px]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Ready to <span className="gradient-text">Transform</span> Your Space?
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted leading-relaxed">
            Get in touch with our team to discuss your project requirements and receive a customized quote
          </p>
          <div className="mt-8 sm:mt-10">
            <Button href="/contact" variant="primary">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
