
import './App.css'

const Hello = (props: { name: string, age: number }) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}
function App() {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a + b)
  const name = 'yedongyun'
  const age = 36

  return (
    <>
      <p>hello world, it is {now.toString()}</p>
      <p>{a} +{b} is {a + b} </p>
      <Hello name="Jane" age={24} />
      <Hello name={name} age={age} />
      <footer></footer>
    </>
  )
}

export default App
