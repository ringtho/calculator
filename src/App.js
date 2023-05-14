import React, { useState } from 'react'
import * as math from 'mathjs'

function App () {
  const [value, setValue] = useState({
    currentOperand: '0',
    previousResult: '',
    formula: '',
    result: '',
    evaluated: false
  })

  const handleClick = (e) => {
    const symbol = e.target.innerText
    if (symbol === '0' && value.currentOperand === '0') {
      return value
    } else if (symbol >= '0' && symbol <= '9') {
      if (isNaN(value.currentOperand)) {
        setValue(prev => {
          return {
            ...prev,
            currentOperand: symbol,
            formula: prev.formula + symbol
          }
        })
      } else if (value.currentOperand === '0') {
        setValue(prev => {
          return {
            ...prev,
            currentOperand: symbol,
            formula: symbol
          }
        })
      } else {
        setValue(prev => {
          return {
            ...prev,
            currentOperand: prev.currentOperand + symbol,
            formula: prev.formula + symbol
          }
        })
      }
    }
  }

  const handleDecimal = () => {
    const symbol = '.'
    if (value.currentOperand.includes(symbol)) {
      return value
    }
    setValue(prev => {
      return {
        ...prev,
        currentOperand: prev.currentOperand + symbol,
        formula: prev.formula + symbol
      }
    })
  }

  const handleOperator = (e) => {
    let operator = e.target.innerText
    if (operator === 'x') {
      operator = '*'
    }
    setValue(prev => {
      return {
        ...prev,
        currentOperand: operator,
        formula: prev.formula + operator
      }
    })
  }

  const handleClear = () => {
    setValue({
      currentOperand: '0',
      previousOperand: '',
      formula: '',
      operations: [],
      result: 0
    })
  }

  const getResult = () => {
    const result = math.evaluate(value.formula)
    setValue(prev => {
      return {
        ...prev,
        evaluated: true,
        result
      }
    })
    console.log(result)
  }

  console.log(value)
  return (
    <div className="app">
      <div className='calculator-container'>
        <div className='display-section'>
          <div className='formular-screen'>
          {value.formula}
          </div>
          <div id="display" className='working-screen'>
            {!value.evaluated ? value.currentOperand : value.result }
          </div>
        </div>
        <div className='buttons-container'>
          <div id="clear" onClick={handleClear}>AC</div>
          <div id="divide" onClick={handleOperator}>/</div>
          <div id="multiply" onClick={handleOperator}>x</div>
          <div id="seven" onClick={handleClick}>7</div>
          <div id="eight" onClick={handleClick}>8</div>
          <div id="nine" onClick={handleClick}>9</div>
          <div id="subtract" onClick={handleOperator}>-</div>
          <div id="four" onClick={handleClick}>4</div>
          <div id="five" onClick={handleClick}>5</div>
          <div id="six" onClick={handleClick}>6</div>
          <div id="add" onClick={handleOperator}>+</div>
          <div id="one" onClick={handleClick}>1</div>
          <div id="two" onClick={handleClick}>2</div>
          <div id="three" onClick={handleClick}>3</div>
          <div id="equals" onClick={getResult}>=</div>
          <div id="zero" onClick={handleClick}>0</div>
          <div id="decimal" onClick={handleDecimal}>.</div>
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
