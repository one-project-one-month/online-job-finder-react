import TabBar from './components/_ui/TabBar'
import RouterPage from './app/Route'

export default function App() {
  return (
    <div>
      <RouterPage />
      <div className="mb-24"></div>
      <TabBar />
    </div>
  )
}
