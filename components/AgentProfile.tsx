import Image from 'next/image'
import Link from 'next/link'
import { Award, CheckCircle2, Users2 } from 'lucide-react'

export default function AgentProfile() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with Decorative Elements */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden aspect-square lg:aspect-[4/5]">
              <Image 
                src="/src/assets/images/agent_portrait_1793993698772.jpg"
                alt="Define Property Agent"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative box */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl z-0" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl z-0" />
          </div>

          {/* Right: Content */}
          <div>
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-3 block">
              Meet the Visionary
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Defining Excellence in Mumbai Real Estate
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              With over 15 years of navigating Mumbai&apos;s complex property market, I lead Define Property with a single mission: to provide unparalleled advisory for those who seek the extraordinary.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-white/10 rounded-lg">
                  <Award className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Top Luxury Advisor</h4>
                  <p className="text-sm text-slate-400">Awarded for 5 consecutive years</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-white/10 rounded-lg">
                  <Users2 className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">1,200+ Happy Families</h4>
                  <p className="text-sm text-slate-400">Trusted by Mumbai&apos;s elite</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              {['Exclusive access to off-market listings', 'Deep neighborhood expertise', 'Seamless legal & transaction support'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-accent" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <Link 
              href="/contact"
              className="inline-block px-10 py-5 bg-accent text-slate-950 font-bold rounded-full hover:bg-yellow-500 transition-all shadow-lg shadow-accent/20"
            >
              Start Your Property Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
