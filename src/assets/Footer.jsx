import React from 'react'
import './footer.css'
import Button from './Button'
function Footer() {
  return (
    <>
        <div className='Navbar'>
                <Button name='Linkdin' link={'https://www.linkedin.com/in/harshdeep-singh-8246b013a/'}></Button>
                <Button name='Github' link={'https://github.com/kendriyavid'}></Button>
                <Button name='Leetcode' link={'https://leetcode.com/u/harshdeepkv/'}></Button>
                <Button name='Gmail' link={'harshdeepkv@gmail.com'}></Button>
        </div>
    </>
  )
}

export default Footer