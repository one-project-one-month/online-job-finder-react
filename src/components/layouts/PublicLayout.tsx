import { Outlet } from 'react-router-dom'
import TabBar from '../_ui/TabBar'

const PublicLayout = () => {
  return (
    <div>
      <Outlet/>
      <TabBar/>
    </div>
  )
}

export default PublicLayout