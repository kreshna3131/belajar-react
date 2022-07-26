import React, {useState} from 'react'

function HookCounter() {
  // restruktur es6
  const [count, setCount] = useState(0)


  return (
    <div>
      <button onClick={() => setCount(count + 1)} >Count {count}</button>
    </div>
  )
}

export default HookCounter

// rules of Hooks
// - only can hooks at the top level
//   - dont call hooks inside loops, conditions, or nested functions

// - only call hooks from react functions
//   - call them from within react functional components and not just any regular JS Function