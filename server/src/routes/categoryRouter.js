/* eslint-disable consistent-return */
const { Router } = require('express');
const { Question, Answer, Category } = require('../../db/models');

const router = Router();

// Получение названия всех категорий
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Получение всех вопросов по категории
router.get('/:categoryId', async (req, res) => {
  const { categoryId } = req.params;

  try {
    const question = await Question.findAll({
      where: { category_id: categoryId },
      include: [{ model: Answer }],
    });

    if (!question) {
      return res.status(404).json({ error: 'Question not found in this category' });
    }

    res.json(question);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Получение одного случайного вопроса по категории
router.get('/:categoryId/random', async (req, res) => {
  const { categoryId } = req.params;

  try {
    const questions = await Question.findAll({
      where: { category_id: categoryId },
      include: [{ model: Answer }],
    });

    if (questions.length === 0) {
      return res.status(404).json({ error: 'No questions found for this category' });
    }

    // Выбор случайного вопроса
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];

    res.json(randomQuestion);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
