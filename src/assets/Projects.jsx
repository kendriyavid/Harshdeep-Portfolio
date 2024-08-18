import React from 'react'
import './projects.css'
import Button from './Button'
function Projects() {
  return (
    <>
        <div className='Projects'>
            <p className='heading'>Projects</p>
            <div className='project'>
              <div className='p1'>
                <Button props={'Zeity'}></Button>
                <div class="box">200px x 200px</div>
                <p id='description'>Zeity is a user-friendly resume builder that helps you create professional resumes quickly with customizable templates and personalized tips.</p>
              </div>
              <div className='p1'>
                <Button props={'Last Minute'}></Button>
                <div class="box">200px x 200px</div>
                <p id='description'>Last Minute is a medical van booking application that enables users to quickly and easily book medical transport services, ensuring timely access to healthcare in emergencies.</p>
              </div>
              <div className='p1'>
                <Button props={'Samvaad'}></Button>
                <div class="box">200px x 200px</div>
                <p id='description'>Samvaad is a web-based chatting application built with React, offering real-time messaging and communication features similar to WhatsApp.</p>
              </div>
            </div>
            
        </div>
    </>
  )
}

export default Projects