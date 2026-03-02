import HomeBanner from '@/components/Home/HomeBanner'
import Panorama from '@/components/Home/Panorama'
import AboutSection from '@/components/Home/AboutSection'
import OurStory from '@/components/Home/OurStory'
import React from 'react'

const page = () => {
  return (
    <>
    <HomeBanner/>
     <Panorama />
     <AboutSection />
     <OurStory />
    </>
  )
}

export default page
