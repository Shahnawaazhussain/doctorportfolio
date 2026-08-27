const treatments = [
  {
    image: 'https://images.unsplash.com/photo-1655313719493-16ebe4906441?w=480&h=280&fit=crop&auto=format',
    alt: 'Coronary angioplasty procedure',
    name: 'Coronary Angioplasty & Stenting',
    description:
      'Minimally invasive procedure to open blocked arteries and restore blood flow to the heart muscle.',
  },
  {
    image: 'https://images.unsplash.com/photo-1758691461935-202e2ef6b69f?w=480&h=280&fit=crop&auto=format',
    alt: 'Doctor consulting patient',
    name: 'Heart Failure Clinic',
    description:
      'Multidisciplinary outpatient program offering medication optimization, device therapy, and remote monitoring.',
  },
  {
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=480&h=280&fit=crop&auto=format',
    alt: 'Cardiac monitoring equipment',
    name: 'Cardiac Rhythm Management',
    description:
      'Comprehensive arrhythmia assessment, Holter monitoring, and implantable device therapy including pacemakers.',
  },
  {
    image: 'https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?w=480&h=280&fit=crop&auto=format',
    alt: 'Patient consultation',
    name: 'Preventive Cardiology',
    description:
      'Personalized risk assessment, lipid management, hypertension treatment, and lifestyle modification programs.',
  },
  {
    image: 'https://images.unsplash.com/photo-1758691462123-8a17ae95d203?w=480&h=280&fit=crop&auto=format',
    alt: 'Blood pressure monitoring',
    name: 'Hypertension Management',
    description:
      'Advanced evaluation and targeted treatment plans for resistant hypertension and secondary hypertension.',
  },
  {
    image: 'https://images.unsplash.com/photo-1777269749032-d8d458ae594d?w=480&h=280&fit=crop&auto=format',
    alt: 'Modern hospital corridor',
    name: 'Cardiac Rehabilitation',
    description:
      'Structured recovery and fitness programs for patients post-heart attack, surgery, or heart failure episode.',
  },
]

export default function Treatments() {
  return (
    <section id="treatments" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">Clinical Services</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy">Treatments &amp; Services</h2>
          </div>
          <p className="text-muted-fg text-[15px] max-w-xs sm:text-right">
            Evidence-based interventions delivered with precision and compassion.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t) => (
            <article
              key={t.name}
              className="rounded-xl border border-border-col overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="aspect-[16/9] overflow-hidden bg-slate-bg">
                <img
                  src={t.image}
                  alt={t.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-navy text-[15px] mb-2">{t.name}</h3>
                <p className="text-muted-fg text-sm leading-relaxed mb-4">{t.description}</p>
                <a
                  href="#appointment"
                  className="text-primary text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
                >
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
