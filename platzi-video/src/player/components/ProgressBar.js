import React from 'react'
import './ProgressBar.css'

const ProgressBar = props => {
  return (
    <div className="ProgressBar">
      <input
        type="range"
        min={0}
        max={props.duration}
        value={props.value}
      />
    </div>
  )
}

export default ProgressBar
