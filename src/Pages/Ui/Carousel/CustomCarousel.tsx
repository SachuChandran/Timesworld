import { Carousel } from 'antd'
import React, { useRef } from 'react';
import './Carousel.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface itemType {
    items: any[];
    handleChange: any;
}

const CustomCarousel: React.FC<itemType> = ({
    items,
    handleChange
}) => {

    const carouselRef = useRef<any>(null);

    const contentStyle: React.CSSProperties = {

    };

    const handleAfterChange = (current: number) => {
        const currentItem = items[current];
        handleChange(currentItem.id, currentItem);
    };

    const goPrev = () => {
        carouselRef.current?.prev();
    };

    const goNext = () => {
        carouselRef.current?.next();
    };

    return (
        <div className='relative w-full'>
            <Carousel
                // arrows
                infinite={false}
                dots={{ className: 'custom-carousel-dots' }}
                afterChange={handleAfterChange}
                effect="fade"
                adaptiveHeight
                prevArrow={<FaArrowLeft />}
                nextArrow={<FaArrowRight />}
                ref={carouselRef}
            >
                {items.map((item) => (
                    <div key={item.id} className='w-full h-[40vh]'>
                        <img src={item.src} alt={item.name} style={contentStyle} className="w-full h-full object-cover" />
                    </div>
                ))}

            </Carousel>
            <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 flex items-center gap-30 z-100">
                <button onClick={goPrev} className="cursor-pointer">
                    <FaArrowLeft />
                </button>
                <button onClick={goNext} className="cursor-pointer">
                    <FaArrowRight />
                </button>
            </div>

        </div>
    )
}

export default CustomCarousel