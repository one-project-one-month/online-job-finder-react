import AuthHead from '@/features/auth/AuthHead'
import checkEmailSvg from '@/assets/images/auth/checkemail.svg'
import { Button } from '@/components/ui/button'

export default function CheckYourEmail() {
  return (
    <div className="min-h-screen px-7 py-20 text-center md:px-16 md:py-24">
      <AuthHead
        headTitle="Check your email"
        headCaption="We have sent the reset password to the email address"
        email="brandonelouis@gmial.com"
      />
      <div className="flex items-center justify-center py-28">
        <img className="w-44 md:w-52" src={checkEmailSvg} alt="" />
      </div>
      <div className="flex flex-col">
        <Button className="mb-3 bg-[#130160] py-6 text-base uppercase hover:bg-[#130160] md:py-7 md:text-xl">
          Open your email
        </Button>
        <Button
          className="bg-[#d6cdfe] py-6 text-base uppercase hover:bg-[#d6cdfe] md:py-7 md:text-xl"
          variant="default"
        >
          Back to login
        </Button>
      </div>
      <p className="mt-7">
        You have not received the email? &nbsp;
        <a href="" className="text-[#fca34d] underline">
          Resend
        </a>
      </p>
    </div>
  )
}
