import React from 'react'
import './skills.css'
function Skills() {
  return (
    <>
        <div className='Skills'>
            <p className='heading'>Skills</p>
            <div className='list'>
                <ul id='one'>
                    <li>Golang</li>
                    <li>C++</li>
                    <li>Python</li>
                </ul>
                <ul id='two'>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                </ul>
                <ul id='three'>
                    <li>ExpressJS</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul> 
            </div>
        </div>
    </>
  )
}

export default Skills