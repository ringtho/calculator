import React, { useState } from 'react'

function App () {
  const [value, setValue] = useState(0)
  return (
    <div className="app">
      <div className='calculator-container'>
        <div className='display-section'>
          <div className='formular-screen'></div>
          <div id="display" className='working-screen'>{value}</div>
        </div>
        <div className='buttons-container'>
          <div id="clear">AC</div>
          <div id="divide">/</div>
          <div id="multiply">x</div>
          <div id="seven">7</div>
          <div id="eight">8</div>
          <div id="nine">9</div>
          <div id="subtract">-</div>
          <div id="four">4</div>
          <div id="five">5</div>
          <div id="six">6</div>
          <div id="add">+</div>
          <div id="one">1</div>
          <div id="two">2</div>
          <div id="three">3</div>
          <div id="equals">=</div>
          <div id="zero">0</div>
          <div id="decimal">.</div>
          {/* <div id="equals">=</div> */}
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
