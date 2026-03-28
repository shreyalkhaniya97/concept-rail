import { Download, Check, FileText } from 'lucide-react'
import { SITE } from '@/data/navigation'

const features = [
  'Complete product specifications',
  'Technical diagrams & dimensions',
  'Installation guidelines',
  'Finish options & accessories',
]

export default function CatalogCTA() {
  return (
    <section className="py-12 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="gradient-border p-px rounded-2xl">
          <div className="bg-surface rounded-2xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan/10 rounded-full blur-[80px]" />

            <div className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-cyan bg-cyan/10 border border-cyan/20 rounded-full mb-5 sm:mb-6">
                  <FileText size={12} />
                  2025-26 Edition
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  Download Our
                  <span className="gradient-text"> Catalog</span>
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted leading-relaxed">
                  Get instant access to our complete 2025-26 product catalog featuring detailed specifications, technical diagrams, and installation guides.
                </p>
              </div>
              <div>
                <ul className="space-y-3 mb-6 sm:mb-8">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                      <div className="w-5 h-5 rounded-full bg-emerald/10 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-emerald" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={SITE.catalog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(124,58,237,0.25)] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]"
                >
                  <Download size={16} />
                  Download Catalog (PDF)
                </a>
                <p className="mt-3 text-xs text-muted/50">
                  68 Pages &bull; Free Download
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
