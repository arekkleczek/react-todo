import { useState } from 'react'
import { BsX } from 'react-icons/bs'
import { Checkbox } from './Checkbox.jsx'
import {TaskItem} from "./TaskItem";

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
        <TaskItem
          task={task}
          onTaskUpdate={onTaskUpdate}
          onRemove={onRemove}
        />
      ))}
      <li className="bg-gray-800 p-4 text-center sm:flex text-gray-500 text-sm justify-between border-t border-gray-700">
        <span>{tasks.active.length} items left</span>
        <div className="mx-auto flex gap-2 justify-center my-4 sm:my-0">
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
