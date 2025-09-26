import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AKN Car Detailing - Premium Oto Yıkama ve Detaylı Temizlik",
  description: "AKN Car Detailing ile aracınız ilk günkü görünümüne kavuşsun. Premium oto yıkama, pasta-cila, seramik kaplama hizmetleri. 0545 510 11 18",
  keywords: "oto yıkama, car detailing, pasta cila, seramik kaplama, araç temizliği, premium oto yıkama, AKN car detailing",
  authors: [{ name: "AKN Car Detailing" }],
  creator: "AKN Car Detailing",
  publisher: "AKN Car Detailing",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://akncardetailing.com",
    title: "AKN Car Detailing - Premium Oto Yıkama ve Detaylı Temizlik",
    description: "AKN Car Detailing ile aracınız ilk günkü görünümüne kavuşsun. Premium oto yıkama, pasta-cila, seramik kaplama hizmetleri.",
    siteName: "AKN Car Detailing",
    images: [
      {
        url: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "AKN Car Detailing - Premium Oto Yıkama",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AKN Car Detailing - Premium Oto Yıkama",
    description: "Premium oto yıkama ve detaylı temizlik hizmetleri. Aracınız ilk günkü görünümüne kavuşsun.",
    images: ["https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
    creator: "@hasanaakn55",
  },
  alternates: {
    canonical: "https://akncardetailing.com",
  },
  other: {
    "geo.region": "TR",
    "geo.placename": "Turkey",
    "geo.position": "39.9334;32.8597",
    "ICBM": "39.9334, 32.8597",
    "instagram:title": "AKN Car Detailing - Premium Oto Yıkama",
    "instagram:description": "Premium oto yıkama ve detaylı temizlik hizmetleri. Instagram'da bizi takip edin!",
    "instagram:image": "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "tiktok:title": "AKN Car Detailing - Premium Oto Yıkama",
    "tiktok:description": "Premium oto yıkama ve detaylı temizlik hizmetleri. TikTok'ta bizi takip edin!",
    "tiktok:image": "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* DNS prefetch for critical external domains only */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
