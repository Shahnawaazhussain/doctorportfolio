import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Treatments from './components/Treatments'
import Experience from './components/Experience'
import WhyChooseMe from './components/WhyChooseMe'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Location from './components/Location'
import Appointment from './components/Appointment'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Treatments />
        <Experience />
        <WhyChooseMe />
        <Achievements />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Location />
        <Appointment />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
