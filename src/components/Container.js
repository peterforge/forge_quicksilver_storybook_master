import React from 'react'
import './container.css'

function Container (props) {
  const { variant = 'container', children, ...rest } = props
  return (
    <div> 
    <button className={`container ${variant}`} {...rest}>
      {children}
    </button>
    </div>
  )
}

export default Container