import Link from 'next/link'
import { Calendar, User, Clock, Tag, ArrowLeft, BookOpen } from 'lucide-react'
import type { Metadata } from 'next'
import { blogPosts, getCategoryColor, formatDate } from '@/lib/blogData'

export const metadata: Metadata = {
  title: 'Blog - Master Bilgisayar | Teknoloji İpuçları ve Rehberler',
  description: 'Master Bilgisayar blog sayfası. Laptop tamiri, MacBook bakımı, gaming konsol ipuçları ve teknoloji rehberleri. Uzman teknisyenlerden öneriler.',
  keywords: ['teknoloji blog', 'laptop tamiri rehberi', 'MacBook bakımı', 'bilgisayar ipuçları', 'Alanya teknoloji'],
}

const categories = [
  { name: 'Tümü', count: blogPosts.length },
  { name: 'Donanım', count: blogPosts.filter(p => p.category === 'Donanım').length },
  { name: 'Bakım', count: blogPosts.filter(p => p.category === 'Bakım').length },
  { name: 'Gaming', count: blogPosts.filter(p => p.category === 'Gaming').length },
  { name: 'Rehber', count: blogPosts.filter(p => p.category === 'Rehber').length },
]

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
                      className="inline-flex items-center space-x-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      <Tag size={10} />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors text-sm"
                >
                  <span>Devamını Oku</span>
                  <ArrowLeft size={16} className="transform rotate-180" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Teknik Destek Gerekiyor mu?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Blog yazılarımızda çözüm bulamadıysanız, uzman teknisyenlerimizden destek alabilirsiniz.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              <span>İletişime Geçin</span>
              <ArrowLeft size={16} className="transform rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
