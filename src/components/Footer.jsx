import React from 'react'

export const Footer = () => {
    return (
        <div >
            <div className='flex justify-around items-start p-20 bg-neutral-700 w-screen'>
                <div className="flex flex-col gap-6 w-1/6">
                    <h2 className='text-white font-medium text-2xl'>Quick Links</h2>
                    <h2 className='text-white font-medium'>About Us</h2>
                    <h2 className='text-white font-medium'>Contact Us</h2>
                    <h2 className='text-white font-medium'>Services</h2>
                    <h2 className='text-white font-medium'>Resources</h2>
                    <h2 className='text-white font-medium'>Locator</h2>
                </div>
                <div className="flex flex-col gap-6 w-2/6">
                    <h2 className='text-white font-medium text-2xl'>Contact Us</h2>
                    <h2 className='text-white font-medium flex gap-4 justify-start items-center'><i className="fa-solid fa-envelope "></i>hello@ewlocator.com</h2>
                    <h2 className='text-white font-medium flex gap-4 justify-start items-center'><i className="fa-regular fa-location-dot"></i>Abc Complex,Near Def Hall,Ghi Rd.,123456,Ahmedabad,Gujarat,India</h2>
                    <h2 className='text-white font-medium flex gap-4 justify-start items-center'><i className="fa-solid fa-phone"></i>+91 1234554321</h2>
                </div>
                <div className="flex flex-col gap-6 w-2/6">
                    <h2 className='text-white font-medium text-2xl'>Newsletter</h2>
                    <div>
                        <input type="email" name="email" id="email" className='bg-red-500 p-3 border border-red-500 hover:border-white text-white rounded-l-2xl' placeholder='Enter Your Email Address' />
                        <input type="submit" value="Subscribe" className=' bg-black border  border-black hover:border-white p-3 text-white -translate-x-2 rounded-r-2xl' />
                    </div>
                    <div>
                        <a href="#" className='text-white border transition ease-in delay-75 hover:bg-white hover:text-neutral-700 border-white rounded-full ml-0 m-2 p-2 pl-3 pr-3'><i class="fa-brands fa-facebook"></i></a>
                        <a href="#" className='text-white border transition ease-in delay-75 hover:bg-white hover:text-neutral-700 border-white rounded-full m-2 p-2 pl-3 pr-3'><i class="fa-brands fa-square-x-twitter"></i></a>
                        <a href="#" className='text-white border transition ease-in delay-75 hover:bg-white hover:text-neutral-700 border-white rounded-full m-2 p-2 pl-3 pr-3'><i class="fa-brands fa-youtube"></i></a>
                        <a href="#" className='text-white border transition ease-in delay-75 hover:bg-white hover:text-neutral-700 border-white rounded-full m-2 p-2 pl-3 pr-3'><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className='w-screen'>
                <hr className='bg-red-500  h-0.5' />
                {/* <hr className='bg-red-500  h-px' /> */}
                <h3 className='text-white bg-neutral-700 text-sm flex justify-center items-center p-4 '>Ⓒ 2023 All rights reserved. This is Your Company</h3>
            </div>
        </div>
    )
}
