import { Header } from '@/components/Header'
import Hero from '@/components/pages/landing/Hero'
import DashboardPreview from '@/components/pages/landing/DashboardPreview'
import CoreFeatures from '@/components/pages/landing/CoreFeatures'
import AIFeatures from '@/components/pages/landing/AIFeatures'
import WhyChooseUs from '@/components/pages/landing/WhyChooseUs'
import CTA from '@/components/pages/landing/CTA'
import AICapabilities from '@/components/pages/landing/AICapabilities'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <DashboardPreview />
      <CoreFeatures />
      <AICapabilities />
      <AIFeatures />
      <WhyChooseUs />
      <CTA />
    </div>
  )
}

