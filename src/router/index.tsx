import Login from '@/modules/Login';
import Register from '@/modules/Register';
import App from '@/App';

import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '@/modules/Layout';

export const allRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: localStorage.getItem('token') ? (
          <Navigate to="/home" replace />
        ) : (
          <Navigate to="/login" replace />
        ),
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'home',
    element: <Layout />,
  },
];
export const router = createBrowserRouter(allRoutes);
