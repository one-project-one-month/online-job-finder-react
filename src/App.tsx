import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import TabBar from './components/_ui/TabBar'
import RouterPage from './app/Route'

import Onboarding from '@/pages/Auth/Onboarding'

export default function App() {
  const user = ''
  const location = useLocation()
  const navigate = useNavigate()
  const [showOnboarding, setShowOnboarding] = useState(false)

  useEffect(() => {
    if (location.pathname === '/') {
      setShowOnboarding(true)
      const timer = setTimeout(() => {
        setShowOnboarding(false)
        navigate('/welcome')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  if (showOnboarding) {
    return <Onboarding />
  }

  return (
    <div>
      <RouterPage />
      <div className="mb-24"></div>
      {location.pathname !== '/welcome' && user && <TabBar />}
    </div>
  )
}
