import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Axios/api";

interface CountryListType {
  CountryListFetching: boolean;
  CountryListSuccess: boolean;
  CountryListError: boolean;
  CountryListErrorMessage: string;
  CountryListData: any[];
}

interface RejectedValue {
  message: string;
}

export const CountryList = createAsyncThunk<any, void, { rejectValue: RejectedValue }>(
  "list/CountryList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.actionHandler({
        url: api.countryListApi.CounrtyListURL,
        method: "GET",
      });

      if (response.status === 200) {
        return response.data;
      } else {
        return rejectWithValue({
          message: "Failed to fetch country list",
        });
      }
    } catch (e: any) {
      const message =
        (e.response && e.response.data.message) || e.message || e.toString();
      return rejectWithValue({ message });
    }
  }
);

const initialState: CountryListType = {
  CountryListFetching: false,
  CountryListSuccess: false,
  CountryListError: false,
  CountryListData: [],
  CountryListErrorMessage: "",
};

const CountryListSlice = createSlice({
  name: "list/CountryList",
  initialState,
  reducers: {
    clearCountryListSlice: (state) => {
      state.CountryListError = false;
      state.CountryListSuccess = false;
      state.CountryListFetching = false;
      state.CountryListErrorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CountryList.pending, (state) => {
        state.CountryListFetching = true;
        state.CountryListSuccess = false;
        state.CountryListError = false;
        state.CountryListErrorMessage = "";
      })
      .addCase(CountryList.fulfilled, (state, action) => {
        state.CountryListFetching = false;
        state.CountryListSuccess = true;
        state.CountryListError = false;
        state.CountryListData = action.payload || [];
      })
      .addCase(CountryList.rejected, (state, action) => {
        state.CountryListFetching = false;
        state.CountryListSuccess = false;
        state.CountryListError = true;
        state.CountryListErrorMessage =
          action.payload?.message || "Unknown error";
      });
  },
});

export const { clearCountryListSlice } = CountryListSlice.actions;

export default CountryListSlice.reducer;
