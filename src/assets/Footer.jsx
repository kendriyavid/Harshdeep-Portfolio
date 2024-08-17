import React from 'react'
import './footer.css'
import Button from './Button'
function Footer() {
  return (
    <>
        <div className='Navbar'>
                <Button props={'Linkdin'}></Button>
                <Button props={'Github'}></Button>
                <Button props={'X'}></Button>
                <Button props={'Leetcode'}></Button>
                <Button props={'Gmail'}></Button>
        </div>
    </>
  )
}

export default Footer