import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, Eye, ThumbsUp, MessageCircle } from 'lucide-react'
import type { Metadata } from 'next'
import { blogPosts, getCategoryColor, formatDate } from '@/lib/blogData'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { id } = await params
  const post = blogPosts.find(post => post.id === id)
  
  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı - Master Bilgisayar',
    }
  }

  return {
    title: `${post.title} - Master Bilgisayar Blog`,
    description: post.excerpt,
    keywords: [...post.tags, 'Master Bilgisayar', 'teknoloji', 'Alanya'],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params
  const post = blogPosts.find(post => post.id === id)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3)

  const processContent = (content: string) => {
    // Convert markdown-style content to HTML-like JSX
    const lines = content.split('\n')
    const processedLines = []
    let inCodeBlock = false
    let codeBlockContent: string[] = []
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          // End code block
          processedLines.push(
            <pre key={`code-${i}`} className="bg-gray-100 p-4 rounded-lg text-sm font-mono overflow-x-auto mb-4 mt-4">
              <code>{codeBlockContent.join('\n')}</code>
            </pre>
          )
          codeBlockContent = []
          inCodeBlock = false
        } else {
          // Start code block
          inCodeBlock = true
        }
        continue
      }
      
      if (inCodeBlock) {
        codeBlockContent.push(lines[i]) // Keep original line with indentation
        continue
      }
      
      if (line.startsWith('# ')) {
        processedLines.push(<h1 key={i} className="text-3xl font-bold text-gray-900 mb-6 mt-8">{line.substring(2)}</h1>)
      } else if (line.startsWith('## ')) {
        processedLines.push(<h2 key={i} className="text-2xl font-bold text-gray-800 mb-4 mt-8">{line.substring(3)}</h2>)
      } else if (line.startsWith('### ')) {
        processedLines.push(<h3 key={i} className="text-xl font-bold text-gray-700 mb-3 mt-6">{line.substring(4)}</h3>)
      } else if (line.startsWith('#### ')) {
        processedLines.push(<h4 key={i} className="text-lg font-semibold text-gray-700 mb-2 mt-4">{line.substring(5)}</h4>)
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        processedLines.push(<li key={i} className="ml-4 text-gray-700 mb-1 list-disc">{line.substring(2)}</li>)
      } else if (line.includes('**') && line.includes('**')) {
        const parts = line.split('**')
        const processed = parts.map((part, index) => 
          index % 2 === 1 ? <strong key={index} className="font-bold">{part}</strong> : part
        )
        processedLines.push(<p key={i} className="text-gray-700 leading-relaxed mb-3">{processed}</p>)
      } else if (line.length > 0) {
        processedLines.push(<p key={i} className="text-gray-700 leading-relaxed mb-3">{line}</p>)
      } else {
        processedLines.push(<br key={i} />)
      }
    }
    
    // Handle unclosed code block
    if (inCodeBlock && codeBlockContent.length > 0) {
      processedLines.push(
        <pre key="final-code" className="bg-gray-100 p-4 rounded-lg text-sm font-mono overflow-x-auto mb-4 mt-4">
          <code>{codeBlockContent.join('\n')}</code>
        </pre>
      )
    }
    
    return processedLines
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog"
              className="inline-flex items-center space-x-2 text-blue-200 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={20} />
              <span>Blog&apos;a Geri Dön</span>
            </Link>
            
            {/* Category Badge */}
            <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${getCategoryColor(post.category)}`}>
              {post.category}
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-blue-100 mb-6">
              <div className="flex items-center space-x-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{post.readTime} okuma</span>
              </div>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm"
                >
                  <Tag size={12} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Article Header */}
                <div className="relative">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <div className="text-8xl">{post.image}</div>
                  </div>
                  
                  {/* Engagement Stats */}
                  <div className="absolute bottom-4 right-4 flex space-x-4">
                    <div className="bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                      <Eye size={14} />
                      <span>1.2K</span>
                    </div>
                    <div className="bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                      <ThumbsUp size={14} />
                      <span>89</span>
                    </div>
                    <div className="bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                      <MessageCircle size={14} />
                      <span>23</span>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-8">
                  {/* Excerpt */}
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
                    <p className="text-blue-900 font-medium leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="prose max-w-none">
                    <div className="space-y-4">
                      {processContent(post.content.substring(0, 2000))}
                      {post.content.length > 2000 && (
                        <div className="text-center py-8">
                          <p className="text-gray-600 mb-4">Bu yazının tamamını okumak için...</p>
                          <Link
                            href="tel:+905061545174"
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                          >
                            <span>Master Bilgisayar&apos;ı Arayın</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className="border-t border-gray-200 pt-8 mt-8">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Bu yazıyı paylaşın:</h3>
                      <div className="flex space-x-3">
                        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          <Share2 size={16} />
                          <span>Paylaş</span>
                        </button>
                        <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                          <span>WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Author Bio */}
                  <div className="bg-gray-50 rounded-xl p-6 mt-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{post.author}</h4>
                        <p className="text-gray-600 text-sm">
                          Master Bilgisayar teknik ekibinden uzman teknisyen. 
                          {post.category} konularında deneyimli.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Contact Card */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-lg mb-4">Profesyonel Yardım</h3>
                  <p className="text-blue-100 mb-4 text-sm">
                    Bu konularda uzman desteğe mi ihtiyacınız var?
                  </p>
                  <Link
                    href="tel:+905061545174"
                    className="block bg-white text-blue-600 px-4 py-3 rounded-lg font-semibold text-center hover:bg-blue-50 transition-colors"
                  >
                    Hemen Arayın
                  </Link>
                  <div className="text-xs text-blue-200 mt-3 text-center">
                    +90 506 154 5174
                  </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                      <h3 className="font-bold text-gray-900">İlgili Yazılar</h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          href={`/blog/${relatedPost.id}`}
                          className="block p-4 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex space-x-3">
                            <div className="text-2xl">{relatedPost.image}</div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
                                {relatedPost.title}
                              </h4>
                              <div className="flex items-center space-x-2 text-xs text-gray-500">
                                <span>{relatedPost.readTime}</span>
                                <span>•</span>
                                <span>{relatedPost.category}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Newsletter */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Blog Güncellemeleri</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Yeni yazılarımızdan haberdar olun.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="E-posta adresiniz"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                      Abone Ol
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
