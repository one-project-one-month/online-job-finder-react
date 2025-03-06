import googleSvg from '@/assets/images/applicant/google.svg'

export default function Position() {
  return (
    <div className="mt-3 flex flex-col items-center justify-center py-3">
      <img
        src={googleSvg}
        alt=""
        className="z-40 size-24 rounded-full bg-[#afecfe] p-4"
      />
      <div className="z-30 -mt-7 w-full bg-[#f2f2f2] px-10 pb-5 pt-14">
        <h1 className="text-center text-lg font-medium">UI/UX Designer</h1>
        <ul className="mt-5 flex list-disc justify-between">
          <li className="list-none">Google</li>
          <li></li>
          <li className="list-none">Calfornia</li>
          <li></li>
          <li className="list-none">1 day ago</li>
        </ul>
      </div>
    </div>
  )
}
