import { useState } from 'react'
import AuthHead from '@/features/auth/AuthHead'
import forgotPasswordSvg from '@/assets/images/auth/forgotPassword.svg'
import { Button } from '@/components/ui/button'
import FormInput from '@/features/auth/FormInput'

export default function ForgotPassword() {
  const [emailVal, setEmailVal] = useState('')
  return (
    <div className="min-h-screen bg-gray-100 px-7 py-20 text-center md:px-16 md:py-24">
      <AuthHead
        headTitle="Forgot Password?"
        headCaption="To reset your password, you need your email or mobile number that can be authenticated"
      />
      <div className="flex items-center justify-center py-16">
        <img className="w-36 md:w-48" src={forgotPasswordSvg} alt="" />
      </div>
      <FormInput
        name="email"
        label="Email"
        type="email"
        placeholder="justinmyo2025@gmail.com"
        value={emailVal}
        onChange={(e) => setEmailVal(e.target.value)}
      />
      <div className="mt-12 flex flex-col">
        <Button className="mb-3 bg-[#130160] py-6 uppercase hover:bg-[#130160] md:py-7">
          Reset password
        </Button>
        <Button
          className="bg-[#d6cdfe] py-6 uppercase hover:bg-[#d6cdfe] md:py-7"
          variant="default"
        >
          Back to login
        </Button>
      </div>
    </div>
  )
}
