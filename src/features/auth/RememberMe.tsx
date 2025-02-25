import { ChangeEvent } from 'react'

interface RememberMeProps {
  isChecked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function RememberMe(props: RememberMeProps) {
  const { isChecked, onChange } = props
  return (
    <div className="flex justify-between">
      <label className="flex cursor-pointer items-center space-x-2">
        <input
          type="checkbox"
          id="remember"
          checked={isChecked}
          onChange={onChange}
          className="h-5 w-5 rounded border-gray-300 accent-blue-600 focus:ring-2 focus:ring-blue-500"
        />
        <span className="font-medium text-gray-700">Remember me</span>
      </label>

      <a href="#">Forgot password ?</a>
    </div>
  )
}
