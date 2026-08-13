import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Headphones } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative bg-[#0B0F19] text-white overflow-hidden py-20 lg:py-28 border-b border-gray-800">
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-[#161E2E] border border-gray-800 text-[#D4AF37] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              ✨ New Collection 2026
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Elevate Your Lifestyle with <span className="text-[#D4AF37]">Toba</span>
            </h1>
            
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Discover curated luxury, cutting-edge electronics, and premium essentials designed to match your unique standard of living.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/shop"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0B0F19] px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#c29d31] transition-all shadow-lg shadow-[#D4AF37]/20"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/deals"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#161E2E] border border-gray-700 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:border-[#D4AF37] transition-all"
              >
                Explore Deals
              </Link>
            </div>
          </div>

          {/* Right Visual / Product Showcase Graphic */}
          <div className="relative">
            <div className="relative w-full h-[380px] sm:h-[450px] bg-gradient-to-br from-[#161E2E] to-[#0B0F19] rounded-3xl border border-gray-800 p-6 flex flex-col justify-between shadow-2xl overflow-hidden group">
              
              {/* Decorative Card Badge */}
              <div className="absolute top-6 right-6 bg-[#0B0F19]/80 backdrop-blur-md border border-gray-800 px-4 py-2 rounded-xl">
                <span className="text-xs text-gray-400 block">Starting from</span>
                <span className="text-lg font-bold text-[#D4AF37]">$49.00</span>
              </div>

              {/* Center Abstract / Product Placeholder */}
              <div className="my-auto text-center space-y-3">
                <div className="w-24 h-24 mx-auto rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] text-3xl font-black">
                  TOBA
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">Signature Premium Item</h3>
                <p className="text-sm text-gray-400">Handcrafted excellence for modern living</p>
              </div>

              {/* Mini Footer inside card */}
              <div className="pt-4 border-t border-gray-800 flex justify-between items-center text-xs text-gray-400">
                <span>Free Shipping Available</span>
                <span className="text-[#D4AF37] font-semibold">Limited Stock</span>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-gray-800/60">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#161E2E]/50 border border-gray-800/80">
            <div className="p-3 bg-[#0B0F19] rounded-xl text-[#D4AF37] border border-gray-800">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Global Express Delivery</h4>
              <p className="text-xs text-gray-400">Fast & secure shipping worldwide</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#161E2E]/50 border border-gray-800/80">
            <div className="p-3 bg-[#0B0F19] rounded-xl text-[#D4AF37] border border-gray-800">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">100% Secure Checkout</h4>
              <p className="text-xs text-gray-400">Protected payment gateways</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#161E2E]/50 border border-gray-800/80">
            <div className="p-3 bg-[#0B0F19] rounded-xl text-[#D4AF37] border border-gray-800">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">24/7 Dedicated Support</h4>
              <p className="text-xs text-gray-400">Always here to help you out</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}