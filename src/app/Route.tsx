import LoadingDots from '@/components/_ui/LoadingDots'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Home = React.lazy(() => import('../pages/Home/index'))
const Listing = React.lazy(() => import('../pages/Listing/index'))
const Add = React.lazy(() => import('../pages/Add/index'))
const Chat = React.lazy(() => import('../pages/Chat/index'))
const Save = React.lazy(() => import('../pages/Save/index'))

const Onboarding = React.lazy(() => import('@/pages/Auth/Onboarding'))
const SplashScreen = React.lazy(() => import('@/pages/Auth/SplashScreen'))
const Signin = React.lazy(() => import('@/pages/Auth/Signin'))
const Signup = React.lazy(() => import('@/pages/Auth/Signup'))
const ForgotPasswd = React.lazy(() => import('@/pages/Auth/ForgotPasswd'))
const EmailVerify = React.lazy(() => import('@/pages/Auth/EmailVerify'))
const ChangedPasswd = React.lazy(() => import('@/pages/Auth/ChangedPasswd'))

const RouterPage = () => {
  return (
    <React.Suspense fallback={<LoadingDots />}>
      <Routes>
        <Route path="/" index element={<Onboarding />} />
        <Route path="/welcome" element={<SplashScreen />} />
        <Route path="/auth/signin" element={<Signin />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPasswd />} />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/change-password" element={<ChangedPasswd />} />

        {/* changed home route from '/' to '/home' */}
        <Route path="/home" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/add" element={<Add />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/save" element={<Save />} />
      </Routes>

      <Outlet />
    </React.Suspense>
  )
}

export default RouterPage
