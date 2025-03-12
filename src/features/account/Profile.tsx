import SettingIcon from '@/ui/SettingIcon'
import ShareIcon from '@/ui/ShareIcon'
import profile from '@/assets/images/account/profile.svg'
import FormInput from '../admin/auth/FormInput'
import { Button } from '@/components/ui/button'

export default function Profile() {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="bg-gradient-to-br from-[#130160] to-[#36353C] p-7">
        <div className="flex flex-col">
          <div className="flex justify-end gap-5">
            <ShareIcon />
            <SettingIcon />
          </div>
          <div className="text-gray-100">
            <img src={profile} alt="profile" />
            <h3 className="pt-2 font-medium">Orlando Diggs</h3>
            <p className="pb-5 text-sm text-gray-300">California, USA</p>
            <button className="rounded-lg bg-[#463d67] px-7 py-2 text-sm">
              Change Image
            </button>
          </div>
        </div>
      </div>
      <div className="px-7 pb-7">
        <FormInput
          type="text"
          label="Full name"
          name="name"
          value=""
          placeholder="Brandone Louis"
          onChange={() => console.log('')}
        />

        <FormInput
          type="date"
          value=""
          onChange={() => console.log('')}
          label="Date of birth"
          name="dob"
        />

        <div className="">
          <h3 className="mb-1 text-lg font-medium">Gender</h3>
          <div className="flex items-center justify-between gap-5">
            <div className="w-full rounded-lg bg-white p-3 text-center">
              <label
                className="flex items-center justify-center"
                htmlFor="male"
              >
                <input
                  type="radio"
                  name="gender"
                  className="size-4 peer-checked:border-red-500"
                  id="male"
                />
                &nbsp; Male
              </label>
            </div>
            <div className="w-full rounded-lg bg-white p-3 text-center">
              <label
                className="flex items-center justify-center"
                htmlFor="female"
              >
                <input
                  type="radio"
                  name="gender"
                  className="size-4 peer-checked:border-red-500"
                  id="female"
                />
                &nbsp; Female
              </label>
            </div>
          </div>
        </div>

        <FormInput
          type="email"
          label="Email"
          name="email"
          value=""
          onChange={() => console.log('')}
          placeholder="Brandonelouis@gmail.com"
        />

        <div className="">
          <label htmlFor="phone" className="text-lg font-medium">
            Gender
          </label>
          <div className="mt-2 flex">
            <select
              name=""
              id=""
              className="rounded-l-md border-r-2 bg-white p-3 px-5"
            >
              <option value="">+1</option>
            </select>
            <input
              className="w-full rounded-r-md px-3 placeholder:text-gray-700"
              type="tel"
              name="phone"
              id="phone"
              placeholder="619 3456 7890"
            />
          </div>
        </div>
        <FormInput
          type="text"
          label="Location"
          name="location"
          value=""
          onChange={() => console.log('')}
          placeholder="California, United states"
        />

        <Button className="w-full bg-[#130160] py-6 text-lg uppercase">
          Save
        </Button>
      </div>
    </div>
  )
}
