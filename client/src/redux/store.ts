import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './slices/question/questionSlice'
import categoryReducer from './slices/category/categorySlice'

export const store = configureStore({
  reducer: {
    question: questionReducer,
    category: categoryReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
