
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className=' nav flex justify-between bg-white w-screen '>
            <div className="left-nav flex  m-auto align-middle">
                <Link className="h-fit text-xl transition ease-in delay-400 font-medium hover:text-green-400  hover:scale-150" to="/all">E-Waste Facility Locator</Link>
            </div>
            <div className="right-nav flex justify-evenly w-2/5 m-auto align-middle">
                <Link className="h-fit text-xl transition ease delay-150 font-medium hover:text-green-400  hover:scale-125" to="/">Home</Link>
                <Link className="h-fit text-xl transition ease delay-150 font-medium hover:text-green-400  hover:scale-125" to="/aboutus">AboutUs</Link>
                <Link className="h-fit text-xl transition ease delay-150 font-medium hover:text-green-400  hover:scale-125" to="/contactus">ContactUs</Link>
                <Link className="h-fit text-xl transition ease delay-150 font-medium hover:text-green-400  hover:scale-125" to="/locator">Locator</Link>
                <Link className="h-fit text-xl transition ease delay-150 font-medium hover:text-green-400  hover:scale-125" to="/resources">Resources</Link>
            </div>
        </div>
    )
}
