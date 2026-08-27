const stats = [
  { value: '18+', label: 'Years of Experience' },
  { value: '12,000+', label: 'Patients Treated' },
  { value: '25+', label: 'Research Publications' },
  { value: '8+', label: 'Certifications' },
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-slate-bg aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=540&h=680&fit=crop&auto=format"
                alt="Dr. Arjun Mehta in his clinic"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative offset block */}
            <div className="absolute -bottom-4 -right-4 lg:-right-6 w-48 h-32 bg-teal-light rounded-xl -z-10" />
            {/* Award badge */}
            <div className="absolute top-6 -right-3 lg:right-0 bg-white border border-border-col rounded-xl px-4 py-3 shadow-sm">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M9 1l2.163 4.38L16 6.22l-3.5 3.41.826 4.82L9 12.11l-4.326 2.34.826-4.82L2 6.22l4.837-.84L9 1z" fill="#C9A84C" />
                </svg>
                <div>
                  <div className="text-xs font-semibold text-navy">Best Cardiologist</div>
                  <div className="text-[10px] text-muted-fg">Mumbai, 2024</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">About the Doctor</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-6 leading-tight">
              About Dr. Arjun Mehta
            </h2>
            <div className="w-10 h-0.5 bg-teal mb-6" />

            <div className="space-y-4 text-[15px] text-muted-fg leading-relaxed mb-8">
              <p>
                Dr. Arjun Mehta is a board-certified Consultant Cardiologist with over 18 years of
                distinguished clinical experience at Apollo Hospitals, Mumbai. He completed his
                DM in Cardiology from AIIMS New Delhi and pursued advanced fellowship training
                in interventional cardiology at the Cleveland Clinic, USA.
              </p>
              <p>
                His practice encompasses complex coronary interventions, structural heart disease
                management, advanced heart failure therapies, and preventive cardiology. He is
                recognized for his meticulous approach and commitment to individualized patient care.
              </p>
              <p>
                Dr. Mehta believes that exceptional medicine begins with genuine listening — he
                takes time to understand each patient's unique circumstances before crafting a
                treatment strategy grounded in the best available evidence.
              </p>
            </div>

            <a
              href="#experience"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200 mb-10"
            >
              View Full Career History
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-slate-bg rounded-xl p-5">
                  <div className="font-serif text-3xl text-primary mb-1">{s.value}</div>
                  <div className="text-xs text-muted-fg font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
