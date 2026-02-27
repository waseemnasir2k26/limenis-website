import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import Services from '@/components/sections/Services'
import WaveDivider from '@/components/ui/WaveDivider'
import WhyLimenis from '@/components/sections/WhyLimenis'
import Insights from '@/components/sections/Insights'
import BookingForm from '@/components/sections/BookingForm'
import Newsletter from '@/components/sections/Newsletter'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <WaveDivider className="bg-navy" />
        <WhyLimenis />
        <WaveDivider className="bg-navy-light" flip />
        <Insights />
        <BookingForm />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
