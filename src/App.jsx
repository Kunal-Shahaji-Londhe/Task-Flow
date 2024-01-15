import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskInputBox from './components/TaskInputBox'
import Header from './components/Header'


function App() {
 

  return (
  <div className='flex justify-center items-center bg-black h-screen'>
  <div>
    <Header/>
    <TaskInputBox/>
  </div>
  </div>
  )
}

export default App
