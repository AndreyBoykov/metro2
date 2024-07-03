import { z } from "zod";

// Определение схемы для ответа
export const OneAnswerSchema = z.object({
  id: z.number(),
  answer: z.string(),
  isCorrect: z.boolean(),
  question_id: z.number(),
});

// Определение схемы для вопроса
export const OneQuestionWithAnswerSchema = z.object({
  id: z.number(),
  question: z.string(),
  category_id: z.number(),
  Answers: z.array(OneAnswerSchema),
});

// Определение схемы для получения всех вопросов
export const AllQuestionsWithAnswersSchema = z.array(OneQuestionWithAnswerSchema);

// Определение схемы для получения всех категорий
export const OneCategorySchema = z.object({
  id: z.number(),
  category: z.string(),
});

export const AllCategoriesSchema = z.array(OneCategorySchema);
