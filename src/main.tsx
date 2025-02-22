import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App.tsx'
import '@/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="container bg-[#F9F9F9] min-h-screen mx-auto w-auto xl:w-1/2">
      <App />
    </div>
  </StrictMode>
)
