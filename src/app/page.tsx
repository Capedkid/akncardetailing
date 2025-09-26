"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const heroTitle = process.env.NEXT_PUBLIC_SITE_NAME || "AKN car detailing";
const phoneNumber = process.env.NEXT_PUBLIC_PHONE || "+905455101118";
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "905455101118";

// Optimized image URLs for hero slider
const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Range Rover - Premium Car Detailing",
    animation: "slide-1"
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Porsche - Premium Car Detailing",
    animation: "slide-2"
  },
  {
    src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "BMW - Premium Car Detailing",
    animation: "slide-3"
  },
  {
    src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Mercedes - Premium Car Detailing",
    animation: "slide-4"
  },
  {
    src: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Audi - Premium Car Detailing",
    animation: "slide-5"
  },
  {
    src: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Range Rover - Premium Car Detailing (Loop)",
    animation: "slide-6"
  }
];

const premiumGoldItems = [
  "Kil ve demir tozu uygulamaları",
  "Kalın çizik giderici pasta",
  "İnce çizik giderici",
  "Hare hologram uygulaması",
  "Far ve stop temizleme",
  "Tavan, taban, plastik aksam, koltuklar, motor ve bagaj temizleme",
  "Nasiolzr53 seramik kaplama işlemleri",
  "Paket halinde 10.000₺",
];

const kuaforItems = [
  "Kalın pasta",
  "İnce pasta",
  "Hare giderici",
  "Boya koruma",
  "Far stop parlatma",
  "Jant temizliği",
  "Tavan temizliği",
  "Taban temizliği",
  "Koltuk temizliği",
  "Kapı döşeme",
  "Klima petek ve bombası",
  "Torpido",
  "Bagaj ve stepne",
  "Emniyet kemeri",
  "Kapı fitilleri",
  "Motor temizliği",
  "Jant temizliği",
  "Rötuş (araç durumuna göre)",
  "Koch chemie ve menzerna ürünlerimiz",
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [contactHighlight, setContactHighlight] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Subtle car-themed pattern overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-40" style={{
        background: `
          repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 40px),
          repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(255,255,255,0.02) 30px, rgba(255,255,255,0.02) 60px),
          radial-gradient(circle at 25% 25%, rgba(255,255,255,0.04) 1px, transparent 1px),
          radial-gradient(circle at 75% 75%, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px, 60px 60px, 50px 50px, 70px 70px',
        backgroundPosition: '0 0, 20px 20px, 0 0, 35px 35px'
      }} />
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-[var(--font-display)] text-xl tracking-wide hover:text-zinc-300 transition-colors duration-200 cursor-pointer"
          >
            {heroTitle}
          </button>
          <button 
            onClick={() => {
              document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' });
              // Smooth scroll bittikten sonra highlight efekti
              setTimeout(() => {
                setContactHighlight(true);
                setTimeout(() => setContactHighlight(false), 1000);
              }, 800);
            }}
            className="rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors"
          >
            Hemen Ara
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        {/* Animated Background Slider */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroImages.map((image, index) => (
            <div 
              key={index}
              className="absolute inset-0 w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-black"
              style={{
                animation: `${image.animation} 24s infinite ease-in-out`
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                priority={index === 0} // Sadece ilk görseli priority olarak yükle
                quality={85}
                className="object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
          
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Secondary gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-zinc-900/20 to-zinc-800/30" />
          {/* Accent gradient */}
          <div className="absolute inset-0 bg-gradient-to-bl from-amber-900/5 via-transparent to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:py-32 grid gap-8">
          <h1 className="text-4xl sm:text-6xl font-[var(--font-display)] leading-tight">
            Premium oto yıkama ve detaylı temizlik
          </h1>
          <p className="text-zinc-300 max-w-2xl">
            Kusursuz parlaklık ve koruma. AKN car detailing ile aracınız ilk günkü
            görünümüne kavuşsun.
          </p>
          <div className="flex justify-start">
            <button 
              onClick={() => document.getElementById('paketler')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative rounded-lg bg-white text-black px-6 py-3 text-sm font-semibold transition-all duration-300 hover:bg-zinc-100 hover:shadow-lg hover:shadow-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span className="relative z-10">Paketleri Gör</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white to-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
        
        {/* Overlay gradient */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      </section>

      {/* Packages */}
      <section id="paketler" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-[var(--font-display)] mb-4">Premium Paketlerimiz</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Aracınız için en uygun paketi seçin</p>
        </div>
        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-600 ${
            isVisible ? 'animate-fade-in-up' : 'card-hidden'
          }`}
        >
          <div className="group relative rounded-3xl border border-amber-500/20 bg-gradient-to-br from-zinc-900/80 via-zinc-800/60 to-zinc-900/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl sm:text-3xl font-[var(--font-display)] text-amber-400">Premium Gold</h3>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">10.000₺</div>
                  <div className="text-sm text-zinc-400">Paket halinde</div>
                </div>
              </div>
              <ul className="space-y-3 text-zinc-200 flex-grow">
                {premiumGoldItems.slice(0, -1).map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-amber-400 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-zinc-700/50">
                <button 
                  onClick={() => document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block w-full text-center rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 font-semibold transition-all duration-300 hover:from-amber-400 hover:to-amber-500 hover:shadow-lg hover:shadow-amber-500/25"
                >
                  Paketi İncele
                </button>
              </div>
            </div>
          </div>

          <div className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/80 via-zinc-800/60 to-zinc-900/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 flex flex-col">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl sm:text-3xl font-[var(--font-display)] text-white">Pasta - Cila - Kuaför</h3>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">Fiyat Al</div>
                  <div className="text-sm text-zinc-400">Araç durumuna göre</div>
                </div>
              </div>
              
              {/* Two column layout for services - single column on mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">
                <ul className="space-y-3 text-zinc-200">
                  {kuaforItems.slice(0, 8).map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-white/70 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                  {/* Last 2 items moved to left column */}
                  {kuaforItems.slice(-2).map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-white/70 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <ul className="space-y-3 text-zinc-200">
                  {kuaforItems.slice(8, -2).map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-white/70 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                  {/* One item from left moved to right */}
                  {kuaforItems.slice(-3, -2).map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-white/70 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-700/50">
                <button 
                  onClick={() => document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block w-full text-center rounded-xl border border-white/20 text-white px-6 py-3 font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:shadow-lg hover:shadow-white/10"
                >
                  Fiyat Al
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section 
        id="iletisim" 
        className={`bg-zinc-950 border-t border-white/10 transition-all duration-1000 ${
          contactHighlight ? 'bg-zinc-800 shadow-[0_-20px_50px_-12px_rgba(245,158,11,0.4),0_20px_50px_-12px_rgba(245,158,11,0.4)]' : ''
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-16 grid sm:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-[var(--font-display)]">İletişim</h3>
            <p className="text-zinc-300 mt-2">Randevu ve bilgi için arayın.</p>
          </div>
          <div className="flex sm:justify-end items-center gap-4 flex-wrap">
            <a 
              href="https://www.instagram.com/hasanaakn55" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-3 font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
            <a href={`tel:${phoneNumber}`} className="rounded-lg bg-white text-black px-5 py-3 font-semibold">0545 510 11 18</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-sm text-zinc-400">
        <div className="mx-auto max-w-6xl px-4 py-8 flex items-center justify-between">
          <span>© {new Date().getFullYear()} {heroTitle}</span>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-zinc-200 transition-all duration-200 group p-2 rounded-full hover:bg-zinc-800/50"
          >
            <svg 
              className="w-6 h-6 transition-transform duration-200 group-hover:-translate-y-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}
