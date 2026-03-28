import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PRODUCTS } from '@/data/products'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const featured = PRODUCTS.filter(p => ['cr-01', 'cr-02', 'cr-06'].includes(p.slug))

export default function FeaturedProducts() {
  return (
    <section className="py-12 sm:py-24 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Featured"
          title="Featured Products"
          subtitle="Discover our range of premium aluminum and stainless steel glass railing systems"
          gradient
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featured.map(product => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group relative rounded-2xl border border-border bg-card-bg overflow-hidden hover:border-accent/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.1)]"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card-bg via-transparent to-transparent" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-accent/90 backdrop-blur text-white rounded-full">
                    {product.code}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted mt-1">{product.size}</p>
                <div className="mt-3 sm:mt-4 flex items-center gap-2 text-sm font-medium text-accent">
                  View Details
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <Button href="/products" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
