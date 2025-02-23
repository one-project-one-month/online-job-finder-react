import welcomeSvg from '@/assets/images/auth/welcome.svg'
import nextIconSvg from '@/assets/icons/auth/next.svg'

export default function Welcome() {
  return (
    <div className="flex min-h-screen flex-col justify-between px-10 py-12 md:px-20 md:py-16">
      <h1 className="text-right text-base font-medium md:text-xl">
        Online Job Finder
      </h1>
      <div className="flex items-center justify-center">
        <img src={welcomeSvg} alt="welcome" />
      </div>
      <div>
        <h1 className="text-medium text-4xl font-semibold capitalize">
          Find Your
          <span className="block text-[#fca34d] underline">Dream Job</span> Here
        </h1>

        <p className="py-5 text-base">
          Explore all the most exciting job roles based on your interest and
          study major.
        </p>
        <button className="float-right">
          <img src={nextIconSvg} alt="next icon" />
        </button>
      </div>
    </div>
  )
}
