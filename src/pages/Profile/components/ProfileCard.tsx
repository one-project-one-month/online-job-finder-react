import React from 'react'

interface ProfileCardProps {
  mainIcon: JSX.Element
  title: string
  actionIcon?: JSX.Element
  handleClick?: () => void
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  mainIcon,
  title,
  actionIcon,
  handleClick
}) => {
  return (
    <div className="mx-4 my-3 flex items-center justify-between rounded-lg bg-white px-5 py-3 shadow-md">
      <div className="flex items-center gap-2">
        {mainIcon}
        <p className="font-dm-sans text-[14px] font-bold leading-normal text-[#150B3D]">
          {title}
        </p>
      </div>
      {actionIcon && <button onClick={handleClick}>{actionIcon}</button>}
    </div>
  )
}

export default ProfileCard
