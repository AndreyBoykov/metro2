import type { AxiosInstance } from 'axios';
import { AllCategoriesSchema, AllQuestionsWithAnswersSchema } from '../utils/validations';
import axiosInstance from './apiInstance';
import type { AllCategoriesType, AllQuestionsWithAnswerType } from '../types/questionType'

class CategoriesService {
  constructor(private readonly apiInstance: AxiosInstance) {}

  // Получить все категории
  async getAllCategories(): Promise<AllCategoriesType> {
    const { data } = await this.apiInstance.get<AllCategoriesType[]>('/categories');
    try {
      const validatedData = AllCategoriesSchema.parse(data);
      console.log('Validation passed:', validatedData);
      return validatedData;
    } catch (error) {
      console.error('Validation failed:', error);
      throw new Error('Failed to validate categories data');
    }
  }

  // Получить все вопросы по одной категории
  async getOneCategoryById(categoryId: number): Promise<AllQuestionsWithAnswerType> {
    const { data } = await this.apiInstance.get<AllQuestionsWithAnswerType>(
      `/categories/${categoryId}`,
    );
    console.log('Fetched questions:', data);

    try {
      const validatedData = AllQuestionsWithAnswersSchema.parse(data);
      console.log('Validation passed:', validatedData);
      return validatedData;
    } catch (error) {
      console.error('Validation failed:', error);
      throw new Error('Failed to validate questions data');
    }
  }

  // Создать новую категорию
  // async createCategory(name: string): Promise<CategoryType> {
  //   const { data } = await this.apiInstance.post('/categories', { name });
  //   return CategorySchema.parse(data);
  // }

  // Обновить категорию по ID
  // async updateCategory(id: CategoryType['id'], name: string): Promise<CategoryType> {
  //   const { data } = await this.apiInstance.put(`/categories/${id}`, { name });
  //   return CategorySchema.parse(data);
  // }

  // Удалить категорию по ID
  // async deleteCategory(id: CategoryType['id']): Promise<void> {
  //   await this.apiInstance.delete(`/categories/${id}`);
  // }
}

export default new CategoriesService(axiosInstance);
