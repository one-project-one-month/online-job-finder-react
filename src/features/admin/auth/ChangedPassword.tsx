import verifyEmailSvg from '@/assets/images/auth/verifymail.svg'
import { Button } from '@/components/ui/button'
import AuthHead from '@/features/admin/auth/AuthHead'

export default function ChangedPassword() {
  return (
    <div className="min-h-screen px-7 py-20 text-center md:px-16 md:py-24">
      <AuthHead
        headTitle="Successfully"
        headCaption="Your password has been updated, please change your password regularly to avoid this happening"
      />
      <div className="flex items-center justify-center py-28">
        <img className="w-36 md:w-56" src={verifyEmailSvg} alt="" />
      </div>
      <div className="flex flex-col">
        <Button className="mb-3 bg-[#130160] py-6 uppercase hover:bg-[#130160] md:py-7">
          Continue
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
