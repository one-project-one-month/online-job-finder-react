import { Link, useLocation } from 'react-router-dom'
import Add from '../SVG/TabBar/Add'
import ChatInactive from '../SVG/TabBar/ChatInactive'
import HomeActive from '../SVG/TabBar/HomeActive'
import ListingInactive from '../SVG/TabBar/ListingInactive'
import SaveInactive from '../SVG/TabBar/SaveInactive'
import HomeInactive from '../SVG/TabBar/HomeInactive'
import ListingActive from '../SVG/TabBar/ListingActive'
import ChatActive from '../SVG/TabBar/ChatActive'
import SaveActive from '../SVG/TabBar/SaveActive'

const TabBar = () => {
  const location = useLocation()
  return (
    <div className="md:w-4.8/5 fixed bottom-0 w-full max-w-screen-md bg-white shadow-lg lg:w-full lg:max-w-screen-lg xl:w-1/2">
      <nav className="w-full bg-white px-0 py-2 text-center font-sans text-xs font-medium text-gray-400">
        <div className="flex h-[52px] w-full items-start justify-between gap-10 px-6 py-0">
          <Link to="/" className="my-auto flex">
            {location.pathname === '/' ? <HomeActive /> : <HomeInactive />}
          </Link>
          <Link to="/listing" className="my-auto flex">
            {location.pathname === '/listing' ? (
              <ListingActive />
            ) : (
              <ListingInactive />
            )}
          </Link>
          <Link to="/add" className="my-auto flex">
            <Add />
          </Link>
          <Link to="/chat" className="my-auto flex">
            {location.pathname === '/chat' ? <ChatActive /> : <ChatInactive />}
          </Link>
          <Link to="/save" className="my-auto flex">
            {location.pathname === '/save' ? <SaveActive /> : <SaveInactive />}
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default TabBar
