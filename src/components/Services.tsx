'use client'

import { useState, useRef, useEffect } from 'react'
import { Laptop, Monitor, Gamepad2, Apple, Wrench, HardDrive, Cpu, Shield, Clock, CheckCircle, Phone, Star, MapPin } from 'lucide-react'

interface Service {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  color: string
  bgColor: string
}

const Services = () => {
  const [activeService, setActiveService] = useState<number>(1)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Smooth scroll to service details
  const scrollToServiceDetail = () => {
    const element = document.getElementById('service-detail');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services: Service[] = [
    {
      id: 1,
      title: 'Laptop Tamiri',
      description: 'Profesyonel laptop tamiri ve bakım hizmetleri. Her marka ve model için uzman çözümler.',
      icon: <Laptop size={24} />,
      features: [
        'Ekran değişimi ve tamiri',
        'Klavye ve touchpad onarımı',
        'Pil değişimi ve kalibrasyon',
        'Şarj soketi tamiri',
        'Fan temizliği ve değişimi',
        'RAM ve SSD yükseltmesi',
        'Menteşe tamiri ve değişimi',
        'Ses kartı onarımı',
        'WiFi kartı tamiri',
        'Termal macun değişimi',
        'Optik sürücü tamiri',
        'Bluetooth modül onarımı',
        'Webcam tamiri',
        'Mikroişlemci soğutma sistemi',
        'BIOS ve firmware güncelleme',
        'Veri transferi ve yedekleme'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      title: 'Anakart Onarımı',
      description: 'Mikroişlemci seviyesinde anakart tamiri. Çipset ve entegre devre onarımları.',
      icon: <Cpu size={24} />,
      features: [
        'Çipset değişimi',
        'Kapasitör tamiri ve değişimi',
        'USB port onarımı',
        'Güç regülatörü tamiri',
        'BIOS yenileme ve programlama',
        'CPU soket tamiri',
        'RAM slot onarımı',
        'CMOS pil değişimi',
        'Ses entegresi tamiri',
        'Ethernet port onarımı',
        'VGA/HDMI çıkış tamiri',
        'PCI-Express slot tamiri',
        'SATA konektör onarımı',
        'GPIO pin tamiri',
        'Mikrodevre solder işlemi',
        'Termal sensör değişimi',
        'Kristal osilatör tamiri'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 3,
      title: 'Ekran Kartı Onarımı',
      description: 'Harici ve entegre ekran kartı tamiri. GPU çip değişimi ve solder işlemleri.',
      icon: <Monitor size={24} />,
      features: [
        'GPU çip değişimi',
        'VRAM tamiri ve değişimi',
        'Soğutma sistemi onarımı',
        'Güç konektörü tamiri',
        'Driver optimizasyonu',
        'Fan değişimi ve temizliği',
        'Termal pad değişimi',
        'BIOS flash işlemi',
        'Capacitor değişimi',
        'MOSFET tamiri',
        'Display port tamiri',
        'HDMI çıkış onarımı',
        'DVI konektör tamiri',
        'PCB çatlak tamiri',
        'Overheating çözümü',
        'Artifact giderme',
        'Performance testing'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 4,
      title: 'MacBook & iMac Servisi',
      description: 'Apple ürünleri için özel servis. Orijinal parça kullanımı ve garanti.',
      icon: <Apple size={24} />,
      features: [
        'Retina ekran tamiri',
        'Logic board onarımı',
        'Pil değişimi (MacBook)',
        'Klavye değişimi (Butterfly/Magic)',
        'SSD yükseltmesi',
        'Trackpad tamiri',
        'MagSafe şarj portu',
        'Thunderbolt port tamiri',
        'iMac ekran değişimi',
        'Fusion Drive onarımı',
        'RAM yükseltmesi',
        'Cooling fan değişimi',
        'Speaker tamiri',
        'WiFi antenna onarımı',
        'Bluetooth modül tamiri',
        'TouchBar tamiri (MacBook Pro)',
        'Touch ID sensör onarımı',
        'macOS kurulum ve optimizasyon'
      ],
      color: 'text-gray-800',
      bgColor: 'bg-gray-50'
    },
    {
      id: 5,
      title: 'Monitör & LCD Tamiri',
      description: 'Bilgisayar ve laptop ekranlarının tamiri. Panel değişimi ve piksel tamiri.',
      icon: <Monitor size={24} />,
      features: [
        'LCD panel değişimi',
        'LED arka aydınlatma tamiri',
        'CCFL lamba değişimi',
        'Çizik giderme ve polisaj',
        'Renk kalibrasyonu',
        'LVDS kabel onarımı',
        'Inverter tamiri',
        'Power board onarımı',
        'Main board tamiri',
        'T-con kartı değişimi',
        'Pixel hatası giderme',
        'Backlight bleeding çözümü',
        'HDMI/VGA port tamiri',
        'OSD kontrol tamiri',
        'Stand ve pivot onarımı',
        'Touchscreen kalibrasyon',
        'Brightness sensör tamiri'
      ],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      id: 6,
      title: 'Konsol Tamiri',
      description: 'PlayStation, Xbox ve Nintendo konsol tamiri. Profesyonel oyun konsolu servisi.',
      icon: <Gamepad2 size={24} />,
      features: [
        'HDMI port tamiri',
        'Joystick analog onarımı',
        'Optik lens temizliği',
        'Cooling fan değişimi',
        'Güç kaynağı tamiri',
        'APU reflow/reball',
        'YLOD/RROD çözümü',
        'WiFi modül tamiri',
        'Bluetooth onarımı',
        'USB port tamiri',
        'Ethernet port onarımı',
        'SSD/HDD yükseltmesi',
        'Termal macun değişimi',
        'Controller tamiri',
        'Cd/DVD sürücü tamiri',
        'NAND flash programlama',
        'Firmware güncelleme',
        'Jailbreak/homebrew kurulum'
      ],
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      id: 7,
      title: 'Veri Kurtarma',
      description: 'Hasar görmüş disklerden veri kurtarma. SSD, HDD ve flash bellek kurtarma.',
      icon: <HardDrive size={24} />,
      features: [
        'HDD mekanik veri kurtarma',
        'SSD flash bellek kurtarma',
        'USB/SD kart tamiri',
        'RAID disk kurtarma',
        'Format sonrası kurtarma',
        'Silinmiş dosya geri getirme',
        'Partition table onarımı',
        'Bad sector izolasyonu',
        'Head crash kurtarma',
        'Firmware tamiri',
        'PCB değişimi',
        'Cleanroom ortamında kurtarma',
        'Database recovery',
        'Email recovery',
        'Fotoğraf/video kurtarma',
        'Şifreli disk kurtarma',
        'Fiziksel hasar onarımı'
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 8,
      title: 'Teknik Destek',
      description: 'Uzaktan teknik destek ve sistem optimizasyonu. 7/24 online yardım.',
      icon: <Wrench size={24} />,
      features: [
        'Uzaktan erişim desteği',
        'Sistem optimizasyonu',
        'Virüs ve malware temizliği',
        'Driver güncelleme',
        'Performans iyileştirme',
        'Windows kurulum ve aktivasyon',
        'Office programları kurulum',
        'Antivirus kurulum ve ayar',
        'Ağ yapılandırması',
        'Email hesap kurulumu',
        'Backup çözümleri',
        'Cloud sync kurulumu',
        'Printer kurulum ve ayar',
        'Yazılım güncelleme',
        'Registry temizliği',
        'Disk defragmentasyon',
        'System file check',
        'Hardware diagnostic'
      ],
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50'
    }
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

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
            <Wrench size={24} />
            <span className="text-sm font-semibold tracking-wide uppercase">Hizmetlerimiz</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Uzman <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Teknik Servis</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master Bilgisayar olarak, tüm elektronik cihazlarınız için profesyonel onarım ve bakım hizmetleri sunuyoruz. 
            1 yıl garantili işlerimizle güveninizi kazanıyoruz.
          </p>
        </div>

        {/* Services Grid - Completely Redesigned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group cursor-pointer transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => {
                setActiveService(service.id)
                // Smooth scroll to detailed section - scroll to top with less offset
                setTimeout(() => {
                  const detailSection = document.querySelector('#service-detail')
                  if (detailSection) {
                    // Calculate offset to show more of the service detail (less scroll)
                    const yOffset = -100; // Increased negative offset to show more content above
                    const y = detailSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    
                    window.scrollTo({
                      top: y,
                      behavior: 'smooth'
                    });
                  }
                }, 100)
              }}
            >
              <div className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 h-full ${
                activeService === service.id 
                  ? 'shadow-2xl ring-4 ring-blue-500/20' 
                  : 'shadow-lg hover:shadow-2xl'
              }`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  activeService === service.id 
                    ? 'from-blue-50 via-white to-purple-50' 
                    : 'from-white via-gray-50 to-gray-100'
                } transition-all duration-500`}></div>
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full blur-2xl transform -translate-x-12 translate-y-12 group-hover:scale-125 transition-transform duration-700 delay-100"></div>
                </div>

                {/* Content */}
                <div className="relative p-6 lg:p-8 h-full flex flex-col min-h-[350px] lg:min-h-[400px]">
                  {/* Header Section */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon with enhanced design */}
                    <div className={`relative p-3 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl ${
                      activeService === service.id 
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white transform scale-110' 
                        : `bg-gradient-to-br ${service.bgColor} ${service.color} group-hover:scale-110`
                    }`}>
                      <div className="relative z-10">
                        {service.icon}
                      </div>
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Status Badge */}
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                      activeService === service.id 
                        ? 'bg-blue-500 text-white shadow-lg' 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                    }`}>
                      {activeService === service.id ? 'SEÇİLİ' : 'TIKLA'}
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="mb-6 flex-grow">
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      activeService === service.id 
                        ? 'text-blue-900' 
                        : 'text-gray-900 group-hover:text-gray-800'
                    }`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Features with new design */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 group/item">
                        <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          activeService === service.id 
                            ? 'bg-blue-500' 
                            : `${service.color.replace('text-', 'bg-')} group-hover/item:scale-125`
                        }`}></div>
                        <span className="text-gray-700 text-sm font-medium group-hover/item:text-gray-900 transition-colors duration-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                    
                    {service.features.length > 5 && (
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                        <span className="text-gray-500 text-sm font-medium">
                          +{service.features.length - 5} hizmet daha...
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="mt-auto">
                    <div className={`w-full py-3 px-6 rounded-xl text-center font-semibold text-base transition-all duration-300 ${
                      activeService === service.id 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform translate-y-0' 
                        : 'bg-gray-100 text-gray-700 group-hover:bg-gray-200 group-hover:-translate-y-1 group-hover:shadow-md'
                    }`}>
                      {activeService === service.id ? 'Detayları Görüntüle ↓' : 'Detaylar için Tıkla →'}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Corner decoration */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full transition-all duration-500 ${
                    activeService === service.id 
                      ? 'bg-gradient-to-br from-blue-400 to-purple-500 scale-100 opacity-100' 
                      : 'bg-gradient-to-br from-gray-300 to-gray-400 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50'
                  }`}></div>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service Info - Completely Redesigned */}
        <div id="service-detail" className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {services.map((service) => (
            activeService === service.id && (
              <div key={service.id} className="relative overflow-hidden">
                {/* Background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-100/20 to-purple-100/30"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-purple-100/30 to-transparent rounded-full blur-2xl"></div>
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
                  {/* Header Section */}
                  <div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white p-6 lg:p-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-3 rounded-2xl shadow-xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/20`}>
                            <div className="text-white text-xl">
                              {service.icon}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-2xl lg:text-3xl font-bold mb-1.5 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                              {service.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-3 text-blue-200">
                              <div className="flex items-center space-x-1.5">
                                <Shield size={16} className="text-green-400" />
                                <span className="font-medium text-sm">1 Yıl Garanti</span>
                              </div>
                              <div className="flex items-center space-x-1.5">
                                <Clock size={16} className="text-yellow-400" />
                                <span className="font-medium text-sm">Hızlı Teslimat</span>
                              </div>
                              <div className="flex items-center space-x-1.5">
                                <Star size={16} className="text-orange-400" />
                                <span className="font-medium text-sm">Premium Hizmet</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-2">
                          <a
                            href="tel:+905061545174"
                            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                          >
                            <Phone size={18} />
                            <span>Hemen Ara</span>
                          </a>
                          <button className="inline-flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 hover:border-white/50 px-5 py-2.5 rounded-xl font-bold transition-all duration-300 backdrop-blur-sm">
                            <span>Fiyat Al</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="relative p-6 lg:p-8">
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Description */}
                      <div className="lg:col-span-2 space-y-5">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center space-x-2">
                            <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${service.color.replace('text-', 'from-')} to-transparent`}></div>
                            <span>Hizmet Açıklaması</span>
                          </h4>
                          <p className="text-gray-700 text-base leading-relaxed">
                            {service.description} Deneyimli teknisyenlerimiz, en güncel teknoloji ve orijinal yedek parçalarla çalışarak cihazınızın mükemmel durumda geri dönmesini sağlar. 15 yıllık deneyimimiz ve müşteri memnuniyeti odaklı yaklaşımımızla, her zaman en iyi hizmeti sunmaya odaklanıyoruz.
                          </p>
                        </div>

                        {/* Service Features - Compact Design */}
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                            <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${service.color.replace('text-', 'from-')} to-transparent`}></div>
                            <span>Hizmet Detayları ({service.features.length} Özellik)</span>
                          </h4>
                          
                          {/* Features in organized sections */}
                          <div className="space-y-4">
                            {/* Primary Features - First 6 in cards */}
                            <div>
                              <h5 className="text-base font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                                <div className={`w-0.5 h-4 rounded-full ${service.color.replace('text-', 'bg-')}`}></div>
                                <span>Temel Hizmetler</span>
                              </h5>
                              <div className="grid sm:grid-cols-2 gap-2">
                                {service.features.slice(0, 6).map((feature, idx) => (
                                  <div 
                                    key={idx} 
                                    className="group flex items-center space-x-2 p-2.5 bg-gradient-to-r from-white to-gray-50 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200"
                                  >
                                    <div className={`p-1 rounded-md ${service.bgColor} group-hover:scale-110 transition-transform duration-200`}>
                                      <CheckCircle size={14} className={service.color} />
                                    </div>
                                    <span className="text-gray-800 text-sm font-medium group-hover:text-gray-900 transition-colors">
                                      {feature}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Additional Features - Remaining in compact list */}
                            {service.features.length > 6 && (
                              <div>
                                <h5 className="text-base font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                                  <div className={`w-0.5 h-4 rounded-full ${service.color.replace('text-', 'bg-')}`}></div>
                                  <span>İlave Özellikler</span>
                                </h5>
                                <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-1.5">
                                  {service.features.slice(6).map((feature, idx) => (
                                    <div 
                                      key={idx + 6} 
                                      className="group flex items-center space-x-1.5 p-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-all duration-200 text-sm"
                                    >
                                      <div className={`w-1.5 h-1.5 rounded-full ${service.color.replace('text-', 'bg-')} group-hover:scale-125 transition-transform duration-200`}></div>
                                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors text-xs font-medium leading-tight">
                                        {feature}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Sidebar */}
                      <div className="space-y-4">
                        {/* Guarantee Card */}
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-4">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green-200/30 to-transparent rounded-full blur-2xl"></div>
                          <div className="relative">
                            <div className="flex items-center space-x-2.5 mb-3">
                              <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                                <Shield size={20} className="text-white" />
                              </div>
                              <h5 className="text-lg font-bold text-green-800">Garanti Güvencesi</h5>
                            </div>
                            <p className="text-green-700 leading-relaxed text-sm">
                              Tüm <strong>{service.title.toLowerCase()}</strong> hizmetlerimiz <strong>1 yıl garantili</strong> olup, kaliteli yedek parça kullanımı garantimiz kapsamındadır.
                            </p>
                            <div className="mt-3 flex items-center space-x-2 text-green-600 text-sm font-medium">
                              <CheckCircle size={16} />
                              <span>Orijinal Parça Garantisi</span>
                            </div>
                          </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3 text-center border border-blue-100">
                            <div className="text-xl font-bold text-blue-600 mb-1">24-48h</div>
                            <div className="text-blue-700 text-xs font-medium">Teslimat</div>
                          </div>
                          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3 text-center border border-purple-100">
                            <div className="text-xl font-bold text-purple-600 mb-1">%98</div>
                            <div className="text-purple-700 text-xs font-medium">Başarı</div>
                          </div>
                        </div>

                        {/* Contact Card */}
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-blue-900 text-white p-4">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
                          <div className="relative">
                            <h5 className="text-base font-bold mb-3">Hemen İletişime Geçin</h5>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2.5">
                                <Phone size={16} className="text-green-400" />
                                <span className="text-blue-200 text-sm">+90 506 154 51 74</span>
                              </div>
                              <div className="flex items-center space-x-2.5">
                                <MapPin size={16} className="text-blue-400" />
                                <span className="text-blue-200 text-xs">Güller Pınarı, Alanya</span>
                              </div>
                              <div className="flex items-center space-x-2.5">
                                <Clock size={16} className="text-yellow-400" />
                                <span className="text-blue-200 text-sm">09:00 - 18:00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
