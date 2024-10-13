import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import 'virtual:svg-icons-register';
import { GlobalComponentProvider } from './Provider/index.tsx';
import '@/assets/styles/reset.scss';
createRoot(document.getElementById('root')!).render(
  <GlobalComponentProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalComponentProvider>
);
