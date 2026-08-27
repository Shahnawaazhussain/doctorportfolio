export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-white"
    >
      {/* Subtle background shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-bg opacity-60 rounded-bl-[80px] hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Consultant Cardiologist · Apollo Hospitals, Mumbai
            </div>

            {/* Name */}
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl text-navy leading-[1.05] mb-4">
              Dr. Arjun<br />Mehta
            </h1>

            {/* Qualifications */}
            <p className="text-sm text-muted-fg tracking-widest uppercase mb-4 font-medium">
              MBBS &nbsp;·&nbsp; MD &nbsp;·&nbsp; DM (Cardiology) &nbsp;·&nbsp; FESC &nbsp;·&nbsp; FACC
            </p>

            {/* Divider */}
            <div className="w-12 h-0.5 bg-teal mb-6" />

            {/* Description */}
            <p className="text-[17px] text-muted-fg leading-relaxed max-w-md mb-8">
              Providing evidence-based, compassionate cardiovascular care with a patient-first
              approach. Specializing in complex coronary interventions, heart failure management,
              and preventive cardiology.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3.5 rounded-md hover:bg-primary-dark transition-colors duration-200"
              >
                Book an Appointment
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#expertise"
                className="inline-flex items-center gap-2 border border-border-col text-navy font-semibold text-sm px-6 py-3.5 rounded-md hover:border-primary hover:text-primary transition-colors duration-200"
              >
                Explore Expertise
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: '18+', label: 'Years Experience' },
                { value: '12,000+', label: 'Patients Treated' },
                { value: '25+', label: 'Publications' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-1.5">
                  <span className="font-serif text-2xl text-primary">{stat.value}</span>
                  <span className="text-xs text-muted-fg">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            {/* Photo container */}
            <div className="relative">
              <div className="w-72 sm:w-80 lg:w-96 xl:w-[420px] aspect-[3/4] rounded-2xl overflow-hidden bg-slate-bg">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=560&h=750&fit=crop&auto=format"
                  alt="Dr. Arjun Mehta, Consultant Cardiologist"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating credential card */}
              <div className="absolute -bottom-5 -left-5 lg:-left-10 bg-white rounded-xl shadow-lg border border-border-col px-5 py-4 w-52">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-2 h-2 bg-teal rounded-full" />
                  <span className="text-xs text-muted-fg font-medium uppercase tracking-wider">Available Today</span>
                </div>
                <p className="text-sm font-semibold text-navy">Next Slot: 10:30 AM</p>
                <p className="text-xs text-muted-fg mt-0.5">Apollo Main Campus</p>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 lg:right-0 bg-primary text-white rounded-xl px-4 py-3 text-center shadow-md">
                <div className="font-serif text-2xl leading-none">FESC</div>
                <div className="text-[10px] tracking-wider uppercase mt-0.5 opacity-80">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="text-xs text-muted-fg tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-border-col to-transparent" />
      </div>
    </section>
  )
}
