/* eslint-disable consistent-return */
const { Router } = require('express');
const { Op, fn } = require('sequelize');
const { Question, Answer, UserProgress } = require('../../db/models');

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

// Получение рандомного вопроса, на который пользователь не ответил правильно
router.get('/random/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    console.log('Fetching answered questions for user:', userId);
    const answeredQuestions = await UserProgress.findAll({
      where: { user_id: userId, answeredCorrectly: true },
      attributes: ['question_id'],
    });

    const answeredQuestionIds = answeredQuestions.map((q) => q.question_id);
    console.log('Answered question IDs:', answeredQuestionIds);

    console.log('Fetching a random question excluding answered questions...');
    const question = await Question.findOne({
      where: {
        id: { [Op.notIn]: answeredQuestionIds },
      },
      include: [{ model: Answer }],
      order: fn('RANDOM'), // Для получения рандомного вопроса
    });

    if (!question) {
      console.warn('No questions available for user:', userId);
      return res.status(404).json({ error: 'No questions available' });
    }

    console.log('Returning random question:', question.id);
    res.json(question);
  } catch (error) {
    console.error('Error fetching random question:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
