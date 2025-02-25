interface HaveAccountProps {
  link: string
  label: string
}

export default function HaveAccount(props: HaveAccountProps) {
  const { link, label } = props
  return (
    <div className="mt-7 text-center text-gray-700">
      You don't have an account yet?{' '}
      <a href={link} className="text-yellow-600 hover:underline">
        {label}
      </a>
    </div>
  )
}
