import AuthHead from '@/features/auth/AuthHead'
import FormInput from '@/features/auth/FormInput'
import { FormEvent, useState } from 'react'
import RememberMe from '@/features/auth/RememberMe'
import { Button } from '@/components/ui/button'
import googleSvg from '@/assets/images/auth/google.svg'
import HaveAccount from './HaveAccount'

export default function Login() {
  const [emailVal, setEmailVal] = useState('')
  const [passwordVal, setPasswordVal] = useState('')
  const [checkedVal, setCheckedVal] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }
  return (
    <div className="min-h-screen w-full bg-gray-100 px-7 py-16">
      <AuthHead
        headTitle="welcome back"
        headCaption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
      />
      <form onSubmit={handleSubmit} className="mt-16 px-3">
        <FormInput
          name="email"
          label="Email"
          type="email"
          placeholder="justinmyo2025@gmail.com"
          value={emailVal}
          onChange={(e) => setEmailVal(e.target.value)}
        />

        <FormInput
          name="password"
          label="Password"
          type="password"
          placeholder="********"
          value={passwordVal}
          onChange={(e) => setPasswordVal(e.target.value)}
        />

        <RememberMe
          isChecked={checkedVal}
          onChange={() => setCheckedVal(!checkedVal)}
        />
        <div className="px-3">
          <Button className="mt-12 w-full bg-[#130160] py-6 uppercase">
            login
          </Button>
          <Button className="mt-3 w-full bg-[#d6cdfe] py-6 uppercase text-[#130160]">
            <img src={googleSvg} alt="" />
            &nbsp;sign in with google
          </Button>
        </div>
      </form>
      <HaveAccount link="#" label="Sign up" />
    </div>
  )
}
