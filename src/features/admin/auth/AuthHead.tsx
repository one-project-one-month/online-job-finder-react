interface AuthTitleProps {
  headTitle: string
  headCaption: string
  email?: string
}

export default function AuthHead(props: AuthTitleProps) {
  const { headTitle, headCaption, email } = props
  return (
    <div className="text-center">
      <h1 className="text-4xl font-semibold capitalize text-[#0d0140] md:text-5xl">
        {headTitle}
      </h1>
      <p className="mt-5 text-base leading-7 text-gray-900 md:text-xl">
        {headCaption} &nbsp;
        <span className="font-medium">{email}</span>
      </p>
    </div>
  )
}
