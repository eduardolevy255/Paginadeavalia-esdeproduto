import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './login/login.jsx'
import PagainadeAvaliacao from './pagina-de-avaliacao/pagina-de-avaliacao.jsx'
import './pagina-de-avaliacao/style.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PagainadeAvaliacao />
  </StrictMode>,
)
