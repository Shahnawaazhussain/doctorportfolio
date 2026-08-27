import { useState } from 'react'

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
]

const reasons = [
  'Chest Pain / Discomfort',
  'Palpitations / Irregular Heartbeat',
  'Shortness of Breath',
  'High Blood Pressure',
  'Heart Failure Follow-up',
  'Post-Procedure Review',
  'Preventive Cardiology Assessment',
  'Second Opinion',
  'Other',
]

type FieldState = 'default' | 'error'

interface FormData {
  name: string
  phone: string
  email: string
  date: string
  time: string
  reason: string
  message: string
}

const emptyForm: FormData = { name: '', phone: '', email: '', date: '', time: '', reason: '', message: '' }

function inputClass(state: FieldState = 'default') {
  const base =
    'w-full border rounded-lg px-4 py-3 text-sm text-navy placeholder:text-muted-fg focus:outline-none focus:ring-2 transition-colors duration-150 bg-white'
  return state === 'error'
    ? `${base} border-red-400 focus:border-red-400 focus:ring-red-100`
    : `${base} border-border-col focus:border-primary focus:ring-primary/10`
}

export default function Appointment() {
  const [form, setForm] = useState<FormData>(emptyForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e: typeof errors = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (!form.email.trim()) e.email = 'Email address is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.date) e.date = 'Please select a preferred date'
    if (!form.time) e.time = 'Please select a preferred time'
    if (!form.reason) e.reason = 'Please select a reason for consultation'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
    }
  }

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }))
  }

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left info panel */}
          <div className="lg:col-span-2">
            <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-3">Book a Visit</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-5 leading-tight">
              Schedule Your Consultation
            </h2>
            <p className="text-muted-fg text-[15px] leading-relaxed mb-8">
              Take the first step toward personalized, expert cardiac care. Complete the form and our team
              will confirm your appointment within one business day.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {/* Call now */}
              <a
                href="tel:+912266002000"
                className="flex items-center gap-4 p-4 border border-border-col rounded-xl hover:border-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="group-hover:[&_path]:stroke-white transition-colors">
                    <path d="M3 3h4l1.5 3.5-2 1.5c1 2 3 4 5 5l1.5-2L16.5 12.5 16.5 16h-3c-5.5 0-10-6-10-11V3z" stroke="#1A5FAB" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">Call Now</p>
                  <p className="text-muted-fg text-xs">+91 22 6600 2000</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/912266002000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-border-col rounded-xl hover:border-teal transition-colors group"
              >
                <div className="w-10 h-10 bg-teal-light rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal transition-colors">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path
                      d="M9 1C4.58 1 1 4.58 1 9c0 1.42.37 2.77 1.02 3.95L1 17l4.17-1.01A8 8 0 109 1zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"
                      fill="#0FADA0"
                    />
                    <path
                      d="M6.5 5.5c-.2-.4-.8-.6-1-.3L4.5 6.2c-.3.5-.1 1.5.7 2.6.8 1.1 2.2 2.3 3.5 2.7.9.3 1.5.1 1.8-.2l.8-1c.3-.2.1-.8-.3-1l-1-.5c-.4-.2-.7 0-.9.2l-.3.3c-.3-.2-.9-.7-1.4-1.3-.5-.5-.9-1.1-1-1.4l.2-.2c.2-.2.4-.5.3-.9l-.4-1z"
                      fill="#0FADA0"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">WhatsApp</p>
                  <p className="text-muted-fg text-xs">Message us anytime</p>
                </div>
              </a>
            </div>

            {/* Assurance note */}
            <div className="flex gap-2 items-start text-xs text-muted-fg bg-slate-bg rounded-lg p-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                <path d="M8 1L2 4v4c0 3.5 2.5 6.75 6 7.5C11.5 14.75 14 11.5 14 8V4L8 1z" stroke="#1A5FAB" strokeWidth="1.25" strokeLinejoin="round" />
                <path d="M5.5 8l2 2 3.5-3" stroke="#0FADA0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Your information is kept strictly confidential and is used only to confirm your appointment.
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-teal-light border border-teal rounded-2xl p-10 text-center">
                <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <path d="M6 14l5.5 5.5L22 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-navy mb-2">Appointment Request Received</h3>
                <p className="text-muted-fg text-sm mb-6">
                  Thank you, {form.name.split(' ')[0]}. Our team will contact you within one business day to
                  confirm your appointment with Dr. Mehta.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(emptyForm) }}
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-slate-bg rounded-2xl border border-border-col p-7 lg:p-8"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-navy uppercase tracking-wider" htmlFor="apt-name">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="apt-name"
                      type="text"
                      placeholder="Rajesh Sharma"
                      value={form.name}
                      onChange={set('name')}
                      className={inputClass(errors.name ? 'error' : 'default')}
                      autoComplete="name"
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-navy uppercase tracking-wider" htmlFor="apt-phone">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="apt-phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={set('phone')}
                      className={inputClass(errors.phone ? 'error' : 'default')}
                      autoComplete="tel"
                    />
                    {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-navy uppercase tracking-wider" htmlFor="apt-email">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="apt-email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={set('email')}
                      className={inputClass(errors.email ? 'error' : 'default')}
                      autoComplete="email"
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  </div>

                  {/* Date */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-navy uppercase tracking-wider" htmlFor="apt-date">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="apt-date"
                      type="date"
                      value={form.date}
                      onChange={set('date')}
                      min={new Date().toISOString().split('T')[0]}
                      className={inputClass(errors.date ? 'error' : 'default')}
                    />
                    {errors.date && <p className="text-xs text-red-500">{errors.date}</p>}
                  </div>

                  {/* Time */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-navy uppercase tracking-wider" htmlFor="apt-time">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="apt-time"
                      value={form.time}
                      onChange={set('time')}
                      className={inputClass(errors.time ? 'error' : 'default')}
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.time && <p className="text-xs text-red-500">{errors.time}</p>}
                  </div>

                  {/* Reason */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-navy uppercase tracking-wider" htmlFor="apt-reason">
                      Reason for Consultation <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="apt-reason"
                      value={form.reason}
                      onChange={set('reason')}
                      className={inputClass(errors.reason ? 'error' : 'default')}
                    >
                      <option value="">Select a reason</option>
                      {reasons.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                    {errors.reason && <p className="text-xs text-red-500">{errors.reason}</p>}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 mb-6">
                  <label className="text-xs font-semibold text-navy uppercase tracking-wider" htmlFor="apt-message">
                    Additional Information
                  </label>
                  <textarea
                    id="apt-message"
                    rows={4}
                    placeholder="Briefly describe your symptoms, current medications, or any other information that may help us prepare for your consultation..."
                    value={form.message}
                    onChange={set('message')}
                    className={`${inputClass('default')} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-semibold text-sm py-3.5 rounded-lg hover:bg-primary-dark transition-colors duration-200"
                >
                  Request Appointment
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
