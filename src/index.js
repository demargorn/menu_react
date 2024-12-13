import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './components/Menu/Menu';

const items = [
   { title: 'Главная страница', href: '#home' },
   { title: 'О компании', href: '#about' },
   { title: 'Контакты', href: '#contact' },
];

ReactDOM.createRoot(document.getElementById('root')).render(
   <StrictMode>
      <Menu items={items} opened={true} />
   </StrictMode>
);
