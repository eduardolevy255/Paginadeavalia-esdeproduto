import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Importa o CSS global do projeto
import "./index.css"; 
import HomePage from './assets/homepage/homepage.jsx';




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);