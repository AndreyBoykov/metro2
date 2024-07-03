import type { AxiosInstance } from 'axios';
import {
  AllCategoriesSchema,
  OneCategorySchema,
} from '../utils/validations';
import axiosInstance from './apiInstance';
import type { AllCategoriesType, OneCategoryType } from '../types/ questionType';

class CategoriesService {
  constructor(private readonly apiInstance: AxiosInstance) {}

  // Получить все категории
  async getAllCategories(): Promise<AllCategoriesType> {
    const { data } = await this.apiInstance.get<OneCategoryType>('/categories');
    return AllCategoriesSchema.parse(data);
  }

  // Получить одну категорию по ID
  async getOneCategoryById(id: OneCategoryType['id']): Promise<OneCategoryType> {
    const { data } = await this.apiInstance.get<OneCategoryType>(`/categories/${id}`);
    return OneCategorySchema.parse(data);
  }

  //   // Создать новую категорию
  //   async createCategory(name: string): Promise<CategoryType> {
  //     const { data } = await this.apiInstance.post('/categories', { name });
  //     return CategorySchema.parse(data);
  //   }

  //   // Обновить категорию по ID
  //   async updateCategory(id: CategoryType['id'], name: string): Promise<CategoryType> {
  //     const { data } = await this.apiInstance.put(`/categories/${id}`, { name });
  //     return CategorySchema.parse(data);
  //   }

  //   // Удалить категорию по ID
  //   async deleteCategory(id: CategoryType['id']): Promise<void> {
  //     await this.apiInstance.delete(`/categories/${id}`);
  //   }
}

export default new CategoriesService(axiosInstance);
