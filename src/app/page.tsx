import Hero from '@/components/Hero'
import Services from '@/components/Services'
import SecondHandSales from '@/components/SecondHandSales'
import CustomerReviews from '@/components/CustomerReviews'
import FAQ from '@/components/FAQ'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <SecondHandSales />
        <CustomerReviews />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
