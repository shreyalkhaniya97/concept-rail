import type { Metadata } from 'next'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { SITE } from '@/data/navigation'
import EnquiryForm from '@/components/contact/EnquiryForm'

export const metadata: Metadata = {
  title: 'Contact — Concept Rail',
  description: 'Get in touch with Concept Rail for premium glass railing solutions. Request a quote or enquire about our products.',
}

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    color: 'text-accent',
    bg: 'bg-accent/10',
    glow: 'hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: SITE.phone,
    href: `tel:${SITE.phone}`,
    color: 'text-cyan',
    bg: 'bg-cyan/10',
    glow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: SITE.address,
    href: undefined,
    color: 'text-emerald',
    bg: 'bg-emerald/10',
    glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-20 sm:py-36 text-center overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-accent/15 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Get in Touch
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted max-w-2xl mx-auto">
            Have a project in mind? Fill out the form below and our team will get back to you with a customized solution
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {contactCards.map(card => (
              <div
                key={card.label}
                className={`group relative p-5 sm:p-6 rounded-2xl border border-border bg-surface/50 hover:bg-surface hover:border-border transition-all duration-500 ${card.glow}`}
              >
                <div className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center mb-3 sm:mb-4`}>
                  <card.icon size={18} className={card.color} />
                </div>
                <p className="text-xs text-muted mb-1">{card.label}</p>
                {card.href ? (
                  <a href={card.href} className="text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1 break-all">
                    {card.value}
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </a>
                ) : (
                  <p className="text-sm font-medium text-foreground">{card.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-8 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="gradient-border p-px rounded-2xl">
            <div className="bg-surface rounded-2xl p-5 sm:p-8 md:p-12">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
