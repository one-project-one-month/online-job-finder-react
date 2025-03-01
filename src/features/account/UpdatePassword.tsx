import { GoArrowLeft } from 'react-icons/go'
import { Button } from '@/components/ui/button'
import FormInput from '@/features/admin/auth/FormInput'

export default function UpdatePassword() {
  return (
    <div className="min-h-screen w-full bg-gray-100 p-7">
      <GoArrowLeft className="text-2xl font-medium text-gray-900" />
      <h1 className="mb-12 mt-9 text-xl font-medium text-gray-900">
        Update Password
      </h1>
      <div className="">
        <FormInput
          type="password"
          label="Old password"
          name="old"
          value=""
          onChange={() => console.log('')}
          placeholder="********"
        />
        <FormInput
          type="password"
          label="New password"
          name="new"
          value=""
          onChange={() => console.log('')}
          placeholder="********"
        />
        <FormInput
          type="password"
          label="Confirm password"
          name="confirm"
          value=""
          onChange={() => console.log('')}
          placeholder="********"
        />
      </div>
      <div className="text-center">
        <Button className="mt-56 bg-[#130160] px-28 py-6 text-lg uppercase">
          Update
        </Button>
      </div>
    </div>
  )
}
