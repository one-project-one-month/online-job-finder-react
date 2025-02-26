import { ChangeEvent, useState } from 'react'

interface FormInputProps {
  name: string
  label: string
  type: string
  placeholder: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function FormInput(props: FormInputProps) {
  const { name, label, type, placeholder, value, onChange } = props

  const [inputType, setInputType] = useState('password')
  const [isVisible, toggleVisible] = useState(false)

  function handleInputPassword() {
    toggleVisible(!isVisible)
    if (inputType === 'password') setInputType('text')
    else setInputType('password')
  }

  return (
    <div className="my-7">
      <label htmlFor={name} className="block text-left text-lg font-medium">
        {label}
      </label>
      <div className="relative">
        <input
          type={type === 'password' ? inputType : type}
          placeholder={placeholder}
          id={name}
          value={value}
          onChange={onChange}
          className="mt-3 w-full rounded-lg bg-white p-3.5 placeholder:text-gray-700"
        />
        {type === 'password' && (
          <button
            onClick={handleInputPassword}
            className="absolute right-5 top-[40%]"
          >
            {isVisible ? 'show' : 'hide'}
          </button>
        )}
      </div>
    </div>
  )
}
