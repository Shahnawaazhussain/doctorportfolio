const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z" stroke="#1A5FAB" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Extensive Clinical Experience',
    description:
      '18+ years of hands-on experience across tertiary care hospitals, managing complex and high-risk cardiovascular cases.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="#1A5FAB" strokeWidth="1.5" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Patient-Centered Care',
    description:
      'Every consultation is structured around your unique health history, concerns, and lifestyle — never a one-size-fits-all approach.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="#1A5FAB" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="#1A5FAB" strokeWidth="1.5" />
        <path d="M9 12h6M9 16h4" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Evidence-Based Treatment',
    description:
      'All clinical decisions are grounded in current international guidelines and supported by peer-reviewed research.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3v3M3 12h3M12 21v-3M21 12h-3" stroke="#1A5FAB" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="#0FADA0" strokeWidth="1.5" />
        <path d="M6.34 6.34l2.12 2.12M15.54 15.54l2.12 2.12M6.34 17.66l2.12-2.12M15.54 8.46l2.12-2.12" stroke="#1A5FAB" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Personalized Treatment Plans',
    description:
      'Holistic care plans integrating medical therapy, interventional procedures, lifestyle guidance, and regular follow-up.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#1A5FAB" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Advanced Medical Knowledge',
    description:
      'International fellowship at Cleveland Clinic and 25+ published research papers ensure cutting-edge expertise.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="#1A5FAB" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 10v4M10 12h4" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Compassionate Patient Support',
    description:
      'A calm, empathetic approach that helps patients and families navigate complex diagnoses with clarity and confidence.',
  },
]

export default function WhyChooseMe() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">Why Dr. Mehta</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy">
              Why Patients<br />Choose Dr. Mehta
            </h2>
          </div>
          <p className="text-muted-fg text-[15px] leading-relaxed lg:max-w-sm lg:ml-auto">
            Thousands of patients across Mumbai and beyond have trusted Dr. Mehta for their cardiac care.
            Here is what sets his practice apart.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 p-6 rounded-xl border border-border-col hover:border-primary hover:shadow-sm transition-all duration-200"
            >
              <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                {f.icon}
              </div>
              <div>
                <h3 className="font-semibold text-navy text-[15px] mb-1.5">{f.title}</h3>
                <p className="text-muted-fg text-sm leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
