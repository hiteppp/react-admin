import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import 'virtual:svg-icons-register';
import { GlobalComponentProvider } from './Provider/index.tsx';
import '@/assets/styles/reset.scss'
createRoot(document.getElementById('root')!).render(
  <GlobalComponentProvider>
    <App />
  </GlobalComponentProvider>
);
