import React from 'react'
import './HomePageSection.css'
import Services from '../ServiceList/Services'

function HomePageSection() {
  return (
    <section className="view-height">
      <div className="container-title">
        <h2>What We Do</h2>
      </div>
      <Services data-test='component-search-box' />
    </section>
  )
}

export default HomePageSection