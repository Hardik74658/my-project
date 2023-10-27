import React from 'react'
import { BlogPost } from './BlogPost'

export const Resources = () => {
    return (
        <div className='p-20'>
            <div className=' w-full p-4 grid grid-cols-2  '>
                <div>
                    <h1 className='text-6xl  font-medium'>Resources</h1>
                    <h2 className='text-gray-400 mt-4'>Tools And Information For Reducing Waste</h2>
                </div>
                <div className=' flex align-middle justify-end'>
                    <a href="#" className=' h-fit transition ease delay-75  p-5  pr-12 pl-12 text-base text-white font-semibold bg-red-500 rounded-3xl border border-red-500 hover:bg-white  hover:text-red-500 '>Get Started &#129122;</a>
                </div>
            </div >
            <div className=' w-full p-8 grid grid-cols-2 grid-rows-2 gap-8'>
                <div className=' row-span-full h-full w-full m-auto'>
                    <BlogPost img={"https://rrgraphdesign.elementor.cloud/wp-content/uploads/elementor/thumbs/garbage-recycle-beach-and-eco-friendly-team-and-a-2023-01-13-03-18-32-utc-q4j3ftckig3na5hdrxtysh462nkdbwb9e10n79io0w.jpg"} title={"Blog Posts On Sustainability Topics"} tags={"Waste reduction, global environment"} />
                </div>
                <div className='  h-full w-full'>
                    <BlogPost img={"https://rrgraphdesign.elementor.cloud/wp-content/uploads/elementor/thumbs/boy-recycling-plastic-bottles-at-home-2022-01-27-18-55-54-utc-q4j3g1t47ydd2m9fl0mcc08vrb3ah25ri5nx2nd0eo.jpg"} title={"Calculators For Measuring Your Carbon Footprint"} tags={"Waste reduction, global environment"} />
                </div>
                <div className='  h-full w-full'>
                    <BlogPost img={"https://rrgraphdesign.elementor.cloud/wp-content/uploads/elementor/thumbs/african-american-man-recycling-waste-at-home-2022-01-27-19-00-11-utc-q4j3gd36hyssxxt1r5hv5xeevxjp1fejjphqtywac0.jpg"} title={"Case Studies Of Successful Waste Reduction Programs"} tags={"Case Studies Of Successful Waste Reduction Programs"} />
                </div>
            </div>
            <hr className='bg-red-500  h-0.5 mt-8' />

            <div className='flex justify-center items-center m-16  '>
                <h1 className=' text-red-500 font-medium text-6xl '>Video Resources</h1>
            </div>
            <div className=' w-full p-8 grid grid-cols-2 grid-rows-2 gap-8 grid-flow-col'>
                <div className='transition ease-in delay-75  hover:scale-105  h-full w-full flex flex-col gap-4'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/59iMki7ljDs?si=XtjsUZsjR2Eo4hrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='rounded-2xl shadow-2xl shadow-slate-200 transition ease-in delay-75 hover:shadow-slate-400'></iframe>
                    <a href='https://youtu.be/59iMki7ljDs' target='_blank' className='transition ease delay-75 font-medium text-3xl hover:text-green-500 '>
                        E-Waste Managemeth In 1 Minute
                    </a>
                </div>
                <div className='transition ease-in delay-75  hover:scale-105  h-full w-full flex flex-col gap-4'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-uyIzKIw0xY?si=Ny630D_OZPnt8g4i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='rounded-2xl shadow-2xl shadow-slate-200 transition ease-in delay-75 hover:shadow-slate-400'></iframe>
                    <a href='https://youtu.be/-uyIzKIw0xY?si=3jMk_eJ_kwgdVEp-' target='_blank' className='transition ease delay-75 font-medium text-3xl hover:text-green-500 '>
                        How E-Waste Is Harming Our World
                    </a>
                </div>
                <div className='transition ease-in delay-75  hover:scale-105  h-full w-full flex flex-col gap-4'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/MQLadfsvfLo?si=e6W7VMTK8gPGENhi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='rounded-2xl shadow-2xl shadow-slate-200 transition ease-in delay-75 hover:shadow-slate-400'></iframe>
                    <a href='https://youtu.be/MQLadfsvfLo' target='_blank' className='transition ease delay-75 font-medium text-3xl hover:text-green-500 '>
                        What Causes E-Waste?
                    </a>
                </div>
                <div className='transition ease-in delay-75  hover:scale-105   h-full w-full flex flex-col gap-4'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Nr0igorjIKI?si=oD8-YGIG8UpysYgZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='rounded-2xl shadow-2xl shadow-slate-200 transition ease-in delay-75 hover:shadow-slate-400'></iframe>
                    <a href='https://youtu.be/Nr0igorjIKI?si=cxudGTT5yS49UGFQ' target='_blank' className='transition ease delay-75 font-medium text-3xl hover:text-green-500 ' >
                        Status Of E-Waste In INDIA
                    </a>
                </div>
            </div>
            <hr className='bg-red-500  h-0.5 mt-16' />

        </div >
    )
}
