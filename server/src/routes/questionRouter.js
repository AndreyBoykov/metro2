/* eslint-disable consistent-return */
const { Router } = require('express');
const { Question, Answer } = require('../../db/models');

const router = Router();

// Получение всех вопросов
router.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll({
      include: [{ model: Answer }],
    });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Получение вопроса по ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const question = await Question.findOne({
      where: { id },
      include: [{ model: Answer }],
    });

    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    res.json(question);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
