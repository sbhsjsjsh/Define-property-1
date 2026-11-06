import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-neutral-900 pt-24 pb-12 border-t border-slate-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-display font-bold tracking-tight text-slate-900 dark:text-white block mb-6">
              Define Property
            </Link>
            <p className="text-slate-500 dark:text-neutral-400 text-sm leading-relaxed mb-8">
              Mumbai&apos;s premier real estate consultancy. We redefine luxury living through deep expertise and unshakeable integrity.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-xs">Neighborhoods</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-neutral-400">
              <li><Link href="/listings?area=bandra" className="hover:text-accent transition-colors">Bandra West</Link></li>
              <li><Link href="/listings?area=worli" className="hover:text-accent transition-colors">Worli & Lower Parel</Link></li>
              <li><Link href="/listings?area=juhu" className="hover:text-accent transition-colors">Juhu & Vile Parle</Link></li>
              <li><Link href="/listings?area=south-mumbai" className="hover:text-accent transition-colors">Colaba & Malabar Hill</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-neutral-400">
              <li><Link href="/listings" className="hover:text-accent transition-colors">Latest Listings</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About the Agent</Link></li>
              <li><Link href="/#services" className="hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-xs">Newsletter</h4>
            <p className="text-sm text-slate-500 dark:text-neutral-400 mb-4">Stay updated with exclusive off-market listings.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-2 rounded-lg border border-slate-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm outline-none focus:ring-1 focus:ring-accent"
              />
              <button className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-bold rounded-lg uppercase tracking-widest">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-slate-400">
          <p>© 2026 Define Property Mumbai. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white">Terms of Service</Link>
            <Link href="/rera" className="hover:text-slate-900 dark:hover:text-white">RERA Info</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
