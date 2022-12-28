import { useState } from 'react'
import { Footer } from './ui/Footer'
import { TaskCreator } from './ui/TaskCreator.jsx'
import { TaskList } from "./ui/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 'dasdas',
      title: 'Zrobic zakupy',
      finished: false,
    },
    {
      id: 'qwee',
      title: 'Pojsc na spacer',
      finished: true,
    },
  ])

  function handleAddingNewTask(task) {
    const tasksCopy = [...tasks]
    tasksCopy.push(task)
    setTasks(tasksCopy)
  }

  function handleTogglingTasks(id) {
    const tasksCopy = [...tasks]
    const foundTask = tasksCopy.find(task => task.id === id)
    foundTask.finished = !foundTask.finished
    setTasks(tasksCopy)
  }

  function clearCompleted() {
    const tasksCopy = [...tasks]
    const activeTasks = tasksCopy.filter(task => !task.finished)
    setTasks(activeTasks)
  }

  function removeTaskById(id) {
    const tasksCopy = [...tasks]
    const filteredTasks = tasksCopy.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="h-96 relative">
        <img src="./bg.jpg" alt="background" className="w-full object-cover h-full" />
        <div className="bg-gradient-to-r from-indigo-800 to-fuchsia-800 absolute top-0 left-0 h-full w-full opacity-80" />
      </div>
      <div className="relative z-10 max-w-xl mx-auto -my-64 px-10">
        <span className="text-white text-6xl font-semibold tracking-widest mb-4 block">TODO</span>
        <TaskCreator onAdd={handleAddingNewTask} />
        <TaskList
          data={tasks}
          onTaskUpdate={handleTogglingTasks}
          onClear={clearCompleted}
          onRemove={removeTaskById}
        />
        <Footer />
      </div>
    </div>
  )
}

export default App
