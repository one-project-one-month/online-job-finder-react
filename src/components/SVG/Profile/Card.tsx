import EditProfile from './EditProfile'
import SettingIc from './SettingIc'
import ShareIc from './ShareIc'

const Card = () => {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-b-xl bg-gradient-to-br from-[#130160] to-[#36353C] shadow-lg lg:rounded-b-3xl">
      <div className="mx-[30px] mt-[20px] flex justify-end gap-[15px]">
        <button onClick={() => {}}>
          <ShareIc />
        </button>
        <button onClick={() => {}}>
          <SettingIc />
        </button>
      </div>
      <div className="font-dm-sans mx-5 mt-[90px] flex flex-col gap-5 text-[14px] font-normal leading-normal text-white">
        <div>
          <p>California, USA</p>
        </div>
        <div className="flex justify-between">
          <p>
            <span className="text-[14px] font-bold">120k </span>
            Follower
          </p>
          <p>
            <span className="text-[14px] font-bold">120k</span> Following
          </p>
          <button onClick={() => {}}>
            <div className="flex h-[25px] w-[120px] items-center justify-center gap-2 rounded-lg bg-[#FFF]/[0.1] text-[14px]">
              <p>Edit Profile</p>
              <EditProfile />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
