import { useState, lazy } from 'react'
import './App.css'
const Counter = lazy(() => import('service-ab/Counter'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Service A</h1>
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
