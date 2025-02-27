import { Outlet } from 'react-router-dom'
import TabBar from '../_ui/TabBar'

const PublicLayout = () => {
  return (
    <div className="flex flex-col h-screen">
    <div className="flex-1  pb-[52px] md:pb-[60px] lg:pb-[70px]">
        <Outlet />
      </div>
    <TabBar />
  </div>
  )
}

export default PublicLayout