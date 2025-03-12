import siteLogo from '@/assets/images/auth/logo.svg'

export default function Logo() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#130160] text-white">
      <div className="flex flex-col items-center justify-center">
        <img className="size-20" src={siteLogo} alt="online job finder" />
        <h1 className="mt-5 text-2xl font-medium">Online Job Finder</h1>
      </div>
    </div>
  )
}
