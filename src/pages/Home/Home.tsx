import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'

export const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="flex justify-center space-x-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="hover:opacity-80 transition-opacity">
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:opacity-80 transition-opacity">
          <img src={reactLogo} className="h-24 w-24 animate-spin-slow" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Vite + React + Tailwind</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8 w-full max-w-md">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="mb-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors w-full"
        >
          count is {count}
        </button>
        <p className="text-gray-700 dark:text-gray-300">
          Edit <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">src/pages/Home/Home.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
};
