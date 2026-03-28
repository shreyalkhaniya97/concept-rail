import Link from 'next/link'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'glow'
  external?: boolean
  className?: string
}

export default function Button({ href, children, variant = 'primary', external, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full transition-all duration-300'

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover shadow-[0_0_20px_rgba(124,58,237,0.25)] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]',
    secondary: 'bg-cyan text-white hover:bg-cyan/90 shadow-[0_0_20px_rgba(6,182,212,0.25)]',
    outline: 'border border-border text-foreground hover:bg-white/5 hover:border-accent/30',
    glow: 'bg-linear-to-r from-accent via-cyan to-emerald text-white shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] animated-gradient',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
