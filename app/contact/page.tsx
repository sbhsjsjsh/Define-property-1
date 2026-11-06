import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { MapPin, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      <section className="bg-slate-50 dark:bg-neutral-950 py-20 border-b border-slate-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">Let&apos;s Connect</h1>
            <p className="text-lg text-slate-500 dark:text-neutral-400">
              Ready to redefine your property experience in Mumbai? Reach out to our expert team for a personalized consultation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {[
              { icon: MapPin, title: 'Main Office', details: 'Define Property HQ, Senapati Bapat Marg, Dadar West, Mumbai 400028' },
              { icon: Mail, title: 'Direct Email', details: 'concierge@defineproperty.com\nmedia@defineproperty.com' }
            ].map((item, idx) => (
              <div key={idx} className="p-10 rounded-3xl border border-slate-100 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-900/50">
                <div className="w-14 h-14 bg-white dark:bg-neutral-800 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  <item.icon className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-slate-500 dark:text-neutral-400 whitespace-pre-line leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
             <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-slate-200 dark:bg-neutral-800 relative grayscale">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Define Property HQ</h4>
            <p className="text-sm text-slate-500 dark:text-neutral-400">Dadar West, Mumbai, Maharashtra</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
