import { createRoot } from 'react-dom/client';
import { router } from './router/index.tsx';
import { RouterProvider } from 'react-router-dom';
import 'virtual:svg-icons-register';
import { GlobalComponentProvider } from './Provider/index.tsx';
import '@/assets/styles/reset.scss';
createRoot(document.getElementById('root')!).render(
  <GlobalComponentProvider>
    <RouterProvider router={router}></RouterProvider>
  </GlobalComponentProvider>
);
