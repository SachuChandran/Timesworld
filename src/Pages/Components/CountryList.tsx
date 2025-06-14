import { useFetchCountryList } from '../Home/Hooks';
import { useAppSelector } from '../../store/hooks';
import type { RootState } from '../../store';
import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import PrimaryButton from '../Ui/Button/PrimaryButton';

const CountryList = () => {
    const [countries, setCountries] = useState<any[]>([]);
    const [visibleCount, setVisibleCount] = useState(12);

    useFetchCountryList();

    const { CountryListData } = useAppSelector(
        (state: RootState) => state.CountryListSlice
    );

    useEffect(() => {
        setCountries(CountryListData);
    }, [CountryListData]);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 12);
    };

    const visibleCountries = countries.slice(0, visibleCount);

    return (
        <div className='mt-6'>
            <Row gutter={16}>
                {visibleCountries?.map((item, index) => (
                    <Col xs={24} lg={12} key={index} className='mb-4'>
                        <div className='country-card w-full h-[130px] border-[2px] border-[#3E3E3E] shadow-[8px_8px_0px_0px_#0000001A] p-2 flex items-center gap-4'>
                            <div>
                                <img src={item?.flag} alt={`${item?.name}+${index}`} width={127} />
                            </div>
                            <div>
                                <h4 className='text-[#3D3D3D] font-[600] text-[24px]'>{item?.name}</h4>
                                <p className='text-[#6F6F6F] font-[400] text-[16px] leading-[19px] tracking-[3%]'>{item?.region}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
            <div className='mt-3 flex items-center justify-center'>
                <PrimaryButton
                    text="Load More"
                    onClick={() => { handleLoadMore() }}
                    className='w-[146px]'
                />
            </div>
        </div>
    )
}

export default CountryList