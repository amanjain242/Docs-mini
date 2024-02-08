import React from 'react'
import { FaRegFileAlt} from "react-icons/fa"
import {LuDownload} from "react-icons/lu"

function Card({data}) {
  return (
    <div className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden m-3'>
        <FaRegFileAlt />
        <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-2'>
                <h5>0.4mb</h5>
                <span className='w-7 h-7 bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer'>
                <LuDownload size=".7em" color="#fff"/>
                </span>
            </div>
            <div className='tag w-full py-4 bg-green-600 flex items-center justify-center'>
                <h3 className='text-sm font-semibold'>Download Now</h3>
            </div>
        </div>
     </div>
  )
}

export default Card
