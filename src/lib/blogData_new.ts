// Blog yazıları için veri
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Laptop Kasası Neden Bu Kadar Sıcak? Çözümler ve İpuçları',
    excerpt: 'Laptopunuz aşırı ısınıyor mu? Performans düşüklüğü ve güvenlik riski oluşturan ısınma probleminin nedenlerini ve çözümlerini öğrenin.',
    content: `Laptop aşırı ısınması, günümüzde en yaygın teknik sorunlardan biridir. Bu durum sadece performans düşüklüğüne değil, aynı zamanda donanım hasarlarına da yol açabilir.

**Aşırı Isınmanın Ana Nedenleri:**
• **Fan Tıkanması:** Toz ve kir birikimi fanların verimini düşürür
• **Termal Macun Kuruması:** CPU ile soğutucu arasındaki ısı transferi azalır  
• **Havalandırma Deliklerinin Tıkanması:** Sıcak hava dışarı atılamaz
• **Eski Donanım:** Zamanla termal özellikler bozulur
• **Yoğun İş Yükü:** Gaming ve video editing gibi ağır uygulamalar

**Profesyonel Çözümlerimiz:**
Master Bilgisayar olarak, laptop ısınma problemlerini köklü şekilde çözüyoruz:
- Kapsamlı iç temizlik ve toz alma
- Termal macun yenileme (Arctic Silver kullanımı)
- Fan bakımı ve gerektiğinde değişim
- Soğutma sistemi optimizasyonu
- Performans testleri ve garanti

**Önleyici Bakım Önerileri:**
• Düzenli temizlik (6 ayda bir)
• Sert yüzeyler üzerinde kullanım
• Havalandırma deliklerini kapatmayın
• Laptop soğutucu pad kullanımı
• Ağır programları gerektiğinde kullanın

Laptopunuzun ömrünü uzatmak ve optimum performans için bizimle iletişime geçin!`,
    author: 'Ahmet Demir - Laptop Uzmanı',
    date: '2025-08-25',
    category: 'Donanım',
    readTime: '8 dk',
    image: '🔥',
    tags: ['Laptop Tamiri', 'Isınma', 'Termal Macun', 'Fan Temizlik', 'Bakım']
  },
  {
    id: '2', 
    title: 'MacBook Bakımı: Performans ve Ömür İçin Kritik İpuçları',
    excerpt: 'MacBook\'unuzu yıllarca sorunsuz kullanmak istiyorsanız bu rehber tam size göre. Apple uzmanlarından profesyonel bakım sırları.',
    content: `MacBook bakımı, Windows PC\'lerden farklı özel yaklaşımlar gerektirir. Apple\'ın hassas tasarımı ve özel bileşenleri, uzman bilgi gerektirir.

**MacBook\'a Özel Bakım Gereksinimleri:**
• **macOS Optimizasyonu:** Düzenli sistem temizliği ve güncellemeleri
• **SSD Sağlığı:** Trim komutu ve disk alanı yönetimi
• **Termal Yönetim:** Özel soğutma sistemi kontrolü
• **Pil Kalibrasyonu:** Pil ömrünü maksimize etme teknikleri
• **Port Temizliği:** USB-C ve Thunderbolt portların bakımı

**Profesyonel MacBook Servislerimiz:**
Master Bilgisayar Apple Uzman Servisimizde:
- **Logic Board Onarımı:** Mikro lehimleme ve komponent değişimi
- **Ekran Tamiri:** Retina Display profesyonel değişimi
- **Klavye Değişimi:** Magic Keyboard butterfly ve scissor tamiri
- **Pil Yenileme:** Orijinal Apple pil ile değişim
- **Liquid Damage Recovery:** Sıvı teması sonrası kurtarma
- **Data Recovery:** SSD\'den veri kurtarma hizmeti

**Performans Artırma İpuçları:**
• Activity Monitor ile kaynak tüketimini izleyin
• Başlangıç uygulamalarını optimize edin
- Disk Utility ile First Aid çalıştırın
• Cache dosyalarını düzenli temizleyin
• NVRAM/PRAM reset işlemleri

**Donanım Kontrolü:**
• Sıcaklık sensörleri kontrolü (iStat Menus)
• Fan hızı ve RPM takibi
• Pil döngü sayısı kontrolü (500+ ise değişim)
• SSD sağlık durumu analizi

MacBook\'unuzun Apple kalitesinde performans göstermesi için uzman servisimize başvurun!`,
    author: 'Mehmet Yılmaz - Apple Uzmanı',
    date: '2025-08-20',
    category: 'Bakım',
    readTime: '10 dk',
    image: '🍎',
    tags: ['MacBook', 'Apple Servis', 'Logic Board', 'Retina Display', 'macOS']
  },
  {
    id: '3',
    title: 'Gaming Konsol Tamiri: PS5, Xbox ve Switch Sorunları',
    excerpt: 'Gaming konsolunuz arızalandı mı? HDMI probleminden Joy-Con drift\'e kadar tüm konsol sorunlarına profesyonel çözümler.',
    content: `Gaming konsolları, yoğun kullanım ve ısınma nedeniyle çeşitli arızalar yaşayabilir. Her konsolun kendine özgü yaygın problemleri vardır.

**PlayStation 5 (PS5) Yaygın Sorunlar:**
• **HDMI Port Arızası:** Görüntü gelmeme veya çizgili ekran
• **APU Isınması:** Blue Light of Death (BLOD)
• **Fan Gürültüsü:** Aşırı fan çalışması ve ses
• **SSD Sorunları:** Yavaş yükleme ve sistem crashed
• **DualSense Controller:** Analog stick drift problemi

**Xbox Series X/S Problemleri:**
• **E105 Hatası:** Sistem güncellenme sorunu
• **Aşırı Isınma:** Otomatik kapanma
• **Disk Sürücü:** Game disc okumama
• **Controller Bağlantı:** Wireless bağlantı kopmaları
• **Güç Kaynağı:** Ani kapanmalar

**Nintendo Switch Arızaları:**
• **Joy-Con Drift:** En yaygın analog stick sorunu
• **Ekran Problemleri:** Dokunmatik tepkisizlik
• **Dock Station:** TV modunda görüntü gelmeme
• **Pil Şişmesi:** Güvenlik riski oluşturan durum
• **Şarj Portu:** USB-C port hasarları

**Profesyonel Tamir Hizmetlerimiz:**
🔧 **Mikro Lehimleme İşlemleri:**
- HDMI port değişimi (PS5/Xbox)
- APU/GPU reballing işlemleri
- Güç IC değişimleri

🎮 **Controller Tamiri:**
- Joy-Con analog stick değişimi
- DualSense haptic feedback tamiri
- Xbox controller button replacement

🖥️ **Display ve Görüntü:**
- Switch LCD/OLED ekran değişimi
- HDMI sinyal onarımı
- GPU termal paste yenileme

**Garantili İş Kalitesi:**
• 6 ay servis garantisi
• Orijinal yedek parça kullanımı
• Ücretsiz tanı ve analiz
• Hızlı teslimat (2-5 iş günü)
• Data kaybı olmadan onarım

Gaming keyfini bozan arızaları uzman ekibimizle çözün!`,
    author: 'Can Özkan - Gaming Uzmanı',
    date: '2025-08-18',
    category: 'Gaming',
    readTime: '12 dk',
    image: '🎮',
    tags: ['PlayStation', 'Xbox', 'Nintendo Switch', 'Joy-Con', 'HDMI Tamiri']
  },
  {
    id: '4',
    title: 'İkinci El Teknoloji Alım Rehberi: Güvenli Satın Alma İpuçları',
    excerpt: 'İkinci el laptop, telefon ve teknoloji ürünleri alırken dolandırılmamak için bilmeniz gereken tüm detaylar ve kontrol listesi.',
    content: `İkinci el teknoloji ürünleri, bütçe dostu alternatif sunar ancak dikkatli olunmazsa büyük zararlara yol açabilir. Güvenli alışveriş için rehberimizi takip edin.

**İkinci El Laptop Alırken Kontrol Edilmesi Gerekenler:**

🔍 **Donanım Kontrolleri:**
• **Ekran Testi:** Dead pixel, çizik ve renk bozukluğu kontrolü
• **Klavye ve Touchpad:** Tüm tuşların çalışıp çalışmadığı
• **Portlar:** USB, HDMI, jack portlarının test edilmesi
• **Webcam ve Mikrofon:** Video konferans öncesi mutlak kontrol
• **Speakers:** Ses kalitesi ve çıkış seviyesi

⚙️ **Sistem Performans Testleri:**
• **CPU Stress Test:** Prime95 ile işlemci stabilitesi
• **RAM Testi:** MemTest86 ile bellek kontrolleri
• **SSD/HDD Sağlığı:** CrystalDiskInfo ile disk analizi
• **GPU Performansı:** FurMark ile ekran kartı testi
• **Termal Kontrol:** Core Temp ile sıcaklık ölçümü

📱 **İkinci El Telefon Kontrol Listesi:**
• **IMEI Kontrolü:** Çalıntı/kayıp raporu sorgusu
• **Pil Sağlığı:** Battery Health yüzde kontrolü (%80+ ideal)
• **Ekran ve Dokunmatik:** Tam yüzey duyarlılık testi
• **Kamera Kalitesi:** Ön/arka kamera zoom ve focus testi
• **Şarj Portu:** Hızlı şarj özelliği ve bağlantı kontrolü
• **Sim Kart:** Operatör kilidi kontrolü

**🚨 Kaçınılması Gereken Durumlar:**
• Kutu, şarj cihazı eksikliği
• Onarım geçmişi gizleme
• Anormal ucuz fiyatlar
• Test imkanı vermeyen satıcılar
• Garanti belgesi bulunmaması
• Su teması işaretleri

**Master Bilgisayar Ekspertiz Hizmeti:**
✅ **Profesyonel Check-up:**
- 25 noktalık donanım kontrolü
- Detaylı performans raporu
- Gizli kusur tespiti
- Piyasa değer analizi
- Yazılı ekspertiz raporu

🛡️ **Güvenli Alışveriş Garantisi:**
- Alım öncesi ücretsiz kontrol
- 15 gün iade garantisi
- Satın alma sonrası destek
- Kurulum ve optimizasyon
- 6 ay teknik destek

**Değer Kaybı Hesaplama:**
• 1 yaş: %20-30 değer kaybı
• 2 yaş: %40-50 değer kaybı  
• 3+ yaş: %60+ değer kaybı
• Hasar durumuna göre ek indirim
• Marka ve model popülerliği etkisi

İkinci el alım öncesi mutlaka uzman kontrolünden geçirin. Sonradan çıkacak masraflar, tasarruf ettiğinizden fazla olabilir!`,
    author: 'Ayşe Kaya - İkinci El Uzmanı',
    date: '2025-08-15',
    category: 'Rehber',
    readTime: '15 dk',
    image: '💰',
    tags: ['İkinci El', 'Ekspertiz', 'Kontrol Listesi', 'Güvenli Alışveriş', 'Laptop']
  },
  {
    id: '5',
    title: 'Anakart Arızası Tanı ve Çözümleri: Detaylı Teknik Rehber',
    excerpt: 'Bilgisayarınız açılmıyor mu? Anakart arızalarının belirtilerini, tanı yöntemlerini ve onarım süreçlerini uzmanından öğrenin.',
    content: `Anakart arızaları, bilgisayar problemlerinin en karmaşık kategorisidir. Erken tanı ve doğru müdahale, büyük masrafları engelleyebilir.

**Anakart Arızası Belirtileri:**

🚨 **Kritik Uyarı İşaretleri:**
• **Hiç Açılmama:** Power tuşuna basınca hiçbir tepki yok
• **POST Hatası:** Bip sesleri veya LED kodları
• **Rastgele Yeniden Başlatmalar:** Mavi ekran (BSOD) hataları
• **USB Portları Çalışmıyor:** Hiçbir USB cihaz tanınmıyor
• **Ses Gelmemesi:** Onboard ses kartı arızası
• **Ethernet Bağlantı Sorunu:** Network adaptörü çalışmıyor

⚡ **Güç Kaynaklı Sorunlar:**
• **Kısa Devre İşaretleri:** Yanık kokusu veya duman
• **Capacitor Şişmesi:** Elektrolit kondansatör hasarı
• **VRM Arızası:** Işlemci güç regülatörü bozukluğu
• **CMOS Pil Bitmesi:** BIOS ayarları sıfırlanması

**Tanı Yöntemlerimiz:**

🔬 **Profesyonel Test Ekipmanları:**
• **Multimetre Ölçümleri:** Voltaj ve direnç kontrolü
• **POST Card:** Hata kodlarının detaylı analizi
• **Oscilloscope:** Sinyal kalitesi ölçümü
• **Thermal Camera:** Isı haritası analizi
• **Component Tester:** Transistör ve diyot kontrolü

🛠️ **Aşamalı Tanı Süreci:**
1. **Visual Inspection:** Gözle görülür hasarlar
2. **Power-On Test:** Güç devresi kontrolü
3. **Component Level:** Her bileşen ayrı test
4. **Signal Tracing:** Veri yolları kontrolü
5. **Stress Testing:** Yük altında stabilite

**Onarım Teknolojilerimiz:**

⚙️ **Mikro Lehimleme İşlemleri:**
• **BGA Reballing:** GPU/CPU yeniden topaklanması
• **Component Replacement:** Arızalı bileşen değişimi
• **Trace Repair:** Kopmuş devre yolu onarımı
• **Via Repair:** Katmanlar arası bağlantı tamiri

🧪 **Özel Onarım Hizmetleri:**
• **BIOS Recovery:** Bozuk firmware kurtarma
• **Capacitor Replacement:** Kondansatör yenileme
• **Power Management:** Güç yönetim IC tamiri
• **Socket Repair:** Işlemci soket onarımı

**Önleyici Koruma Önerileri:**

🛡️ **Elektriksel Koruma:**
• **UPS Kullanımı:** Ani elektrik kesintilerine karşı
• **Surge Protector:** Voltaj dalgalanma koruması  
• **Düzenli Temizlik:** Toz ve nem kontrolü
• **Kaliteli PSU:** Güvenilir güç kaynağı seçimi

📊 **Anakart Arıza İstatistikleri:**
• %35 - Güç kaynaklı problemler
• %25 - Kapasitör arızaları
• %20 - BGA çip arızaları
• %15 - BIOS corruption
• %5 - Fiziksel hasarlar

**Master Bilgisayar Anakart Servisi:**
✅ **Garantili Onarım:** 6 ay işçilik garantisi
✅ **Hızlı Tanı:** 24 saat içinde rapor
✅ **Uygun Fiyat:** Rekabetçi servis ücretleri
✅ **Data Güvenliği:** Veri kaybı olmadan onarım
✅ **Uzman Teknisyen:** 15+ yıl deneyim

Anakart arızanız için acil müdahale gerekiyorsa, hemen bizimle iletişime geçin!`,
    author: 'Emre Şen - Elektronik Mühendisi',
    date: '2025-08-10',
    category: 'Donanım',
    readTime: '18 dk',
    image: '⚡',
    tags: ['Anakart', 'Mikro Lehim', 'POST Hata', 'BGA Reballing', 'BIOS']
  },
  {
    id: '6',
    title: 'SSD vs HDD: 2025\'te Hangisini Seçmeli? Kapsamlı Karşılaştırma',
    excerpt: 'Depolama çözümü seçerken SSD mi HDD mi almalısınız? Performans, fiyat, dayanıklılık karşılaştırması ve uzman önerileri.',
    content: `2025 yılında depolama teknolojileri hızla gelişiyor. Doğru seçimi yapmak için SSD ve HDD\'nin avantaj/dezavantajlarını detayıyla inceleyelim.

**SSD (Solid State Drive) Avantajları:**
• **Hız:** 10x daha hızlı okuma/yazma
• **Sessizlik:** Hareketli parça yok
• **Dayanıklılık:** Darbelere dayanıklı
• **Enerji Tasarrufu:** %50 daha az güç tüketimi
• **Kompakt Boyut:** Laptop\'lar için ideal

**HDD (Hard Disk Drive) Avantajları:**  
• **Kapasite/Fiyat:** TB başına daha uygun
• **Büyük Kapasiteler:** 20TB\'ye kadar
• **Veri Kurtarma:** Daha kolay recovery
• **Uzun Ömür:** 5-10 yıl kullanım
• **Kanıtlanmış Teknoloji:** 50+ yıl deneyim`,
    author: 'Teknoloji Editörü',
    date: '2025-08-08',
    category: 'Donanım',
    readTime: '12 dk',
    image: '💾',
    tags: ['SSD', 'HDD', 'Depolama', 'Performans', '2025']
  }
];

export const getCategoryColor = (category: string): string => {
  const colors: { [key: string]: string } = {
    'Donanım': 'bg-blue-100 text-blue-800',
    'Bakım': 'bg-green-100 text-green-800',
    'Gaming': 'bg-purple-100 text-purple-800',
    'Rehber': 'bg-yellow-100 text-yellow-800'
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  
  const monthNames = [
    '', 'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ];
  
  return `${day} ${monthNames[month]} ${year}`;
};
