import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
const Aboutpage = () => {
    return (
        <div>
            <Header />
            <div className='px-3 py-24 bg-gradient-to-r from-blue-300 via-yellow-400 to-green-300'>
                <h1 className='text-3xl font-black text-center text-black'>ABOUT ME</h1>
                <p className='text-2xl text-center text-black'>
                    Hi,My name is <span className='text-2xl font-bold text-center text-black'>RIYAN ABDULLAH</span>,I am 18 years old, I am a student 
                    of GIAIC & My sir name is Hamza Alvi.
                </p>
            </div>
            <Footer />
        </div>


    )
}

export default Aboutpage