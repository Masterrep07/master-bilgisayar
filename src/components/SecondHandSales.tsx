'use client'

import { useState, useRef, useEffect } from 'react'
import { DollarSign, Recycle, Shield, Star, Laptop, Monitor, Gamepad2, Smartphone, CheckCircle, Phone, MessageCircle, Award, TrendingUp } from 'lucide-react'

const SecondHandSales = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('buy')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const buyingReasons = [
    {
      icon: <DollarSign className="text-green-500" size={24} />,
      title: 'En İyi Fiyat Garantisi',
      description: 'Cihazınızın piyasa değerini araştırıp, en uygun fiyatı sunuyoruz.'
    },
    {
      icon: <Shield className="text-blue-500" size={24} />,
      title: 'Güvenli İşlem',
      description: 'Tüm alım işlemlerimiz belgeli ve güvenli bir şekilde gerçekleştirilir.'
    },
    {
      icon: <Recycle className="text-purple-500" size={24} />,
      title: 'Arızalı da Alırız',
      description: 'Çalışmayan veya arızalı cihazlarınızı da değerlendiriyoruz.'
    },
    {
      icon: <TrendingUp className="text-orange-500" size={24} />,
      title: 'Anında Ödeme',
      description: 'Cihazınızı değerlendirdikten sonra nakit ödeme yapıyoruz.'
    }
  ]

  const sellingFeatures = [
    {
      icon: <Star className="text-yellow-500" size={24} />,
      title: 'Garantili Ürünler',
      description: 'Sattığımız tüm ikinci el cihazlar garantili ve test edilmiştir.'
    },
    {
      icon: <CheckCircle className="text-green-500" size={24} />,
      title: 'Kalite Kontrolü',
      description: 'Her cihaz satış öncesi detaylı kontrol ve temizlik işleminden geçer.'
    },
    {
      icon: <Award className="text-blue-500" size={24} />,
      title: 'Uygun Fiyatlar',
      description: 'Kaliteli ikinci el cihazları en uygun fiyatlarla sunuyoruz.'
    },
    {
      icon: <Shield className="text-purple-500" size={24} />,
      title: 'Satış Sonrası Destek',
      description: 'Aldığınız ürün için teknik destek ve garanti hizmetimiz mevcuttur.'
    }
  ]

  const deviceCategories = [
    { icon: '💻', name: 'Laptop', description: 'Gaming, iş ve eğitim laptopları' },
    { icon: '🖥️', name: 'Masaüstü', description: 'Hazır sistem ve parçalar' },
    { icon: '📱', name: 'Telefon', description: 'iPhone ve Android cihazlar' },
    { icon: '⌚', name: 'Aksesuar', description: 'Tablet, akıllı saat ve daha fazlası' },
    { icon: '🎮', name: 'Konsol', description: 'PlayStation, Xbox, Nintendo' },
    { icon: '📺', name: 'Monitör', description: 'Gaming ve profesyonel monitörler' }
  ]

  return (
    <section id="second-hand" ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center space-x-2 text-purple-600 mb-4">
            <Recycle size={24} />
            <span className="text-sm font-semibold tracking-wide uppercase">İkinci El</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">İkinci El</span> Alım-Satım
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Teknoloji cihazlarınızı değerlendirin veya kaliteli ikinci el ürünlerden faydalanın. 
            Güvenli işlem ve garanti güvencesiyle.
          </p>
        </div>

        {/* Tab Selection */}
        <div className={`flex justify-center mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white p-1 rounded-xl shadow-lg border">
            <button
              onClick={() => setActiveTab('buy')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'buy'
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Cihazınızı Satın
            </button>
            <button
              onClick={() => setActiveTab('sell')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'sell'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              İkinci El Satış
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === 'buy' && (
            <div className={`transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Cihazınızı <span className="text-green-600">En İyi Fiyata</span> Satın
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Kullanmadığınız laptop, telefon, tablet veya diğer elektronik cihazlarınızı değerlendirin. 
                    Arızalı cihazları bile alıyoruz! Anında değerlendirme ve nakit ödeme imkanı.
                  </p>

                  <div className="space-y-6">
                    {buyingReasons.map((reason, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                        <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                          {reason.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h4>
                          <p className="text-gray-600">{reason.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <a
                      href="tel:+905061545174"
                      className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <Phone size={18} />
                      <span>Fiyat Teklifi Al</span>
                    </a>
                    <a
                      href="https://wa.me/905061545174"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 border-2 border-green-500 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200"
                    >
                      <MessageCircle size={18} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white p-8 rounded-2xl shadow-xl border">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Aldığımız Cihazlar</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {deviceCategories.map((category, index) => (
                        <div key={index} className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all duration-200 cursor-pointer">
                          <div className="text-3xl mb-2">{category.icon}</div>
                          <h5 className="font-semibold text-gray-900 mb-1">{category.name}</h5>
                          <p className="text-sm text-gray-600">{category.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating price indicator */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                    En İyi Fiyat!
                  </div>
                </div>
              </div>

              {/* Process Steps */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border">
                <h4 className="text-2xl font-bold text-center text-gray-900 mb-8">Satış Süreci</h4>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: '1', title: 'İletişim', desc: 'Bizi arayın veya mağazaya gelin' },
                    { step: '2', title: 'Değerlendirme', desc: 'Cihazınızı ücretsiz değerlendiriyoruz' },
                    { step: '3', title: 'Fiyat Teklifi', desc: 'Size en uygun fiyatı sunuyoruz' },
                    { step: '4', title: 'Anında Ödeme', desc: 'Anlaştığımızda nakit ödeme yapıyoruz' }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                        {item.step}
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-2">{item.title}</h5>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sell' && (
            <div className={`transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative">
                  <div className="bg-white p-8 rounded-2xl shadow-xl border">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Garantili İkinci El</h4>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="text-green-500" size={20} />
                        <span className="text-gray-800">6 Ay Garanti</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="text-blue-500" size={20} />
                        <span className="text-gray-800">Test Edilmiş</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="text-purple-500" size={20} />
                        <span className="text-gray-800">Temizlenmiş</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                        <CheckCircle className="text-yellow-600" size={20} />
                        <span className="text-gray-800">Uygun Fiyat</span>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-4xl mb-4">🏆</div>
                      <p className="text-gray-600 text-sm">5/5 Müşteri Memnuniyeti</p>
                    </div>
                  </div>

                  {/* Floating guarantee badge */}
                  <div className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                    Garantili!
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    <span className="text-purple-600">Kaliteli</span> İkinci El Ürünler
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Test edilmiş, temizlenmiş ve garantili ikinci el elektronik ürünler. 
                    Bütçenizi zorlamadan kaliteli teknolojiye sahip olun.
                  </p>

                  <div className="space-y-6">
                    {sellingFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                        <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <a
                      href="tel:+905061545174"
                      className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <Phone size={18} />
                      <span>Ürünleri Görüntüle</span>
                    </a>
                    <button className="px-6 py-3 border-2 border-purple-500 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200">
                      Mağazayı Ziyaret Et
                    </button>
                  </div>
                </div>
              </div>

              {/* Popular Categories */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border">
                <h4 className="text-2xl font-bold text-center text-gray-900 mb-8">Popüler Kategoriler</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: '💻', title: 'Gaming Laptop', desc: 'RTX serileri mevcut', price: '15.000₺\'den başlayan' },
                    { icon: '📱', title: 'iPhone', desc: 'iPhone 11, 12, 13 serileri', price: '8.000₺\'den başlayan' },
                    { icon: '🎮', title: 'PlayStation', desc: 'PS4, PS5 konsol ve oyunlar', price: '5.000₺\'den başlayan' }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg hover:from-gray-100 hover:to-blue-100 transition-all duration-200 cursor-pointer">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h5 className="font-bold text-gray-900 mb-2">{item.title}</h5>
                      <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                      <p className="text-purple-600 font-semibold text-sm">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default SecondHandSales
