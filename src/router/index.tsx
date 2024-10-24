import Login from '@/modules/Login';
import Register from '@/modules/Register';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '@/modules/Layout';

import Info from '@/views/Info';
import SubjectMap from '@/views/SubjectMap';

export const allRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: localStorage.getItem('token') ? (
          <Navigate to="/info" replace />
        ) : (
          <Navigate to="/login" replace />
        ),
      },
      {
        path: 'info',
        element: <Info />,
      },
      {
        path: 'subjectMap',
        element: <SubjectMap />,
      },
    ],
  },

  {
    path: 'subject',
    element: <Layout />,
    children: [{}],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {},
];
export const router = createBrowserRouter(allRoutes);
