"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
const TaskCard = ({task}) => {


     //navigation
  const router = useRouter();

  const returnToCreateTask = async()=>{
    await router.push("/tasks/new")
  }

  return (
    <div className='bg-gray-800 p-10 text-white rounded-md
    hover:cursor-pointer hover:bg-gray-700'>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <button onClick={returnToCreateTask} className='bg-red-500 mt-4 mb-3'>return to new task</button>
    </div>
  )
}

export default TaskCard