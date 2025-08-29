import Link from 'next/link'
import { Calendar, User, Clock, Tag, ArrowLeft, BookOpen } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Master Bilgisayar | Teknoloji İpuçları ve Rehberler',
  description: 'Master Bilgisayar blog sayfası. Laptop tamiri, MacBook bakımı, gaming konsol ipuçları ve teknoloji rehberleri. Uzman teknisyenlerden öneriler.',
  keywords: ['teknoloji blog', 'laptop tamiri rehberi', 'MacBook bakımı', 'bilgisayar ipuçları', 'Alanya teknoloji'],
}

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  readTime: string
  image: string
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Laptop Performansını Artırmanın 10 Etkili Yolu',
    excerpt: 'Laptopunuzun performansını artırmak için yapabileceğiniz basit ama etkili yöntemler. SSD yükseltmesinden RAM artırımına kadar...',
    author: 'Ahmet Çelik',
    date: '2024-08-20',
    category: 'Performans',
    readTime: '5 dk',
    image: '💻',
    tags: ['Laptop', 'Performans', 'SSD', 'RAM']
  },
  {
    id: '2',
    title: 'MacBook Bakımı: Uzun Ömür için Yapılması Gerekenler',
    excerpt: 'MacBook\'unuzun ömrünü uzatmak ve performansını korumak için düzenli bakım önerileri ve profesyonel ipuçları.',
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
    excerpt: 'PS5, PS4, Xbox konsollarınızda karşılaşabileceğiniz yaygın problemler ve çözüm yöntemleri. HDMI, fan ve güç sorunları...',
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
    author: 'Ayşe Demir',
    date: '2024-08-12',
    category: 'Alım Rehberi',
    readTime: '4 dk',
    image: '🛒',
    tags: ['İkinci El', 'Alım', 'İpuçları', 'Teknoloji']
  },
  {
    id: '5',
    title: 'Anakart Arızası Belirtileri ve Çözümleri',
    excerpt: 'Bilgisayar anakart arızalarının erken belirtilerini fark edin ve büyük hasarları önleyin. Uzman tamirat ipuçları.',
    author: 'Emre Kaya',
    date: '2024-08-10',
    category: 'Teknik',
    readTime: '8 dk',
    image: '⚡',
    tags: ['Anakart', 'Arıza', 'Tamir', 'Teknik']
  }
]

const categories = [
  { name: 'Tümü', count: blogPosts.length },
  { name: 'Performans', count: blogPosts.filter(p => p.category === 'Performans').length },
  { name: 'Bakım', count: blogPosts.filter(p => p.category === 'Bakım').length },
  { name: 'Gaming', count: blogPosts.filter(p => p.category === 'Gaming').length },
  { name: 'Alım Rehberi', count: blogPosts.filter(p => p.category === 'Alım Rehberi').length },
  { name: 'Teknik', count: blogPosts.filter(p => p.category === 'Teknik').length },
]

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('tr-TR', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    'Performans': 'bg-blue-100 text-blue-800 border-blue-200',
    'Bakım': 'bg-green-100 text-green-800 border-green-200',
    'Gaming': 'bg-purple-100 text-purple-800 border-purple-200',
    'Alım Rehberi': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Teknik': 'bg-red-100 text-red-800 border-red-200'
  }
  return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200'
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 text-blue-200 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={20} />
              <span>Ana Sayfaya Dön</span>
            </Link>
            
            <div className="flex items-center justify-center space-x-2 text-blue-300 mb-4">
              <BookOpen size={32} />
              <span className="text-sm font-semibold tracking-wide uppercase">Master Blog</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Teknoloji <span className="text-yellow-400">Blog</span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Teknoloji dünyasından son haberler, profesyonel tamir ipuçları ve uzman rehberler. 
              Master Bilgisayar ekibinden öğrenin.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className="px-6 py-3 bg-white border border-gray-200 rounded-full hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
            >
              <span className="font-medium text-gray-700 group-hover:text-blue-600">
                {category.name} ({category.count})
              </span>
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              {/* Post Image/Icon */}
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-6xl">{post.image}</div>
                </div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(post.category)}`}>
                  {post.category}
                </div>

                {/* Read Time */}
                <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                  <Clock size={12} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="p-6">
                {/* Title */}
                <Link 
                  href={`/blog/${post.id}`}
                  className="block"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      <Tag size={10} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Daha Fazla Yazı Yükle
          </button>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mt-16 border border-blue-100">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Blog Güncellemelerini Kaçırmayın
            </h3>
            <p className="text-gray-600 mb-6">
              Yeni yazılarımızdan haberdar olmak için e-posta adresinizi bırakın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
