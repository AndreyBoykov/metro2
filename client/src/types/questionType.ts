import type { z } from 'zod';
import type {
  OneAnswerSchema,
  OneQuestionWithAnswerSchema,
 AllQuestionsWithAnswersSchema,
  AllCategoriesSchema,
  OneCategorySchema,
} from '../utils/validations';

// Тип для ответа
export type OneAnswerType = z.infer<typeof OneAnswerSchema>;

// Тип для вопроса с ответами
export type OneQuestionWithAnswerType = z.infer<typeof OneQuestionWithAnswerSchema>;

// Тип для списка вопросов
export type AllQuestionsWithAnswerType = z.infer<typeof AllQuestionsWithAnswersSchema>;

// Тип для категории
export type OneCategoryType = z.infer<typeof OneCategorySchema>;

// Тип для списка категорий
export type AllCategoriesType = z.infer<typeof AllCategoriesSchema>;
