import { createSlice } from "@reduxjs/toolkit";

export const  CategorySlice = createSlice({
    name: 'categories',
    initialState: {
        selectedCategory: 'BOOTLE'
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        
        }
    }
})
export const getSelectedCategory = state =>state.categories.selectedCategory;
export const { filterCategory } = CategorySlice.actions;
export default CategorySlice.reducer;