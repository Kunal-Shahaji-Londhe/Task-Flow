
import React, { useState } from 'react'

function TaskInputBox() {

    const [currentTask, setCurrentTask] = useState('')
    const [tasks, setTasks] = useState(['create a task list!🚀'])
    const [check, setCheck] = useState(false)

    const handleInputChange = (event) => {
      setCurrentTask(event.target.value)
    }

    const handleAddTask = () =>{
      //check if currentTask is not empty
      if(currentTask.trim() !== ''){
        //add the currentTask to the tasks array
        setTasks([...tasks, currentTask])

        // clear the currentTask
        setCurrentTask('')
      }
    }

    const handleRemoveTask = (index) => {
      
      setCheck(false)

      setTimeout(() => {
        setTasks((prevTasks) => {
          const updatedTasks = [...prevTasks]
          updatedTasks.splice(index,1)
          return updatedTasks
        })
      }, 200) // 200 milisecond delay
    }

  return (
    <div className='border-2 border-white p-8 rounded-lg my-16 bg-white '>
    <div>

    <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Tasks
        </span>
        <input type="text" name="text" 
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-blue-700 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="add your task here..." 
        value={currentTask}
        onChange={handleInputChange}
        />
    </label>

    </div>

    <div className='flex justify-center'>
        <div className="btn-group btn-group-vertical">
            <button className="btn border-2 border-white text-white bg-black/80 hover:bg-black/100 px-8 py-1 rounded-full m-2 "
            onClick={handleAddTask}
            >Add+
            </button>
        </div> 
    </div>

    <div>
        <div>
        <fieldset>
            <legend>Today</legend>

            <div>
                {tasks.map((task, index) => (
                  <label className="peer ...">
                    <input type="checkbox" name="todo" className='m-1'
                      onChange={() => handleRemoveTask(index)}
                      checked={check}
                    />
                    <input key={index} type='text' value={task}
                      onChange={(e) => {

                        //Update the task dynamically without onclick in tasks array

                        const updatedTasks = [...tasks]
                        updatedTasks[index] = e.target.value
                        setTasks(updatedTasks)
                      }}

                      className='pr-28 pl-1 border-none focus:outline-none'
                    /><br/>
                    
                  </label>
                ))}
                <svg className="peer-has-[:checked]:hidden ...">
                
                </svg>
            </div>

           
        </fieldset>
        </div>
    </div>
    </div>
  )
}

export default TaskInputBox