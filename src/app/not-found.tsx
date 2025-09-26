"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="relative">
            <h1 className="text-8xl font-[var(--font-display)] text-amber-500 mb-4 animate-pulse">
              404
            </h1>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-[var(--font-display)] mb-4">
            Sayfa Bulunamadı
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir. 
            Ana sayfaya dönerek devam edebilirsiniz.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link 
            href="/"
            className="block w-full rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 font-semibold transition-all duration-300 hover:from-amber-400 hover:to-amber-500 hover:shadow-lg hover:shadow-amber-500/25"
          >
            Ana Sayfaya Dön
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="block w-full rounded-lg border border-white/20 text-white px-6 py-3 font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/30"
          >
            Geri Git
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}
