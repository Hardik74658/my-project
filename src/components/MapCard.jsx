import React from 'react'

export const MapCard = (props) => {
    return (
        <div>
            <div className=" transition min-w-[44vw] ease-in delay-75 hover:scale-105 shadow-2xl flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700  ">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={props.img}
                        alt="image"
                        className="w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <h6 className="block mb-4  text-base antialiased font-semibold  tracking-normal text-pink-500 ">
                        Location-{props.num}
                    </h6>
                    <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {props.name}
                    </h4>
                    <a className="inline-block" href={props.link} target='_blank'>
                        <button
                            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Direction
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                aria-hidden="true"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
