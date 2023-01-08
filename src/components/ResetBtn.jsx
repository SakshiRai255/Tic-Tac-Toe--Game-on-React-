import React from 'react'
import './ResetBtn.css'

function ResetBtn({resetGame}) {
  return (
    <div>
      <button className='ResetBtn' onClick={resetGame}>Reset</button>
    </div>
  )
}

export default ResetBtn