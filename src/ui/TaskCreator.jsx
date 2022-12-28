import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import {Checkbox} from "./Checkbox";

export const TaskCreator = ({ onAdd }) => {
  const [task, setTask] = useState({
    id: uuid(),
    title: '',
    finished: false,
  })
  const [error, setError] = useState('')

  function handleKeyDown(e) {
    if (e.key !== 'Enter') return
    if (!task.title.length) {
      setError('Enter task\s title')
      return
    }
    setError('')
    onAdd(task)
    setTask({
      id: uuid(),
      title: '',
      finished: false,
    })
  }

  return (
    <div className="bg-gray-800 p-4 rounded-md">
      <div className="flex items-center">
        <Checkbox isChecked={task.finished} onClick={() => setTask({ ...task, finished: !task.finished })} />
        <input
          value={task.title}
          type="text"
          className="flex-1 bg-transparent outline-0 text-white ml-4"
          placeholder="Create a new task..."
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          onKeyDown={handleKeyDown}
        />
      </div>
      {error && <p className="text-red-500 mt-2 text-xs">{error}</p>}
  </div>
  )
}
