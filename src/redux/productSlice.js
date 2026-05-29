import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {

    const response = await axios.get(
      "https://dummyjson.com/products?limit=194"
    );

    return response.data.products;
  }
);

const productSlice = createSlice({
  name: "products",

  initialState: {
    items: [],
    loading: false,
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(
        fetchProducts.fulfilled,
        (state, action) => {
          state.loading = false;
          state.items = action.payload;
        }
      );
  },
});

export default productSlice.reducer;