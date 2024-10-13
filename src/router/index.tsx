import Login from '@/modules/Login';
import Register from '@/modules/Register';
import { Navigate } from 'react-router-dom';

export default [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
];
