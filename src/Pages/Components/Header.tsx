import { Tabs, type TabsProps } from 'antd';

const Header = () => {
    const renderTabBar: TabsProps["renderTabBar"] = (props, DefaultTabBar) => (
        <DefaultTabBar {...props} style={{ backgroundColor: "transparent" }} />
    );

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

    return (
        <div className='flex items-center justify-between'>
            <p className='text-[24px] font-[700] text-[#3D3D3D] leading-[34px]'>Contries</p>
            <div className="customer-master-wrap">
                <Tabs
                    defaultActiveKey="1"
                    renderTabBar={renderTabBar}
                    items={items}
                    className="customer-tabs"
                />
            </div>
        </div>
    )
}

export default Header