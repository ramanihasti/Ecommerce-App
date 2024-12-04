import {configureStore} from "@reduxjs/toolkit";
import { cartReducer } from "./slice/slice";
import { productReducer } from "./slice/produceSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
    },
});

export default store;