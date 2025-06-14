import React from 'react'
import ValidationError from './ValidationError';

interface InputLoginProps {
    value: string
    name?: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string;
    type?: string
    touched?: any;
    errors?: any
}

const InputLogin: React.FC<InputLoginProps> = ({
    value,
    name,
    onChange,
    placeholder,
    type = 'text',
    errors,
    touched
}) => {
    return (
        <>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className='w-[280px] border-[2px] border-[#3E3E3E] p-2 h-[48px] text-[16px] text-[#3E3E3E] font-bold placeholder-[#3E3E3E] focus-visible:outline-none'
            />
            <ValidationError touched={touched} errors={errors} name={name} />
        </>
    )
}

export default InputLogin