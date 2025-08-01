import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EnrollProvider from './context/EnrollContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EnrollProvider>
      <App />
    </EnrollProvider>
  </StrictMode>,
)
