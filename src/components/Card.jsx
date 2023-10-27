import React from 'react'

export const Card = (props) => {
    return (
        <div>
            <div className=" transition ease-in delay-75  hover:scale-105 relative flex flex-col text-gray-700 bg-slate-50 shadow-2xl shadow-slate-300 w-96 rounded-3xl bg-clip-border">
                <div className=" mt-12 m-auto mb-4 text-white w-fit h-fit shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                    <img
                        src={props.img}
                        alt="img-blur-shadow"
                        layout="fill"
                        className='w-32'
                    />
                </div>
                <div className="p-6">
                    <h5 className="block mb-2 font-sans text-center text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {props.title}
                    </h5>
                    <p className="block font-sans text-base text-center text-gray-400 font-normal antialiased  leading-relaxed text-inherit">
                        {props.para}
                    </p>
                </div>

            </div>
        </div>
    )
}
