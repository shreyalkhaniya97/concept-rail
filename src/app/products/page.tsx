'use client'

import { useState, useMemo } from 'react'
import { Download } from 'lucide-react'
import { PRODUCTS, PRODUCT_FEATURES } from '@/data/products'
import { SITE } from '@/data/navigation'
import ProductCard from '@/components/products/ProductCard'
import ProductFilters from '@/components/products/ProductFilters'
import Button from '@/components/ui/Button'

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    category: 'All Products',
    finish: 'All Finishes',
    locking: 'All Mechanisms',
    profileType: 'All Types',
  })

  const filtered = useMemo(() => {
    return PRODUCTS.filter(p => {
      if (filters.category !== 'All Products' && p.category !== filters.category) return false
      if (filters.finish !== 'All Finishes' && !p.finishes.includes(filters.finish)) return false
      if (filters.locking !== 'All Mechanisms' && p.locking !== filters.locking) return false
      if (filters.profileType !== 'All Types' && p.profileType !== (filters.profileType === 'Continuous Bottom' ? 'Continuous Bottom' : 'Bracket with Cover')) return false
      return true
    })
  }, [filters])

  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-20 sm:py-36 text-center overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-cyan/15 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Collection
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Our <span className="gradient-text">Products</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted max-w-2xl mx-auto">
            Premium aluminum and stainless steel glass railing systems designed for modern architecture
          </p>
          <div className="mt-6 sm:mt-8">
            <a
              href={SITE.catalog}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(124,58,237,0.25)] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]"
            >
              <Download size={16} />
              Download Full Catalog
            </a>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ProductFilters
            filters={filters}
            onChange={setFilters}
            count={filtered.length}
            total={PRODUCTS.length}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted">No products match the selected filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Features */}
      <section className="py-12 sm:py-16 relative">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center">
            Product <span className="gradient-text">Features</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {PRODUCT_FEATURES.map((f, i) => {
              const colors = ['bg-accent/10 text-accent', 'bg-cyan/10 text-cyan', 'bg-emerald/10 text-emerald', 'bg-amber/10 text-amber', 'bg-emerald/10 text-emerald', 'bg-rose/10 text-rose']
              return (
                <div key={f.title} className="flex items-start gap-3 p-4 sm:p-5 rounded-xl bg-surface/50 border border-border">
                  <span className={`w-8 h-8 rounded-lg ${colors[i].split(' ')[0]} ${colors[i].split(' ')[1]} text-xs font-bold flex items-center justify-center shrink-0`}>
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{f.title}</p>
                    <p className="text-xs text-muted mt-1">{f.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Custom Solution CTA */}
      <section className="py-16 sm:py-32 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-accent/15 rounded-full blur-[120px]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Need a <span className="gradient-text">Custom Solution</span>?
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted leading-relaxed">
            Our team can design and manufacture custom glass railing systems tailored to your specific requirements
          </p>
          <div className="mt-8 sm:mt-10">
            <Button href="/contact" variant="primary">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
