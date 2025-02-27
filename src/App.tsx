import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'

export default function App() {
  return (
    <div>
    <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
    </Suspense>
    </div>
  )
}
