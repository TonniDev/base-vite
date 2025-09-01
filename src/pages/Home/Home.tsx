import {useState} from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import ThemeSwitcher from "../../lib/ui/ThemeSwitcher.tsx";

export const Home = () => {

  const [count, setCount] = useState(0);

  return (
    <>
      <header
        className="text-dark dark:text-light bg-gray-100 dark:bg-gray-900 sticky top-0 right-0 left-0 z-15 flex h-fit w-full items-center justify-between px-32 py-4 font-medium sm:px-8 md:px-12 lg:px-16">
        <div className="flex w-full flex-col items-center justify-end gap-4 lg:flex-row">
          <nav className="flex flex-wrap items-center justify-end gap-4 lg:mt-2">
            <ThemeSwitcher/>
          </nav>
        </div>
      </header>
      <div className="min-h-screen flex flex-col gap-4 justify-center items-center bg-gray-100 dark:bg-gray-900 py-8">
        <div className="flex flex-col items-center justify-center p-4">
          <div className="flex justify-center space-x-8 mb-8">
            <a href="https://vite.dev" target="_blank" className="hover:opacity-80 transition-opacity">
              <img src={viteLogo} className="h-24 w-24" alt="Vite logo"/>
            </a>
            <a href="https://react.dev" target="_blank" className="hover:opacity-80 transition-opacity">
              <img src={reactLogo} className="h-24 w-24 animate-spin-slow" alt="React logo"/>
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
              Edit <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">src/pages/Home/Home.tsx</code> and
              save to test HMR
            </p>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Click on the Vite and React logos to learn more
          </p>
        </div>
        <hr className="w-full py-6 border-t border-gray-200 dark:border-gray-700"/>
      </div>
    </>
  );
};
