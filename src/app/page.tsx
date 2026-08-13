import Banner from "@/components/shared/Banner";
import Link from "next/link";
import { ArrowRight, Star, ShoppingBag, Heart } from "lucide-react";

export default function HomePage() {
  // ডামি ফিচারড প্রোডাক্ট লিস্ট (পরবর্তীতে API বা Database দিয়ে রিপ্লেস করতে পারবেন)
  const featuredProducts = [
    { id: 1, name: "Minimalist Gold Watch", category: "Accessories", price: "$180.00", rating: 4.9 },
    { id: 2, name: "Wireless Noise-Canceling Headphones", category: "Electronics", price: "$250.00", rating: 4.8 },
    { id: 3, name: "Premium Leather Jacket", category: "Apparel", price: "$120.00", rating: 4.7 },
    { id: 4, name: "Ergonomic Office Chair", category: "Furniture", price: "$320.00", rating: 4.9 },
  ];

  return (
    <div className="bg-[#0B0F19] text-white min-h-screen">
      {/* Hero Banner Section */}
      <Banner />

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Explore Categories</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-1">Shop by Collection</h2>
          </div>
          <Link href="/categories" className="text-sm text-gray-400 hover:text-[#D4AF37] flex items-center gap-1 transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Apparel", "Electronics", "Accessories", "Furniture"].map((cat, index) => (
            <Link
              key={index}
              href={`/categories/${cat.toLowerCase()}`}
              className="group relative h-48 rounded-2xl bg-[#161E2E] border border-gray-800 p-6 flex flex-col justify-end overflow-hidden hover:border-[#D4AF37] transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80"></div>
              <h3 className="relative z-10 text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">{cat}</h3>
              <span className="relative z-10 text-xs text-gray-400">Explore Items</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-800">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Curated For You</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-1">Featured Products</h2>
          </div>
          <Link href="/shop" className="text-sm text-gray-400 hover:text-[#D4AF37] flex items-center gap-1 transition-colors">
            All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-[#161E2E] border border-gray-800 rounded-2xl p-4 flex flex-col justify-between group hover:border-[#D4AF37]/50 transition-all shadow-lg"
            >
              {/* Product Image / Box placeholder */}
              <div className="relative h-48 bg-[#0B0F19] rounded-xl flex items-center justify-center border border-gray-800/80 mb-4 overflow-hidden">
                <span className="text-xs text-gray-600 font-bold tracking-widest group-hover:scale-105 transition-transform">TOBA PRODUCT</span>
                <button aria-label="Add to wishlist" className="absolute top-3 right-3 p-2 bg-[#161E2E]/80 backdrop-blur-md rounded-full text-gray-300 hover:text-[#D4AF37] border border-gray-700">
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Product Details */}
              <div>
                <span className="text-xs text-gray-400 block mb-1">{product.category}</span>
                <h3 className="text-base font-semibold text-white group-hover:text-[#D4AF37] transition-colors line-clamp-1">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-1 mt-2 text-xs text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-bold text-gray-200">{product.rating}</span>
                </div>
              </div>

              {/* Price & Cart Action */}
              <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between">
                <span className="text-lg font-bold text-[#D4AF37]">{product.price}</span>
                <button aria-label="Add to cart" className="p-2.5 bg-[#0B0F19] border border-gray-700 rounded-xl text-white hover:bg-[#D4AF37] hover:text-[#0B0F19] transition-colors">
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}