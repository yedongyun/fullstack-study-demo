

import { useState } from 'react'
import './App.css'

const Display = (props) => {
  return <div>{props.count}</div>
}

const Button = ({ count, setCount }) => {
  function handleClickPlus() {
    setCount(count + 1)
  }
  function handleClickDecrease() {
    setCount(count - 1)
  }
  function handleClickByZreo() {
    setCount(0)
  }
  return (
    <div>
      <button onClick={handleClickPlus}>值加1</button>
      <button onClick={handleClickDecrease}>值减1</button>
      <button onClick={handleClickByZreo}>归0</button>

    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)
  console.log("num", count)



  console.log(count)
  return (
    <>
      <Display count={count} />
      <Button count={count} setCount={setCount}></Button>
    </>
  )
}

export default App
