import { RiArrowDropRightLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

interface ToggleSwitchProps {
  goTo?: string
  isOn?: boolean
  setIsOn?: () => void
}

const ToggleSwitch = (props: ToggleSwitchProps) => {
  const { isOn, setIsOn, goTo } = props

  if (typeof isOn !== 'boolean') {
    return (
      <Link to={goTo ?? ''}>
        <RiArrowDropRightLine className="mr-1 size-8 text-gray-700" />
      </Link>
    )
  }

  return (
    <button
      onClick={setIsOn}
      className={`relative flex h-6 w-12 items-center rounded-full p-1 transition-colors duration-300 ${
        isOn ? 'bg-green-500' : 'bg-gray-300'
      }`}
    >
      <div
        className={`h-5 w-5 transform rounded-full shadow-md transition-transform duration-300 ${
          isOn ? 'translate-x-5 bg-white' : 'translate-x-0 bg-gray-700'
        }`}
      ></div>
    </button>
  )
}

export default ToggleSwitch
