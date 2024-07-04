import React, { useState } from 'react';
import type { OneQuestionWithAnswerType, OneAnswerType } from '../../types/questionType';

type QuestionCardProps = {
  question: OneQuestionWithAnswerType;
  onNextQuestion: () => void;
};

function QuestionCard({ question, onNextQuestion }: QuestionCardProps): JSX.Element {
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswerChange = (answerId: number): void => {
    setSelectedAnswerId(answerId);
    const selectedAnswer: OneAnswerType | undefined = question.Answers.find(
      (answer: OneAnswerType) => answer.id === answerId,
    );
    if (selectedAnswer) {
      setIsCorrect(selectedAnswer.isCorrect);
      if (selectedAnswer.isCorrect) {
        setTimeout(() => {
          onNextQuestion();
        }, 1000); // Переход к следующему вопросу через 1 секунду
      }
    }
  };

  return (
    <div>
      <h3>{question.question}</h3>
      <ul>
        {question.Answers.map((answer) => (
          <li key={answer.id}>
            <label htmlFor={`answer-${answer.id}`}>
              <input
                id={`answer-${answer.id}`}
                type="radio"
                name="answer"
                value={answer.id}
                onChange={() => handleAnswerChange(answer.id)}
              />
              {answer.answer}
            </label>
          </li>
        ))}
      </ul>
      {isCorrect !== null && <div>{isCorrect ? 'Correct!' : 'Incorrect!'}</div>}
    </div>
  );
}

export default QuestionCard;
