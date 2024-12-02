import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quotes from './Components/Quotes'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div><Quotes/></div>
  )
}

export default App
