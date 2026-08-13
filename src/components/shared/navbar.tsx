"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingBag, Search, Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F19]/90 backdrop-blur-md border-b border-gray-800 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-black tracking-widest text-white font-sans">
              TOBA<span className="text-[#D4AF37]">.</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <Link href="/shop" className="hover:text-[#D4AF37] transition-colors">Shop</Link>
            <Link href="/categories" className="hover:text-[#D4AF37] transition-colors">Categories</Link>
            <Link href="/deals" className="hover:text-[#D4AF37] transition-colors">Deals</Link>
            <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
          </nav>

          {/* Right Icons (Search, Wishlist, Cart) */}
          <div className="hidden md:flex items-center space-x-5 text-gray-300">
            <button className="p-2 hover:text-[#D4AF37] transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/wishlist" className="p-2 hover:text-[#D4AF37] transition-colors relative" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-[#D4AF37] text-gray-950 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                2
              </span>
            </Link>
            <Link href="/cart" className="p-2 transition-colors relative flex items-center gap-2 bg-[#161E2E] px-4 py-2 rounded-full border border-gray-800 hover:border-[#D4AF37]/50" aria-label="Cart">
              <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-xs font-semibold text-white ml-1">$0.00</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link href="/cart" className="p-2 relative">
              <ShoppingBag className="w-6 h-6 text-gray-200" />
              <span className="absolute top-0 right-0 bg-[#D4AF37] text-gray-950 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-200 hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0F19] border-b border-gray-800 px-4 pt-3 pb-6 space-y-3">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-[#161E2E] border border-gray-800 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#D4AF37]"
            />
            <Search className="w-4 h-4 text-gray-400 absolute right-3 top-3" />
          </div>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-gray-300 hover:text-[#D4AF37]"
          >
            Home
          </Link>
          <Link
            href="/shop"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-gray-300 hover:text-[#D4AF37]"
          >
            Shop
          </Link>
          <Link
            href="/categories"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-gray-300 hover:text-[#D4AF37]"
          >
            Categories
          </Link>
          <Link
            href="/deals"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-gray-300 hover:text-[#D4AF37]"
          >
            Deals
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-gray-300 hover:text-[#D4AF37]"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}