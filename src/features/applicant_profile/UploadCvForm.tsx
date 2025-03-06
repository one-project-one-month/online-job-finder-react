import { MdOutlineDriveFolderUpload } from 'react-icons/md'
import { CiTrash } from 'react-icons/ci'

import TopHint from '@/features/applicant_profile/TopHint'
import Position from '@/features/applicant_profile/Position'
import { Button } from '@/components/ui/button'

import pdfSvg from '@/assets/images/applicant/pdf.svg'

export default function UploadCvForm() {
  const file = 'dd'
  return (
    <div className="min-h-screen w-full py-7">
      <TopHint />
      <Position />
      <div className="px-5">
        <h3 className="text-lg font-medium">Upload CV</h3>
        <p className="mt-3 text-gray-600">
          Add your CV/Resume to apply for a job
        </p>
        <div className="mt-7 rounded-md border border-dashed border-gray-700 p-5">
          {file ? (
            <div className="flex flex-col">
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
              <div className="ml-1 mt-3 text-red-600">
                <CiTrash className="inline-block size-5" />
                <span className="ml-1">Remove file</span>
              </div>
            </div>
          ) : (
            <label htmlFor="cv" className="flex items-center justify-center">
              <input type="file" name="" id="cv" className="hidden" />
              <MdOutlineDriveFolderUpload className="size-5" />
              &nbsp;Upload CV/Resume
            </label>
          )}
        </div>
      </div>
      <div className="mt-12 px-5">
        <h3 className="text-lg font-medium">Information</h3>
        <textarea
          name=""
          id=""
          className="mt-3 h-56 w-full rounded-md border border-gray-200 bg-white p-3"
          placeholder="Explain why you are the right person for this job"
        ></textarea>
        <Button className="mt-5 w-full bg-[#130160] p-6 uppercase">
          Apply now
        </Button>
      </div>
    </div>
  )
}
