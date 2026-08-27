import { useState } from 'react'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1758691461990-03b49d969495?w=600&h=400&fit=crop&auto=format',
    alt: 'Dr. Mehta reviewing patient charts',
    category: 'Clinical Practice',
    span: 'col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&auto=format',
    alt: 'Dr. Mehta during consultation',
    category: 'Portrait',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1655313719493-16ebe4906441?w=400&h=280&fit=crop&auto=format',
    alt: 'Cardiac monitoring equipment',
    category: 'Clinic Equipment',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1758691462123-8a17ae95d203?w=400&h=280&fit=crop&auto=format',
    alt: 'Patient check-up',
    category: 'Patient Care',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1777269749032-d8d458ae594d?w=600&h=320&fit=crop&auto=format',
    alt: 'Apollo Hospitals main corridor',
    category: 'Apollo Hospitals',
    span: 'col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?w=400&h=280&fit=crop&auto=format',
    alt: 'Doctor writing consultation notes',
    category: 'Clinical Practice',
    span: '',
  },
]

export default function Gallery() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-28 bg-slate-bg">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">Gallery</div>
          <h2 className="font-serif text-4xl lg:text-5xl text-navy">Professional Gallery</h2>
        </div>

        {/* Desktop masonry-style grid */}
        <div className="hidden sm:grid grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl bg-muted-bg cursor-pointer group ${img.span}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="aspect-video">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-navy/70 flex flex-col justify-end p-4 transition-opacity duration-300 ${
                  hovered === i ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="text-[10px] font-semibold text-teal uppercase tracking-widest mb-1">
                  {img.category}
                </span>
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: simple scroll grid */}
        <div className="sm:hidden flex gap-4 overflow-x-auto snap-x-scroll snap-x snap-mandatory pb-3">
          {images.map((img, i) => (
            <div key={i} className="snap-start shrink-0 w-[78vw] rounded-xl overflow-hidden bg-muted-bg">
              <div className="aspect-video">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <p className="text-[10px] font-semibold text-teal uppercase tracking-wider">{img.category}</p>
                <p className="text-xs text-navy font-medium mt-0.5">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
