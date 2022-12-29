import { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { TaskItem } from './TaskItem'
import { Filters } from './Filters'

export const TaskList = ({ data, onTaskUpdate, onClear, onRemove, onDragEnd }) => {
  const [filter, setFilter] = useState('all')
  const tasks = {
    all: data,
    finished: data.filter((task) => task.finished),
    active: data.filter((task) => !task.finished),
  }

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-800 mt-2 rounded-md overflow-hidden">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="dupa">
          {(provided) => (
            <ul ref={provided.innerRef}>
              {tasks[filter].map((task, index) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  index={index}
                  onTaskUpdate={onTaskUpdate}
                  onRemove={onRemove}
                  {...provided.droppableProps}
                />
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <Filters
        tasks={tasks}
        filter={filter}
        onFilterChange={setFilter}
        onClear={onClear}
      />
    </div>
  )
}
