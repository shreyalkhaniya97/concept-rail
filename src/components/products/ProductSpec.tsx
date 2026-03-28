import { Product } from '@/data/products'
import { Check } from 'lucide-react'
import { PRODUCT_FEATURES } from '@/data/products'

export default function ProductSpec({ product }: { product: Product }) {
  const specs = [
    { label: 'Product Code', value: product.code },
    { label: 'Category', value: product.category },
    { label: 'Size', value: product.size },
    { label: 'Glass', value: product.glass },
    { label: 'Lengths', value: product.lengths },
    { label: 'Weight', value: product.weight },
    { label: 'Locking', value: product.locking },
    { label: 'Profile Type', value: product.profileType },
    { label: 'Finishes', value: product.finishes.join(', ') },
  ]

  return (
    <div className="space-y-8">
      {/* Specifications */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Specifications</h2>
        <div className="rounded-xl border border-border overflow-hidden">
          {specs.map((spec, i) => (
            <div key={spec.label} className={`flex ${i !== specs.length - 1 ? 'border-b border-border' : ''}`}>
              <div className="w-1/3 px-5 py-3.5 text-sm font-medium text-muted bg-surface/50">
                {spec.label}
              </div>
              <div className="w-2/3 px-5 py-3.5 text-sm text-foreground">
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Ideal Applications</h2>
        <div className="flex flex-wrap gap-2">
          {product.applications.map(app => (
            <span key={app} className="px-4 py-1.5 text-sm bg-accent/10 border border-accent/20 text-accent rounded-full">
              {app}
            </span>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Key Features</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {PRODUCT_FEATURES.map(f => (
            <div key={f.title} className="flex items-start gap-3 p-3 rounded-xl bg-surface/50 border border-border">
              <div className="w-5 h-5 rounded-full bg-emerald/10 flex items-center justify-center shrink-0 mt-0.5">
                <Check size={12} className="text-emerald" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{f.title}</p>
                <p className="text-xs text-muted mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
