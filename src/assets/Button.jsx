
import React from 'react'
import './button.css'

function Button({props}) {
    const name = props
  return (
    <>
        <div className='Button'>
            {name}
        </div>
    </>
  )
}

export default Button