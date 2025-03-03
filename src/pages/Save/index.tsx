import Dot from '@/components/SVG/Save/Dot'
import Google from '@/components/SVG/Save/Google'
import NoJob from '@/components/SVG/Save/NoJob'

const SavePage = () => {
  const saveJobs = ['asd']
  if (saveJobs.length === 0) {
    return (
      <div className="pt-[80px]">
        <div className="flex flex-col items-center justify-center">
          <div className="font-open-sans text-[20px] font-bold text-[#150B3D]">
            No Savings
          </div>
          <div className="font-open-sans my-5 w-[250px] max-w-full text-center text-[16px] font-normal text-[#524B6B]">
            You don't have any jobs saved, please find it in search to save jobs
          </div>
          <NoJob />
          <button className="mt-[80px] h-[50px] w-[213px] flex-shrink-0 rounded-[6px] bg-[#130160] text-white shadow-lg shadow-[rgba(153,171,198,0.18)]">
            Find a job
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between pt-6">
        <div className="mx-auto pl-8 text-lg font-bold text-[#150B3D]">
          Save Job
        </div>
        <div className="pr-5 text-sm font-normal text-[#FF9228]">
          Delete all
        </div>
      </div>

      <div className="mx-auto mt-6 w-[90%] rounded-2xl bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <Google />
          <button className="text-gray-400">
            <Dot />
          </button>
        </div>
        <h2 className="mt-2 text-lg font-bold text-gray-900">UI/UX Designer</h2>
        <p className="text-sm text-gray-500">Google Inc · California, USA</p>
        <div className="mt-4 flex gap-2">
          <span className="rounded-md bg-gray-100 px-4 py-1 text-xs text-gray-700">
            Design
          </span>
          <span className="rounded-md bg-gray-100 px-4 py-1 text-xs text-gray-700">
            Full time
          </span>
          <span className="rounded-md bg-gray-100 px-4 py-1 text-xs text-gray-700">
            Senior designer
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
          <span>25 minutes ago</span>
          <span className="font-bold text-black">
            $15K <span className="font-normal text-gray-400">/Mo</span>
          </span>
        </div>
      </div>
      <div className="mx-auto mt-6 w-[90%] rounded-2xl bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <Google />
          <button className="text-gray-400">
            <Dot />
          </button>
        </div>
        <h2 className="mt-2 text-lg font-bold text-gray-900">UI/UX Designer</h2>
        <p className="text-sm text-gray-500">Google Inc · California, USA</p>
        <div className="mt-4 flex gap-2">
          <span className="rounded-md bg-gray-100 px-4 py-1 text-xs text-gray-700">
            Design
          </span>
          <span className="rounded-md bg-gray-100 px-4 py-1 text-xs text-gray-700">
            Full time
          </span>
          <span className="rounded-md bg-gray-100 px-4 py-1 text-xs text-gray-700">
            Senior designer
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
          <span>25 minutes ago</span>
          <span className="font-bold text-black">
            $15K <span className="font-normal text-gray-400">/Mo</span>
          </span>
        </div>
      </div>
      <div className="mx-auto mt-6 w-[90%] rounded-2xl bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <Google />
          <button className="text-gray-400">
            <Dot />
          </button>
        </div>
        <h2 className="mt-2 text-lg font-bold text-gray-900">UI/UX Designer</h2>
        <p className="text-sm text-gray-500">Google Inc · California, USA</p>
        <div className="mt-4 flex gap-2">
          <span className="rounded-md bg-gray-100 px-4 py-1 text-xs text-gray-700">
            Design
          </span>
          <span className="rounded-md bg-gray-100 px-4 py-1 text-xs text-gray-700">
            Full time
          </span>
          <span className="rounded-md bg-gray-100 px-4 py-1 text-xs text-gray-700">
            Senior designer
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
          <span>25 minutes ago</span>
          <span className="font-bold text-black">
            $15K <span className="font-normal text-gray-400">/Mo</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SavePage
