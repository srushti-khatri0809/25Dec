import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, RouterProvider, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider>
        <Routes>
          <Route path='/'><Dashboard/></Route>
        </Routes>
      </RouterProvider>
    </>
  )
}

export default App
