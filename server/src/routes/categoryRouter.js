/* eslint-disable consistent-return */
const { Router } = require('express');
const { Question, Answer, Category } = require('../../db/models');

const router = Router();

// Получение всех категорий
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Получение вопроса по категории
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

module.exports = router;
