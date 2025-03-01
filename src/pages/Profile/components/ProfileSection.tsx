import AboutMe from '@/components/SVG/Profile/AboutMe'
import PlusIc from '@/components/SVG/Profile/PlusIc'
import WorkExpIc from '@/components/SVG/Profile/WorkExpIc'
import EduIc from '@/components/SVG/Profile/EduIc'
import SkillIc from '@/components/SVG/Profile/SkillIc'
import LanIc from '@/components/SVG/Profile/LanIc'
import AppreciationIc from '@/components/SVG/Profile/AppreciationIc'
import ProfileCard from './ProfileCard'

const ProfileSection = () => {
  const mockArray = [
    {
      mainIcon: <AboutMe />,
      title: 'About me',
      actionIcon: <PlusIc />,
    },
    {
      mainIcon: <WorkExpIc />,
      title: 'Work experience',
      actionIcon: <PlusIc />,
    },
    {
      mainIcon: <EduIc />,
      title: 'Education',
      actionIcon: <PlusIc />,
    },
    {
      mainIcon: <SkillIc />,
      title: 'Skill',
      actionIcon: <PlusIc />,
    },
    {
      mainIcon: <LanIc />,
      title: 'Language',
      actionIcon: <PlusIc />,
    },
    {
      mainIcon: <AppreciationIc />,
      title: 'Appreciation',
      actionIcon: <PlusIc />,
    },
  ]
  return (
    <div>
      {mockArray.map((item, index) => {
        return (
          <ProfileCard
            key={index}
            mainIcon={item?.mainIcon}
            title={item?.title}
            actionIcon={item?.actionIcon}
          />
        )
      })}
    </div>
  )
}

export default ProfileSection
