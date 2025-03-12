import { HiDotsVertical } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export default function TopHint() {
  return (
    <div className="flex items-center justify-between px-7">
      <HiArrowNarrowLeft className="size-5" />
      <HiDotsVertical className="size-5" />
    </div>
  )
}
