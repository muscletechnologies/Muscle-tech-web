"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center font-bold text-white text-lg">
            M
          </div>
          <span className="font-bold text-xl text-white hidden sm:block">Muscle Tec</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="#products" className="text-slate-300 hover:text-white transition font-medium">
            Products
          </Link>
          <Link href="#features" className="text-slate-300 hover:text-white transition font-medium">
            Features
          </Link>
          <Link href="#customers" className="text-slate-300 hover:text-white transition font-medium">
            Customers
          </Link>
          <Link href="#pricing" className="text-slate-300 hover:text-white transition font-medium">
            Pricing
          </Link>
        </div>

        <Button className="hidden md:block bg-red-500 hover:bg-red-600 text-white font-semibold">
          Get Started Free
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-800 md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link href="#products" className="text-slate-300 hover:text-white transition">
                Products
              </Link>
              <Link href="#features" className="text-slate-300 hover:text-white transition">
                Features
              </Link>
              <Link href="#customers" className="text-slate-300 hover:text-white transition">
                Customers
              </Link>
              <Link href="#pricing" className="text-slate-300 hover:text-white transition">
                Pricing
              </Link>
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold">Get Started Free</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
