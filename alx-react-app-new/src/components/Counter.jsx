import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div style={{background:"#6084cd", color:"#f3f2f2", padding:"10px", marginBottom:"20px"}}>
      <p style={{fontSize:"1.3rem"}}>Current cout: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
