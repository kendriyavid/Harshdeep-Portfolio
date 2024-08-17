import React from 'react';
import Navbar from './Navbar';
import './home.css';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import Stats from './Stats';

function Home() {
  return (
    <>
      <div className='Home'>
        <Navbar />
        <div className='Hero'>
        
          <video style={{width: '80%'}} controls autoPlay muted loop>
          <source src="/0001-0242.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <Skills />
      <Projects />
      <Stats></Stats>
      <hr />
      <Footer />
    </>
  );
}

export default Home;
