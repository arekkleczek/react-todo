import { useState } from 'react'
import { BsX } from 'react-icons/bs'
import { Checkbox } from './Checkbox.jsx'

const pendingTaskCSS = 'ml-4'
const finishedTaskCSS = 'ml-4 line-through text-gray-400'

export const TaskList = ({ data, onTaskUpdate, onClear, onRemove }) => {
  const [filter, setFilter] = useState('all')
  const tasks = {
    all: data,
    finished: data.filter((task) => task.finished),
    active: data.filter((task) => !task.finished),
  }

  return (
    <ul className="mt-2 rounded-md overflow-hidden">
      {tasks[filter].map((task) => (
        <li
          key={task.id}
          className="bg-gray-800 p-4 text-white hover:bg-gray-700 flex"
        >
          <Checkbox
            isChecked={task.finished}
            onClick={() => onTaskUpdate(task.id)}
          />
          <span className={task.finished ? finishedTaskCSS : pendingTaskCSS}>
            {task.title}
          </span>
          <button
            className="ml-auto h-5 w-5 flex-shrink-0 flex items-center justify-center"
            onClick={() => onRemove(task.id)}
          >
            <BsX className="text-lg text-red-500" />
          </button>
        </li>
      ))}
      <li className="bg-gray-800 p-4 flex text-gray-500 text-sm justify-between border-t border-gray-700">
        <span>{tasks.active.length} items left</span>
        <div className="mx-auto flex gap-2">
          <button
            className={`${filter === 'all' ? 'text-blue-400' : null}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`${filter === 'active' ? 'text-blue-400' : null}`}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button
            className={`${filter === 'finished' ? 'text-blue-400' : null}`}
            onClick={() => setFilter('finished')}
          >
            Completed
          </button>
        </div>
        <button onClick={onClear}>Clear Completed</button>
      </li>
    </ul>
  )
}
