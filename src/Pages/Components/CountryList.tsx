import { useFetchCountryList } from '../Home/Hooks';
import { useAppSelector } from '../../store/hooks';
import type { RootState } from '../../store';

const CountryList = () => {
    useFetchCountryList();

    const { CountryListData } = useAppSelector(
        (state: RootState) => state.CountryListSlice
    );

    console.log(CountryListData, "CountryListData");

    return (
        <div>CountryList</div>
    )
}

export default CountryList