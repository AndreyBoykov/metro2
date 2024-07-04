import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import type { RootState } from '../../redux/store';
import { getQuestionByCategoryThunk } from '../../redux/slices/category/categoryThunks';
import QuestionCard from '../ui/QuestionCard';

function QuestionsByCategory(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentQuestion = useAppSelector((state: RootState) => state.category.selectedCategory);
  const { categoryId } = useParams<{ categoryId: string }>();

  console.log('categoryId:', categoryId);

  useEffect(() => {
    if (categoryId) {
      void dispatch(getQuestionByCategoryThunk(Number(categoryId)));
    }
  }, [categoryId, dispatch]);

  const handleNextQuestion = (): void => {
    if (categoryId) {
      void dispatch(getQuestionByCategoryThunk(Number(categoryId)));
    }
  };

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Question in Category {categoryId}</h3>
      <QuestionCard question={currentQuestion} onNextQuestion={handleNextQuestion} />
    </div>
  );
}

export default QuestionsByCategory;
