import React from "react"
import PricingSection from "./pricing-section"
import HeroPage from "./hero"
import { FeatureSection } from "./features-section"

const LandingPage = () => {
  return (
    <div>
      <HeroPage />
      <FeatureSection/>
      <PricingSection />
    </div>
  )
}

export default LandingPage
