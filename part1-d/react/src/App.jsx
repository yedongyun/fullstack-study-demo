import { useState } from 'react'

import './App.css'

function App() {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [click, setClick] = useState({
    left: 0,
    right: 0,
    allClick: []

  }
  )
  const anecdotes = ['If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.']

  const [selected, setSlected] = useState(0)
  const [arr, setArr] = useState([anecdotes[0]])
  function handleLeftClick() {
    setClick({
      ...click, left: click.left + 1, allClick: click.allClick.concat('L')
    })
  }
  function handleRightClick() {
    setClick({
      ...click, right: click.right + 1, allClick: click.allClick.concat('R')
    })
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function countStringFrequencies(arr) {
    const freq = Object.create(null);
    for (const str of arr) {
      freq[str] = (freq[str] || 0) + 1;
    }

    return freq;

  }

  function maxNum(obj) {
    let maxValue = 0;
    let maxKey = '';

    for (const key in obj) {
      if (obj[key] > maxValue) {
        maxValue = obj[key];
        maxKey = key;

      }
    }
    return { maxKey, maxValue }
  }
  function onClik(){
    const getRandomIn=getRandomInt(0, anecdotes.length)
    setSlected(getRandomIn)
    setArr((arr)=>[...arr,anecdotes[getRandomIn]])
    console.log(getRandomIn)
    console.log(arr)

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
      <p>{anecdotes[selected]}</p>
      <button onClick={onClik}>next anecdotes</button>
      <p>出现最多的是：{maxNum(countStringFrequencies(arr)).maxKey}出现的次数是 {maxNum(countStringFrequencies(arr)).maxValue}</p>
    </>
  )
}

export default App
