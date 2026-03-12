import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Capabilities from '@/components/Capabilities'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Capabilities />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
