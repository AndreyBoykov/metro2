import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AllCategoriesType, OneCategoryType } from '../../../types/ questionType';

type CategoriesState = {
  categories: AllCategoriesType;
  selectedCategory: OneCategoryType | null;
};

const initialState: CategoriesState = {
  categories: [],
  selectedCategory: null,
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<AllCategoriesType>) {
      state.categories = action.payload;
    },
    setSelectedCategory(state, action: PayloadAction<OneCategoryType>) {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategories, setSelectedCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
