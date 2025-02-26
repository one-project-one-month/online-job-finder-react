import Logo from '@/features/admin/auth/Logo'
import Welcome from '@/features/admin/auth/Welcome'
import CheckYourEmail from '@/features/admin/auth/CheckYourEmail'
import ChangedPassword from './features/admin/auth/ChangedPassword'
import Register from '@/features/admin/auth/Register'
import Login from '@/features/admin/auth/Login'
import ForgotPassword from '@/features/admin/auth/ForgotPassword'

export default function App() {
  return (
    <div>
      <Logo />
      <Welcome />
      <CheckYourEmail />
      <ChangedPassword />
      <Register />
      <Login />
      <ForgotPassword />
    </div>
  )
}
