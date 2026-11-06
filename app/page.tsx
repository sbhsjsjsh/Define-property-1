import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeaturedListings from '@/components/FeaturedListings'
import Services from '@/components/Services'
import AgentProfile from '@/components/AgentProfile'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedListings />
      <Services />
      <AgentProfile />
      <ContactForm />
      <Footer />
    </main>
  )
}
