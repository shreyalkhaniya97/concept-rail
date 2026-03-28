interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  gradient?: boolean
}

export default function SectionHeading({ label, title, subtitle, centered = true, gradient = false }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-14`}>
      {label && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-accent">
          {label}
        </p>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight ${gradient ? 'gradient-text' : 'text-foreground'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg leading-relaxed text-muted">
          {subtitle}
        </p>
      )}
    </div>
  )
}
