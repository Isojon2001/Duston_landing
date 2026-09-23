import './styles'
import { StrictMode, React } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
