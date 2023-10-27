import React from 'react'

export const Home = () => {
    return (
        <div className='hero-section p-24 grid
         grid-cols-2 bg-gray-100 w-screen'>
            <div className="hero-text">
                <h3 className="text-red-500 m-4">E-Waste</h3>
                <h1 className='text-black text-6xl m-4 font-bold '>Reducing Waste, Creating A Greener Future</h1>
                <h2 className=' text-gray-500 m-4 font-semibold '>Customized Waste Reduction Plans For Your Business</h2>
                <div className='mt-12'>
                    <a href="#" className='transition ease delay-75  p-5  pr-12 pl-12 text-base text-white font-semibold bg-red-500 rounded-3xl  hover:bg-white  hover:text-red-500 border border-red-500'>Get Started &#129122;</a>
                    <a href="#" className=' transition ease delay-70 ml-8 p-5  pr-12 pl-12 text-base font-semibold text-black bg-white rounded-3xl border border-gray-500  hover:text-red-500  '>Watch Video</a>
                </div>
            </div>
            <div className="hero-pic w-full">
                <img src="https://rrgraphdesign.elementor.cloud/wp-content/uploads/elementor/thumbs/female-friends-picking-up-household-waste-2021-08-29-03-30-39-utc-q4j3dlg96juzmqccm8o5g1bsuk130gm5b2c3ok64s0.jpg" className=' transition ease-in delay-75 hover:scale-105 w-fit h-fit rounded-full' alt="" />
            </div>
        </div>
    )
}
