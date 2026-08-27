const areas = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4z" stroke="#1A5FAB" strokeWidth="1.5" />
        <path d="M14 9v5l3 3" stroke="#1A5FAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 14c0-2.21 1.79-4 4-4" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Interventional Cardiology',
    description:
      'Expertise in coronary angioplasty, stenting, and complex PCI procedures for coronary artery disease management.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 6c-1.5 0-4 1.5-4 5 0 5 4 8 4 8s4-3 4-8c0-3.5-2.5-5-4-5z" stroke="#1A5FAB" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 18h16" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 22h12" stroke="#1A5FAB" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Heart Failure Management',
    description:
      'Comprehensive evaluation and advanced therapies for acute and chronic heart failure, including device therapy.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="20" height="14" rx="2" stroke="#1A5FAB" strokeWidth="1.5" />
        <path d="M8 15l3-3 3 4 2-2 3 3" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12h20" stroke="#1A5FAB" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Cardiac Electrophysiology',
    description:
      'Diagnosis and treatment of complex arrhythmias, including catheter ablation and pacemaker implantation.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="9" stroke="#1A5FAB" strokeWidth="1.5" />
        <path d="M14 10v4l3 2" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 6L8 4M18 6l2-2" stroke="#1A5FAB" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Preventive Cardiology',
    description:
      'Risk stratification, lifestyle counselling, and evidence-based prevention programs for high-risk individuals.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 14h4l2-6 3 12 3-9 2 3h4" stroke="#1A5FAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 22h18" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Echocardiography',
    description:
      'Advanced cardiac imaging including 2D, 3D, stress echo, and transesophageal echocardiography for accurate diagnosis.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M8 6h12M8 10h8M8 14h10M8 18h6" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="#1A5FAB" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Structural Heart Disease',
    description:
      'TAVR, MitraClip, and percutaneous valve therapies for patients with structural and valvular heart conditions.',
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 lg:py-28 bg-slate-bg">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">Specialist Knowledge</div>
          <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-4">Areas of Expertise</h2>
          <p className="text-muted-fg text-[15px] max-w-xl mx-auto">
            Combining advanced clinical training with 18 years of hands-on experience across the full
            spectrum of cardiovascular medicine.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area) => (
            <article
              key={area.title}
              className="bg-white rounded-xl p-6 border border-border-col hover:border-primary hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-200">
                <div className="group-hover:[&_path]:stroke-white transition-all duration-200">
                  {area.icon}
                </div>
              </div>
              <h3 className="font-semibold text-navy text-base mb-2">{area.title}</h3>
              <p className="text-muted-fg text-sm leading-relaxed mb-4">{area.description}</p>
              <a
                href="#treatments"
                className="text-primary text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
              >
                Learn More
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
