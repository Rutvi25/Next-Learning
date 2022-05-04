import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name='description' content='nextJs miscellaneous topics'/>
      </Head>
      <h1 className='content'>About</h1>
    </>
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