'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/src/assets/images/hero_mumbai_luxury_1793993695588.jpg"
          alt="Mumbai Luxury Real Estate Skyline"
          fill
          className="object-cover brightness-75"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold tracking-widest uppercase text-xs mb-4">
              Premium Mumbai Real Estate Advisory
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 text-balance">
              Find Your Piece of the Mumbai Skyline
            </h1>
            <p className="text-lg text-slate-200 mb-10 max-w-lg leading-relaxed">
              Curated luxury properties across Bandra, South Mumbai, and BKC. We define excellence in Mumbai&apos;s real estate landscape.
            </p>

            {/* Search Bar & CTA */}
            <div className="flex flex-col gap-4 max-w-xl">
              <div className="flex flex-col sm:flex-row gap-2 p-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
                <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-white rounded-xl">
                  <MapPin className="text-slate-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Bandra, Worli, Malabar Hill..." 
                    className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-400 text-sm"
                  />
                </div>
                <Link 
                  href="/listings"
                  className="flex items-center justify-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all shrink-0"
                >
                  <Search size={18} />
                  Search
                </Link>
              </div>
              <Link 
                href="/contact"
                className="w-full py-4 bg-accent text-slate-950 text-center rounded-2xl font-bold hover:bg-yellow-500 transition-all shadow-lg shadow-accent/20"
              >
                Start Your Enquiry Now
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 flex items-center gap-10 text-white/80">
              <div>
                <div className="text-2xl font-display font-bold text-white">500+</div>
                <div className="text-xs uppercase tracking-wider">Premium Listings</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <div className="text-2xl font-display font-bold text-white">₹2k Cr+</div>
                <div className="text-xs uppercase tracking-wider">Transaction Value</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <div className="text-2xl font-display font-bold text-white">15+</div>
                <div className="text-xs uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
