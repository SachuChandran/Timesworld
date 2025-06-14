import { Col, Row } from 'antd'

const Welcome = () => {
    return (
        <>
          {/* <div className='flex items-center w-full gap-5'> */}
            <Row gutter={5}>
                <Col xs={24} md={8} lg={10}>
                    <div className='flex-1 border-t-[3px] border-[#3D3D3D] h-[36px]' />
                </Col>
                <Col xs={24} md={8} lg={4}>
                    <p className='text-[32px] font-[700] text-[#3D3D3D] uppercase text-center'>Welcome</p>
                </Col>
                <Col xs={24} md={8} lg={10}>
                   <div className='flex-1 border-b-[3px] border-[#3D3D3D] h-[36px]' />
                </Col>
            </Row>
            {/* <div className='flex-1 border-t-[3px] border-[#3D3D3D] h-[22px]' />
            <p className='text-[32px] font-[700] text-[#3D3D3D] uppercase'>Welcome</p>
            <div className='flex-1 border-b-[3px] border-[#3D3D3D] h-[22px]' /> */}
        </>
    )
}

export default Welcome