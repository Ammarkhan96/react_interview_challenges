import { useState } from 'react'
import Dropdown from './DropDown'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl font-bold'>Drop-Down Project</h1>
      <Dropdown/>
    </>
  )
}

export default App