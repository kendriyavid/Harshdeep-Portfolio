import React from 'react'
import './navbar.css'
import Button from './Button'

function Navbar() {
  return (
    <>
      <div className='Navbar'>
        <Button props='Projects'></Button>
        <Button props='Experience'></Button>
        <Button props='Contact Me'></Button>
      </div>
    </>
  )
}

export default Navbar