import type { Metadata } from 'next'
import Image from 'next/image'
import { Quote, Target, Heart, Users } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About Us — Concept Rail',
  description: 'The Strategic Blueprint for Next-Generation Solutions. Learn about Concept Rail\'s mission, values, and global presence.',
}

const coreValues = [
  {
    icon: Target,
    title: 'Our Perfection',
    body: 'We are perfectionists in introducing uniquely integrated solutions. Our portfolio includes business process optimization, bespoke software development, strategic consulting, and market entry planning. Each project we undertake is executed with precision and technical excellence, ensuring our work perfectly and flawlessly showcases the creativity, foresight, and practical expertise of our consultants, engineers, and designers.',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'hover:border-accent/30',
    glow: 'hover:shadow-[0_0_40px_rgba(124,58,237,0.1)]',
  },
  {
    icon: Heart,
    title: 'Our Ethics',
    body: 'Our exclusive range of strategic and technical solutions supplies the demands of every client. We serve C-Suite Executives, Project Managers, Entrepreneurs, and direct users all seeking our excellent technical and professional support to achieve their most ambitious goals.',
    color: 'text-rose',
    bg: 'bg-rose/10',
    border: 'hover:border-rose/30',
    glow: 'hover:shadow-[0_0_40px_rgba(244,63,94,0.1)]',
  },
  {
    icon: Users,
    title: 'Concept & Clients',
    body: 'Our continued success in the global market is solely based on our reliable, insightful, and quality-driven counsel to our clients. Throughout the years, we have maintained a strong, collaborative relationship with our clients by consistently delivering genuine value. We ensure the quality of all our source and deliverable products meets the international standard for strategic execution and reliability, enabling us to maintain long-term, high-value partnerships with our esteemed clients.',
    color: 'text-cyan',
    bg: 'bg-cyan/10',
    border: 'hover:border-cyan/30',
    glow: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-20 sm:py-36 text-center overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-accent/15 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            About Us
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Welcome to The World of
            <br className="hidden sm:block" />
            <span className="gradient-text"> Concept Rail</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted max-w-2xl mx-auto">
            The Strategic Blueprint for Next-Generation Solutions
          </p>
        </div>
      </section>

      {/* About Body */}
      <section className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                About <span className="gradient-text">Us</span>
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted leading-relaxed">
                The name of our long-standing enterprise, CONCEPT RAIL, is rooted in our core area of expertise: transforming vision into reality. We are a full-service strategic firm, widely recognized and accepted for introducing market-leading strategies, end-to-end solutions, and delivering results that set new benchmarks for efficiency and innovation. Our expertise spans Strategy, Design, Technology, and Execution.
              </p>
            </div>
            <div className="relative">
              <div className="gradient-border p-px rounded-2xl">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
                  <Image
                    src="https://conceptrailindia.com/images/about-page-image.jpeg"
                    alt="About Concept Rail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -inset-4 bg-cyan/8 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-24 relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Values"
            title="Our Core Values"
            subtitle="The principles that guide our work and define our commitment to excellence"
            gradient
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {coreValues.map(value => (
              <div
                key={value.title}
                className={`group relative p-6 sm:p-8 rounded-2xl border border-border bg-surface/50 hover:bg-surface transition-all duration-500 ${value.border} ${value.glow}`}
              >
                <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-xl ${value.bg} flex items-center justify-center mb-4 sm:mb-5`}>
                  <value.icon size={20} className={value.color} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-12 sm:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-emerald/8 rounded-full blur-[120px]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <SectionHeading
            label="Presence"
            title="Our Global Presence"
            subtitle="With multiple locations across India, we serve clients nationwide with the same commitment to quality and excellence. Our strategic positioning allows us to deliver timely solutions and maintain close relationships with our clients."
            gradient
          />

          <div className="mt-6 sm:mt-8 gradient-border p-px rounded-2xl">
            <div className="bg-surface rounded-2xl p-6 sm:p-10">
              <Quote size={28} className="mx-auto text-accent/40 mb-4" />
              <p className="text-base sm:text-lg italic text-muted leading-relaxed">
                &ldquo;Where the view is the vision&rdquo; — Transforming perspectives into reality, one project at a time
              </p>
            </div>
          </div>
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
