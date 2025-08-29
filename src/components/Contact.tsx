'use client'

import { useState, useRef, useEffect } from 'react'
import { MapPin, Phone, Clock, Mail, MessageCircle, Navigation, ExternalLink, Send, User } from 'lucide-react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })
  const sectionRef = useRef<HTMLElement>(null)

  const services = [
    'Laptop Tamiri',
    'Anakart Onarımı',
    'Ekran Kartı Tamiri',
    'MacBook/iMac Servisi',
    'Monitör/LCD Tamiri',
    'Konsol Tamiri (PS4/PS5/Xbox)',
    'İkinci El Alım',
    'İkinci El Satış',
    'Diğer'
  ]

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    const whatsappMessage = `Merhaba! 
İsim: ${formData.name}
Telefon: ${formData.phone}
Email: ${formData.email}
Hizmet: ${formData.service}
Mesaj: ${formData.message}`
    
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/905061545174?text=${encodedMessage}`, '_blank')
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
            <Phone size={24} />
            <span className="text-sm font-semibold tracking-wide uppercase">İletişim</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bizimle <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">İletişime</span> Geçin
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tüm teknoloji ihtiyaçlarınız için Master Bilgisayar'a ulaşabilirsiniz. 
            Hızlı ve güvenilir servis için bize ulaşın.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className={`lg:col-span-2 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-white rounded-2xl shadow-xl p-8 border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Send className="text-blue-600" size={24} />
                <span>Mesaj Gönderin</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Adınızı girin"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Telefon numaranız"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="E-posta adresiniz"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Hizmet Türü
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Hizmet seçin</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Arıza detayları, sorularınız veya özel taleplerinizi belirtin..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp\'tan Gönder</span>
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Bilgi:</strong> Formunuz WhatsApp üzerinden gönderilecektir. Hızlı yanıt için telefon numaranızı mutlaka belirtin.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Hızlı İletişim</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+905061545174"
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 group"
                  >
                    <Phone className="group-hover:scale-110 transition-transform" size={20} />
                    <div>
                      <div className="font-semibold">Hemen Ara</div>
                      <div className="text-sm opacity-90">+90 506 154 5174</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/905061545174"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200 group"
                  >
                    <MessageCircle className="group-hover:scale-110 transition-transform" size={20} />
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-sm opacity-90">Anında mesaj at</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Address & Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Mağaza Bilgileri</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-red-500 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Adres</div>
                      <div className="text-gray-600 leading-relaxed">
                        Master Bilgisayar<br />
                        Güller Pınarı, Yenilmez Cd. No41<br />
                        07400 Alanya/Antalya
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="text-blue-500 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Çalışma Saatleri</div>
                      <div className="text-gray-600">
                        <div>Pazartesi - Cuma: 09:00 - 18:00</div>
                        <div>Cumartesi: 10:00 - 16:00</div>
                        <div className="text-red-600">Pazar: Kapalı</div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://www.google.com/maps?hl=tr&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x14dc99f9b0d51d15:0x14c1396d4a752747"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <Navigation size={16} />
                    <span>Google Maps</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Servis Bölgeleri</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Alanya Merkez</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Mahmutlar</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Oba</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Kestel</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white rounded-lg">
                  <p className="text-xs text-gray-600">
                    <strong>Eve Servis:</strong> Alanya merkez için ücretsiz eve servis hizmeti sunuyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className={`mt-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white rounded-2xl p-4 shadow-lg border">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Konumumuz</h3>
            <div className="relative rounded-xl overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.234567890123!2d32.123456789!3d36.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dc99f9b0d51d15%3A0x14c1396d4a752747!2sG%C3%BCller%20P%C4%B1nar%C4%B1%2C%20Yenilmez%20Cd.%20No%3A41%2C%2007400%20Alanya%2FAntalya!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Master Bilgisayar Konum"
                className="rounded-xl"
              />
              
              {/* Map Overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-900">Master Bilgisayar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
