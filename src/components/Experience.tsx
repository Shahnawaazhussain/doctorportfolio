const timeline = [
  {
    year: '2022',
    role: 'Senior Consultant Cardiologist',
    institution: 'Apollo Hospitals, Mumbai',
    description:
      'Head of the Interventional Cardiology department, leading a team of 12 cardiologists. Pioneered the hospital\'s TAVR program with over 200 successful procedures.',
    type: 'current',
  },
  {
    year: '2018',
    role: 'Consultant Cardiologist',
    institution: 'Fortis Hospital, Mumbai',
    description:
      'Established the Cardiac Electrophysiology unit. Performed over 500 ablation procedures and led the Heart Failure Clinic with 1,200 enrolled patients.',
    type: 'work',
  },
  {
    year: '2015',
    role: 'Advanced Fellowship — Structural Heart Disease',
    institution: 'Cleveland Clinic, Ohio, USA',
    description:
      'Trained in TAVR, MitraClip, and percutaneous valve interventions under global experts. Published 3 peer-reviewed papers on transcatheter valve outcomes.',
    type: 'fellowship',
  },
  {
    year: '2012',
    role: 'DM — Cardiology',
    institution: 'All India Institute of Medical Sciences (AIIMS), New Delhi',
    description:
      'Graduated with distinction. Thesis on novel biomarkers in acute coronary syndrome awarded the institute\'s research excellence prize.',
    type: 'education',
  },
  {
    year: '2009',
    role: 'MD — Internal Medicine',
    institution: 'Grant Medical College, Mumbai',
    description:
      'Completed residency with a focus on critical care and cardiovascular medicine. Ranked 2nd in the university examination.',
    type: 'education',
  },
  {
    year: '2006',
    role: 'MBBS',
    institution: 'Seth GS Medical College, Mumbai University',
    description:
      'Graduated with honours. Elected President of the Medical Students Association and awarded the Dean\'s Medal for Academic Excellence.',
    type: 'education',
  },
]

const typeColors: Record<string, string> = {
  current: 'bg-teal text-white',
  work: 'bg-primary text-white',
  fellowship: 'bg-navy text-white',
  education: 'bg-muted-bg text-muted-fg',
}

const typeLabels: Record<string, string> = {
  current: 'Current',
  work: 'Position',
  fellowship: 'Fellowship',
  education: 'Education',
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-slate-bg">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">Career Path</div>
          <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-4">Qualifications &amp; Experience</h2>
          <p className="text-muted-fg text-[15px] max-w-xl mx-auto">
            A career built on rigorous academic training, international fellowship, and 18 years of
            distinguished clinical practice.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border-col hidden sm:block" />

          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative sm:pl-20">
                {/* Dot */}
                <div className="hidden sm:flex absolute left-0 top-1 w-16 items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-2 border-primary bg-white z-10" />
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl border border-border-col p-6 hover:border-primary transition-colors duration-200">
                  <div className="flex flex-wrap items-start gap-3 mb-3">
                    <span className="font-serif text-2xl text-primary shrink-0">{item.year}</span>
                    <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider self-center ${typeColors[item.type]}`}>
                      {typeLabels[item.type]}
                    </span>
                  </div>
                  <h3 className="font-semibold text-navy text-base mb-1">{item.role}</h3>
                  <p className="text-teal text-sm font-medium mb-3">{item.institution}</p>
                  <p className="text-muted-fg text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
