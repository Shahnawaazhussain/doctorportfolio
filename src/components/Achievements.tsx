const awards = [
  { year: '2024', title: 'Best Cardiologist — Maharashtra', body: 'Indian Medical Association' },
  { year: '2022', title: 'Excellence in Cardiac Intervention', body: 'Cardiological Society of India' },
  { year: '2019', title: 'Outstanding Researcher Award', body: 'Apollo Health Sciences' },
  { year: '2017', title: 'Young Interventionalist of the Year', body: 'Indian College of Cardiology' },
]

const publications = [
  {
    title: 'Long-term Outcomes of TAVR in High-Surgical-Risk Patients: A 5-Year Follow-Up Study',
    journal: 'European Heart Journal, 2023',
  },
  {
    title: 'Novel Biomarkers for Early Detection of Acute Coronary Syndrome in South Asian Populations',
    journal: 'Journal of the American College of Cardiology, 2021',
  },
  {
    title: 'Catheter Ablation vs. Medical Therapy for Persistent Atrial Fibrillation: A Randomised Trial',
    journal: 'Circulation, 2020',
  },
  {
    title: 'Real-World Outcomes of MitraClip in Severe Mitral Regurgitation',
    journal: 'JACC: Cardiovascular Interventions, 2019',
  },
]

const memberships = [
  'Fellow of the European Society of Cardiology (FESC)',
  'Fellow of the American College of Cardiology (FACC)',
  'Cardiological Society of India (CSI) — Executive Committee Member',
  'Indian College of Cardiology (ICC)',
  'Association of Physicians of India (API)',
]

const conferences = [
  { event: 'ESC Congress 2024', role: 'Keynote Speaker', location: 'London, UK' },
  { event: 'AHA Scientific Sessions 2023', role: 'Panelist', location: 'Philadelphia, USA' },
  { event: 'CSI Annual Conference 2023', role: 'Session Chair', location: 'New Delhi, India' },
  { event: 'TCT 2022', role: 'Live Case Operator', location: 'San Francisco, USA' },
]

export default function Achievements() {
  return (
    <section className="py-20 lg:py-28 bg-slate-bg">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">Recognition &amp; Research</div>
          <h2 className="font-serif text-4xl lg:text-5xl text-navy">Achievements &amp; Publications</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Awards */}
          <div className="bg-white rounded-2xl border border-border-col p-7">
            <h3 className="font-serif text-2xl text-navy mb-6 flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 1l2.163 4.38L17 6.22l-3.5 3.41.826 4.82L10 12.11l-4.326 2.34.826-4.82L3 6.22l4.837-.84L10 1z" fill="#C9A84C" />
              </svg>
              Awards &amp; Recognitions
            </h3>
            <div className="flex flex-col gap-4">
              {awards.map((a) => (
                <div key={a.title} className="flex gap-4 items-start">
                  <span className="font-serif text-lg text-primary shrink-0 w-12">{a.year}</span>
                  <div className="flex-1 border-l border-border-col pl-4">
                    <p className="font-semibold text-navy text-sm">{a.title}</p>
                    <p className="text-xs text-muted-fg mt-0.5">{a.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="bg-white rounded-2xl border border-border-col p-7">
            <h3 className="font-serif text-2xl text-navy mb-6 flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 2h8l4 4v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z" stroke="#1A5FAB" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M12 2v4h4M6 9h8M6 13h5" stroke="#1A5FAB" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Selected Publications
            </h3>
            <div className="flex flex-col gap-5">
              {publications.map((p) => (
                <div key={p.title} className="border-l-2 border-primary pl-4">
                  <p className="text-navy text-sm font-medium leading-snug mb-1">{p.title}</p>
                  <p className="text-xs text-teal font-medium">{p.journal}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Memberships */}
          <div className="bg-white rounded-2xl border border-border-col p-7">
            <h3 className="font-serif text-2xl text-navy mb-6 flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="8" stroke="#1A5FAB" strokeWidth="1.5" />
                <path d="M7 10l2 2 4-4" stroke="#0FADA0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Professional Memberships
            </h3>
            <ul className="flex flex-col gap-3">
              {memberships.map((m) => (
                <li key={m} className="flex gap-3 text-sm text-muted-fg">
                  <span className="w-1.5 h-1.5 bg-teal rounded-full shrink-0 mt-1.5" />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Conferences */}
          <div className="bg-white rounded-2xl border border-border-col p-7">
            <h3 className="font-serif text-2xl text-navy mb-6 flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke="#1A5FAB" strokeWidth="1.5" />
                <path d="M7 3v2M13 3v2M3 9h14" stroke="#1A5FAB" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              International Conferences
            </h3>
            <div className="flex flex-col gap-4">
              {conferences.map((c) => (
                <div key={c.event} className="flex justify-between gap-4">
                  <div>
                    <p className="font-semibold text-navy text-sm">{c.event}</p>
                    <p className="text-xs text-muted-fg mt-0.5">{c.location}</p>
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary-light px-2.5 py-1 rounded-full h-fit shrink-0">
                    {c.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
