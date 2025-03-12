import Logo from '@/features/admin/auth/Logo'
import Welcome from '@/features/admin/auth/Welcome'
import CheckYourEmail from '@/features/admin/auth/CheckYourEmail'
import ChangedPassword from './features/admin/auth/ChangedPassword'
import Register from '@/features/admin/auth/Register'
import Login from '@/features/admin/auth/Login'
import ForgotPassword from '@/features/admin/auth/ForgotPassword'

import Profile from '@/features/account/Profile'
import Setting from '@/features/account/Setting'
import UpdatePassword from '@/features/account/UpdatePassword'

export default function App() {
  const user = ''
  return (
    <div>
      {user && (
        <>
          <Logo />
          <Welcome />
          <CheckYourEmail />
          <ChangedPassword />
          <Register />
          <Login />
          <ForgotPassword />
          <Profile />
          <UpdatePassword />
        </>
      )}
      <Setting />
    </div>
  )
}
