const testimonials = [
  {
    initials: 'RP',
    name: 'Rajesh P.',
    treatment: 'Coronary Angioplasty',
    rating: 5,
    review:
      "Dr. Mehta performed my angioplasty with exceptional skill and confidence. What impressed me most was how thoroughly he explained every step of the procedure and what to expect during recovery. I felt genuinely cared for, not just treated.",
  },
  {
    initials: 'SM',
    name: 'Sunita M.',
    treatment: 'Heart Failure Management',
    rating: 5,
    review:
      "After years of struggling with heart failure and multiple hospitalizations, Dr. Mehta restructured my entire treatment plan. Within six months my ejection fraction improved significantly. His knowledge and patience are truly exceptional.",
  },
  {
    initials: 'AK',
    name: 'Anil K.',
    treatment: 'Preventive Cardiology',
    rating: 5,
    review:
      "I came to Dr. Mehta for a second opinion and left with a completely different — and far better — understanding of my risk. His preventive approach is thorough and evidence-based. I feel confident about my heart health for the first time in years.",
  },
  {
    initials: 'PD',
    name: 'Priya D.',
    treatment: 'Cardiac Arrhythmia',
    rating: 5,
    review:
      "The ablation procedure Dr. Mehta performed has given me my life back. I was having daily palpitations for two years. He was calm, reassuring, and technically brilliant. I cannot thank him enough.",
  },
  {
    initials: 'VR',
    name: 'Vikram R.',
    treatment: 'TAVR Procedure',
    rating: 5,
    review:
      "At 78, open heart surgery was not an option. Dr. Mehta's team performed TAVR and my recovery was remarkable. His entire team reflected his commitment to patient care — professional, warm, and highly skilled.",
  },
  {
    initials: 'NS',
    name: 'Neha S.',
    treatment: 'Cardiac Rehabilitation',
    rating: 5,
    review:
      "Following my heart attack, I was frightened about my future. Dr. Mehta's rehabilitation program and the way he personally followed up with me every month gave me confidence. His dedication to long-term outcomes is evident.",
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#C9A84C" aria-hidden="true">
          <path d="M7 1l1.545 3.13L12 4.636l-2.5 2.437.59 3.441L7 8.865 3.91 10.514 4.5 7.073 2 4.636l3.455-.506L7 1z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">Patient Stories</div>
          <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-4">What Patients Say</h2>
          <p className="text-muted-fg text-[15px] max-w-md mx-auto">
            Thousands of patients have entrusted their cardiac care to Dr. Mehta. Here are a few of their experiences.
          </p>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        {/* Tablet: 2-column */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-6">
          {testimonials.slice(0, 4).map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="sm:hidden flex gap-4 overflow-x-auto snap-x-scroll snap-x snap-mandatory pb-4">
          {testimonials.map((t) => (
            <div key={t.name} className="snap-start shrink-0 w-[85vw]">
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>

        {/* Aggregate rating */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="22" height="22" viewBox="0 0 14 14" fill="#C9A84C" aria-hidden="true">
                <path d="M7 1l1.545 3.13L12 4.636l-2.5 2.437.59 3.441L7 8.865 3.91 10.514 4.5 7.073 2 4.636l3.455-.506L7 1z" />
              </svg>
            ))}
          </div>
          <div>
            <span className="font-serif text-3xl text-navy">4.9</span>
            <span className="text-muted-fg text-sm ml-2">average rating across 1,200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  initials,
  name,
  treatment,
  rating,
  review,
}: {
  initials: string
  name: string
  treatment: string
  rating: number
  review: string
}) {
  return (
    <article className="bg-slate-bg rounded-xl border border-border-col p-6 flex flex-col h-full">
      {/* Quote icon */}
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="mb-4 shrink-0" aria-hidden="true">
        <path
          d="M4 18c0-6 4-10 8-10v3c-2 0-4 1.5-4 4h4v6H4v-3zm12 0c0-6 4-10 8-10v3c-2 0-4 1.5-4 4h4v6h-8v-3z"
          fill="#1A5FAB"
          fillOpacity="0.15"
        />
      </svg>
      <p className="text-muted-fg text-sm leading-relaxed mb-6 flex-1">{review}</p>
      <div className="flex items-center gap-3 pt-4 border-t border-border-col">
        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm shrink-0">
          {initials}
        </div>
        <div>
          <p className="font-semibold text-navy text-sm">{name}</p>
          <p className="text-xs text-muted-fg">{treatment}</p>
        </div>
        <div className="ml-auto">
          <StarRating count={rating} />
        </div>
      </div>
    </article>
  )
}
