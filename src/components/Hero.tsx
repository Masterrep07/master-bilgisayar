'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Wrench, Shield, Clock, Star, Phone, MapPin, Zap, Award, Users } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Master Bilgisayar",
      subtitle: "Alanya'nın En Güvenilir Teknik Servisi",
      description: "15 yıllık deneyimimizle laptop tamiri, anakart onarımı ve tüm elektronik cihaz tamiri hizmetleri",
      highlight: "LAPTOP TAMİRİ",
      stats: { number: "1000+", text: "Onarılan Cihaz" }
    },
    {
      title: "MacBook & iMac",
      subtitle: "Apple Ürünleri İçin Özel Servis",
      description: "Logic board onarımı, Retina ekran tamiri ve orijinal parça kullanımıyla Apple cihazlarınız güvende",
      highlight: "APPLE SERVİSİ",
      stats: { number: "500+", text: "Apple Tamiri" }
    },
    {
      title: "Oyun Konsolları", 
      subtitle: "PlayStation, Xbox, Nintendo Tamiri",
      description: "PS4, PS5, Xbox Series ve Nintendo Switch konsol tamiri ile oyun keyfini geri kazanın",
      highlight: "KONSOL TAMİRİ",
      stats: { number: "300+", text: "Konsol Onarımı" }
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden py-2 lg:py-4">
      {/* Modern gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/10 to-purple-500/20"></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-20 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Tech grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-1 lg:py-2 relative z-10">
        <div className="grid lg:grid-cols-5 gap-4 lg:gap-8 items-center">
          {/* Main Content */}
          <div className={`lg:col-span-3 text-white space-y-3 lg:space-y-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-blue-200 font-medium">{slides[currentSlide].highlight}</span>
              <div className="w-1 h-4 bg-white/30"></div>
              <span className="text-white font-semibold">15+ Yıl Deneyim</span>
            </div>
            
            {/* Dynamic Title */}
            <div className="space-y-1 lg:space-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </span>
              </h1>
              
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-blue-300">
                {slides[currentSlide].subtitle}
              </h2>
              
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Stats - Mobile optimized */}
            <div className="flex items-center space-x-4 lg:space-x-8 overflow-x-auto">
              <div className="text-center flex-shrink-0">
                <div className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {slides[currentSlide].stats.number}
                </div>
                <div className="text-xs lg:text-sm text-gray-400 font-medium">{slides[currentSlide].stats.text}</div>
              </div>
              <div className="w-px h-8 lg:h-12 bg-white/20"></div>
              <div className="text-center flex-shrink-0">
                <div className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  1 YIL
                </div>
                <div className="text-xs lg:text-sm text-gray-400 font-medium">Garanti</div>
              </div>
              <div className="w-px h-8 lg:h-12 bg-white/20"></div>
              <div className="text-center flex-shrink-0">
                <div className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-xs lg:text-sm text-gray-400 font-medium">Destek</div>
              </div>
            </div>

            {/* Features Grid - Compact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg p-2 lg:p-3 border border-white/10">
                <Shield className="text-green-400 flex-shrink-0" size={18} />
                <div>
                  <div className="font-semibold text-white text-xs lg:text-sm">Garantili Hizmet</div>
                  <div className="text-xs text-gray-400">1 yıl tam garanti</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg p-2 lg:p-3 border border-white/10">
                <Zap className="text-yellow-400 flex-shrink-0" size={18} />
                <div>
                  <div className="font-semibold text-white text-xs lg:text-sm">Hızlı Teslimat</div>
                  <div className="text-xs text-gray-400">24-48 saat içinde</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Mobile optimized */}
            <div className="flex flex-col gap-2 pt-1">
              <Link
                href="tel:+905061545174"
                className="group bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-bold text-sm lg:text-base hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <Phone size={18} className="group-hover:animate-pulse" />
                <span className="hidden sm:inline">Hemen Ara: +90 506 154 51 74</span>
                <span className="sm:hidden">Hemen Ara</span>
              </Link>
              <Link
                href="#services"
                className="group border-2 border-white/30 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-bold text-sm lg:text-base hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>Tüm Hizmetler</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Contact Info - Simplified for mobile */}
            <div className="hidden lg:flex flex-col md:flex-row gap-4 pt-3 border-t border-white/20">
              <div className="flex items-center space-x-2 text-xs bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-200">Güller Pınarı, Yenilmez Cd. No41, Alanya</span>
              </div>
              <div className="flex items-center space-x-2 text-xs bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                <Clock size={16} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-200">09:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Visual Element - Compact for mobile */}
          <div className={`lg:col-span-2 relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* Main Card - Smaller on mobile */}
            <div className="relative max-w-xs mx-auto lg:max-w-md">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-3 lg:p-5 border border-white/20 shadow-xl">
                <div className="space-y-2 lg:space-y-3">
                  {/* Header */}
                  <div className="text-center space-y-1 lg:space-y-2">
                    <div className="inline-flex items-center space-x-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-full px-2 lg:px-3 py-1 border border-white/20">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white font-semibold text-xs">ONLINE SERVİS</span>
                    </div>
                    
                    <h3 className="text-base lg:text-xl font-bold text-white">
                      Ücretsiz <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Ön Teşhis</span>
                    </h3>
                    <p className="text-blue-200 text-xs">15 dakikada teşhis!</p>
                  </div>
                  
                  {/* Service Grid - Compact */}
                  <div className="grid grid-cols-2 gap-1.5 lg:gap-2">
                    {[
                      { icon: "💻", title: "Laptop", desc: "Anakart", color: "from-blue-500/20 to-purple-500/20" },
                      { icon: "🖥️", title: "iMac", desc: "Logic Board", color: "from-purple-500/20 to-pink-500/20" },
                      { icon: "🎮", title: "Konsol", desc: "PS4/PS5", color: "from-green-500/20 to-blue-500/20" },
                      { icon: "⚡", title: "Express", desc: "24 Saat", color: "from-yellow-500/20 to-red-500/20" }
                    ].map((service, idx) => (
                      <div key={idx} className={`bg-gradient-to-br ${service.color} rounded-lg p-1.5 lg:p-2 text-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105`}>
                        <div className="text-base lg:text-lg mb-0.5">{service.icon}</div>
                        <div className="font-bold text-white text-xs mb-0.5">{service.title}</div>
                        <div className="text-xs text-gray-400">{service.desc}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Quick Actions - Mobile optimized */}
                  <div className="space-y-1.5 lg:space-y-2">
                    <Link href="tel:+905061545174" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-2 lg:py-2.5 rounded-lg flex items-center justify-center space-x-1.5 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-xs">
                      <Phone size={14} />
                      <span>Hemen Ara</span>
                    </Link>
                    
                    <div className="grid grid-cols-2 gap-1.5">
                      <Link href="#contact" className="bg-white/10 backdrop-blur-sm text-white font-semibold py-1.5 lg:py-2 rounded-lg text-center border border-white/20 hover:bg-white/20 transition-all duration-300 text-xs">
                        Lokasyon
                      </Link>
                      <Link href="#services" className="bg-white/10 backdrop-blur-sm text-white font-semibold py-1.5 lg:py-2 rounded-lg text-center border border-white/20 hover:bg-white/20 transition-all duration-300 text-xs">
                        Hizmetler
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges - Smaller on mobile */}
              <div className="absolute -top-2 lg:-top-3 -right-2 lg:-right-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-1 lg:p-1.5 shadow-xl animate-bounce">
                <div className="text-center">
                  <div className="text-white font-bold text-xs">1 YIL</div>
                  <div className="text-white text-xs font-medium">GARANTİ</div>
                </div>
              </div>
              
              <div className="absolute -bottom-2 lg:-bottom-3 -left-2 lg:-left-3 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg p-1 lg:p-1.5 shadow-xl animate-pulse">
                <div className="text-center">
                  <div className="text-white font-bold text-xs">%98</div>
                  <div className="text-white text-xs font-medium">BAŞARI</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-3 lg:mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white shadow-md scale-110' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <div className="absolute bottom-2 lg:bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-5 lg:w-6 h-6 lg:h-8 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-2 lg:h-3 bg-white/70 rounded-full mt-1 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
