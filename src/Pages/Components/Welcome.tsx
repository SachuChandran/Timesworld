import React from 'react'

const Welcome = () => {
    return (
        <div className='flex items-center w-full gap-5'>
            <div className='flex-1 border-t-[3px] border-[#3D3D3D] h-[22px]' />
            <p className='text-[32px] font-[700] text-[#3D3D3D] uppercase'>Welcome</p>
            <div className='flex-1 border-b-[3px] border-[#3D3D3D] h-[22px]' />
        </div>
    )
}

export default Welcome