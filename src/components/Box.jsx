import React from 'react'
import './Box.css'

function Box({onClick,value}) {

    const style = value === "X" ? "Box X": "Box O"

  return (

    <button className={style} onClick={onClick}>{value}</button>
    
  )
}

export default Box