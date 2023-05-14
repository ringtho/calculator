import React, { useState } from 'react'
import * as math from 'mathjs'

function App () {
  const [equals, setEquals] = useState(false)
  const [value, setValue] = useState({
    currentOperand: [],
    previousOperand: '',
    result: 0
  })

  const handleClick = (item) => {
    setEquals(false)
    setValue(prev => {
      return {
        ...prev,
        operations: [...prev.operations, item]
      }
    })
  }

  const handleClear = () => {
    setEquals(false)
    setValue({ operations: [], result: 0 })
  }

  const getResult = () => {
    setEquals(true)
    let result = value.operations.join('')
    if (result) {
      result = math.evaluate(result)
      result = math.format(result, { precision: 14 })
      // result = String(result)
      setValue(prev => {
        return {
          ...prev,
          result
        }
      })
    }
  }

  const displayContent = value.operations.length < 1 ? 0 : value.operations

  console.log(value)
  return (
    <div className="app">
      <div className='calculator-container'>
        <div className='display-section'>
          <div className='formular-screen'>
          {value.operations}
          </div>
          <div id="display" className='working-screen'>
            { !equals ? displayContent : value.result}
            {/* { value.operations.length < 1 ? 0 : value.operations} */}
            {/* { equals && value.result } */}
          </div>
        </div>
        <div className='buttons-container'>
          <div id="clear" onClick={handleClear}>AC</div>
          <div id="divide" onClick={() => handleClick('/')}>/</div>
          <div id="multiply" onClick={() => handleClick('*')}>x</div>
          <div id="seven" onClick={() => handleClick(7)}>7</div>
          <div id="eight" onClick={() => handleClick(8)}>8</div>
          <div id="nine" onClick={() => handleClick(9)}>9</div>
          <div id="subtract" onClick={() => handleClick('-')}>-</div>
          <div id="four" onClick={() => handleClick(4)}>4</div>
          <div id="five" onClick={() => handleClick(5)}>5</div>
          <div id="six" onClick={() => handleClick(6)}>6</div>
          <div id="add" onClick={() => handleClick('+')}>+</div>
          <div id="one" onClick={() => handleClick(1)}>1</div>
          <div id="two" onClick={() => handleClick(2)}>2</div>
          <div id="three" onClick={() => handleClick(3)}>3</div>
          <div id="equals" onClick={getResult}>=</div>
          <div id="zero" onClick={() => handleClick(0)}>0</div>
          <div id="decimal" onClick={() => handleClick('.')}>.</div>
        </div>
      </div>
      <div className='footer'>
        <p>Designed an Coded By</p>
        <p className='name'>Smith Ringtho</p>
      </div>
    </div>
  )
}

export default App
