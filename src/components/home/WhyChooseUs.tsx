import { Wrench, CloudRain, Sparkles, ShieldCheck, Recycle, Shield } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const features = [
  { icon: Wrench, title: 'Easy Installation', desc: 'Quick and hassle-free installation process with minimal tools required', color: 'text-accent', bg: 'bg-accent/10', glow: 'group-hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]' },
  { icon: CloudRain, title: 'Weather Proof', desc: 'Designed to withstand all weather conditions and environmental factors', color: 'text-cyan', bg: 'bg-cyan/10', glow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]' },
  { icon: Sparkles, title: 'Easy Cleaning', desc: 'Low maintenance design with smooth surfaces for effortless cleaning', color: 'text-emerald', bg: 'bg-emerald/10', glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]' },
  { icon: ShieldCheck, title: 'Maintenance Free', desc: 'Durable materials that require no regular maintenance or upkeep', color: 'text-amber', bg: 'bg-amber/10', glow: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]' },
  { icon: Recycle, title: '100% Recyclable', desc: 'Environmentally friendly materials that are fully recyclable', color: 'text-emerald', bg: 'bg-emerald/10', glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]' },
  { icon: Shield, title: 'Corrosion Resistance', desc: 'Superior protection against rust and corrosion for long-lasting performance', color: 'text-rose', bg: 'bg-rose/10', glow: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Why Us"
          title="Why Choose Concept Rail?"
          subtitle="Our premium glass railing systems combine innovative design with superior quality and performance"
          gradient
        />

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {features.map(({ icon: Icon, title, desc, color, bg, glow }) => (
            <div
              key={title}
              className={`group relative p-6 sm:p-8 rounded-2xl border border-border bg-surface/50 hover:bg-surface hover:border-border transition-all duration-500 ${glow}`}
            >
              <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-xl ${bg} flex items-center justify-center mb-4 sm:mb-5`}>
                <Icon size={20} className={color} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
