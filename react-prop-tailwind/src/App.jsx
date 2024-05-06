import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let person = {
    firstName: "Jaan",
    lastName: "Chatterjee"
  }

  let newArr = [1,2,4]

  return (
    <>
    <h1 className='bg-green-400 text-white p-4 rounded-xl'>
        Tailwind test!!!</h1>
        <Card event = "google i/o 2024" btnText="join i/o"/>
        <Card event = "WWDC 2024" btnText="please join us for an special Apple Event"/>

    </>
  )
}

export default App
