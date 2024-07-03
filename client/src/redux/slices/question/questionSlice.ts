import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { OneQuestionWithAnswerType } from '../../../types/questionType';
import getOneQuestionThunk from './questionThunks';

const initialState: OneQuestionWithAnswerType[] = [];

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getOneQuestionThunk.fulfilled,
        (_, action: PayloadAction<OneQuestionWithAnswerType>) => [action.payload],
      )
      .addCase(getOneQuestionThunk.rejected, () => []);
  },
});

export default questionSlice.reducer;
