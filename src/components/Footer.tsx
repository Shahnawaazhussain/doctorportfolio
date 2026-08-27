const quickLinks = ['About', 'Expertise', 'Treatments', 'Experience', 'FAQs', 'Contact']
const quickHrefs = ['#about', '#expertise', '#treatments', '#experience', '#faqs', '#contact']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-light">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Doctor info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="text-white font-serif text-sm">AM</span>
              </div>
              <div>
                <div className="font-serif text-white text-[15px]">Dr. Arjun Mehta</div>
                <div className="text-[11px] tracking-wider uppercase" style={{ color: '#8AABD4' }}>Cardiologist</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#8AABD4' }}>
              Consultant Cardiologist at Apollo Hospitals, Mumbai. Providing evidence-based cardiac
              care with compassion and precision since 2006.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-5">
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg flex items-center justify-center border transition-colors hover:border-primary hover:bg-primary/10"
                style={{ borderColor: 'rgba(255,255,255,0.15)' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="12" height="12" rx="2" stroke="#8AABD4" strokeWidth="1.25" />
                  <path d="M5 7v4M5 5.5v.01M8 11V9c0-1.1.9-2 2-2s2 .9 2 2v2" stroke="#8AABD4" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg flex items-center justify-center border transition-colors hover:border-primary hover:bg-primary/10"
                style={{ borderColor: 'rgba(255,255,255,0.15)' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="12" height="12" rx="3" stroke="#8AABD4" strokeWidth="1.25" />
                  <circle cx="8" cy="8" r="2.5" stroke="#8AABD4" strokeWidth="1.25" />
                  <circle cx="11.5" cy="4.5" r="0.5" fill="#8AABD4" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg flex items-center justify-center border transition-colors hover:border-primary hover:bg-primary/10"
                style={{ borderColor: 'rgba(255,255,255,0.15)' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M12 2h-2a3 3 0 00-3 3v2H5v3h2v5h3V10h2l1-3h-3V5a1 1 0 011-1h2V2z" stroke="#8AABD4" strokeWidth="1.25" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link, i) => (
                <li key={link}>
                  <a
                    href={quickHrefs[i]}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#8AABD4' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h3>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a href="tel:+912266002000" className="text-sm transition-colors hover:text-white block" style={{ color: '#8AABD4' }}>
                  +91 22 6600 2000
                </a>
              </li>
              <li>
                <a href="mailto:dr.arjunmehta@apollohospitals.com" className="text-sm transition-colors hover:text-white block break-all" style={{ color: '#8AABD4' }}>
                  dr.arjunmehta@apollohospitals.com
                </a>
              </li>
              <li className="text-sm leading-relaxed" style={{ color: '#8AABD4' }}>
                Plot No. 13, Parsik Hill Road<br />
                CBD Belapur, Navi Mumbai — 400614
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Clinic Hours</h3>
            <ul className="flex flex-col gap-2.5 text-sm" style={{ color: '#8AABD4' }}>
              <li className="flex justify-between gap-4">
                <span>Mon – Fri</span>
                <span className="text-white font-medium">10:00 – 17:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span className="text-white font-medium">09:00 – 13:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span>Emergency only</span>
              </li>
            </ul>
            <div className="mt-5 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-xs font-medium text-white mb-0.5">24-Hour Emergency</p>
              <a href="tel:+912266000911" className="text-xs hover:text-white transition-colors" style={{ color: '#8AABD4' }}>
                +91 22 6600 0911
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-xs" style={{ color: '#8AABD4' }}>
            © {year} Dr. Arjun Mehta. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            {['Privacy Policy', 'Terms of Use', 'Medical Disclaimer'].map((link) => (
              <a key={link} href="#" className="text-xs transition-colors hover:text-white" style={{ color: '#8AABD4' }}>
                {link}
              </a>
            ))}
          </div>
        </div>

        <p className="text-center text-xs mt-4" style={{ color: 'rgba(138,171,212,0.5)' }}>
          The information on this website is for general informational purposes only and does not constitute
          medical advice. Please consult your physician before making any medical decisions.
        </p>
      </div>
    </footer>
  )
}
