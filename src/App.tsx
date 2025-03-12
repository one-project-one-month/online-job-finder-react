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
  }, [location.pathname, navigate])

  if (showOnboarding) {
    return <Onboarding />
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center pb-16">
      <RouterPage />
      {location.pathname !== '/welcome' && user && (
        <>
          <div className="mb-24"></div>
          <TabBar />
        </>
      )}
    </div>
  )
}
