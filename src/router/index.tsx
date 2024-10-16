import Login from '@/modules/Login';
import Register from '@/modules/Register';
import App from '@/App';

import { createBrowserRouter } from 'react-router-dom';

export const allRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
];
export const router = createBrowserRouter(allRoutes);
