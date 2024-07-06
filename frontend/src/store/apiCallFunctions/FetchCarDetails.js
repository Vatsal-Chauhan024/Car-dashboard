import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCarDetails = createAsyncThunk("fetchCarDetails", async () => {
    const data = await fetch("http://localhost:8000/cars");
    return data.json();
  });