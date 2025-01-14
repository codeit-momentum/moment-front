import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Style from './styles/index.tsx';

createRoot(document.getElementById('root')!).render(
  <Style>
    <App />
  </Style>,
);
