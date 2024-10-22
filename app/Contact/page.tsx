import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const ContactPage = () => {
  return (
    <div>
        <Header />
        <div className='px-3 py-32 bg-gradient-to-r from-blue-300 via-yellow-400 to-green-300'>
            <h2 className='text-3xl text-center text-black font-black'>Contact Me</h2>
            <p className='text-center text-black'>
                contact me via email : <a className='hover:text-blue-600' href="mailto:riyanabdullah392@gmail.com">riyanabdullah392@gmail.com</a>
            </p>
        </div>
        <Footer />
    </div>
  )
}

export default ContactPage