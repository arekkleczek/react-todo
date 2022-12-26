import { Footer } from './ui/Footer'
import { TaskCreator } from './ui/TaskCreator.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="h-96 relative">
        <img src="../public/bg.jpg" alt="background" className="w-full object-cover h-full" />
        <div className="bg-gradient-to-r from-indigo-800 to-fuchsia-800 absolute top-0 left-0 h-full w-full opacity-80" />
      </div>
      <div className="relative z-10 max-w-xl mx-auto -my-48 px-10">
        <TaskCreator />
        <Footer />
      </div>
    </div>
  )
}

export default App
