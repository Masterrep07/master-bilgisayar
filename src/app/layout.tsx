import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Master Bilgisayar - Alanya Laptop Tamiri & İkinci El Satış",
  description: "Master Bilgisayar, Alanya'da uzman ekibimizle laptop tamiri, anakart onarımı, ekran kartı & çipset onarımı ve MacBook & iMac bakım-onarımı hizmetleri sunar. Monitör & LCD ekran tamirinden PS4, PS5, Xbox onarımına; tüm elektronik parça onarımından yedek parça teminine ve ikinci el arızalı cihaz alımı & değerlendirmesine kadar eksiksiz destek sağlıyoruz.",
  keywords: [
    "Alanya laptop tamiri",
    "Alanya bilgisayar tamiri", 
    "MacBook tamiri Alanya",
    "PS5 tamiri Alanya",
    "ikinci el bilgisayar Alanya",
    "anakart tamiri",
    "ekran kartı tamiri",
    "Master Bilgisayar",
    "Alanya teknik servis"
  ],
  authors: [{ name: "Master Bilgisayar" }],
  creator: "Master Bilgisayar",
  publisher: "Master Bilgisayar",
  openGraph: {
    title: "Master Bilgisayar - Alanya'nın Güvenilir Teknik Servisi",
    description: "Laptop tamiri, MacBook servisi, konsol tamiri ve ikinci el cihaz alım-satımı. 1 yıl garantili hizmet. Hemen arayın!",
    siteName: 'Master Bilgisayar',
    locale: 'tr_TR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
