'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, Clock, Shield, Wrench, DollarSign, Phone, MessageCircle } from 'lucide-react'

interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
  icon: React.ReactNode
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([1, 8]) // İlk sorular açık başlasın
  const [activeCategory, setActiveCategory] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'Tamiri yapılan cihazlara ne kadar garanti veriyorsunuz?',
      answer: 'Yaptığımız tüm tamirlere 1 yıl garanti veriyoruz. Bu garanti süresince aynı arızanın tekrar oluşması durumunda ücretsiz onarım yapıyoruz. Garanti kapsamı kullanılan yedek parçalar ve işçilik için geçerlidir.',
      category: 'guarantee',
      icon: <Shield size={20} className="text-green-500" />
    },
    {
      id: 2,
      question: 'Tamir süresi ne kadar?',
      answer: 'Tamir süresi arızanın türüne göre değişiklik gösterir. Basit tamirler aynı gün, anakart tamiri gibi komplex işlemler 3-7 gün sürebilir. Yedek parça bekleme durumunda süre uzayabilir. Size kesin teslimat tarihi veririz.',
      category: 'time',
      icon: <Clock size={20} className="text-blue-500" />
    },
    {
      id: 3,
      question: 'Arızalı cihazları da satın alıyor musunuz?',
      answer: 'Evet, arızalı cihazları da alıyoruz. Cihazın durumuna göre değerlendirme yaparak size fiyat teklifi veriyoruz. Tamiri ekonomik olmayan cihazları parça değeri üzerinden değerlendiriyoruz.',
      category: 'purchase',
      icon: <DollarSign size={20} className="text-purple-500" />
    },
    {
      id: 4,
      question: 'Hangi marka ve modelleri tamir ediyorsunuz?',
      answer: 'Tüm marka laptop, masaüstü bilgisayar, MacBook, iMac, PS4, PS5, Xbox ve monitörleri tamir ediyoruz. Asus, HP, Dell, Lenovo, Apple, Acer, MSI, Casper ve daha birçok marka için hizmet veriyoruz.',
      category: 'service',
      icon: <Wrench size={20} className="text-orange-500" />
    },
    {
      id: 5,
      question: 'Tamir ücreti ne kadar?',
      answer: 'Tamir ücreti arızanın türü ve gereken yedek parçaya göre belirlenir. Ücretsiz muayene sonrası size net fiyat veriyoruz. Tamir yaptırmazsanız muayene ücreti alınmaz.',
      category: 'pricing',
      icon: <DollarSign size={20} className="text-green-500" />
    },
    {
      id: 6,
      question: 'Orijinal yedek parça kullanıyor musunuz?',
      answer: 'Evet, mümkün olduğunca orijinal yedek parça kullanmaya özen gösteriyoruz. Orijinal parça bulunamadığında kaliteli aftermarket parçalar kullanıyoruz ve bu durumu size bildiririz.',
      category: 'service',
      icon: <Shield size={20} className="text-blue-500" />
    },
    {
      id: 7,
      question: 'Eve servis hizmeti var mı?',
      answer: 'Alanya merkez içinde eve servis hizmetimiz mevcuttur. Cihazınızı evinizden alıp, tamiri tamamlandıktan sonra geri getiriyoruz. Eve servis ücreti tamire dahildir.',
      category: 'service',
      icon: <Phone size={20} className="text-indigo-500" />
    },
    {
      id: 8,
      question: 'İkinci el cihazlarda garanti var mı?',
      answer: 'Sattığımız tüm ikinci el cihazlarda 6 ay garanti veriyoruz. Bu sürede herhangi bir arıza oluşması durumunda ücretsiz tamir veya değişim yapıyoruz. Tüm cihazlar satış öncesi test edilir.',
      category: 'guarantee',
      icon: <Shield size={20} className="text-purple-500" />
    },
    {
      id: 9,
      question: 'Çalışma saatleriniz nedir?',
      answer: 'Hafta içi 09:00 - 18:00 saatleri arasında açığız. Cumartesi günleri 10:00 - 16:00 saatleri arasında hizmet veriyoruz. Pazar günleri kapalıyız. Acil durumlar için telefon ile ulaşabilirsiniz.',
      category: 'time',
      icon: <Clock size={20} className="text-yellow-500" />
    },
    {
      id: 10,
      question: 'Anakart tamiri yapıyor musunuz?',
      answer: 'Evet, mikroişlemci seviyesinde anakart tamiri yapıyoruz. Çipset değişimi, kapasitör tamiri, kısa devre giderme gibi tüm anakart arızalarını çözüyoruz. Bu işlemlere de 1 yıl garanti veriyoruz.',
      category: 'service',
      icon: <Wrench size={20} className="text-red-500" />
    },
    {
      id: 11,
      question: 'Ödeme şekilleri nelerdir?',
      answer: 'Nakit, kredi kartı ve banka kartı ile ödeme alabiliyoruz. Büyük tutarlı alışverişlerde taksit imkanı sunuyoruz. İkinci el alım işlemlerinde nakit ödeme yapıyoruz.',
      category: 'pricing',
      icon: <DollarSign size={20} className="text-green-600" />
    },
    {
      id: 12,
      question: 'MacBook tamiri yapıyor musunuz?',
      answer: 'Evet, tüm MacBook modellerinin tamirini yapıyoruz. Logic board tamiri, ekran değişimi, klavye değişimi, pil değişimi ve SSD yükseltmesi gibi tüm işlemleri gerçekleştiriyoruz.',
      category: 'service',
      icon: <Wrench size={20} className="text-gray-600" />
    }
  ]

  const categories = [
    { id: 'all', name: 'Tümü', icon: <HelpCircle size={18} /> },
    { id: 'guarantee', name: 'Garanti', icon: <Shield size={18} /> },
    { id: 'service', name: 'Hizmet', icon: <Wrench size={18} /> },
    { id: 'time', name: 'Süre', icon: <Clock size={18} /> },
    { id: 'pricing', name: 'Fiyat', icon: <DollarSign size={18} /> },
    { id: 'purchase', name: 'Alım-Satım', icon: <MessageCircle size={18} /> }
  ]

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory)

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

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  // Split FAQs into two columns
  const leftColumnFaqs = filteredFaqs.filter((_, index) => index % 2 === 0)
  const rightColumnFaqs = filteredFaqs.filter((_, index) => index % 2 === 1)

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center space-x-2 text-indigo-600 mb-4">
            <HelpCircle size={24} />
            <span className="text-sm font-semibold tracking-wide uppercase">SSS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sıkça Sorulan <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Sorular</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master Bilgisayar hizmetleri hakkında merak ettiklerinizi burada bulabilirsiniz. 
            Daha fazla soru için bize ulaşmaktan çekinmeyin.
          </p>
        </div>

        {/* Category Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg transform -translate-y-0.5'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className={`grid lg:grid-cols-2 gap-8 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumnFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index * 100) + 600}ms` }}
              >
                <button
                  className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-2xl"
                  onClick={() => toggleItem(faq.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-3">
                      {faq.icon}
                      <h3 className="text-lg font-semibold text-gray-900 leading-6">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {openItems.includes(faq.id) ? (
                        <ChevronUp className="text-indigo-500" size={20} />
                      ) : (
                        <ChevronDown className="text-gray-400" size={20} />
                      )}
                    </div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.includes(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5">
                    <div className="pl-8 border-l-2 border-indigo-100">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumnFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index * 100) + 700}ms` }}
              >
                <button
                  className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-2xl"
                  onClick={() => toggleItem(faq.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-3">
                      {faq.icon}
                      <h3 className="text-lg font-semibold text-gray-900 leading-6">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {openItems.includes(faq.id) ? (
                        <ChevronUp className="text-indigo-500" size={20} />
                      ) : (
                        <ChevronDown className="text-gray-400" size={20} />
                      )}
                    </div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.includes(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5">
                    <div className="pl-8 border-l-2 border-indigo-100">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sorunuz Burada Yok mu?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Aradığınız soruyu bulamadıysanız veya daha detaylı bilgi almak istiyorsanız, 
              bizimle iletişime geçmekten çekinmeyin. Size yardımcı olmak için buradayız.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905061545174"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Phone size={18} />
                <span>Bizi Arayın</span>
              </a>
              <a
                href="https://wa.me/905061545174"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
