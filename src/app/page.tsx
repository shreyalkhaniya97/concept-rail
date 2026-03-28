import HeroSection from '@/components/home/HeroSection'
import CatalogCTA from '@/components/home/CatalogCTA'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import AboutSnippet from '@/components/home/AboutSnippet'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CatalogCTA />
      <WhyChooseUs />
      <AboutSnippet />
      <FeaturedProducts />

      {/* Bottom CTA Banner */}
      <section className="py-16 sm:py-32 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-accent/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-75 h-50 bg-cyan/10 rounded-full blur-[100px]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Ready to <span className="gradient-text">Transform</span> Your Space?
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted leading-relaxed">
            Get in touch with our team to discuss your project requirements and receive a customized quote
          </p>
          <div className="mt-8 sm:mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-hover transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_50px_rgba(124,58,237,0.5)]"
            >
              Contact Us Today
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
