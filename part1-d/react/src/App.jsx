import { useState } from 'react'

import './App.css'

function App() {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [click, setClick] = useState({
    left: 0,
    right: 0,
    allClick:[]
  }
  )
  function handleLeftClick() {
    setClick({
      ...click, left: click.left + 1,allClick:click.allClick.concat('L')
    })
  }
  function handleRightClick() {
    setClick({
      ...click, right: click.right + 1,allClick:click.allClick.concat('R')
    })
  }
  return (
    <>
      {click.left}
      <button onClick={handleLeftClick}>
        +
      </button>
      <button onClick={handleRightClick}>
        +
      </button>
      {click.right}
      <p>{click.allClick.join('')}</p>
    </>
  )
}

export default App
