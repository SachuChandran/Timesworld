import { Popover } from 'antd'
import React from 'react'
import { IoMdMenu } from 'react-icons/io';

interface HamburgerMenuProps {
    items: any[]
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
    items
}) => {

    const [open, setOpen] = React.useState(false);

    const content = (
        <div className='w-[200px]'>
            {items?.map((item: any, index: number) => (
                <div key={index} className='text-[#3D3D3D] text-[16px] font-[700] cursor-pointer py-2 px-4 hover:bg-[#F5F5F5]'
                    onClick={() => setOpen(false)}
                >{item?.label}</div>
            ))}
        </div>
    )

    const onOpenChange = (open: boolean) => {
        setOpen(open);
    };

    return (
        <Popover
            className="filter-popover"
            content={content}
            trigger='click'
            placement="bottom"
            open={open}
            arrow={false}
            onOpenChange={onOpenChange}
            overlayClassName="filter-popover-inner"
        >
            <IoMdMenu />
        </Popover>
    )
}

export default HamburgerMenu