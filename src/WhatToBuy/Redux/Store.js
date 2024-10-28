import { configureStore } from "@reduxjs/toolkit";
import categories  from './CategorySlice';
import cart from './CartSlice';

export const store = configureStore({
    reducer: {
        categories,
        cart
    },
})
export default store;