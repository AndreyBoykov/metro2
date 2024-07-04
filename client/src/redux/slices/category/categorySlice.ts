import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AllCategoriesType, OneQuestionWithAnswerType } from '../../../types/questionType';
import { getAllCategoriesThunk, getQuestionByCategoryThunk } from './categoryThunks';

type CategoriesState = {
  categories: AllCategoriesType;
  selectedCategory: OneQuestionWithAnswerType | null;
};

const initialState: CategoriesState = {
  categories: [],
  selectedCategory: null,
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getAllCategoriesThunk.fulfilled,
        (state, action: PayloadAction<AllCategoriesType>) => {
          console.log(action.payload);
          state.categories = action.payload;
        },
      )
      .addCase(
        getQuestionByCategoryThunk.fulfilled,
        (state, action: PayloadAction<OneQuestionWithAnswerType>) => {
          state.selectedCategory = action.payload;
        },
      );
  },
});

export default categoriesSlice.reducer;
