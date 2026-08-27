import { useState } from 'react'

const faqs = [
  {
    question: 'How can I book an appointment with Dr. Mehta?',
    answer:
      'You can book an appointment through our online booking form on this website, by calling our clinic directly at +91 22 6600 2000, or via WhatsApp. Appointments are typically available within 2–3 business days, with priority slots for urgent referrals.',
  },
  {
    question: 'What should I bring to my first consultation?',
    answer:
      "Please bring any previous ECGs, echocardiograms, or cardiac reports; a list of your current medications; relevant blood test results (particularly lipid profile, HbA1c, kidney function); your health insurance card; and a list of questions or concerns you'd like to discuss. Arriving 15 minutes early for paperwork is appreciated.",
  },
  {
    question: 'What conditions and treatments does Dr. Mehta specialize in?',
    answer:
      'Dr. Mehta specializes in coronary artery disease, heart failure, cardiac arrhythmias, structural heart disease (including TAVR and MitraClip), hypertension, and preventive cardiology. He performs coronary angioplasty, catheter ablation, pacemaker implantation, and leads a dedicated cardiac rehabilitation program.',
  },
  {
    question: 'Are follow-up consultations available?',
    answer:
      'Yes. Follow-up appointments are an integral part of Dr. Mehta\'s care philosophy. Depending on your condition, regular follow-ups will be scheduled, and our team can also arrange teleconsultation appointments for routine reviews so you can connect from home.',
  },
  {
    question: 'What are the clinic timings?',
    answer:
      'The clinic operates Monday to Saturday, 9:00 AM – 5:00 PM, with emergency consultations available through Apollo Hospitals\' 24-hour cardiac care service. Specific appointment slots for new and follow-up patients are allocated between 10:00 AM – 1:00 PM and 3:00 PM – 5:00 PM.',
  },
  {
    question: 'Does the clinic accept health insurance?',
    answer:
      'We accept all major health insurance policies including Star Health, HDFC ERGO, Niva Bupa, Aditya Birla Health, and government schemes such as CGHS and ECHS. Our billing team can assist with pre-authorisation and cashless claim processing. Please inform us of your insurance provider when booking.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-2">
            <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">Common Questions</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-5 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-fg text-[15px] leading-relaxed mb-8">
              Have a question before booking? We have answered the most common queries below. If
              you need more information, please do not hesitate to call or message us.
            </p>
            <div className="rounded-xl overflow-hidden bg-slate-bg aspect-[4/3] max-w-sm">
              <img
                src="https://images.unsplash.com/photo-1758691461935-202e2ef6b69f?w=480&h=360&fit=crop&auto=format"
                alt="Dr. Mehta speaking with a patient in consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                    isOpen ? 'border-primary' : 'border-border-col'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-semibold text-[15px] leading-snug ${isOpen ? 'text-primary' : 'text-navy'}`}>
                      {faq.question}
                    </span>
                    <div
                      className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-colors duration-200 ${
                        isOpen ? 'bg-primary border-primary' : 'border-border-col'
                      }`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      >
                        <path
                          d="M2 4l4 4 4-4"
                          stroke={isOpen ? 'white' : '#4A5D7A'}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-5 pb-5 text-muted-fg text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
