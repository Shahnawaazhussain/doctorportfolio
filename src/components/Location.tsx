export default function Location() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-bg">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">Find Us</div>
          <h2 className="font-serif text-4xl lg:text-5xl text-navy">Clinic &amp; Location</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact info */}
          <div className="bg-white rounded-2xl border border-border-col p-8 flex flex-col gap-7">
            <div>
              <h3 className="font-serif text-2xl text-navy mb-1">Apollo Hospitals, Mumbai</h3>
              <p className="text-teal text-sm font-medium">Department of Cardiology · Ground Floor, Tower 2</p>
            </div>

            <div className="flex flex-col gap-5">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path
                      d="M9 1C6.24 1 4 3.24 4 6c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5z"
                      stroke="#1A5FAB"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <circle cx="9" cy="6" r="2" stroke="#0FADA0" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-fg uppercase tracking-wider mb-0.5">Address</p>
                  <p className="text-navy text-sm font-medium">Plot No. 13, Parsik Hill Road</p>
                  <p className="text-muted-fg text-sm">CBD Belapur, Navi Mumbai — 400614</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path
                      d="M3 3h4l1.5 3.5-2 1.5c1 2 3 4 5 5l1.5-2L16.5 12.5 16.5 16h-3c-5.5 0-10-6-10-11V3z"
                      stroke="#1A5FAB"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-fg uppercase tracking-wider mb-0.5">Phone</p>
                  <a href="tel:+912266002000" className="text-navy text-sm font-medium hover:text-primary transition-colors">
                    +91 22 6600 2000
                  </a>
                  <p className="text-muted-fg text-sm">Emergency: +91 22 6600 0911</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <rect x="2" y="4" width="14" height="10" rx="2" stroke="#1A5FAB" strokeWidth="1.5" />
                    <path d="M2 7l7 4 7-4" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-fg uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:drArjunmehta@apollohospitals.com" className="text-navy text-sm font-medium hover:text-primary transition-colors">
                    dr.arjunmehta@apollohospitals.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <circle cx="9" cy="9" r="7" stroke="#1A5FAB" strokeWidth="1.5" />
                    <path d="M9 5v4l3 2" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-fg uppercase tracking-wider mb-1">Visiting Hours</p>
                  <div className="flex flex-col gap-0.5 text-sm">
                    <div className="flex justify-between gap-8">
                      <span className="text-muted-fg">Mon – Fri</span>
                      <span className="text-navy font-medium">10:00 AM – 5:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-muted-fg">Saturday</span>
                      <span className="text-navy font-medium">9:00 AM – 1:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-muted-fg">Sunday</span>
                      <span className="text-muted-fg">Emergency only</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions button */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-5 py-3 rounded-md hover:bg-primary-dark transition-colors duration-200 self-start mt-auto"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 2L14 8 8 14M14 8H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Get Directions
            </a>
          </div>

          {/* Map placeholder */}
          <div className="rounded-2xl overflow-hidden border border-border-col bg-muted-bg min-h-[380px] lg:min-h-0 relative">
            <iframe
              title="Apollo Hospitals Navi Mumbai location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.565085553!2d73.03194!3d19.01980!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3c666cbba35%3A0x1e69e4e58ccac26a!2sApollo%20Hospitals%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1690000000000"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[380px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
