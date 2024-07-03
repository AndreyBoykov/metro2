import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import type { RootState } from '../../redux/store';
import { getQuestionByCategoryThunk } from '../../redux/slices/category/categoryThunks';

type QuestionsByCategoryProps = {
  categoryId: number;
};

function QuestionsByCategory({ categoryId }: QuestionsByCategoryProps): JSX.Element {
  const dispatch = useAppDispatch();
  const questionsByCategory = useAppSelector((state: RootState) => state.category.selectedCategory);
  const { questionId } = useParams<{ questionId: string }>();

  useEffect(() => {
    void dispatch(getQuestionByCategoryThunk(categoryId));
  }, [categoryId, dispatch]);

  if (!questionsByCategory) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questionsByCategory.find((q) => q.id === parseInt(questionId || '1', 10));

  if (!currentQuestion) {
    return <div>No questions found</div>;
  }

  return (
    <div>
      <h3>{currentQuestion.question}</h3>
      <ul>
        {currentQuestion.Answers.map((answer) => (
          <li key={answer.id}>{answer.answer}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionsByCategory;
