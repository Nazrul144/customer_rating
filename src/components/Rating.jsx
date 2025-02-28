'use client'
import React, { useState } from 'react';
import { FaRegStar } from "react-icons/fa";

const Rating = () => {
    const [starCount, setStarCount] = useState(0);
    const [hoverStarCount, setHoverStarCount] = useState(0)
    return (
        <div>
            <div className='w-[1100px] mx-auto'>
                <h1 className='text-center mt-16 font-bold text-red-500 text-2xl'>User Rating:{starCount}</h1>
                <h1 className='text-center font-bold text-2xl'>Hover Ratings:{hoverStarCount}</h1>

               <div className='flex gap-2 justify-center items-center mt-12 text-2xl'>
               {
                    [...Array(5)].map((_, index)=>{
                        return <FaRegStar key={index} 
                        className={`${index+1 <= starCount ? 'text-orange-500' : ""} ${index+1 <= hoverStarCount ? 'text-orange-500' : ""}`}
                        onMouseOver={()=> setHoverStarCount(index+1)}
                        onMouseOut={()=>setHoverStarCount(0)}
                        onClick={()=> setStarCount(index+1)}
                        />
                    })
                }
               </div>
            </div>
        </div>
    );
}

export default Rating;
