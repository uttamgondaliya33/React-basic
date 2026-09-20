import { useState } from 'react'
import chai from './chai';


function App() {
  const [count, setCount] = useState(0)
  const username = "chai or code"
  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: 'black',
        height: '100vh',
        width: '100%',
        padding: '20px',
      }}
    >
      <chai/>
      <p style={{ color: 'white' }}> chai aur react {username} ||
        <button onClick={() => setCount((count) => count + 1)}>count is: {count}</button>
      </p>
    </div>
  )
}

export default App
