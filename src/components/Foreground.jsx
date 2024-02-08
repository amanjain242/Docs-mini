import React from 'react'
import Card from './Card'
import { useRef } from 'react';

function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc: "Description could be anything it does'nt matter , right? or does it matters",
            filesize: "0.9mb",
            close: false,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "Description could be anything it does'nt matter , right? or does it matters",
            filesize: "1.5mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
        },
        {
            desc: "Description could be anything it does'nt matter , right? or does it matters",
            filesize: "0.3mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
        },
        {
            desc: "Description could be anything it does'nt matter , right? or does it matters",
            filesize: "1.5mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
        },
    ]
    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
            {data.map((item,index) =>(
                <Card data={item} reference={ref}/>
            ))}
        </div>
    )
}

export default Foreground
