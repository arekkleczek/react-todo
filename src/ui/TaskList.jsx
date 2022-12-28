import { useState } from 'react'
import { TaskItem } from "./TaskItem";
import { Filters } from "./Filters";

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
      <Filters
        tasks={tasks}
        filter={filter}
        onFilterChange={setFilter}
        onClear={onClear}
      />
    </ul>
  )
}
