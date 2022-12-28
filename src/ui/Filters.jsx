export const Filters = ({ tasks, filter, onFilterChange, onClear, className }) => {
  return (
    <li className={`bg-white dark:bg-gray-800 p-4 text-center sm:flex text-gray-500 text-sm justify-between border-t border-gray-200 dark:border-gray-700 ${className}`}>
      <span>{tasks.active.length} items left</span>
      <div className="mx-auto flex gap-2 justify-center my-4 sm:my-0">
        <button
          className={`${filter === 'all' ? 'text-blue-400' : null}`}
          onClick={() => onFilterChange('all')}
        >
          All
        </button>
        <button
          className={`${filter === 'active' ? 'text-blue-400' : null}`}
          onClick={() => onFilterChange('active')}
        >
          Active
        </button>
        <button
          className={`${filter === 'finished' ? 'text-blue-400' : null}`}
          onClick={() => onFilterChange('finished')}
        >
          Completed
        </button>
      </div>
      <button onClick={onClear}>Clear Completed</button>
    </li>
  )
}
