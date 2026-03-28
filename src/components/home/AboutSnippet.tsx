import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function AboutSnippet() {
  return (
    <section className="py-12 sm:py-24 relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              Our Story
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              About <span className="gradient-text">Concept Rail</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted leading-relaxed">
              The name of our long-standing enterprise, CONCEPT RAIL, is rooted in our core area of expertise: transforming vision into reality. We are a full-service strategic firm, widely recognized and accepted for introducing market-leading strategies, end-to-end solutions, and delivering results that set new benchmarks for efficiency and innovation. Our expertise spans Strategy, Design, Technology, and Execution. We are perfectionists in introducing uniquely integrated solutions that showcase the creativity, foresight, and practical expertise of our consultants, engineers, and designers.
            </p>
            <div className="mt-6 sm:mt-8">
              <Button href="/about" variant="outline">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Image with gradient border */}
          <div className="relative">
            <div className="gradient-border p-px rounded-2xl">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
                <Image
                  src="https://conceptrailindia.com/images/about-image.jpeg"
                  alt="About Concept Rail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
