import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/Index.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
