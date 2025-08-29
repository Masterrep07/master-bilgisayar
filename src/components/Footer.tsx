'use client'

import Link from 'next/link'
import { MapPin, Phone, Clock, Mail, MessageCircle, Star, Shield, Award, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    'Laptop Tamiri',
    'Anakart Onarımı',
    'Ekran Kartı Tamiri',
    'MacBook Servisi',
    'Monitör Tamiri',
    'Konsol Tamiri',
    'İkinci El Alım-Satım'
  ]

  const quickLinks = [
    { name: 'Ana Sayfa', href: '#hero' },
    { name: 'Hizmetlerimiz', href: '#services' },
    { name: 'İkinci El', href: '#second-hand' },
    { name: 'Müşteri Yorumları', href: '#reviews' },
    { name: 'SSS', href: '#faq' },
    { name: 'Blog', href: '#blog' },
    { name: 'İletişim', href: '#contact' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Master Bilgisayar</h1>
                <p className="text-sm text-blue-300">Alanya Teknik Servis</p>
              </div>
            </Link>

            <p className="text-gray-300 leading-relaxed mb-6">
              Alanya'da 2015'ten beri güvenilir teknoloji çözümleri sunuyoruz. 
              Uzman ekibimizle tüm elektronik cihazlarınız için profesyonel hizmet.
            </p>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="text-green-400" size={16} />
                <span>1 Yıl Garanti</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Star className="text-yellow-400" size={16} />
                <span>5/5 Müşteri Memnuniyeti</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Award className="text-purple-400" size={16} />
                <span>Uzman Ekip</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    href="#services"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Hızlı Erişim</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">İletişim Bilgileri</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-red-400 mt-0.5" size={18} />
                <div>
                  <div className="text-sm text-gray-300">
                    Master Bilgisayar<br />
                    Güller Pınarı, Yenilmez Cd. No41<br />
                    07400 Alanya/Antalya
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-green-400" size={18} />
                <a 
                  href="tel:+905061545174"
                  className="text-sm text-gray-300 hover:text-green-400 transition-colors"
                >
                  +90 506 154 5174
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="text-blue-400" size={18} />
                <div className="text-sm text-gray-300">
                  Pazartesi - Cuma: 09:00 - 18:00<br />
                  Cumartesi: 10:00 - 16:00
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-purple-400" size={18} />
                <div className="text-sm text-gray-300">
                  info@masterbilgisayar.com
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex space-x-3 mt-6">
              <a
                href="tel:+905061545174"
                className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors"
                title="Telefon"
              >
                <Phone size={18} />
              </a>
              <a
                href="https://wa.me/905061545174"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 p-3 rounded-lg transition-colors"
                title="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://www.google.com/maps?hl=tr&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x14dc99f9b0d51d15:0x14c1396d4a752747"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-3 rounded-lg transition-colors"
                title="Google Maps"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter & Stats */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Haberdar Olun</h4>
              <p className="text-gray-300 text-sm mb-4">
                Teknoloji ipuçları ve özel kampanyalardan haberdar olmak için e-posta adresinizi bırakın.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-sm"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-r-lg hover:from-blue-600 hover:to-purple-600 transition-all text-sm font-medium">
                  Abone Ol
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">1000+</div>
                <div className="text-xs text-gray-400">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">5000+</div>
                <div className="text-xs text-gray-400">Başarılı Tamir</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">9</div>
                <div className="text-xs text-gray-400">Yıl Tecrübe</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Awards & Certifications */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Sertifikalar & Ödüller</h4>
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <span>✓ Apple Yetkili Servis</span>
                <span>✓ Microsoft Partner</span>
                <span>✓ Asus Yetkili Servis</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
                <div className="text-xs text-gray-400">Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Master Bilgisayar. Tüm hakları saklıdır. • Alanya, Antalya
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} />
              <span>by Master Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
