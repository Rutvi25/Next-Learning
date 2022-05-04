import React from 'react'
import Footer from '../components/Footer'

function About() {
  return (
    <div className='content'>About</div>
  )
}

export default About

About.getLayout = function pageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}