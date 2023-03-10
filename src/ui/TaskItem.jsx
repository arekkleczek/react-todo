import { Draggable } from 'react-beautiful-dnd'
import { RxDragHandleDots1 } from 'react-icons/rx'
import { Checkbox } from './Checkbox.jsx'
import { BsX } from 'react-icons/bs'

const pendingTaskCSS = 'ml-4'
const finishedTaskCSS = 'ml-4 line-through text-gray-400'

export const TaskItem = ({ task, index, onTaskUpdate, onRemove }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <li
          key={task.id}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="pl-0 p-4 bg-white dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
        >
        <span className="w-7 cursor-grab flex items-center justify-center">
          <RxDragHandleDots1 className="text-xl text-gray-400" />
        </span>
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
      )}
    </Draggable>
  )
}
