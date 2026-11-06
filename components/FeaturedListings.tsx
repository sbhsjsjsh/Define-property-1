'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { BedDouble, Bath, Square, MapPin } from 'lucide-react'

const PROPERTIES = [
  {
    id: 1,
    title: 'Azure Horizon Penthouse',
    location: 'Bandra West, Mumbai',
    price: '₹24.5 Cr',
    beds: 4,
    baths: 5,
    sqft: '4,200',
    image: '/src/assets/images/listing_bandra_interior_1793993697255.jpg',
    tag: 'Exclusive'
  },
  {
    id: 2,
    title: 'The Regal Residence',
    location: 'Malabar Hill, Mumbai',
    price: '₹68.0 Cr',
    beds: 5,
    baths: 6,
    sqft: '6,800',
    image: '/src/assets/images/listing_south_mumbai_penthouse_1793993696700.jpg',
    tag: 'Luxury'
  },
  {
    id: 3,
    title: 'The Juhu Heritage Villa',
    location: 'Juhu, Mumbai',
    price: '₹42.0 Cr',
    beds: 6,
    baths: 7,
    sqft: '8,500',
    image: '/src/assets/images/listing_juhu_villa_1793994620435.jpg',
    tag: 'Heritage'
  }
]

export default function FeaturedListings() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-3 block">
              Curated Selection
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
              Featured Properties
            </h2>
          </div>
          <Link 
            href="/listings" 
            className="text-slate-900 dark:text-white font-semibold flex items-center gap-2 group border-b-2 border-accent/0 hover:border-accent transition-all pb-1"
          >
            View All Listings
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.map((property, idx) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-neutral-800 hover:shadow-xl transition-all"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-neutral-950/90 text-slate-900 dark:text-white text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-sm shadow-sm">
                    {property.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1 text-slate-400 text-xs mb-3">
                  <MapPin size={12} />
                  <span>{property.location}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
                  {property.title}
                </h3>
                <p className="text-2xl font-bold text-accent mb-6">
                  {property.price}
                </p>

                <div className="flex items-center justify-between border-t border-slate-100 dark:border-neutral-800 pt-6 mt-6">
                  <div className="flex items-center gap-4 text-slate-500 dark:text-neutral-400 text-sm">
                    <div className="flex items-center gap-1.5">
                      <BedDouble size={16} className="text-slate-400" />
                      <span>{property.beds}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath size={16} className="text-slate-400" />
                      <span>{property.baths}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Square size={14} className="text-slate-400" />
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>
                </div>
                <Link 
                  href="/contact"
                  className="mt-6 block w-full py-3 text-center bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-sm font-bold rounded-xl hover:opacity-90 transition-all"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
