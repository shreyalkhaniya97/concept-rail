import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PRODUCTS, getProductBySlug } from '@/data/products'
import ProductSpec from '@/components/products/ProductSpec'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return PRODUCTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  return {
    title: `${product?.code} ${product?.name} — Concept Rail`,
    description: product?.description,
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) notFound()

  const relatedProducts = product.related
    .map(s => getProductBySlug(s))
    .filter(Boolean)
    .slice(0, 3)

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-4 sm:py-6 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>
        </div>
      </section>

      <section className="py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Left — Images */}
            <div className="space-y-4 sm:space-y-6">
              <div className="gradient-border p-px rounded-2xl">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-surface">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    preload
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative rounded-2xl border border-border overflow-hidden bg-surface">
                <div className="relative aspect-4/3">
                  <Image
                    src={product.diagram}
                    alt={`${product.name} Technical Diagram`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <span className="px-3 py-1 text-xs bg-surface/90 backdrop-blur rounded-full text-muted border border-border">
                    Technical Diagram
                  </span>
                </div>
              </div>
            </div>

            {/* Right — Specs */}
            <div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold bg-accent text-white rounded-full shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                  {product.code}
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-foreground/5 border border-border text-muted rounded-full">
                  {product.category}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                {product.name}
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted leading-relaxed">
                {product.description}
              </p>
              <div className="mt-6 sm:mt-8">
                <ProductSpec product={product} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 sm:py-16 relative">
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">
              Related <span className="gradient-text">Products</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {relatedProducts.map(rp => rp && (
                <Link
                  key={rp.slug}
                  href={`/products/${rp.slug}`}
                  className="group relative rounded-2xl border border-border bg-card-bg overflow-hidden hover:border-accent/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.1)]"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={rp.image}
                      alt={rp.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-card-bg via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-accent/90 backdrop-blur text-white rounded-full">
                        {rp.code}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {rp.name}
                    </h3>
                    <p className="text-sm text-muted mt-1">{rp.size}</p>
                    <div className="mt-3 flex items-center gap-2 text-sm font-medium text-accent">
                      View Details
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
