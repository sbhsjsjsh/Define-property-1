import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FeaturedListings from '@/components/FeaturedListings'
import { Search, Filter, SlidersHorizontal } from 'lucide-react'

export default function ListingsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      {/* Header */}
      <section className="bg-slate-50 dark:bg-neutral-950 py-16 border-b border-slate-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Explore Premium Listings
          </h1>
          <p className="text-slate-500 dark:text-neutral-400 max-w-2xl mx-auto mb-12">
            From sea-facing penthouses in Bandra to heritage bungalows in South Mumbai, discover the most exclusive properties in the city.
          </p>

          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
            <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 bg-white dark:bg-neutral-900 rounded-xl border border-slate-200 dark:border-neutral-800 shadow-sm">
              <Search className="text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by neighborhood, building or agent..." 
                className="w-full bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white text-sm"
              />
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-xl font-semibold text-slate-700 dark:text-neutral-300 hover:bg-slate-50 dark:hover:bg-neutral-800 transition-all shadow-sm w-full md:w-auto">
                <SlidersHorizontal size={18} />
                Filters
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-neutral-950 rounded-xl font-bold hover:opacity-90 transition-all shadow-sm w-full md:w-auto">
                Apply
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid - Reusing the component logic for now */}
      <FeaturedListings />

      {/* Secondary Grid (Mock) */}
      <section className="pb-24 bg-slate-50 dark:bg-neutral-900/50 -mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Just repeated for visual weight */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-neutral-800 hover:shadow-xl transition-all opacity-80">
                 <div className="h-64 bg-slate-200 dark:bg-neutral-800 animate-pulse" />
                 <div className="p-6">
                    <div className="h-4 w-1/3 bg-slate-200 dark:bg-neutral-800 rounded mb-4" />
                    <div className="h-6 w-3/4 bg-slate-200 dark:bg-neutral-800 rounded mb-4" />
                    <div className="h-8 w-1/2 bg-slate-200 dark:bg-neutral-800 rounded" />
                 </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-8 py-4 border border-slate-200 dark:border-neutral-800 rounded-full font-bold text-slate-600 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-900 transition-all">
              Load More Properties
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
