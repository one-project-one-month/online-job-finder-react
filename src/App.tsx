import Logo from '@/features/auth/Logo'
import Welcome from '@/features/auth/Welcome'
import CheckYourEmail from '@/features/auth/CheckYourEmail'
import ChangedPassword from './features/auth/ChangedPassword'

export default function App() {
  return (
    <div>
      <Logo />
      <Welcome />
      <CheckYourEmail />
      <ChangedPassword />
    </div>
  )
}
