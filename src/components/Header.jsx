import React from 'react'
import gif from '../assets/gif.gif'

function Header() {
  return (
    <div className='my-16'>
        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">TaskFlow⚡
        </h1>
        <p className="mb-1 text-lg font-normal text-gray-500 lg:text-2xl sm:px-16 xl:px-16 dark:text-gray-500">Organize all your todos
            and tasks in one place
        </p>
    </div>
  )
}

export default Header