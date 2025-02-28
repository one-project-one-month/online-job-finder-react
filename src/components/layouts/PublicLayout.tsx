import { Outlet, useMatch } from 'react-router-dom'
import TabBar from '../_ui/TabBar'

const PublicLayout = () => {
  const match = useMatch("/listing/filter"); 
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1  pb-[52px] md:pb-[60px] lg:pb-[70px]">
          <Outlet />
        </div>
        {!match && <TabBar />}
      
    </div>
  )
}

export default PublicLayout