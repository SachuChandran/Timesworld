import { Col, Row } from 'antd'
import CustomCarousel from '../Ui/Carousel/CustomCarousel'
import img1 from '../../assets/Images/slider1.jpg';
import img2 from '../../assets/Images/slider2.jpg';
import img3 from '../../assets/Images/slider3.jpg';
import img4 from '../../assets/Images/slider4.jpg';
import img5 from '../../assets/Images/slider5.jpg';

const SliderPortion = () => {

    const sliderItems = [
        { id: 1, src: img1 },
        { id: 2, src: img2 },
        { id: 3, src: img3 },
        { id: 4, src: img4 },
        { id: 5, src: img5 },
    ]

    const handleSlider = (id: number, item: any) => {
        console.log(id, item, "handleSlider");
    }

    return (
        <Row gutter={16} className='mt-4'>
            <Col xs={24} md={16} lg={20} className='mb-4'>
                <div className='w-full h-[40vh] border-[2px] border-[#3D3D3D]'>
                    <CustomCarousel
                        items={sliderItems}
                        handleChange={handleSlider}
                    />
                </div>

            </Col>
            <Col xs={24} md={8} lg={4} className='mb-4'>
                <div className='w-full h-[40vh] border-[2px] border-[#3D3D3D]'>
                    <img src={img1} alt="img1" className='w-full h-full object-cover' />
                </div>
            </Col>
        </Row>
    )
}

export default SliderPortion