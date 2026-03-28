import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Product } from '@/data/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
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
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 text-xs font-semibold bg-accent/90 backdrop-blur text-white rounded-full">
            {product.code}
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-card-bg/80 backdrop-blur text-foreground rounded-full border border-border">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6 space-y-3">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <div className="grid grid-cols-2 gap-2 text-xs text-muted">
          <div className="px-3 py-2 bg-surface rounded-lg border border-border">
            <span className="text-muted/50 block mb-0.5">Size</span>
            <span className="text-foreground">{product.size}</span>
          </div>
          <div className="px-3 py-2 bg-surface rounded-lg border border-border">
            <span className="text-muted/50 block mb-0.5">Glass</span>
            <span className="text-foreground">{product.glass}</span>
          </div>
          <div className="col-span-2 px-3 py-2 bg-surface rounded-lg border border-border">
            <span className="text-muted/50 block mb-0.5">Locking</span>
            <span className="text-foreground">{product.locking}</span>
          </div>
        </div>
        <div className="pt-2 flex items-center gap-2 text-sm font-medium text-accent">
          View Details
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
