import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import MainPage from './components/pages/MainPage';
import QuestionsByCategory from './components/pages/QuestionsByCategory';


function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { path: '/', element: <MainPage /> },
        { path: '/categories/:categoryId/random', element: <QuestionsByCategory /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
