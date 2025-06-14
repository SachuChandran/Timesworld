import React from 'react'
import SocialMediaOptions from './SocialMediaOptions'

const Footer = () => {
    return (
        <div className='flex items-center justify-center mt-20'>
            <div>
                <SocialMediaOptions footer />
                <div className='mt-6 text-center'>
                    <p className='text-[13px] font-[700] text-[#3D3D3D] leading-[19px] tracking-[3%]'>example@gmail.com</p>
                    <p className='text-[13px] font-[700] text-[#3D3D3D] leading-[19px] tracking-[3%] mt-4'>Copyright © 2023 Name. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer