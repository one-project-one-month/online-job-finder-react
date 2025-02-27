import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import LoadingDots from './components/_ui/LoadingDots'

export default function App() {
  return (
    <div>
    <Suspense fallback={<div><LoadingDots/></div>}>
        <RouterProvider router={router} />
    </Suspense>
    </div>
  )
}
