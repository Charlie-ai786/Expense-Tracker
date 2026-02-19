import React from 'react'
import TaskSection from '../components/TaskSection';
const Task = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Task Management</h1>
      <p className="text-gray-400">
        Manage your tasks and track progress.
      </p>
      <TaskSection />
    </div>  
  )
}

export default Task