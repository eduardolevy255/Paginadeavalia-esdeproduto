import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Importa o CSS global do projeto
import "./index.css"; 

// Importa o componente Login. 
// O caminho é relativo a 'src/' e usa o PascalCase: Pasta/Arquivo
import Login from './Login/Login.jsx'; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Login />
  </StrictMode>
);