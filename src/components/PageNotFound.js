import React from 'react'
import SadImg from '../assests/sad.png'

const PageNotFound = () => {
    return (
        <section className='shadow-2xl w-full h-screen  py-16'>
            <img src={SadImg} className="flex mx-auto p-4" alt="" />

            <h1 className='text-center text-5xl md:text-[5rem] font-bold'>404 error</h1>
            <p className='text-center mt-10 text-3xl font-medium'>Oops! Page not found.</p>

        </section>
    )
}

export default PageNotFound