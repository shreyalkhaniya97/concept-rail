'use client'

interface FilterState {
  category: string
  finish: string
  locking: string
  profileType: string
}

interface ProductFiltersProps {
  filters: FilterState
  onChange: (filters: FilterState) => void
  count: number
  total: number
}

function SelectFilter({ label, value, options, onChange }: {
  label: string
  value: string
  options: string[]
  onChange: (v: string) => void
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-muted mb-1.5">{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full px-3 py-2.5 text-sm bg-dropdown-bg border border-input-border rounded-xl text-dropdown-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all appearance-none cursor-pointer"
      >
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  )
}

export default function ProductFilters({ filters, onChange, count, total }: ProductFiltersProps) {
  const update = (key: keyof FilterState, value: string) => {
    onChange({ ...filters, [key]: value })
  }

  return (
    <div className="gradient-border p-px rounded-2xl mb-10">
      <div className="bg-card-bg rounded-2xl p-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SelectFilter
            label="Category"
            value={filters.category}
            options={['All Products', 'Aluminum Railing', 'Aluminum Brackets']}
            onChange={v => update('category', v)}
          />
          <SelectFilter
            label="Finish"
            value={filters.finish}
            options={['All Finishes', 'Wooden', 'Anodized', 'Powder Coating', 'Mill Finish']}
            onChange={v => update('finish', v)}
          />
          <SelectFilter
            label="Locking Mechanism"
            value={filters.locking}
            options={['All Mechanisms', 'Channel Lock', 'Gasket Lock', 'Wedge Lock']}
            onChange={v => update('locking', v)}
          />
          <SelectFilter
            label="Profile Type"
            value={filters.profileType}
            options={['All Types', 'Continuous Bottom', 'Bracket with Cover']}
            onChange={v => update('profileType', v)}
          />
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <p className="text-sm text-muted">
            Showing <span className="text-foreground font-medium">{count}</span> of {total} products
          </p>
        </div>
      </div>
    </div>
  )
}
