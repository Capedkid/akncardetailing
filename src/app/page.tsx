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
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#paketler" className="hover:text-zinc-300">Paketler</a>
            <a href="#iletisim" className="hover:text-zinc-300">İletişim</a>
          </nav>
          <a href="#iletisim" className="sm:inline-block hidden rounded-md bg-white text-black px-4 py-2 text-sm font-medium">Hemen Ara</a>
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
          <div className="flex gap-3">
            <a href="#paketler" className="rounded-md bg-white text-black px-5 py-2.5 text-sm font-semibold">Paketleri Gör</a>
            <a href="#iletisim" className="rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold hover:bg-white/10">İletişime Geç</a>
          </div>
        </div>
        
        {/* Overlay gradient */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      </section>

      {/* Packages */}
      <section id="paketler" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-[var(--font-display)] mb-4">Premium Gold Paket</h2>
            <ul className="space-y-2 text-zinc-200">
              {premiumGoldItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-[var(--font-display)] mb-4">Pasta - Cila - Kuaför Paketi</h2>
            <ul className="space-y-2 text-zinc-200">
              {kuaforItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
