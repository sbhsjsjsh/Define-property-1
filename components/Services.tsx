import { Building2, Key, BarChart3, ShieldCheck } from 'lucide-react'

const SERVICES = [
  {
    title: 'Luxury Residential Sales',
    description: 'Bespoke advisory for ultra-high-net-worth individuals seeking the most prestigious addresses in Mumbai.',
    icon: Building2
  },
  {
    title: 'Strategic Leasing',
    description: 'Comprehensive leasing solutions for premium residential and grade-A commercial spaces.',
    icon: Key
  },
  {
    title: 'Investment Advisory',
    description: 'Data-driven insights to help you build a resilient real estate portfolio in Mumbai’s dynamic market.',
    icon: BarChart3
  },
  {
    title: 'Legal & Compliance',
    description: 'End-to-end support for RERA compliance, title verification, and seamless transaction management.',
    icon: ShieldCheck
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-3 block">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="text-lg text-slate-500 dark:text-neutral-400">
            At Define Property, we don&apos;t just facilitate transactions; we build lasting relationships based on trust, transparency, and deep market expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl border border-slate-100 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-900 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl flex items-center justify-center shadow-sm mb-6">
                <service.icon className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-slate-500 dark:text-neutral-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
