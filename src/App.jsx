import { useState} from 'react'
import { Footer } from './ui/Footer'
import { TaskCreator } from './ui/TaskCreator'
import { TaskList } from './ui/TaskList'
import { ThemeSwitcher } from "./ui/ThemeSwitcher";

function App() {
  const [tasks, setTasks] = useState([])

  function handleAddingNewTask(task) {
    const tasksCopy = Array.from(tasks)
    tasksCopy.push(task)
    setTasks(tasksCopy)
  }

  function handleTogglingTasks(id) {
    const tasksCopy = Array.from(tasks)
    const foundTask = tasksCopy.find(task => task.id === id)
    foundTask.finished = !foundTask.finished
    setTasks(tasksCopy)
  }

  function clearCompleted() {
    const tasksCopy = Array.from(tasks)
    const activeTasks = tasksCopy.filter(task => !task.finished)
    setTasks(activeTasks)
  }

  function removeTaskById(id) {
    const tasksCopy = Array.from(tasks)
    const filteredTasks = tasksCopy.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }

  function onDragEnd(result) {
    if (!result.destination) return
    const tasksCopy = Array.from(tasks)
    const [reorderedTask] = tasksCopy.splice(result.source.index, 1)
    tasksCopy.splice(result.destination.index, 0, reorderedTask)
    setTasks(tasksCopy)
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="h-96 relative">
        <img src="./bg.jpg" alt="background" className="w-full object-cover h-full" />
        <div className="bg-gradient-to-r from-indigo-800 to-fuchsia-800 absolute top-0 left-0 h-full w-full opacity-80" />
      </div>
      <div className="relative z-10 max-w-xl mx-auto -my-64 px-10">
        <h1 className="text-white text-6xl font-semibold tracking-widest mb-4 flex items-center">
          <span className="mr-auto">TODO</span>
          <ThemeSwitcher />
        </h1>
        <TaskCreator onAdd={handleAddingNewTask} />
        <TaskList
          data={tasks}
          onTaskUpdate={handleTogglingTasks}
          onClear={clearCompleted}
          onRemove={removeTaskById}
          onDragEnd={onDragEnd}
        />
        <Footer />
      </div>
    </div>
  )
}

export default App
