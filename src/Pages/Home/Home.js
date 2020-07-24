import React from 'react'
import HomePage from '../../components/HomePage/HomePage'
import HomePageSection from '../../components/HomePageSectionOne/HomePageSection'

function Home() {
  return (
    <section>
      <div data-test="home-page">
        <HomePage />
        <HomePageSection />
      </div>
    </section>

  )
}

export default Home