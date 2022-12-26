import React from 'react'

export const TaskCreator = () => {
  return <div className="bg-gray-800 p-4 flex rounded-md">
    <input type="text" className="flex-1 bg-transparent outline-0 text-white" placeholder="Create a new task..." />
  </div>
}