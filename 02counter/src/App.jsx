import { useState } from 'react'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0)
  //let counter = 5

  const addValue = () => {
    console.log("clicked",counter)
    setCounter(counter + 1)

  }
  const RemoveValue = () => {
    setCounter(counter - 1)
  }
  return (
  <div className="App">
    <h1> chai aur react</h1>
    <h2>counter : {counter}</h2>
    <button
    onClick={addValue}
    > Add Value {counter}</button>
    <br></br>
    <br></br>
    <button
    onClick ={RemoveValue}
    >Remove value {counter}</button>
  </div>
  )
}

export default App
