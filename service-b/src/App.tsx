import { useState } from 'react'
import './App.css'
import Counter from 'service-ab/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Service B</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Counter />
    </>
  )
}

export default App
