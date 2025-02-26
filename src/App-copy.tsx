import Logo from '@/features/auth/Logo'
import Welcome from '@/features/auth/Welcome'
import CheckYourEmail from '@/features/auth/CheckYourEmail'
import ChangedPassword from './features/auth/ChangedPassword'
import Register from '@/features/auth/Register'
import Login from '@/features/auth/Login'
import ForgotPassword from '@/features/auth/ForgotPassword'

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
