import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateProduct from './component/CreateProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateProduct/>
    </>
  )
}

export default App
