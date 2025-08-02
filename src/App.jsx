import { useState } from 'react'

import './App.css'
import Sudoku from './components/Sudoku'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sudoku />
    </>
  )
}

export default App
