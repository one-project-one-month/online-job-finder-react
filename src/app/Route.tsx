import LoadingDots from '@/components/_ui/LoadingDots'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Home = React.lazy(() => import('../pages/Home/index'))
const Listing = React.lazy(() => import('../pages/Listing/index'))
const Add = React.lazy(() => import('../pages/Add/index'))
const Chat = React.lazy(() => import('../pages/Chat/index'))
const Save = React.lazy(() => import('../pages/Save/index'))

const RouterPage = () => {
  return (
    <React.Suspense fallback={<LoadingDots />}>
      <Routes>
        <Route path="/" element={<Home />} />
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
