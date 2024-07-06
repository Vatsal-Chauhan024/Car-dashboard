import { createSlice } from "@reduxjs/toolkit";
import { fetchCarDetails } from "../apiCallFunctions/FetchCarDetails";




const CardDashboardSlice = createSlice({
  name: "carslice",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (build) => {
    // for Fetching the Cars
    build.addCase(fetchCarDetails.pending, (state, action) => {
      state.loading = true;
    });
    build.addCase(fetchCarDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    build.addCase(fetchCarDetails.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });

  },
});

export default CardDashboardSlice.reducer;
