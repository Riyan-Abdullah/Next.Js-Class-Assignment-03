import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (

        <header className="bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className='font-black text-blue-900'>Riyan Abdullah</h1>


                <ul className="flex space-x-4">
                    <li className='text-white my-1  hover:text-yellow-500'>
                        <Link href="About" target='blank'>About me</Link>
                    </li>
                    <li className='text-white my-1  hover:text-yellow-500'>
                        <Link href="Contact" target='blank'>Contact us</Link>
                    </li>

                </ul>
            </div>
        </header>

    )
}

export default Header