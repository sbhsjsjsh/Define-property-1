'use client'

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-3 block">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 text-balance">
              Start Your Property Journey
            </h2>
            <p className="text-lg text-slate-500 dark:text-neutral-400 mb-10 leading-relaxed">
              Whether you&apos;re looking to buy, sell, or lease, our team is ready to provide the expertise you need. Reach out to us for a confidential consultation.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-lg">Our Office</h4>
                <p className="text-slate-500 dark:text-neutral-400">Define Property HQ, Senapati Bapat Marg, Dadar West, Mumbai 400028</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-lg">Direct Email</h4>
                <p className="text-slate-500 dark:text-neutral-400">concierge@defineproperty.com</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-neutral-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-neutral-800 shadow-sm min-h-[600px]">
            <iframe 
              src="https://tally.so/embed/6DeOVO?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="600" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              title="Define Property Enquiry Form"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
