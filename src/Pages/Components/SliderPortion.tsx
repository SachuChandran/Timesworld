import { Col, Row } from 'antd'

const SliderPortion = () => {
    return (
        <Row gutter={16}>
            <Col xs={24} md={16} lg={20}>
                <div className='w-full h-[40vh] border-[2px] border-[#3D3D3D]'>

                </div>

            </Col>
             <Col xs={24} md={8} lg={4}>
                <div className='w-full h-[40vh] border-[2px] border-[#3D3D3D]'>

                </div>
            </Col>
        </Row>
    )
}

export default SliderPortion