import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   const [counter, setCounter] = useState(5)

   //let counter = 55

   const addValue = () => {
    if(counter==20) {
      return null
    }
    console.log("clicked!!", counter)
    //counter = counter +1;
    setCounter(counter+1)
   }

   const removeValue = () => {
    if(counter == 0) {
      return null
    }
    setCounter(counter - 1)
   }

  return (
      <>
          <h1>Hello React!!!!</h1>
          <h2>Counter value : {counter}</h2>

          <button onClick={addValue}>Add Counter {counter}</button>
          <br></br>
          <button onClick={removeValue}>Remove Counter {counter}</button>
      </>
  )
}

export default App
