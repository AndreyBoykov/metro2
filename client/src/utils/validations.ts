import { z } from 'zod';

// Определение схемы для ответа
export const OneAnswerSchema = z.object({
  id: z.number().int().positive(),
  answer: z.string(),
  isCorrect: z.boolean(),
  question_id: z.number().int().positive(),
  createdAt: z.string().transform((str) => new Date(str).toISOString()),
  updatedAt: z.string().transform((str) => new Date(str).toISOString()),
});

// Определение схемы для вопроса
export const OneQuestionWithAnswerSchema = z.object({
  id: z.number().int().positive(),
  question: z.string(),
  category_id: z.number().int().positive(),
  Answers: z.array(OneAnswerSchema),
  createdAt: z.string().transform((str) => new Date(str).toISOString()),
  updatedAt: z.string().transform((str) => new Date(str).toISOString()),
});

// Определение схемы для получения всех вопросов
export const AllQuestionsWithAnswersSchema = z.array(OneQuestionWithAnswerSchema);

// Определение схемы для категории
export const OneCategorySchema = z.object({
  id: z.number().int().positive(),
  category: z.string(),
  createdAt: z.string().transform((str) => new Date(str).toISOString()),
  updatedAt: z.string().transform((str) => new Date(str).toISOString()),
});

// Определение схемы для получения всех категорий
export const AllCategoriesSchema = z.array(OneCategorySchema);


// Определение схемы для пользователя
export const OneUserSchema = z.object({
  id: z.number().int().positive(),
  username: z.string(),
  password: z.string(),
  email: z.string().email('Invalid email format'),
  role: z.string(),
  createdAt: z.string().transform((str) => new Date(str).toISOString()),
  updatedAt: z.string().transform((str) => new Date(str).toISOString()),
});

export const AllUsersSchema = z.array(OneUserSchema);
