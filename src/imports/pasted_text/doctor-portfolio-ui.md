Create a complete, modern, premium **Doctor Portfolio Website UI designed specifically as a React application**.

The design should be **component-based, reusable, responsive, accessible, and developer-friendly**, with a clear visual system that can be translated directly into React components.

The website is for an experienced specialist doctor and should communicate **medical expertise, trust, professionalism, compassion, credibility and easy appointment booking**.

Do not design it like a hospital dashboard or medical SaaS product. It should feel like a **premium personal professional website for a doctor**.

---

# 1. Overall Design Direction

Create a sophisticated healthcare visual style using:

* Clean white and off-white backgrounds
* Deep navy/dark blue typography
* Soft blue/teal accent color
* Light blue/gray secondary backgrounds
* Subtle borders
* Minimal shadows
* Moderate corner radius
* Generous whitespace
* Clear visual hierarchy

Use a modern, highly readable sans-serif typeface.

The visual language should feel:

**Premium + Professional + Trustworthy + Human + Calm**

Avoid:

* Excessive gradients
* Neon colors
* Heavy glassmorphism
* Excessive animations
* Overly rounded cartoon-like cards
* Generic hospital dashboard styling
* Cluttered layouts

---

# 2. React-Friendly Design System

Create reusable components rather than designing every section as a completely different visual style.

Establish reusable components for:

* Header
* Navigation
* Buttons
* Section headings
* Cards
* Service cards
* Expertise cards
* Statistic cards
* Timeline items
* Testimonial cards
* FAQ accordion
* Form fields
* Form controls
* CTA banners
* Footer
* Image containers
* Badges
* Social icons

Maintain consistent:

* Typography
* Spacing
* Border radius
* Button styles
* Colors
* Icon treatment
* Card styling
* Grid behavior

Use an **8px spacing system** where practical.

---

# 3. Responsive React Layout

Design the website for these breakpoints:

### Desktop

1440px

### Laptop

1280px

### Tablet

768px

### Mobile

390px

Also ensure the layout can gracefully adapt between these widths.

The design must use responsive layouts rather than simply scaling the desktop version.

Use:

* CSS Grid/Flexbox-friendly layouts
* Responsive containers
* Flexible cards
* Responsive typography
* Stacked mobile layouts
* Collapsible navigation
* Touch-friendly controls

Avoid horizontal scrolling.

---

# 4. Header / Navigation

Create a reusable responsive Header component.

Desktop:

* Doctor logo/name
* Home
* About
* Expertise
* Treatments
* Experience
* Testimonials
* FAQs
* Contact
* Primary “Book Appointment” button

Make the header sticky.

Mobile:

* Doctor name/logo
* Hamburger menu
* Appointment CTA

Create a clear mobile navigation state.

---

# 5. Hero Section

Create a premium split-layout hero.

Left:

* Small specialty badge
* Doctor name
* Medical specialty
* Qualifications
* Short professional introduction
* Primary CTA: “Book an Appointment”
* Secondary CTA: “Explore Expertise”

Right:

* Large professional doctor portrait
* Subtle healthcare visual decoration
* Small floating credibility/statistic card

Example:

“Dr. [Doctor Name]”

“Consultant [Medical Specialty]”

“MBBS, MD, [Additional Qualifications]”

“Providing evidence-based, compassionate care with a patient-first approach.”

Include a compact trust indicator such as:

“15+ Years of Clinical Experience”

---

# 6. About the Doctor

Create a two-column responsive section.

Left:

* Professional doctor image

Right:

* “About Dr. [Name]”
* Short biography
* Professional philosophy
* Career overview
* “Read More” CTA

Below or alongside the content, create reusable statistic cards:

* 15+ Years Experience
* 10,000+ Patients
* 20+ Publications
* 5+ Certifications

On mobile, stack the image and content vertically.

---

# 7. Areas of Expertise

Create a reusable card grid.

Section heading:

“Areas of Expertise”

Each card should contain:

* Minimal medical icon
* Expertise title
* Short description
* “Learn More” link

Create 6 example cards.

Desktop:
3-column grid

Tablet:
2-column grid

Mobile:
1-column layout

---

# 8. Treatments & Services

Create a visually distinct treatment section.

Use reusable treatment cards containing:

* Image or icon
* Treatment name
* Short description
* “Learn More” link

Create 6 example treatment cards.

Use a clean responsive grid.

Cards should have subtle hover states suitable for a React implementation.

---

# 9. Qualifications & Experience

Create a professional career timeline.

Each timeline item should contain:

* Year
* Degree / Position
* Institution
* Description

Example:

2022 — Senior Consultant
Hospital / Institution
Short description

2018 — Fellowship
Institution

2012 — MD
Medical Institution

On mobile, transform the timeline into a simple vertical list.

---

# 10. Why Choose Me

Create a trust-focused section with 6 reusable feature cards.

Examples:

* Extensive Clinical Experience
* Patient-Centered Care
* Evidence-Based Treatment
* Personalized Treatment Plans
* Advanced Medical Knowledge
* Compassionate Patient Support

Use simple line icons.

Avoid overly decorative graphics.

---

# 11. Achievements & Publications

Create an editorial-style section.

Include:

* Awards
* Research Publications
* Conferences
* Professional Memberships
* Media Features

Use a combination of cards and list items.

Make the design suitable for adding more items later in React.

---

# 12. Patient Testimonials

Create a testimonial component.

Desktop:
3 cards visible

Mobile:
horizontal carousel/scroll interaction

Each testimonial should contain:

* Patient initials/avatar
* Patient name or initials
* Treatment category
* Short review
* Rating

Use realistic placeholder content.

Keep testimonials professional and understated.

---

# 13. Professional Gallery

Create a responsive image gallery.

Images can represent:

* Doctor portraits
* Clinic
* Hospital
* Conferences
* Medical events
* Professional activities

Use a clean grid/masonry-inspired layout.

Include hover interaction showing an image title or category.

---

# 14. FAQ Section

Create a two-column FAQ section.

Left:

* Heading
* Short description
* Supporting doctor/clinic image

Right:

* Accordion questions

Example questions:

* How can I book an appointment?
* What should I bring to my consultation?
* What treatments are available?
* Do you offer follow-up consultations?
* What are the clinic timings?
* Do you accept insurance?

Design both collapsed and expanded accordion states.

---

# 15. Clinic / Hospital Information

Create a location/contact section.

Left:

* Clinic/Hospital name
* Address
* Phone
* Email
* Visiting hours
* “Get Directions” button

Right:

* Large map placeholder

On mobile:
Stack contact information above the map.

---

# 16. Appointment Section

Create a premium appointment booking section.

Heading:

“Schedule Your Consultation”

Supporting text:

“Take the first step toward personalized, expert medical care.”

Form fields:

* Full Name
* Phone Number
* Email
* Preferred Date
* Preferred Time
* Reason for Consultation
* Message

Primary button:

“Request Appointment”

Also provide:

“Call Now”

“WhatsApp”

The form should be designed as reusable React form components.

Show appropriate input, focus and validation/error states.

---

# 17. Final CTA

Create a full-width CTA banner.

Heading:

“Your Health Deserves Expert Care”

Supporting text:

“Connect with Dr. [Name] for personalized medical guidance and care.”

Buttons:

“Book an Appointment”

“Call Now”

Make this section visually prominent without using excessive decoration.

---

# 18. Footer

Create a structured responsive footer.

Include:

### Doctor

* Name
* Specialty
* Short description

### Quick Links

* About
* Expertise
* Treatments
* Experience
* FAQs
* Contact

### Contact

* Phone
* Email
* Clinic address

### Social

* LinkedIn
* Instagram
* Facebook

Bottom:

* Privacy Policy
* Terms
* Medical Disclaimer
* Copyright

---

# 19. Component States

Where appropriate, design states for reusable React components.

Include:

### Buttons

* Default
* Hover
* Active
* Disabled

### Form Fields

* Default
* Focus
* Filled
* Error
* Disabled

### FAQ

* Collapsed
* Expanded

### Cards

* Default
* Hover

### Navigation

* Desktop
* Mobile closed
* Mobile open

---

# 20. Accessibility

Design with accessibility in mind.

Use:

* Strong text/background contrast
* Clear focus states
* Minimum 44px touch targets
* Readable body text
* Clear form labels
* Logical heading hierarchy
* Avoid text placed directly over busy images
* Avoid relying solely on color to communicate information

---

# 21. Developer-Friendly Layout

Organize the Figma design so it can easily map to React components.

Use clear component naming such as:

Header
Button/Primary
Button/Secondary
SectionHeader
ExpertiseCard
TreatmentCard
StatCard
TimelineItem
TestimonialCard
FAQItem
ContactForm
Footer

Use Auto Layout wherever possible.

Use reusable components and variants.

Create consistent spacing and sizing tokens.

Keep the design modular so sections can be added, removed or reordered without breaking the overall layout.

---

# 22. Final Deliverable

Generate the complete responsive Doctor Portfolio Website UI with:

1. Desktop homepage — 1440px
2. Tablet responsive version — 768px
3. Mobile responsive version — 390px
4. Reusable UI components
5. Component states and variants
6. Consistent design system
7. Developer-friendly Auto Layout structure

The final UI should look like a **real, production-quality specialist doctor's portfolio website**, not a generic AI-generated template.

Prioritize **trust, medical credibility, readability, accessibility and appointment conversion** while maintaining a premium and elegant visual design.
