import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, reset, incrementByAmount } from './features/counter/counterSlice'
import { useState } from 'react'

function App() {

  const [input, setInput] = useState('')

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleIncrementClick() {
    dispatch(increment())
  }

  function handleDecrementClick() {
    dispatch(decrement())
  }

  function handleResetClick() {
    dispatch(reset())
  }

  function incbyvalue() {
    dispatch(incrementByAmount(input))
    setInput('')
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
      <div style={{display: 'flex', gap: 20}}>
        <p>Count: {count}</p>
        <button onClick={handleIncrementClick}>+</button>
        <button onClick={handleDecrementClick}>-</button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
      <div style={{display: 'flex', gap: 20}}>
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" />
        <button onClick={incbyvalue}>Inc by Value</button>
      </div>
    </div>
  )
}

export default App
