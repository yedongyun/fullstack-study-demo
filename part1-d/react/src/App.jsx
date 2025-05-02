import { useState } from 'react'

import './App.css'

function App() {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [click, setClick] = useState({
    left: 0,
    right: 0
  }
  )


  return (
    <>
      {click.left}
      <button onClick={() => setClick({ ...click, left: click.left + 1 })}>
        +
      </button>
      <button onClick={() => setClick({ ...click, right: click.right + 1 })}>
        +
      </button>
      {click.right}
    </>
  )
}

export default App
