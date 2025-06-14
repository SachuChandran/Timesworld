import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { CountryList } from "../../store/CountryListSlice";

export const useFetchCountryList = (
) => {
    const dispach = useAppDispatch();

    useEffect(() => {

        async function fetchData() {
            try {
                await dispach(CountryList());
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        }

        fetchData();
    }, [dispach]);
};