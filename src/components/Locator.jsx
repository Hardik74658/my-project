import React from 'react'
import { MapCard } from './MapCard'

export const Locator = () => {
    return (
        <div className='p-20 flex flex-col gap-8'>
            <h3 className=' text-red-500 '>Locator</h3>
            <div className='flex flex-col gap-8 '>
                <div className=' flex gap-8 '>
                    <MapCard name={"Recycle.Green"} num={"1"} link={"https://maps.app.goo.gl/RQ2NydLkSWYiPkNs8"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuKXYfWTLm3Y17UjY-JGpSdBNutCtI4fmZK3gXUHUMip4T8NThQxA51EsT7iNXLPznKE&usqp=CAU"} />
                    <MapCard name={"Vaslly Recycling Pvt Ltd"} num={"2"} link={"https://maps.app.goo.gl/qYnEms6Lw47LsFet9"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuKXYfWTLm3Y17UjY-JGpSdBNutCtI4fmZK3gXUHUMip4T8NThQxA51EsT7iNXLPznKE&usqp=CAU"} />
                </div>
                <div className=' flex gap-8'>
                    <MapCard name={"Nepra Resource Management"} num={"3"} link={"https://maps.app.goo.gl/cLzjtNYxVzMBhG2V7"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuKXYfWTLm3Y17UjY-JGpSdBNutCtI4fmZK3gXUHUMip4T8NThQxA51EsT7iNXLPznKE&usqp=CAU"} />
                    <MapCard name={"VanRaksha Paper Recycling Agency"} num={"4"} link={"https://maps.app.goo.gl/T8xRyFEtYnG6b1TRA"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuKXYfWTLm3Y17UjY-JGpSdBNutCtI4fmZK3gXUHUMip4T8NThQxA51EsT7iNXLPznKE&usqp=CAU"} />
                </div>
                <div className=' flex  gap-8'>
                    <MapCard name={"Innovate Green Technologies Pvt. Ltd."} num={"5"} link={"https://maps.app.goo.gl/YJSj9frKVXvpryaw8"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuKXYfWTLm3Y17UjY-JGpSdBNutCtI4fmZK3gXUHUMip4T8NThQxA51EsT7iNXLPznKE&usqp=CAU"} />
                    <MapCard name={"Wow Recycling Center"} num={"6"} link={"https://maps.app.goo.gl/tSauiDZ6K1iFdav89"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuKXYfWTLm3Y17UjY-JGpSdBNutCtI4fmZK3gXUHUMip4T8NThQxA51EsT7iNXLPznKE&usqp=CAU"} />
                </div>
            </div>
        </div >
    )
}
