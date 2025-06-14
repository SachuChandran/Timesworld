import React from 'react'

interface PrimaryButtonProps {
    text: string
    onClick?: VoidFunction
    type?: 'button' | 'submit'
    className?: string
    signInOptions?: boolean
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    text,
    onClick,
    type = 'button',
    className,
    signInOptions = false
}) => {
    return (
        signInOptions ? (
            <div className='flex items-center justify-between'>
                <div className='border-[2px] border-[#CFCFCF] w-[72px]' />
                <p className='text-[13px] font-bold text-[#3D3D3D]'>{text}</p>
                <div className='border-[2px] border-[#CFCFCF] w-[72px]' />
            </div>
        ) : (
            <button
                onClick={onClick}
                className={`cursor-pointer text-[#FCFCFC] bg-[#3C3C3C] hover:bg-[#2b2929] h-[48px] text-[16px] font-semibold ${className}`}
                type={type}
            >
                {text}
            </button >
        )
    )
}

export default PrimaryButton