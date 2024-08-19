import React from 'react'
import './navbar.css'
import Button from './Button'

function Navbar() {
  return (
    <>
      <div className='Navbar'>
        <Button name='Projects' link={'.Projects'}></Button>
        <Button name='Experience'></Button>
        <Button name='Contact Me'></Button>
      </div>
    </>
  )
}

export default Navbar