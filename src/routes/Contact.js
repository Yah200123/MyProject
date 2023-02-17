import React from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'


const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="Contact Us" text="Looking for answers?"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact