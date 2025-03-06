import TopHint from '@/features/applicant_profile/TopHint'
import Position from '@/features/applicant_profile/Position'
import { Button } from '@/components/ui/button'

import pdfSvg from '@/assets/images/applicant/pdf.svg'
import successfulSvg from '@/assets/images/applicant/successful.svg'

export default function CvSuccessful() {
  return (
    <div className="min-h-screen w-full py-7">
      <TopHint />
      <Position />
      <div className="px-5">
        <div className="mt-3 rounded-md bg-[#f0eef8] p-5">
          <div className="flex gap-3">
            <img src={pdfSvg} alt="" />
            <div className="">
              <h3 className="mb-1">Jamet kudasi - CV - UI/UX Designer</h3>
              <span className="text-sm text-gray-500">
                <span>867 Kb</span>
                <span className="ml-3">14 Feb 2022 at 11:30 am</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={successfulSvg} alt="" className="my-9" />
          <h3 className="text-lg font-medium">Successful</h3>
          <p className="mt-1 text-gray-500">
            Congratulations, your application has been sent
          </p>
        </div>
      </div>
      <div className="mt-3 px-5">
        <Button className="mt-5 w-full bg-[#d5cdfd] p-6 uppercase text-[#130160]">
          find a similar job
        </Button>
        <Button className="mt-3 w-full bg-[#130160] p-6 uppercase">
          back to home
        </Button>
      </div>
    </div>
  )
}
