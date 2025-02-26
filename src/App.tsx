import TabBar from './components/_ui/TabBar'
import RouterPage from './app/Route'


export default function App() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center pb-16">
      
      <RouterPage />
      <div className="mb-24"></div>
      <TabBar />
    </div>
  )
}
