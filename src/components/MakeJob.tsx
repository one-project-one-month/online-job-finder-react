
import PlusIc from '@/components/SVG/Profile/PlusIc'
import MakeJobCard from './MakeJobCard'


const MakeJob = () => {
  const mockArray = [
    {
      title: 'Job Position',
      actionIcon: <PlusIc />,
    },
    {
      title: 'Type of workplace',
      actionIcon: <PlusIc />,
    },
    {
      title: 'Job location',
      actionIcon: <PlusIc />,
    },
    {
      title: 'Company',
      actionIcon: <PlusIc />,
    },
    {
      title: 'Employment type',
      actionIcon: <PlusIc />,
    },
    {
      title: 'Description',
      actionIcon: <PlusIc />,
    },
  ]
  return (
    <div>
      {mockArray.map((item, index) => {
        return (
          <MakeJobCard
            key={index}
            title={item?.title}
            actionIcon={item?.actionIcon}
          />
        )
      })}
    </div>
  )
}

export default MakeJob
