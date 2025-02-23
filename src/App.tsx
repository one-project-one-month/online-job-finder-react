
import FindJob from './components/FindJob'
import Header from './components/Header'

import JoinNow from './components/JoinNow'
import Nav from './ui/Nav'
export default function App() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center pb-16">
      <Header />
      <JoinNow />
      <FindJob />
      <Nav />
    </div>
  )
}
