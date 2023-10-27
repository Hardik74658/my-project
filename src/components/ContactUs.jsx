import React from 'react'

export const ContactUs = () => {
    return (
        <div className='contact w-screen h-screen bg-green-500 flex p-20 justify-between items-center gap-24'>
            <div className="flex flex-col justify-evenly gap-8">
                <div className='flex flex-col gap-2 '>
                    <h1 className='text-white font-medium text'>Contact Us</h1>
                    <h2 className='text-white font-medium text-7xl'>Get In Touch</h2>
                    <h3 className='text-white text'>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</h3>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h2 className='text-white font-medium text-2xl'>Email:</h2>
                        <h3 className='text-white  text'>info@ewlocator.com</h3>
                    </div>
                    <div className='pr-12'>
                        <h2 className='text-white font-medium text-2xl'>Website:</h2>
                        <h3 className='text-white  text'>www.website.com</h3>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h2 className='text-white font-medium text-2xl mb-4'>Social Media:</h2>
                        <div>
                            <a href="#" className='text-white border hover:bg-white transition ease-in delay-75 hover:text-green-500 border-white rounded-full ml-0 m-2 p-2 pl-3 pr-3'><i class="fa-brands fa-facebook"></i></a>
                            <a href="#" className='text-white border hover:bg-white transition ease-in delay-75 hover:text-green-500 border-white rounded-full m-2 p-2 pl-3 pr-3'><i class="fa-brands fa-square-x-twitter"></i></a>
                            <a href="#" className='text-white border hover:bg-white transition ease-in delay-75 hover:text-green-500 border-white rounded-full m-2 p-2 pl-3 pr-3'><i class="fa-brands fa-youtube"></i></a>
                            <a href="#" className='text-white border hover:bg-white transition ease-in delay-75 hover:text-green-500 border-white rounded-full m-2 p-2 pl-3 pr-3'><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                    <div >
                        <h2 className='text-white font-medium text-2xl'>Contact Person:</h2>
                        <h3 className='text-white  text'>Abc : +91 1234567890</h3>
                        <h3 className='text-white  text'>Def : +91 0123456789</h3>
                    </div>
                </div>
            </div>
            <div className=' w-4/6 h-full bg-white p-8 rounded-xl  '>
                <form action="" className='flex flex-col gap-8 ' >
                    <div>
                        <label htmlFor="name" className='block'>Full Name*</label>
                        <input type="text" name="name" id="name" placeholder='Enter Full Name' className=' rounded-lg bg-gray-100 p-2 mt-4 w-full' />
                    </div>
                    <div>
                        <label htmlFor="name" className='block'>Email Address*</label>
                        <input type="email" name="email" id="email" placeholder='Enter Email Address' className=' rounded-lg bg-gray-100 mt-4 p-2 w-full' />
                    </div>
                    <div>
                        <label htmlFor="name" className='block'>Message</label>
                        <input type='text' name="text" id="text" placeholder='Your Message' className=' rounded-lg bg-gray-100 p-2 w-full mt-4 h-40 ' />
                    </div>
                </form>
            </div>
        </div>
    )
}
