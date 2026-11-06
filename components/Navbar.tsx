'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-slate-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand */}
        <Link href="/" className="text-2xl font-display font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0">
          Define Property
        </Link>

        {/* Zone 2: Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-neutral-400">
          <Link href="/listings" className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0">Listings</Link>
          <Link href="/about" className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0">About</Link>
          <Link href="/#services" className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0">Services</Link>
          <Link href="/contact" className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0">Contact</Link>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-4 shrink-0">
          <Link 
            href="/contact" 
            className="px-6 py-3 text-sm font-semibold text-white bg-slate-900 dark:bg-white dark:text-neutral-950 rounded-full hover:bg-slate-800 dark:hover:bg-neutral-200 transition-all shadow-md shadow-slate-200 dark:shadow-neutral-900 whitespace-nowrap shrink-0"
          >
            Enquire Now
          </Link>
          <button className="md:hidden p-2 text-slate-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-neutral-950 border-b border-slate-200 dark:border-neutral-800 p-6 flex flex-col gap-6"
        >
          <Link href="/listings" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Listings</Link>
          <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/#services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
        </motion.div>
      )}
    </header>
  )
}
