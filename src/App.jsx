import { useState } from 'react'
import HolaMundo from './components/HolaMundo'

function App() {
  const [count, setCount] = useState(0) // ref de Vue

  return (
    <div>
        <HolaMundo/> 
    </div>
  )
}

export default App
