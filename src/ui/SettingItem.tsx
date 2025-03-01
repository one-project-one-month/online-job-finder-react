import ToggleSwitch from '@/ui/ToggleSwitch'
import { IconType } from 'react-icons/lib'

interface SettingItemProps {
  content: string
  icon: IconType
  switchOn?: boolean
  toggleSwitch?: () => void
  setIsOpen?: () => void
}

export default function SettingItem(props: SettingItemProps) {
  const { content, icon: Icon, switchOn, toggleSwitch, setIsOpen } = props
  return (
    <li
      onClick={setIsOpen}
      className="flex justify-between rounded-lg bg-white px-3 py-3"
    >
      <div className="flex items-center">
        <Icon className="size-6 text-gray-800" />
        <span className="ml-3 text-lg font-medium text-gray-700">
          {content}
        </span>
      </div>
      <ToggleSwitch isOn={switchOn} setIsOn={toggleSwitch} />
    </li>
  )
}
