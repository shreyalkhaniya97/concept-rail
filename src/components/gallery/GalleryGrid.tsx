'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { GALLERY_ITEMS } from '@/data/gallery'

export default function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null)

  const navigate = useCallback((dir: 1 | -1) => {
    setSelected(prev => {
      if (prev === null) return null
      const next = prev + dir
      if (next >= 0 && next < GALLERY_ITEMS.length) return next
      return prev
    })
  }, [])

  // Keyboard navigation
  useEffect(() => {
    if (selected === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
      if (e.key === 'ArrowLeft') navigate(-1)
      if (e.key === 'ArrowRight') navigate(1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected, navigate])

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {GALLERY_ITEMS.map((item, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="group relative aspect-4/3 rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.1)]"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="px-3 py-1 text-xs font-medium bg-accent/80 backdrop-blur text-white rounded-full">
                {item.category}
              </span>
              <h3 className="mt-2 sm:mt-3 text-sm sm:text-base font-semibold text-white">{item.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelected(null)}
        >
          {/* Close */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all z-10"
          >
            <X size={20} />
          </button>

          {/* Navigation — hidden on very small screens, tap image sides instead */}
          {selected > 0 && (
            <button
              onClick={e => { e.stopPropagation(); navigate(-1) }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all z-10"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {selected < GALLERY_ITEMS.length - 1 && (
            <button
              onClick={e => { e.stopPropagation(); navigate(1) }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all z-10"
            >
              <ChevronRight size={20} />
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full max-w-5xl aspect-video sm:aspect-4/3"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={GALLERY_ITEMS[selected].image}
              alt={GALLERY_ITEMS[selected].title}
              fill
              className="object-contain"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-4 sm:bottom-8 text-center left-4 right-4">
            <span className="px-3 py-1 text-xs font-medium bg-accent/80 backdrop-blur text-white rounded-full">
              {GALLERY_ITEMS[selected].category}
            </span>
            <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold text-white">{GALLERY_ITEMS[selected].title}</h3>
            <p className="text-xs sm:text-sm text-white/40 mt-1">{selected + 1} / {GALLERY_ITEMS.length}</p>
          </div>
        </div>
      )}
    </>
  )
}
