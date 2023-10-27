import React from 'react'

export const BlogPost = (props) => {
    return (
        <div className=' max-h-full max-w-full flex flex-col  gap-4 justify-between transition ease-in delay-75  hover:scale-105'>
            <div>
                <img
                    src={props.img}
                    className=' w-full h-full rounded-3xl shadow-lg shadow-gray-400'
                    alt=""
                />
            </div>
            <div className='flex justify-between p-4 pb-0'>
                <div>
                    <h1 className='transition ease delay-100 font-medium text-3xl hover:text-green-500 '>
                        {props.title}
                    </h1>
                    <h2 className=' text-gray-500'>
                        {props.tags}
                    </h2>
                </div>
                <div className=' h-fit p-4 border border-green-500 rounded-full text-green-500'>
                    &#129122;
                </div>
            </div>
        </div>
    )
}
