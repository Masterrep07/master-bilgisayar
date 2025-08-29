'use client'

import { useState, useRef, useEffect } from 'react'
import { Star, Quote, User, Calendar, MapPin, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

interface Review {
  id: number
  name: string
  rating: number
  date: string
  review: string
  service: string
  avatar: string
  location: string
}

const CustomerReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Mehmet Özkan',
      rating: 5,
      date: '2024-08-15',
      review: 'Laptop\'umun anakartı arızalandı, başka yerlerde tamir edilmez dediler. Master Bilgisayar\'da Ahmet Bey sayesinde laptopum yenisi gibi oldu. 1 yıl garanti verdiler, çok memnunum. Kesinlikle tavsiye ediyorum.',
      service: 'Anakart Tamiri',
      avatar: 'M',
      location: 'Alanya'
    },
    {
      id: 2,
      name: 'Ayşe Demir',
      rating: 5,
      date: '2024-08-10',
      review: 'MacBook\'umun ekranı kırılmıştı ve çok pahalı tamir ücretleri istiyorlardı. Buradan çok uygun fiyata ve kaliteli bir şekilde yaptırdım. Garanti süresince de herhangi bir problem yaşamadım. Teşekkürler!',
      service: 'MacBook Ekran Tamiri',
      avatar: 'A',
      location: 'Alanya'
    },
    {
      id: 3,
      name: 'Can Yılmaz',
      rating: 5,
      date: '2024-08-05',
      review: 'PlayStation 5\'imin HDMI portu bozulmuştu. Oyun oynayamıyordum. Master Bilgisayar\'da kısa sürede ve uygun fiyata tamir ettiler. Şimdi sorunsuz çalışıyor. Hızlı ve güvenilir servis.',
      service: 'PS5 HDMI Port Tamiri',
      avatar: 'C',
      location: 'Alanya'
    },
    {
      id: 4,
      name: 'Fatma Kaya',
      rating: 5,
      date: '2024-07-28',
      review: 'Eski laptopumu değerlendirmek istemiştim. Internetten araştırdığım fiyatlardan daha iyi bir teklif aldım. İkinci el aldığım yeni laptopum da garantili geldi. Hem satış hem alış için harika bir yer.',
      service: 'İkinci El Alım-Satım',
      avatar: 'F',
      location: 'Alanya'
    },
    {
      id: 5,
      name: 'Emre Arslan',
      rating: 5,
      date: '2024-07-20',
      review: 'Monitörümde renk problemleri vardı ve çizgiler beliriyordu. Başka yerler değişim önerirken, burada tamirini yaptılar. Hem ekonomik hem de garantili. İşlerinde gerçekten uzmanlar.',
      service: 'Monitör LCD Tamiri',
      avatar: 'E',
      location: 'Alanya'
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
        setCurrentSlide((prev) => (prev + 1) % reviews.length)
      }, 5000)

      return () => clearInterval(timer)
    }
  }, [reviews.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('tr-TR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={20}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  return (
    <section id="reviews" ref={sectionRef} className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Minimal Header */}
        <div className={`text-center mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            <span className="text-blue-600">Google</span> Yorumlarımız
          </h2>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <div className="flex">{renderStars(Math.round(averageRating))}</div>
            <span className="font-medium">{averageRating.toFixed(1)}</span>
            <span>•</span>
            <span>{reviews.length} değerlendirme</span>
          </div>
        </div>

        {/* Compact Slider */}
        <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative max-w-3xl mx-auto mb-8">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-3">
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border">
                      {/* Review Text */}
                      <blockquote className="text-lg text-gray-700 leading-relaxed text-center mb-6 italic">
                        "{review.review}"
                      </blockquote>

                      {/* Customer Info */}
                      <div className="flex flex-col sm:flex-row items-center justify-between">
                        <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold">
                            {review.avatar}
                          </div>
                          <div className="text-center sm:text-left">
                            <h4 className="font-semibold text-gray-900">{review.name}</h4>
                            <div className="flex items-center justify-center sm:justify-start space-x-1 text-sm text-gray-500">
                              <MapPin size={12} />
                              <span>{review.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-center sm:text-right">
                          <div className="flex items-center justify-center sm:justify-end mb-2">
                            {renderStars(review.rating)}
                          </div>
                          <div className="text-xs text-gray-500">{formatDate(review.date)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-md border flex items-center justify-center hover:shadow-lg transition-all duration-200"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} className="text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-md border flex items-center justify-center hover:shadow-lg transition-all duration-200"
              aria-label="Next review"
            >
              <ChevronRight size={18} className="text-gray-600" />
            </button>

            {/* Compact Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-200 ${
                    index === currentSlide 
                      ? 'w-8 h-2 bg-blue-600 rounded-full' 
                      : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Simple CTA */}
          <div className="text-center">
            <a
              href="https://www.google.com/maps?hl=tr&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x14dc99f9b0d51d15:0x14c1396d4a752747"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-sm"
            >
              <ExternalLink size={16} />
              <span>Tüm yorumları Google Maps'te gör</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews
