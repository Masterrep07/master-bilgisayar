'use client'

import { useState, useRef, useEffect } from 'react'
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight, BookOpen, Clock, Tag } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  readTime: string
  image: string
  tags: string[]
}

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const slidesPerView = 3
  const slideWidth = 100 / slidesPerView

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Laptop Performansını Artırmanın 10 Etkili Yolu',
      excerpt: 'Laptopunuzun performansını artırmak için yapabileceğiniz basit ama etkili yöntemler. SSD yükseltmesinden RAM artırımına kadar...',
      content: 'Detaylı makale içeriği burada yer alacak...',
      author: 'Ahmet Çelik',
      date: '2024-08-20',
      category: 'Performans',
      readTime: '5 dk',
      image: '💻',
      tags: ['Laptop', 'Performans', 'SSD', 'RAM']
    },
    {
      id: 2,
      title: 'MacBook Bakımı: Uzun Ömür için Yapılması Gerekenler',
      excerpt: 'MacBook\'unuzun ömrünü uzatmak ve performansını korumak için düzenli bakım önerileri ve profesyonel ipuçları.',
      content: 'Detaylı makale içeriği burada yer alacak...',
      author: 'Mehmet Yılmaz',
      date: '2024-08-18',
      category: 'Bakım',
      readTime: '7 dk',
      image: '🍎',
      tags: ['MacBook', 'Bakım', 'Apple', 'Temizlik']
    },
    {
      id: 3,
      title: 'Gaming Konsol Sorunu mu? Çözüm Burada!',
      excerpt: 'PS5, PS4, Xbox konsollarınızda karşılaşabileceğiniz yaygın problemler ve çözüm yöntemleri. HDMI, fan ve güç sorunları...',
      content: 'Detaylı makale içeriği burada yer alacak...',
      author: 'Can Özkan',
      date: '2024-08-15',
      category: 'Gaming',
      readTime: '6 dk',
      image: '🎮',
      tags: ['PlayStation', 'Xbox', 'Gaming', 'Tamir']
    },
    {
      id: 4,
      title: 'İkinci El Teknoloji Alırken Nelere Dikkat Etmeli?',
      excerpt: 'İkinci el laptop, telefon ve diğer teknoloji ürünleri alırken dikkat etmeniz gereken önemli noktalar ve tüyolar.',
      content: 'Detaylı makale içeriği burada yer alacak...',
      author: 'Ayşe Demir',
      date: '2024-08-12',
      category: 'Alım Rehberi',
      readTime: '4 dk',
      image: '🛒',
      tags: ['İkinci El', 'Alım', 'İpuçları', 'Teknoloji']
    },
    {
      id: 5,
      title: 'Anakart Arızası Belirtileri ve Çözümleri',
      excerpt: 'Bilgisayar anakart arızalarının erken belirtilerini fark edin ve büyük hasarları önleyin. Uzman tamirat ipuçları.',
      content: 'Detaylı makale içeriği burada yer alacak...',
      author: 'Emre Kaya',
      date: '2024-08-10',
      category: 'Teknik',
      readTime: '8 dk',
      image: '⚡',
      tags: ['Anakart', 'Arıza', 'Tamir', 'Teknik']
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

  useEffect(() => {
    // Only run on client side to avoid hydration issues
    if (typeof window !== 'undefined') {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => {
          const maxSlide = Math.max(0, blogPosts.length - slidesPerView)
          return prev >= maxSlide ? 0 : prev + 1
        })
      }, 4000)

      return () => clearInterval(timer)
    }
  }, [blogPosts.length])

  const nextSlide = () => {
    const maxSlide = Math.max(0, blogPosts.length - slidesPerView)
    setCurrentSlide((prev) => prev >= maxSlide ? 0 : prev + 1)
  }

  const prevSlide = () => {
    const maxSlide = Math.max(0, blogPosts.length - slidesPerView)
    setCurrentSlide((prev) => prev <= 0 ? maxSlide : prev - 1)
  }

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
      'Performans': 'bg-blue-100 text-blue-800',
      'Bakım': 'bg-green-100 text-green-800',
      'Gaming': 'bg-purple-100 text-purple-800',
      'Alım Rehberi': 'bg-yellow-100 text-yellow-800',
      'Teknik': 'bg-red-100 text-red-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <section id="blog" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center space-x-2 text-orange-600 mb-4">
            <BookOpen size={24} />
            <span className="text-sm font-semibold tracking-wide uppercase">Blog</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Teknoloji <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Teknoloji dünyasından son haberler, ipuçları ve profesyonel tamir rehberleri. 
            Uzmanlarımızdan öğrenin ve cihazlarınızı daha verimli kullanın.
          </p>
        </div>

        {/* Blog Slider */}
        <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}
            >
              {blogPosts.map((post, index) => (
                <div key={post.id} className={`flex-shrink-0 px-4`} style={{ width: `${slideWidth}%` }}>
                  <article className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                    {/* Blog Image/Icon */}
                    <div className="relative">
                      <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-2xl flex items-center justify-center">
                        <div className="text-6xl">{post.image}</div>
                      </div>
                      
                      {/* Category Badge */}
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors cursor-pointer">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-3">
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
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <User size={14} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{formatDate(post.date)}</span>
                          </div>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group">
                        <span>Devamını Oku</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg border hover:bg-gray-50 transition-all duration-200 z-10"
            aria-label="Previous blog posts"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg border hover:bg-gray-50 transition-all duration-200 z-10"
            aria-label="Next blog posts"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.max(1, blogPosts.length - slidesPerView + 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-orange-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Posts CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Daha Fazla İçerik
            </h3>
            <p className="text-gray-600 mb-6">
              Teknoloji dünyasından daha fazla haber, rehber ve ipucu için blog sayfamızı ziyaret edin. 
              Sürekli güncellenen içeriklerimizle bilginizi artırın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <BookOpen size={18} />
                <span>Tüm Yazıları Görüntüle</span>
              </button>
              <button className="px-6 py-3 border-2 border-orange-500 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200">
                Blog\'a Abone Ol
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
