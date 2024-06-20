import React from 'react'

export default function Navbar() {
    return (
        <div className='w-full h-[8vh] bg-neutral-950 flex border-b border-neutral-700'>
            <div className='w-[18vh] h-full'>
                <button></button>
                <div>
                    <img src="/public/icons/icon-Ghouse.png" alt="" className='w-fit object-contain'/>
                </div>
            </div>
            <div className='w-auto h-full'></div>
            <div className='w-[6vh] h-full flex justify-center items-center'>
                <div className='w-12 h-12 rounded-full overflow-hidden'>
                    <img src="/public/images/userProfile.jpg" alt="" className='h-full object-cover'/>
                </div>
            </div>
        </div>
    )
}
