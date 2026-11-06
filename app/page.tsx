import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeaturedListings from '@/components/FeaturedListings'
import Services from '@/components/Services'
import AgentProfile from '@/components/AgentProfile'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Define Property | Luxury Mumbai Real Estate Advisor in Dadar',
  description: 'Expert luxury real estate advisory in Mumbai. Discover premium properties in Dadar, Bandra, and South Mumbai with Define Property.',
  alternates: {
    canonical: '/',
  },
}

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
