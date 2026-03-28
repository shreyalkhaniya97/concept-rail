'use client'

import { useState } from 'react'
import { Send, CheckCircle, Sparkles } from 'lucide-react'

const PROJECT_TYPES = ['Residential', 'Commercial', 'Hospitality', 'Public / Infrastructure', 'Other']
const APPLICATION_OPTIONS = ['Balcony', 'Staircase', 'Terrace', 'Indoor', 'Outdoor', 'Façade', 'Pool Area', 'Other']
const PRODUCT_OPTIONS = [
  'CR-01 (57×71mm · Channel Lock)',
  'CR-02 (65×96mm · Gasket Lock)',
  'CR-03 (50×60mm · Channel Lock)',
  'CR-04 (45×117mm · Wedge Lock)',
  'CR-05 (60×115mm · Wedge Lock)',
  'CR-06 (65×75mm · Wedge Lock)',
  'CR-07 (70×70mm · Wedge Lock)',
  'Not decided yet (Need recommendation)',
]
const FINISH_OPTIONS = ['Wooden', 'Anodized', 'Powder Coating', 'Mill Finish', 'No preference']
const TIMELINE_OPTIONS = ['Immediate (within 2 weeks)', '1–3 months', '3–6 months', 'Still planning']

export default function EnquiryForm() {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    projectType: '',
    applications: [] as string[],
    approxLength: '',
    glassThickness: '',
    products: [] as string[],
    finish: '',
    profileType: '',
    timeline: '',
    message: '',
  })

  const update = (key: string, value: string | string[]) => {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  const toggleCheckbox = (key: 'applications' | 'products', value: string) => {
    setForm(prev => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter(v => v !== value)
        : [...prev[key], value],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const res = await fetch('/api/submit-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Failed to submit')
      setSuccess(true)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-emerald" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
        <p className="mt-2 text-muted">Your enquiry has been submitted successfully. We&apos;ll get back to you soon.</p>
      </div>
    )
  }

  const inputClass = 'w-full px-4 py-3 text-sm bg-input-bg border border-input-border rounded-xl text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all'
  const selectClass = 'w-full px-4 py-3 text-sm bg-dropdown-bg border border-input-border rounded-xl text-dropdown-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all appearance-none cursor-pointer'
  const labelClass = 'block text-sm font-medium text-foreground mb-1.5'

  return (
    <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-12">
      {/* Section A — Enquirer Details */}
      <div>
        <div className="flex items-center gap-2 mb-6 pb-3 border-b border-border">
          <div className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center">
            <span className="text-xs font-bold text-accent">A</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground">Your Details</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Full Name *</label>
            <input type="text" required value={form.fullName} onChange={e => update('fullName', e.target.value)} className={inputClass} placeholder="John Doe" />
          </div>
          <div>
            <label className={labelClass}>Company</label>
            <input type="text" value={form.company} onChange={e => update('company', e.target.value)} className={inputClass} placeholder="Company name" />
          </div>
          <div>
            <label className={labelClass}>Email *</label>
            <input type="email" required value={form.email} onChange={e => update('email', e.target.value)} className={inputClass} placeholder="john@example.com" />
          </div>
          <div>
            <label className={labelClass}>Phone *</label>
            <input type="tel" required value={form.phone} onChange={e => update('phone', e.target.value)} className={inputClass} placeholder="+91 XXX XXX XXXX" />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>City *</label>
            <input type="text" required value={form.city} onChange={e => update('city', e.target.value)} className={inputClass} placeholder="Your city" />
          </div>
        </div>
      </div>

      {/* Section B — Project Details */}
      <div>
        <div className="flex items-center gap-2 mb-6 pb-3 border-b border-border">
          <div className="w-6 h-6 rounded-md bg-cyan/10 flex items-center justify-center">
            <span className="text-xs font-bold text-cyan">B</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground">Project Details</h3>
        </div>
        <div className="space-y-5">
          <div>
            <label className={labelClass}>Project Type *</label>
            <select required value={form.projectType} onChange={e => update('projectType', e.target.value)} className={selectClass}>
              <option value="">Select project type</option>
              {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>Applications</label>
            <div className="flex flex-wrap gap-2 mt-1">
              {APPLICATION_OPTIONS.map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleCheckbox('applications', opt)}
                  className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 ${
                    form.applications.includes(opt)
                      ? 'bg-accent text-white border-accent shadow-[0_0_15px_rgba(124,58,237,0.25)]'
                      : 'bg-transparent text-muted border-border hover:border-accent/40 hover:text-foreground'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Approximate Length (ft)</label>
              <input type="number" value={form.approxLength} onChange={e => update('approxLength', e.target.value)} className={inputClass} placeholder="e.g. 50" />
            </div>
            <div>
              <label className={labelClass}>Glass Thickness</label>
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-1">
                {['12 mm', '12–14 mm', 'Not sure'].map(opt => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => update('glassThickness', opt)}
                    className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 ${
                      form.glassThickness === opt
                        ? 'bg-accent text-white border-accent shadow-[0_0_15px_rgba(124,58,237,0.25)]'
                        : 'bg-transparent text-muted border-border hover:border-accent/40 hover:text-foreground'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section C — Product Interest */}
      <div>
        <div className="flex items-center gap-2 mb-6 pb-3 border-b border-border">
          <div className="w-6 h-6 rounded-md bg-emerald/10 flex items-center justify-center">
            <span className="text-xs font-bold text-emerald">C</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground">Product Interest</h3>
        </div>
        <div className="space-y-5">
          <div>
            <label className={labelClass}>Products of Interest</label>
            <div className="grid sm:grid-cols-2 gap-2 mt-1">
              {PRODUCT_OPTIONS.map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleCheckbox('products', opt)}
                  className={`px-4 py-3 text-sm rounded-xl border text-left transition-all duration-200 ${
                    form.products.includes(opt)
                      ? 'bg-accent/10 text-accent border-accent/40 shadow-[0_0_15px_rgba(124,58,237,0.1)]'
                      : 'bg-transparent text-muted border-border hover:border-accent/30 hover:text-foreground'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Preferred Finish</label>
              <select value={form.finish} onChange={e => update('finish', e.target.value)} className={selectClass}>
                <option value="">Select finish</option>
                {FINISH_OPTIONS.map(f => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass}>Profile Type</label>
              <div className="flex flex-wrap gap-2 mt-1">
                {['Continuous Bottom', 'Bracket with Cover', 'No preference'].map(opt => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => update('profileType', opt)}
                    className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 ${
                      form.profileType === opt
                        ? 'bg-accent text-white border-accent shadow-[0_0_15px_rgba(124,58,237,0.25)]'
                        : 'bg-transparent text-muted border-border hover:border-accent/40 hover:text-foreground'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section D — Message & Timeline */}
      <div>
        <div className="flex items-center gap-2 mb-6 pb-3 border-b border-border">
          <div className="w-6 h-6 rounded-md bg-amber/10 flex items-center justify-center">
            <span className="text-xs font-bold text-amber">D</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground">Additional Information</h3>
        </div>
        <div className="space-y-5">
          <div>
            <label className={labelClass}>Timeline</label>
            <select value={form.timeline} onChange={e => update('timeline', e.target.value)} className={selectClass}>
              <option value="">Select timeline</option>
              {TIMELINE_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>Message</label>
            <textarea
              rows={5}
              value={form.message}
              onChange={e => update('message', e.target.value)}
              className={inputClass}
              placeholder="Tell us about your project requirements..."
            />
          </div>
        </div>
      </div>

      {error && (
        <div className="px-4 py-3 rounded-xl bg-rose/10 border border-rose/20 text-sm text-rose">{error}</div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-hover transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.25)] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] disabled:opacity-50"
      >
        {submitting ? (
          <Sparkles size={16} className="animate-spin" />
        ) : (
          <Send size={16} />
        )}
        {submitting ? 'Submitting...' : 'Submit Enquiry'}
      </button>
    </form>
  )
}
