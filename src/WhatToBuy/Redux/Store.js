import { configureStore } from "@reduxjs/toolkit";
import categories  from './CategorySlice';

export const Store = configureStore({
    reducer: {
        categories
    },
})
export default Store;