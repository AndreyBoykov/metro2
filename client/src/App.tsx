import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import MainPage from './components/pages/MainPage';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { path: '/', element: <MainPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
