export default function CTA() {
  return (
    <section className="bg-navy py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="w-10 h-0.5 bg-teal mb-6" />
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-5">
              Your Health Deserves Expert Care
            </h2>
            <p className="text-[17px] leading-relaxed" style={{ color: '#8AABD4' }}>
              Connect with Dr. Arjun Mehta for personalized cardiovascular guidance and care.
              Trusted by over 12,000 patients across Mumbai.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-2 bg-teal text-white font-semibold text-sm px-7 py-4 rounded-md hover:opacity-90 transition-opacity duration-200"
            >
              Book an Appointment
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="tel:+912266002000"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-4 rounded-md hover:bg-white/10 transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2.5 2.5h3.5l1.25 3-1.75 1.25c.875 1.75 2.75 3.625 4.5 4.5l1.25-1.75 3 1.25v3.5h-2.5c-4.875 0-9-5.125-9-9.75v-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              Call Now
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-14 pt-10 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
            {[
              { label: 'FESC', desc: 'Fellow of ESC' },
              { label: 'FACC', desc: 'Fellow of ACC' },
              { label: '18+ yrs', desc: 'Clinical Experience' },
              { label: '12K+', desc: 'Patients Treated' },
              { label: '25+', desc: 'Publications' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                  <div className="w-2 h-2 bg-teal rounded-full" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-none">{b.label}</p>
                  <p className="text-[11px] mt-0.5" style={{ color: '#8AABD4' }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
