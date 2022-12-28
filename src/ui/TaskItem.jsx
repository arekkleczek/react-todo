import { Checkbox } from './Checkbox.jsx'
import { BsX } from 'react-icons/bs'

const pendingTaskCSS = 'ml-4'
const finishedTaskCSS = 'ml-4 line-through text-gray-400'

export const TaskItem = ({ task, onTaskUpdate, onRemove }) => {
  return (
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
  )
}
