import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { CheckCircle2, Building2, MapPin, TrendingUp, ShieldCheck, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Entire Property Building for Sale in Dadar West, Mumbai | Define Property',
  description: 'Looking for an entire property building for sale in Dadar West? Define Property offers verified, clear-title buildings in central Mumbai. Fill the form for a free site visit.',
  alternates: {
    canonical: '/entire-property-building-for-sale-in-dadar-west',
  },
  keywords: [
    'Entire Property Building for Sale in Dadar West',
    'whole building for sale in Dadar West',
    'buy entire building Dadar West Mumbai',
    'commercial building Dadar West',
    'residential building Dadar West',
    'redevelopment building Dadar West',
    'Dadar West real estate investment'
  ]
}

export default function BuildingForSalePage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-slate-50 dark:bg-neutral-950 py-20 border-b border-slate-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight text-balance">
            Entire Property Building for Sale in Dadar West, Mumbai – Verified Buildings for Investment, Redevelopment & Own Use by Define Property
          </h1>
          <p className="text-lg text-slate-600 dark:text-neutral-400 leading-relaxed mb-8">
            Owning an entire building in Dadar West is one of the strongest real estate moves you can make in Mumbai. An <strong className="text-slate-900 dark:text-white">entire property building for sale in Dadar West</strong> gives you complete control over the asset: every floor, every unit and every opportunity for rental income, redevelopment or resale, in one of the most prestigious and connected locations in the city.
          </p>
          <p className="text-lg text-slate-600 dark:text-neutral-400 leading-relaxed mb-10">
            At <strong className="text-slate-900 dark:text-white">Define Property</strong>, we help investors, developers, corporates and families acquire legally verified buildings in Dadar West with transparent pricing, proper due diligence and complete support from site visit to registration.
          </p>
          <a 
            href="#enquiry-form" 
            className="inline-block px-8 py-4 bg-accent text-slate-950 font-bold rounded-xl hover:bg-yellow-500 transition-all shadow-lg shadow-accent/20"
          >
            Book a Free Site Visit – Fill the Form
          </a>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-8">Why Buy an Entire Building in Dadar West?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="p-6 bg-slate-50 dark:bg-neutral-900 rounded-2xl border border-slate-100 dark:border-neutral-800">
                <h3 className="text-xl font-bold mb-3">Complete Ownership and Control</h3>
                <p className="text-sm text-slate-600 dark:text-neutral-400">You own the entire structure, not just a single unit. You decide how to use, lease, redevelop or sell the building.</p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-neutral-900 rounded-2xl border border-slate-100 dark:border-neutral-800">
                <h3 className="text-xl font-bold mb-3">Central Location, Unmatched Connectivity</h3>
                <p className="text-sm text-slate-600 dark:text-neutral-400">Dadar West is close to the station where the Western and Central railway lines meet, with quick access to South Mumbai, BKC, Lower Parel, Worli and Navi Mumbai.</p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-neutral-900 rounded-2xl border border-slate-100 dark:border-neutral-800">
                <h3 className="text-xl font-bold mb-3">Strong Rental Income</h3>
                <p className="text-sm text-slate-600 dark:text-neutral-400">Offices, clinics, retail brands, coaching institutes and families all look for space in Dadar West, which keeps occupancy and rental income steady.</p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-neutral-900 rounded-2xl border border-slate-100 dark:border-neutral-800">
                <h3 className="text-xl font-bold mb-3">Redevelopment Upside</h3>
                <p className="text-sm text-slate-600 dark:text-neutral-400">Many older buildings in Dadar West offer strong redevelopment potential, allowing higher FSI use and significant long-term returns.</p>
              </div>
            </div>

            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-accent" />
                <h3 className="text-2xl font-display font-bold">Scarce Supply, Rising Value</h3>
              </div>
              <p className="text-slate-600 dark:text-neutral-400">Dadar West is fully developed. Entire buildings rarely come to market, which keeps demand strong and values rising.</p>
            </div>

            <hr className="my-16 border-slate-200 dark:border-neutral-800" />

            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-8">Key Features of Our Building Options</h2>
            <ul className="space-y-6 list-none p-0 mb-16">
              {[
                { title: 'Clear Title and Legal Verification', text: 'Every building is checked for ownership, title, tenancy status, society position, NOCs, occupancy certificate and approvals before it is offered to you.' },
                { title: 'Prime Locations', text: 'Properties near Dadar station, Shivaji Park, Kabutar Khana, Dadar Market, Plaza and major commercial roads.' },
                { title: 'Multiple Building Types', text: 'Residential buildings, Commercial buildings, Mixed-use buildings, and buildings with redevelopment potential.' },
                { title: 'Flexible Options', text: 'Choose from different building sizes, ages and configurations to match your budget and goals.' }
              ].map((feature, i) => (
                <li key={i} className="flex gap-4 p-6 bg-slate-50 dark:bg-neutral-900 rounded-2xl border border-slate-100 dark:border-neutral-800">
                  <CheckCircle2 className="text-accent shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-neutral-400">{feature.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-8">Location Advantages of Dadar West</h2>
            <div className="space-y-8 mb-16">
              <div>
                <h3 className="text-xl font-bold mb-4">Excellent Connectivity</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-neutral-400">
                  <li>Dadar Railway Station (Western and Central lines) nearby</li>
                  <li>Dadar TT and major BEST bus routes</li>
                  <li>Quick access to Bandra-Worli Sea Link, Eastern Freeway and Atal Setu</li>
                  <li>Easy reach to Lower Parel, Worli, Prabhadevi and South Mumbai</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Social Infrastructure</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-neutral-400">
                  <li>Shivaji Park and Shivaji Park Gymkhana</li>
                  <li>Kabutar Khana, Dadar Market and Plaza</li>
                  <li>Leading schools, colleges and hospitals</li>
                  <li>Siddhivinayak Temple (Prabhadevi) nearby</li>
                  <li>Banks, offices, cafes and restaurants</li>
                </ul>
              </div>
            </div>

            <div className="p-8 bg-slate-900 text-white rounded-3xl mb-16">
              <h2 className="text-2xl font-display font-bold mb-6 text-white">Who Should Buy an Entire Building in Dadar West?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Investors', text: 'Earn steady rental income and long-term appreciation from a scarce central Mumbai asset.' },
                  { title: 'Developers', text: 'Acquire buildings for redevelopment in a location with proven demand.' },
                  { title: 'Corporates', text: 'Own your headquarters or branch office and lease out extra floors for income.' },
                  { title: 'HNIs', text: 'Add a stable, tangible, high-value asset to your portfolio.' }
                ].map((item, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-accent mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-8">Why Choose Define Property?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
               {[
                 'Strong local knowledge of Dadar West',
                 'Transparent pricing (no hidden charges)',
                 'Legally verified property listings',
                 'End-to-end guidance to registration'
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-2 p-4 bg-slate-50 dark:bg-neutral-900 rounded-xl">
                   <ShieldCheck size={18} className="text-accent" />
                   <span className="text-sm font-medium">{item}</span>
                 </div>
               ))}
            </div>

            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-8 text-center">Frequently Asked Questions (FAQs)</h2>
            <div className="space-y-6 mb-24">
              {[
                { q: 'Is an entire building available for sale in Dadar West?', a: 'Yes, but availability is very limited. Fill the form and Define Property will share current verified options.' },
                { q: 'Is Dadar West a good location to buy an entire building?', a: 'Yes. Central connectivity, strong rental demand, prestigious address and redevelopment potential make Dadar West one of Mumbai\'s strongest markets.' },
                { q: 'What is the price of an entire building in Dadar West?', a: 'Price depends on building age, size, location, tenancy status and redevelopment potential. Fill the form for the latest rates.' },
                { q: 'Can I redevelop the building after buying?', a: 'That depends on the building\'s status, tenant or society position and approvals. Our team verifies redevelopment feasibility.' }
              ].map((faq, idx) => (
                <div key={idx} className="p-6 border border-slate-200 dark:border-neutral-800 rounded-2xl">
                  <h4 className="flex items-center gap-3 font-bold mb-3">
                    <HelpCircle size={18} className="text-accent" />
                    {faq.q}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-neutral-400 pl-7">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Anchor */}
      <div id="enquiry-form" className="scroll-mt-24">
        <ContactForm />
      </div>

      <Footer />
    </main>
  )
}
