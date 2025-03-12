import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import '@/index.css'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="container mx-auto min-h-screen w-auto bg-[#F9F9F9] xl:w-1/2">
      <Router>
        <App />
      </Router>
    </div>
  </StrictMode>
)
