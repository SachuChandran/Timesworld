import React from 'react';
import { Checkbox } from 'antd';
import './checkbox.css'

interface CustomCheckboxProps {
    name: string;
    value?: boolean
    handleOnChange: (checked: boolean) => void;
    label: string;
    disabled?: boolean;
    readOnly?: boolean
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
    name,
    value,
    handleOnChange,
    label,
    disabled = false
}) => {
    const onChange = (e: any) => {
        const isChecked = e.target.checked === true ? true : false
        // console.log(`checked = ${isChecked}`);
        handleOnChange(isChecked);
    };

    return <Checkbox
        className='custom-checkbox'
        checked={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
    >
        <span className='text-[16px] font-[600] text-[#3D3D3D]'>{label}</span>
    </Checkbox>;
};

export default CustomCheckbox;
