import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
    
)

const productSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        products: null,
        error: "",
    },
    reducers: {
        getAllProduct: () => {}
    }
})

export const {getAllProduct} = productSlice.actions;

export const productReducer = productSlice.reducer;