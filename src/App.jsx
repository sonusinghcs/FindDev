import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Github from './components/github/Github'
import Leetstats from './components/leetcode/Leetstats'

function App() {
  

  return (
    <>
      <div className='flex flex-row  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-blue-700'>
        <div className='basis-1/2 p-5 '><Github/></div>
        <div className='basis-1/2 p-5 '><Leetstats/></div>
      </div>
    </>
  )
}

export default App
