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
    excerpt: 'Laptopta aşırı ısınma problemi ve çözüm yöntemleri. Temizlik, fan kontrolü ve termal macun değişimi hakkında detaylı bilgiler.',
    content: 'Laptop aşırı ısınması yaygın bir problemdir. Temel nedenler fan tıkanması, termal macun kuruması ve toz birikmesidir. Master Bilgisayar olarak bu sorunları profesyonelce çözebiliriz. Düzenli temizlik ve bakımla laptopunuzun ömrü uzar. Profesyonel tamir hizmeti için bizimle iletişime geçin.',
    author: 'Ahmet Demir',
    date: '2024-08-25',
    category: 'Donanım',
    readTime: '5 dk',
    image: '🔥',
    tags: ['Laptop', 'Isınma', 'Temizlik', 'Bakım']
  },
  {
    id: '2', 
    title: 'MacBook Bakımı: Performans ve Ömür İçin Önemli İpuçları',
    excerpt: 'MacBook performansını artırmak ve ömrünü uzatmak için yapmanız gerekenler. Temizlik, sistem optimizasyonu ve donanım bakımı.',
    content: 'MacBook bakımı PC lerden farklı yaklaşımlar gerektirir. macOS optimizasyonu, termal yönetim ve özel temizlik teknikleri önemlidir. Apple ürünlerinde uzman olan Master Bilgisayar ekibimiz, MacBook performansının en iyi seviyede kalması için gerekli tüm hizmetleri sunar.',
    author: 'Mehmet Yılmaz',
    date: '2024-08-18',
    category: 'Bakım',
    readTime: '7 dk',
    image: '🍎',
    tags: ['MacBook', 'Bakım', 'Apple', 'Temizlik']
  },
  {
    id: '3',
    title: 'Gaming Konsol Sorunu mu? Çözüm Burada!',
    excerpt: 'PS5, PS4, Xbox konsollarınızda karşılaşabileceğiniz yaygın problemler ve çözüm yöntemleri. HDMI, fan ve güç sorunları.',
    content: 'Gaming konsolları yoğun kullanımla çeşitli sorunlar yaşayabilir. HDMI port arızaları, aşırı ısınma ve fan problemleri en yaygın durumlardır. Master Bilgisayar olarak PS5, PS4, Xbox ve Nintendo Switch tamirlerinde uzmanız. Joy-Con drift, thermal paste değişimi gibi karmaşık işlemleri güvenle gerçekleştiriyoruz.',
    author: 'Can Özkan',
    date: '2024-08-15',
    category: 'Gaming',
    readTime: '6 dk',
    image: '🎮',
    tags: ['PlayStation', 'Xbox', 'Gaming', 'Tamir']
  },
  {
    id: '4',
    title: 'İkinci El Teknoloji Alırken Nelere Dikkat Etmeli?',
    excerpt: 'İkinci el laptop, telefon ve diğer teknoloji ürünleri alırken dikkat etmeniz gereken önemli noktalar ve tüyolar.',
    content: 'İkinci el teknoloji ürünleri alırken dikkat edilmesi gereken pek çok nokta var. Donanım kontrolü, garanti durumu, pil sağlığı ve genel performans testleri önemlidir. Master Bilgisayar olarak ikinci el cihaz alımı öncesi ekspertiz hizmetimizle size yardımcı olabiliriz. Güvenli alışveriş için tavsiyelerimizi takip edin.',
    author: 'Ayşe Kaya',
    date: '2024-08-10',
    category: 'Rehber',
    readTime: '8 dk',
    image: '💰',
    tags: ['İkinci El', 'Alım', 'İpuçları', 'Kontrol']
  },
  {
    id: '5',
    title: 'Anakart Arızası Belirtileri ve Çözümleri',
    excerpt: 'Bilgisayar anakart arızalarının erken belirtileri, tanı yöntemleri ve profesyonel çözüm yaklaşımları.',
    content: 'Anakart arızaları bilgisayarın çalışmasını tamamen engelleyebilir. Güç problemi, boot sorunu, USB portları çalışmama gibi belirtiler anakart arızasını işaret edebilir. Bu durumda profesyonel tanı ve onarım gerekir. Master Bilgisayarda anakart tamiri konusunda uzman teknisyenlerimiz bulunmaktadır. Hızlı tanı ve kaliteli onarım garantisi veriyoruz.',
    author: 'Emre Şen',
    date: '2024-08-05',
    category: 'Donanım',
    readTime: '10 dk',
    image: '⚡',
    tags: ['Anakart', 'Arıza', 'Tanı', 'Onarım']
  }
];


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
