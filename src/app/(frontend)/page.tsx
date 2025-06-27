import React from 'react'
import AboutUsPage from '@/components/AboutUsPage'
import ContactPage from '@/components/ContactPage'
import WhatWeDoPage from '@/components/WhatWeDoPage'
import WhoWeArePage from '@/components/WhoWeArePage'

const HomePage: React.FC = () => (
  <div className="flex flex-col">
    <WhoWeArePage />
    <AboutUsPage />
    <WhatWeDoPage />
    <ContactPage />
  </div>
)

export default HomePage
