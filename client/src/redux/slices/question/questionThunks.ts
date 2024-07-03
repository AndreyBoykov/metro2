import { createAsyncThunk } from '@reduxjs/toolkit';

import type { OneQuestionWithAnswerType } from '../../../types/ questionType';
import questionsService from '../../../services/questionsService';

const getOneQuestionThunk = createAsyncThunk<
  OneQuestionWithAnswerType,
  OneQuestionWithAnswerType['id']
>('question/getOneQuestion', async (id) => {
  const data = await questionsService.getOneQuestion(id);
  return data;
});

export const getAllQuestionsThunk = createAsyncThunk('question/getAllQuestions', async () => {
  const data = await questionsService.getAllQuestions();
  return data;
});

export default getOneQuestionThunk;
