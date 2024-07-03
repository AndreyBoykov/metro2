import type { AxiosInstance } from 'axios';
import { AllQuestionsWithAnswersSchema, OneQuestionWithAnswerSchema } from '../utils/validations';
import type { OneQuestionWithAnswerType } from '../types/questionType';
import axiosInstance from './apiInstance';

class QuestionsService {
  constructor(private readonly apiInstance: AxiosInstance) {}

  async getOneQuestion(id: OneQuestionWithAnswerType['id']): Promise<OneQuestionWithAnswerType> {
    const { data } = await this.apiInstance<OneQuestionWithAnswerType>(`/questions/${id}`);
    return OneQuestionWithAnswerSchema.parse(data);
  }

  async getAllQuestions(): Promise<OneQuestionWithAnswerType[]> {
    const { data } = await this.apiInstance<OneQuestionWithAnswerType>(`/questions`);
    return AllQuestionsWithAnswersSchema.parse(data);
  }
}

export default new QuestionsService(axiosInstance);
