import Image from "next/image";

const heroTitle = process.env.NEXT_PUBLIC_SITE_NAME || "AKN car detailing";
const phoneNumber = process.env.NEXT_PUBLIC_PHONE || "+905437458055";
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "905437458055";

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
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="font-[var(--font-display)] text-xl tracking-wide">{heroTitle}</div>
          <a href="#iletisim" className="rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors">Hemen Ara</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-black opacity-90" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
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
            <a href="#paketler" className="group relative rounded-lg bg-white text-black px-6 py-3 text-sm font-semibold transition-all duration-300 hover:bg-zinc-100 hover:shadow-lg hover:shadow-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black">
              <span className="relative z-10">Paketleri Gör</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white to-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
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
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative rounded-3xl border border-amber-500/20 bg-gradient-to-br from-zinc-900/80 via-zinc-800/60 to-zinc-900/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl sm:text-3xl font-[var(--font-display)] text-amber-400">Premium Gold</h3>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">10.000₺</div>
                  <div className="text-sm text-zinc-400">Paket halinde</div>
                </div>
              </div>
              <ul className="space-y-3 text-zinc-200">
                {premiumGoldItems.slice(0, -1).map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-amber-400 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-zinc-700/50">
                <a href="#iletisim" className="block w-full text-center rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 font-semibold transition-all duration-300 hover:from-amber-400 hover:to-amber-500 hover:shadow-lg hover:shadow-amber-500/25">
                  Paketi İncele
                </a>
              </div>
            </div>
          </div>

          <div className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/80 via-zinc-800/60 to-zinc-900/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl sm:text-3xl font-[var(--font-display)] text-white">Pasta - Cila - Kuaför</h3>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">Fiyat Al</div>
                  <div className="text-sm text-zinc-400">Araç durumuna göre</div>
                </div>
              </div>
              <ul className="space-y-3 text-zinc-200">
                {kuaforItems.slice(0, 8).map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-white/70 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
                <li className="text-zinc-400 text-sm italic">+ {kuaforItems.length - 8} hizmet daha...</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-zinc-700/50">
                <a href="#iletisim" className="block w-full text-center rounded-xl border border-white/20 text-white px-6 py-3 font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:shadow-lg hover:shadow-white/10">
                  Fiyat Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="iletisim" className="bg-zinc-950 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 grid sm:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-[var(--font-display)]">İletişim</h3>
            <p className="text-zinc-300 mt-2">Randevu ve bilgi için arayın.</p>
          </div>
          <div className="flex sm:justify-end items-center gap-4">
            <a href={`tel:${phoneNumber}`} className="rounded-lg bg-white text-black px-5 py-3 font-semibold">{phoneNumber.replace('+90', '0')}</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-sm text-zinc-400">
        <div className="mx-auto max-w-6xl px-4 py-8 flex items-center justify-between">
          <span>© {new Date().getFullYear()} {heroTitle}</span>
          <a href="#" className="hover:text-zinc-200">Yukarı çık</a>
        </div>
      </footer>
    </div>
  );
}
