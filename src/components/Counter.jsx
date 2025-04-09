import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { action1, action2 } from '../store/slices/counterSlice'

const x = {
  name : "mohamedasdasdasd",
  age : 56645646,
  y : 234234
}


const y = "om sayd"

const Counter = () => {
  const dispatch = useDispatch()
  const countValue = useSelector(state => state.counter.countValue)

  const handleInc = () => {
    dispatch(action1())
  }

  return (
    <div>
      <p>count : {countValue}</p>
      <button onClick={handleInc}>+</button>
      <button onClick={() => dispatch(action2())}>-</button>
    </div>
  )
}
export default Counter 
