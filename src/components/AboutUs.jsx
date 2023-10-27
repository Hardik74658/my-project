import React from 'react'
import { Card } from './Card'


export const AboutUs = () => {
    return (
        <>
            <div className='aboutus grid grid-cols-2 grid-rows-1 gap-4 p-24 h-fit'>
                <div className=' p-8 h-fit row-end-1'>
                    <h3 className=' text-red-500 '>About Us</h3>
                    <h1 className=' font-semibold text-4xl mt-2'>We Are Company That Specialize In Controlling And Reducing Waste For A Better Environment To Life</h1>
                </div>
                <div className=' p-8 h-fit'>
                    Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
                </div>
                <div className=' col-span-full w-full  rounded-3xl row-end-2'>
                    <img className='w-full rounded-3xl' src="https://rrgraphdesign.elementor.cloud/wp-content/uploads/elementor/thumbs/recycling-and-waste-information-sign-at-the-public-2021-08-26-18-35-41-utc-q4j3dym8ur96goeoi2zoash8d3ewpbqzxmhgxpyxc0.jpg" alt="" />
                </div>
            </div>
            <div className='p-24'>
                <h3 className=' text-red-500 text-center m-auto'>Services</h3>
                <h1 className=' text-center m-auto font-semibold text-6xl mt-4'>Over Services</h1>
                <h2 className=' mt-2 text-center m-auto text-gray-600'>Customized Waste Reduction Plans For Your Business</h2>
                <div className='mt-16 flex gap-12 justify-center'>
                    <Card img={'https://rrgraphdesign.elementor.cloud/wp-content/uploads/2023/04/Recycling-Regulations.png'} title={'Waste Management Consulting'} para={'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica'}></Card>
                    <Card img={'https://rrgraphdesign.elementor.cloud/wp-content/uploads/2023/04/Recycling-Guide.png'} title={'Recycling Program Development'} para={'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica'}></Card>
                    <Card img={'https://rrgraphdesign.elementor.cloud/wp-content/uploads/2023/04/Green-Technology.png'} title={'Sustainability Audit And Management'} para={'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica'}></Card>
                </div>
                <div className='mt-16 flex justify-center'>
                    <a href="#" className='w-fit transition ease delay-75  p-5  pr-12 pl-12 text-base text-white font-semibold bg-red-500 rounded-3xl border border-red-500 hover:bg-white  hover:text-red-500 '>Get Started &#129122;</a>
                </div>
            </div >
        </>
    )
}
