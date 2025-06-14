import { Tabs, type TabsProps } from 'antd';
import { useEffect, useState } from 'react';
import HamburgerMenu from '../Ui/Hamburger/HamburgerMenu';

interface HeaderProps {
    setCountyFilter: any
}

const renderTabBar: TabsProps["renderTabBar"] = (props, DefaultTabBar) => (
    <DefaultTabBar {...props} style={{ backgroundColor: "transparent" }} />
);

const Header: React.FC<HeaderProps> = ({
    setCountyFilter
}) => {

    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const items = [
        {
            key: "1",
            label: "All",
        },
        {
            key: "2", label: "Asia"
        },
        {
            key: "3", label: "Europe"
        },
    ];
    console.log(screenWidth)
    return (
        <div className='flex items-center justify-between'>
            <p className='text-[24px] font-[700] text-[#3D3D3D] leading-[34px]'>Countries</p>
            <div className="customer-master-wrap">
                {screenWidth > 575.98 ? (
                    <Tabs
                        defaultActiveKey="1"
                        renderTabBar={renderTabBar}
                        items={items}
                        className="customer-tabs"
                        onChange={(e) => setCountyFilter(e)}
                    />
                ) : (
                    <HamburgerMenu items={items} onChange={setCountyFilter} />
                )}
            </div>
        </div>
    )
}

export default Header