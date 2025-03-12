import { useState } from 'react'
import SettingItem from '@/ui/SettingItem'
import { GoArrowLeft } from 'react-icons/go'
import { FiBell } from 'react-icons/fi'
import { MdOutlineDarkMode } from 'react-icons/md'
import { LuLock } from 'react-icons/lu'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { Button } from '@/components/ui/button'
import QAModal from '@/ui/QAModal'

export default function Setting() {
  const [switchOn, toggleSwitch] = useState(true)
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <div className="min-h-screen w-full bg-gray-100 p-7">
      <GoArrowLeft className="text-2xl font-medium text-gray-900" />
      <h1 className="mb-12 mt-9 text-xl font-medium text-gray-900">Settings</h1>
      <div className="flex flex-col gap-7">
        <SettingItem
          content="Notifications"
          icon={FiBell}
          switchOn={switchOn}
        />
        <SettingItem
          content="Dark mode"
          icon={MdOutlineDarkMode}
          switchOn={!switchOn}
        />
        <SettingItem content="Password" icon={LuLock} />
        <SettingItem
          content="Logout"
          icon={RiLogoutBoxRLine}
          setIsOpen={() => setIsOpenModal(true)}
        />
      </div>
      <div className="text-center">
        <Button className="mt-56 bg-[#130160] px-28 py-6 text-lg uppercase">
          Save
        </Button>
      </div>
      <QAModal open={isOpenModal} setOpen={() => setIsOpenModal(false)} />
    </div>
  )
}
