import { configureStore } from "@reduxjs/toolkit";
import CountryListSlice from "./CountryListSlice";

const store = configureStore({
    reducer: {
        CountryListSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;