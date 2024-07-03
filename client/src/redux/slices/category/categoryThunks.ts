import { createAsyncThunk } from '@reduxjs/toolkit';
import categoriesService from '../../../services/categoriesService';

export const getAllCategoriesThunk = createAsyncThunk('category/getAllCategories', async () => {
  const data = await categoriesService.getAllCategories();
  return data;
});

export const getQuestionByCategoryThunk = createAsyncThunk(
  'category/getQuestionByCategory',
  async (categoryId: number) => {
    const data = await categoriesService.getOneCategoryById(categoryId);
    return data;
  },
);
