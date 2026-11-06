import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { CheckCircle2, History, Target, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Define Property | Luxury Real Estate Advisor',
  description: 'Learn about Define Property, Mumbai\'s premier luxury real estate advisory with over 15 years of market expertise in Dadar and Bandra.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/src/assets/images/hero_mumbai_luxury_1793993695588.jpg"
            alt="Background"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Philosophy</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Founded on the principles of discretion, integrity, and deep market intelligence, Define Property is Mumbai&apos;s premier luxury real estate advisory.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/src/assets/images/agent_portrait_1793993698772.jpg"
                alt="Agent Portrait"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-8">
                Building Legacies, One Property at a Time
              </h2>
              <div className="space-y-6 text-lg text-slate-500 dark:text-neutral-400 leading-relaxed">
                <p>
                  At Define Property, we believe that real estate in Mumbai is more than just square footage—it&apos;s about heritage, status, and building a legacy. Our team is dedicated to uncovering the hidden gems of the city.
                </p>
                <p>
                  With a network that spans the most influential circles in Mumbai, we provide our clients with exclusive access to properties that never hit the open market.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div>
                    <h4 className="text-2xl font-bold text-accent">15+</h4>
                    <p className="text-sm">Years of Market Expertise</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-accent">₹2,000Cr+</h4>
                    <p className="text-sm">Total Assets Managed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: 'Unwavering Integrity', text: 'We prioritize transparency and ethical conduct in every transaction.' },
              { icon: History, title: 'Deep Heritage', text: 'Our roots in Mumbai allow us to understand the soul of every neighborhood.' },
              { icon: Target, title: 'Absolute Precision', text: 'We provide data-driven advisory to ensure maximum ROI for our clients.' }
            ].map((value, idx) => (
              <div key={idx} className="text-center p-8 bg-white dark:bg-neutral-900 rounded-3xl shadow-sm border border-slate-100 dark:border-neutral-800">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-slate-500 dark:text-neutral-400 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
